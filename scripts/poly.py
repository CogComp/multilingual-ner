import cherrypy
import my_predict
import predict_instance
import os, shutil


class MyWebService(object):

    @cherrypy.expose
    @cherrypy.tools.json_out()
    def status(self):
        lang_list = ["Akan (Twi)", "Amharic", "Arabic", "Bengali", "Mandarin", "Farsi", 
                "Hausa", "Hindi", "Hungarian", "Indonesian", "Russian", "Somali", "Spanish", 
                "Swahili", "Tamil", "Tagalog", "Thai", "Turkish", "Uzbek", "Vietnamese", 
                "Wolof", "Yoruba", "Zulu", "Kinyarwanda", "Oromo", "Sinhala", "Tigrinya", 
                "Uyghur", "Czech", "Bulgarian", "Polish", "Dutch", "German"]

        return {
            "service"  : "up",
            "models"   : ["cogcomp", "Polyglot BERT"], #["cogcomp", "LORELEI BERT", "CoNLL BERT", "Balto-Slavic BERT"], 
            "languages": {"cogcomp": lang_list,  "Polyglot BERT" : lang_list }
            }


    @cherrypy.expose
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def ner(self, lang="eng", model="bert", text="Barack Hussein Obama graduated from Columbia University and Harvard Law School"):
        data = cherrypy.request.json
        if data is not None:
            # Invalid JSON request handling
            # Assume JSON request always has keys "lang" "model" "text"
            if data["text"] is "":
                return {"Warning" : "Please enter text. The default model is English BERT."}
            lang = data["lang"] if data["lang"] is not "" else "eng"
            model = data["model"]
            text = data["text"]
        
        if model == "cogcomp":
            global count_ccg_id
            helper = my_predict.ProcessHelper()
            print("loading and running CCG ...\n")

            count_ccg_id = count_ccg_id + 1
            print("\ncount_ccg_id = ", count_ccg_id)
            new_indir = "./tmp/input/" + str(count_ccg_id)
            new_outdir = "./tmp/output/" + str(count_ccg_id)
            if os.path.exists(new_indir):
                shutil.rmtree(new_indir)
            if os.path.exists(new_outdir):
                shutil.rmtree(new_outdir)
            os.makedirs(new_indir)
            os.makedirs(new_outdir)

            helper.getInput2CCG(text, new_indir+"/tmp_in.txt")
            os.system("sh use_annotate.sh " + lang + " " + str(count_ccg_id))
            print("done ...\n") 
            result = helper.getOutputFromCCG(new_outdir+"/0.txt")  
            
            shutil.rmtree(new_indir)
            shutil.rmtree(new_outdir)
            count_ccg_id = count_ccg_id - 1
            print("\nAfter, count_ccg_id = ", count_ccg_id)
            return result       

        else:
            if lang in ["deu", "ned", "eng", "esp"]:
                print("Use CoNLL Polyglot model")
                return predictors["conll"].predict_instance(text)

            elif lang in ["ru", "cs", "bg", "pl"]:
                print("Use Balto-Slavic Polyglot model")
                return predictors["balto-slavic"].predict_instance(text)

            else: 
                print("Use LORELEI Polyglot model")
                return predictors["lorelei-1"].predict_instance(text)


        

predictors = {}
count_ccg_id = 0
if __name__ == '__main__':
    # Define the list of preloaded bert models here
    #preload = ["lorelei-1", "conll", "balto-slavic"]      
    # For cogcomp, load models in ner() 
    preload = ["conll"]
    

    print ("")
    print ("Preloading Polyglot BERT models ...")
    for group in preload:
        #path = "/shared/ruohaog/demo/polyglot-models/"+group+"/model.tar.gz"   
        path = "../models/polyglot-bert/" + group + "/model.tar.gz" 
        global predictor 
        predictor =  predict_instance.Predictor(path)
        predictors[group] = predictor
        print("finish loading " + group + "\n")

    

    print ("")
    print ("Starting rest service...")
    config = {'server.socket_host': '0.0.0.0'}
    cherrypy.config.update(config)
    #cherrypy.config.update({'server.socket_port': 4004})
    #cherrypy.config.update(
    #    {'server.socket_host': 'macniece.seas.upenn.edu', 'server.socket_port': 4004})  #'cors.expose.on': True
    cherrypy.config.update({'server.socket_port': 8099})
    cherrypy.quickstart(MyWebService())
