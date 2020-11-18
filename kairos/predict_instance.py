from allennlp.data import DatasetReader, Token
from allennlp.data.dataset_readers.dataset_utils import span_utils
from allennlp.models.archival import load_archive
from allennlp.common.util import import_submodules
from bert_tokenization import BasicTokenizer
import ccg




class Predictor:
    def __init__(self, model_path):
        
        self.model_path = model_path
        self.tokenizer = BasicTokenizer(do_lower_case=False)
        
        archive = load_archive(model_path)
        self.model = archive.model
        config = archive.config.duplicate()
        dataset_reader_params = config["dataset_reader"]
        
    
        if "sentence_max_length" in dataset_reader_params.keys():
            del dataset_reader_params["sentence_max_length"] 
        if "limit_files" in dataset_reader_params.keys():
            del dataset_reader_params["limit_files"]

        self.dataset_reader = DatasetReader.from_params(dataset_reader_params)       
        self.model.eval()

    def predict_instance(self, original_text, ignore_clean=False):
        original_text = original_text.strip()
        print("original_txt:\n", original_text)
        text_tokens = self.tokenizer.tokenize(original_text, ignore_clean)
        print("text_tokens:\n", text_tokens)
        input_tokens = [Token(token) for token in text_tokens]

        instance = self.dataset_reader.text_to_instance(input_tokens)

        output = self.model.forward_on_instances([instance])[0]
        print("output[\"tags\"]:\n", output["tags"])
        spans = span_utils.bioul_tags_to_spans(output["tags"])
        print(spans)
        
        return format_text_annotation(original_text, text_tokens, spans)
        

def format_text_annotation(original_text, text_tokens, spans):
    assert len(original_text.strip()) == len(original_text)
    starts = []
    ends = []
    offset = 0
    
    for token in text_tokens:
        start_place = original_text.find(token, offset)        
        assert start_place != -1
        
        starts.append(start_place)
        ends.append(start_place + len(token))
        assert original_text[starts[-1]: ends[-1]] == token
        offset = ends[-1]
    '''
        "tokenOffsets": [
            {
                "form": token,
                "startCharOffset": start,
                "endCharOffset": end
            } for (token, start, end) in zip(text_tokens, starts, ends)
        ],
    '''
    return {
        "corpusId": "",
        "id": "someFakeId",
        "text": original_text,
        "tokens": text_tokens,
        "sentences": {
            "generator": "UserSpecified",
            "score": 1.0,
            "sentenceEndPositions": [
                len(text_tokens)
            ]
        },
        "views": [
            {
                "viewName": "NER_CONLL",
                "viewData": [
                    {
                        "viewType": "edu.illinois.cs.cogcomp.core.datastructures.textannotation.View",
                        "viewName": "NER_CONLL",
                        "generator": "Ltf2TextAnnotation",
                        "score": 1.0,
                        "constituents": [
                            {
                                "label": tag,
                                "score": 1.0,
                                "start": start,
                                "end": end + 1
                            } for (tag, (start, end)) in spans
                        ]
                    },
                ]
            },
            {
                "viewName": "SENTENCE",
                "viewData": [
                    {
                        "viewType": "edu.illinois.cs.cogcomp.core.datastructures.textannotation.SpanLabelView",
                        "viewName": "SENTENCE",
                        "generator": "UserSpecified",
                        "score": 1.0,
                        "constituents": [
                            {
                                "label": "SENTENCE",
                                "score": 1.0,
                                "start": 0,
                                "end": len(text_tokens)
                            }
                        ]
                    }
                ]
            },
            {
                "viewName": "TOKENS",
                "viewData": [
                    {
                        "viewType": "edu.illinois.cs.cogcomp.core.datastructures.textannotation.TokenLabelView",
                        "viewName": "TOKENS",
                        "generator": "UserSpecified",
                        "score": 1.0,
                        "constituents": [
                            {
                                "label": "",
                                "score": 1.0,
                                "start": start,
                                "end": start + 1
                            } for start in range(len(text_tokens))
                        ]
                    }
                ]
            }
        ]
    }


def format_ner_output_to_json(original_text, text_tokens, ner_tags, spans):
    return {
        "text_tokens": text_tokens,
        "ner_tags": ner_tags,
        "spans": spans,
        "text_annotation": format_text_annotation(original_text, text_tokens, spans)
    }


def predict_single(text):
    predictor = Predictor("/scratch/hegler/lorelei-models/bert/som/exp1/model.tar.gz")
    return predictor.predict_instance(text)


def predict_with_initialized_predictor(predictor, text):
    return predictor.predict_instance(text)


if __name__ == '__main__':
    text = "DHEGAYSO+Sawiro: Qaraxii Muqdisho Ruxay , wafdigii ku sugnaa Iyo qorshaha Imaatinka madaxwaynaha Turkey ( VOA & Reuters )"
    print(predict_single(text))
    # if somehow can keep a python instance running, then:
    # load the predictor first, as it takes time
    predictor = Predictor("/scratch/hegler/lorelei-models/bert/som/exp1/model.tar.gz")
    for query in range(5):
        print(predict_with_initialized_predictor(predictor, text))
