import cherrypy
import my_predict
import predict_instance
import os

class MyWebService(object):

    @cherrypy.expose
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def ner(self):
        data = cherrypy.request.json
        lang = data["lang"]
        if data["model"] == "cogcomp":
            helper = my_predict.ProcessHelper()
            helper.getInput2CCG(data["text"])
            print("loading and running CCG ...\n")
            os.system("sh use_annotate.sh "+lang)
            print("done ...\n")   
            result = helper.getOutputFromCCG() 
            return result       


        else:
            if lang in ["deu", "ned", "eng", "esp"]:
                print("Use CoNLL Polyglot model")
                return predictors["conll"].predict_instance(data["text"])

            elif lang in ["ru", "cs", "bg", "pl"]:
                print("Use Balto-Slavic Polyglot model")
                return predictors["balto-slavic"].predict_instance(data["text"])

            else: 
                print("Use LORELEI Polyglot model")
                return predictors["lorelei-1"].predict_instance(data["text"])


predictors = {}
if __name__ == '__main__':
    # Define the list of preloaded bert models here
    #preload = ["lorelei-1", "conll", "balto-slavic"] 
    preload = ["lorelei-1", "conll"] 
    # For cogcomp, load models in ner() 
    
    print ("")
    print ("Preloading Polyglot BERT models ...")
    for group in preload:
        path = "/shared/ruohaog/demo/polyglot-models/"+group+"/model.tar.gz"   
        global predictor 
        predictor =  predict_instance.Predictor(path)
        predictors[group] = predictor
        print("finish loading " + group)

    
    print ("")
    #macniece:4004
    print ("Starting rest service...")
    config = {'server.socket_host': '0.0.0.0'}
    cherrypy.config.update(config)
    #cherrypy.config.update({'server.socket_port': 4004})
    cherrypy.config.update({'server.socket_port': 8099})
    cherrypy.quickstart(MyWebService())
