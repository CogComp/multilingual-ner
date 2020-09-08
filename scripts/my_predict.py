from allennlp.data.dataset_readers.dataset_utils import span_utils
from bert_tokenization import BasicTokenizer
import os

class ProcessHelper:
    def __init__(self):
        self.tokenizer = BasicTokenizer(do_lower_case=False)

    def base_tokenize(self, original_text):
        self.original_text = original_text
        original_text = original_text.strip()
        #print("original_txt:\n", original_text)
        text_tokens = self.tokenizer.tokenize(original_text)
        #print("text_tokens:\n", text_tokens)
        self.text_tokens = text_tokens
        return text_tokens


    def getInput2CCG(self, original_text, inpath="./tmp/input/tmp_in.txt"):
        # if file exists, del it
        if os.path.isfile(inpath):
            print("\ndelete existing input tmp file\n")
            os.remove(inpath)

        tokens = self.base_tokenize(original_text)
        with open(inpath, "a") as inputfile:
            inputfile.write("O 0 0 -X- -X- -DOCSTART- x x 0\n")
            for token in tokens:
                line = "O 0 0 0 0 "+token+" 0 0 0\n"
                inputfile.write(line)

        

    def getOutputFromCCG(self, outpath="./tmp/output/0.txt"):
        tags = []
        
        with open(outpath, "r") as outputfile:
            inlines = outputfile.readlines()    
            for index, line in enumerate(inlines):
                if "-DOCSTART-" in line:
                    pass
                elif line.strip():
                    a = line.split()
                    tags.append(a[2])
                
            #print(len(tags))
            print("\n\ntags:\n",tags)
            print()
            spans = span_utils.bio_tags_to_spans(tags)
            #print(spans)
            return format_ner_output_to_json(self.original_text, self.text_tokens, tags, spans)



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
    return {
        "corpusId": "",
        "id": "someFakeId",
        "text": original_text,
        "tokens": text_tokens,
        "tokenOffsets": [
            {
                "form": token,
                "startCharOffset": start,
                "endCharOffset": end
            } for (token, start, end) in zip(text_tokens, starts, ends)
        ],
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

        


if __name__ == '__main__':
    helper = ProcessHelper()
    helper.getOutputFromCCG()
    lang = "som"
    text = "Bisha soo socota 16 keeda ayaa waxaa buuxsamaya Sannad guuradii koowaad ee ka soo wareegtey markii Ciidamada Kenya ay soo galeen qaybo ka mid ah Gobolka Jubada hoose iyadoo Ciidamada weli aysan gaarin hadafkoodii ahaa qabsashada Magaalada Kismaayo ka dib markii ay la kulmeen iska cabin aad u weyn."
    #helper.getInput2CCG(text)
    #print("loading CCG ........\n")
    #os.system("sh use_annotate.sh "+lang)
    #print("done ...........\n")
    
