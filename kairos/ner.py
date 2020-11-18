import cherrypy
import predict_instance
import requests


class MyWebService(object):

    @cherrypy.expose
    def index(self):
        return {"Hi"}


    def invalid_fields(self, data):
        target_keys = ["task","text"]
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
                return self.predict(data["task"], data["text"])

    @cherrypy.expose
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def ner(self, text=''):
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
            

    def predict(self, task, text):   
        if task == "mention_detection":
            return predictors["onto_mention_detection"].predict_instance(text)
        else:
            return predictors["mbert_combine"].predict_instance(text)



predictors = {}
if __name__ == '__main__':
    # Define the list of preloaded models here
    preload = ["mbert_combine","onto_mention_detection"]      
  
    print ("")
    print ("Preloading models ...")
    for group in preload:   
        path = "./models/" + group + "/model.tar.gz" 
        global predictor 
        predictor =  predict_instance.Predictor(path)
        predictors[group] = predictor
        print("finish loading " + group + "\n")
    
    print ("")
    print ("Starting rest service...")
    config = {'server.socket_host': '0.0.0.0'}
    cherrypy.config.update(config)
    cherrypy.config.update(
        {'server.socket_host': 'dickens.seas.upenn.edu', 'server.socket_port': 8099, })  #'cors.expose.on': True
    #cherrypy.config.update({'server.socket_port': 8099})
    cherrypy.quickstart(MyWebService())  
    
