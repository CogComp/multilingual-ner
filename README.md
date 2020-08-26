# multilingual-demo
Multilingual NER and XEL demo
## Requirements
1. Install cherrypy;
2. Install allennlp 0.8.0 (for monolingual NER models) or allennlp 0.8.5 (for polyglot NER models);
3. Install [Cogcomp](https://github.com/CogComp/cogcomp-nlp), and compile following the [instructions](https://github.com/CogComp/cogcomp-nlp/blob/master/ner/README.md);
4. Put pretrained BERT models into ./lorelei-models/bert



## How to run the demo
### Step 1:
Go to ./scripts, start the server by running:
```
sh run.sh
```
### Step 2:
Open another terminal, and send the curl request. The request consists of "lang" (language), "model" (BERT, Cogcomp), "text". One example request is shown below:
```
curl -d '{"lang" : "eng", "model" : "cogcomp", "text" : "Barack Hussein Obama, an American politician serving as the 44th President of the United States, graduated from Columbia University and Harvard Law School, where he served as president of the Harvard Law Review."}' -H "Content-Type: application/json" -X POST http://localhost:8099/ner
```
NOTE: To use the only default setup for Cogcomp English, set "lang" to "eng-default".

