import cherrypy
import my_predict
import predict_instance
import os, shutil


class MyWebService(object):

    @cherrypy.expose
    def index(self):
        return {"what???"}

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
            "models"   : ["cogcomp", "bert"], #["cogcomp", "LORELEI BERT", "CoNLL BERT", "Balto-Slavic BERT"], 
            "languages": {"cogcomp": lang_list,  "bert" : lang_list },
            "language codes":{
                "Akan (Twi)": "aka", "Amharic": "amh", "Arabic": "ara", "Bengali": "ben", "Mandarin":"cmn",
                "Farsi": "fas", "Hausa":"hau", "Hindi":"hin" , "Hungarian" : "hun", "Indonesian": "ind", "Russian": "rus / ru(BS)", 
                "Somali":"som", "Spanish":"spa / esp(Co2)", "Swahili":"swa", "Tamil":"tam", "Tagalog":"tgl", 
                "Thai":"tha", "Turkish":"tur", "Uzbek":"uzb", "Vietnamese":"vie", "Wolof":"wol", "Yoruba":"yor", "Zulu":"zul", 
                "Kinyarwanda":"kin", "Oromo":"orm", "Sinhala":"sin", "Tigrinya":"tir", "Uyghur":"uig", 
                "Czech":"cs", "Bulgarian":"bg", "Polish":"pl", "Dutch":"ned", "German":"deu"    
                }

            }

    def invalid_fields(self, data):
        target_keys = ["lang","model","text"]
        invalid = []
        for key in target_keys:
            if key not in data.keys():
                invalid.append(key)
        return invalid

    def read_request(self, data):
        if len(data) == 0:
            return {"Warning" : "An empty request!"}
        else:
            invalid = self.invalid_fields(data)
            if len(invalid)!=0:
                return {"Warning" : "Missing fields: " + ", ".join(invalid)}
            else:
                return self.predict(data["lang"], data["model"], data["text"])


            

    @cherrypy.expose
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def ner(self, lang='', model='', text=''):
        useJSON=True
        try:
            data = cherrypy.request.json
        except:
            useJSON=False
            data = cherrypy.request.params
            print("\nNot reading json!!!")
            #print(data)

        if useJSON:
            para = cherrypy.request.params
            if len(para) != 0:
                print("\nOverwrite json with http request (HTTP is priority)")
                data = para
       
        result = self.read_request(data)
        print(result)
        return result
            

    def predict(self, lang, model, text):      
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
                if lang in ["fas", "sin"]:
                    return predictors["lorelei-1"].predict_instance(text, ignore_clean=True)
                return predictors["lorelei-1"].predict_instance(text)


    def html(self):
        pass

        

predictors = {}
count_ccg_id = 0
if __name__ == '__main__':
    # Define the list of preloaded bert models here
    preload = ["lorelei-1", "conll", "balto-slavic"]      
    # For cogcomp, load models in ner() 
    #preload = ["lorelei-1"]
   
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
    cherrypy.config.update(
        {'server.socket_host': 'dickens.seas.upenn.edu', 'server.socket_port': 8099, })  #'cors.expose.on': True
    #cherrypy.config.update({'server.socket_port': 8099})
    cherrypy.quickstart(MyWebService())
    
    
