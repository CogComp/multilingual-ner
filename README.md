# multilingual-demo
Multilingual NER and XEL demo
## Requirements
1. Install cherrypy;
2. Install allennlp 0.8.0 (for monolingual NER models) or allennlp 0.8.5 (for polyglot NER models);
3. Install [Cogcomp](https://github.com/CogComp/cogcomp-nlp), and compile following the [instructions](https://github.com/CogComp/cogcomp-nlp/blob/master/ner/README.md);
4. Put pretrained BERT models into ./lorelei-models/bert
5. Install PyTorch 1.6.0


## Resources
1. All the monolingual BERT models are stored in: /shared/ruohaog/lorelei-models/bert
2. All the polyglot (multilingual) BERT models are stored in: /shared/ruohaog/demo/polyglot-models
3. All the Cogcomp models are stored in: /shared/ruohaog/ccg/cogcomp-nlp/ner/models

Please copy models from the above paths to the demo path:
```
./models/monolingual-bert
./models/polyglot-bert
./models/cogcomp
```


## How to run the demo
### Step 1:
Go to ./scripts, start the server by running:

```
// for Monolingual BERT models:
sh run.sh
```
Or
```
// for Polyglot BERT models:
sh run-poly.sh
```

### Step 2:
Open another terminal, and send the curl request. The request consists of "lang" (language code), "model" (BERT, Cogcomp), "text" (sentences to do NER). 

### Example requests:
```
// Choose English Cogcomp model:
curl -d '{"lang" : "eng", "model" : "cogcomp", "text" : "Barack Hussein Obama, an American politician serving as the 44th President of the United States, graduated from Columbia University and Harvard Law School, where he served as president of the Harvard Law Review."}' -H "Content-Type: application/json" -X POST http://localhost:8099/ner

// Choose Russian BERT model:
curl -d '{"lang" : "rus", "model" : "bert", "text" : "В прошлом году я жил в Шампейне, штат Иллинойс. Тогда моей лучшей подругой была Дейзи Джонсон."}' -H "Content-Type: application/json" -X POST http://dickens.seas.upenn.edu:8099/ner/
```

NOTE: To use the only default setup for Cogcomp English, set "lang" to "eng-default".



## Language codes
We now support NER for 36 languages:
<!-- mdformat off(no table) -->

| Language   | Code       | Language   | Code       | Language   | Code       |
|----------  | ---------- | ---------- | ---------- | ---------- | ---------- |
| Akan (Twi) | aka        | Amharic    | amh        |  Arabic    | ara    |
| Bengali    | ben    | Mandarin     | cmn     | Farsi     | fas    |
| Hausa      | hau    | Hindi        | hin     | Hungarian | hun |
| Indonesian   | ind    | Russian   | rus / ru(BS)    | Somali     | som   |
| Spanish    | spa / esp(Co2)     |  Swahili    |  swa     | Tamil   | tam  |
| Tagalog       | tgl    | Thai    | tha    | Turkish    |  tur    |
| Uzbek       | uzb    | Vietnamese    | vie    | Wolof    |  wol    |
| Yoruba       | yor    | Zulu    | zul    | Kinyarwanda    |  kin    |
| Oromo | orm | Sinhala | sin | Tigrinya| tir |
| Uyghur | uig  | Czech | cs |  Bulgarian | bg |
|  Polish | pl | Dutch | ned | German | deu |
| English | eng | French | fr | Italian | it |

<!-- mdformat on -->


**Datasets** we used for model training:
```
CoNLL2002 (Co2), CoNLL2003, LORELEI, BSNLP2019 (BS).
```
CoNLL Tags: PER, LOC, ORG, MISC

LORELEI Tags: PER, LOC, ORG, GPE, TTL (only for "hau")

BSNLP2019 Tags: PER, LOC, ORG, PRO, EVT

