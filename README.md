# multilingual-demo
Multilingual NER and XEL demo
## Requirements
1. Install cherrypy;
2. Install allennlp 0.8.0 (for monolingual NER models) or allennlp 0.8.5 (for polyglot NER models);
3. Install [Cogcomp](https://github.com/CogComp/cogcomp-nlp), and compile following the [instructions](https://github.com/CogComp/cogcomp-nlp/blob/master/ner/README.md);
4. Put pretrained BERT models into ./lorelei-models/bert
5. Install PyTorch 1.6.0


## Resources
<!-- 1. [Monolingual BERT models](https://cogcomp.seas.upenn.edu/models/multilingual-ner/monolingual-bert.tgz) (~9.4GB) -->
1. [Polyglot BERT models](https://cogcomp.seas.upenn.edu/models/multilingual-ner/polyglot-bert.tgz) (~1.9GB)
2. [CogComp models](https://cogcomp.seas.upenn.edu/models/multilingual-ner/cogcomp.tgz) (~1.4GB)

Please copy models from the above paths to the demo path:
<!--./models/monolingual-bert -->
```
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

## Statistics
Each CogComp model takes no more than 7 minutes to train (given pretrained brown clusters) and evaluate within 15 seconds.

For each monolingual BERT model:
<!-- mdformat off(no table) -->
| BERT Models  | Training time (minutes)  | Evaluation time (seconds)  |
|----------  | ---------- | ---------- |
| aka  | 57 | 40 |
| amh  | 36 | 41 |
| ara  | 52 | 41 |
| ben  | 83 | 48 |
| cmn  | 74 | 40 |
| fas  | 43 | 28 |
| hau  | 57 | 43 |
| hin  | 56 | 42 |
| hun  | 45 | 40 |
| ind  | 56 | 40 |
| rus  | 53 | 41 |
| som  | 34 | 27 |
| spa  | 59 | 20 |
| swa  | 66 | 26 |
| tam  | 120 | 32 |
| tgl  | 71 | 41 |
| tha  | 175 | 39 |
| tur  | 72 | 28 |
| uzb  | 113 | 29 |
| vie  | 53 | 28 |
| wol  | 84 | 25 |
| yor  | 53 | 24 |
| zul  | 84 | 43 |
| kin  | 31 | 47 |
| orm  | 49 | 41 |
| sin  | 33 | 45 |
| tir  | 35 | 42 |
| uig  | 65 | 51 |
| * ru, cs, bg, pl  | 511 | -- |
| nl  | 159 | 42 |
| de  | 120 | 36 |
| es  | 124 | 29 |
<!-- mdformat on -->

NOTE: [Multisource Transfer](https://www.aclweb.org/anthology/W19-3710/) is used to improve the NER performance on the very underresourced Balto-slavic languages.  
