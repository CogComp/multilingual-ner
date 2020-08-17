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
            return predictors[lang].predict_instance(data["text"])


predictors = {}
if __name__ == '__main__':
    # Define the list of preloaded bert models here
    preload = ["cmn", "deu", "eng", "som", "spa"] # Chinese, German, English, Somali, Spanish 
    # For cogcomp, load models in ner() 

    print ("")
    print ("Preloading 5 BERT models ...")
    for lang in preload:
        path = "../lorelei-models/bert/"+lang+"/exp1/model.tar.gz"
        global predictor 
        predictor =  predict_instance.Predictor(path)
        predictors[lang] = predictor
        
    print ("")
    print ("Starting rest service...")
    config = {'server.socket_host': '0.0.0.0'}
    cherrypy.config.update(config)
    cherrypy.config.update({'server.socket_port': 8099})
    cherrypy.quickstart(MyWebService())
