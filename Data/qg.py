from transformers import (
    AutoModelForSeq2SeqLM,
    AutoTokenizer
)
import torch

device = torch.device("cuda:0" if torch.cuda.is_available() else 'cpu')
model_checkpoint = "consciousAI/question-generation-auto-t5-v1-base-s-q-c"
model = AutoModelForSeq2SeqLM.from_pretrained(model_checkpoint)
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)

## Input with prompt
context = """
CMSC 29512.  Entrepreneurship in Technology.  100 Units.
Many of the most successful companies have been created by technologists, but many technologists fail to consider entrepreneurship as a viable career pathway because it is difficult to gain exposure to entrepreneurship.  Students in this class will experience, firsthand, new product development based on an idea conceived of by your group.  Your group will nurture your idea by clearly defining your product, obtaining market feedback, building an initial proof-of-concept, and pitching to investors.  While there is no requirement that your product become a new technology venture, this class is meant to serve as a launchpad for the first three months of a startup for those interested in pursuing their ideas further.  The fundamental belief, however, is that the entrepreneurial experience provided in this class can support you whether you develop new products in your large corporate enterprise or do pursue entrepreneurship in a startup of your own, and all students are encouraged to consider this course no matter your career trajectory or level of technical proficiency.
Prerequisite(s): MPCS 51036 or 51040 or 51042 or 51046 or 51100
Note(s): If an undergraduate takes this course as CMSC 29512, it may not be used for CS major or minor credit.  Non-MPCS students must receive approval from program prior to registering. Request form available online https://masters.cs.uchicago.edu
Equivalent Course(s): MPCS 51250
"""


encodings = tokenizer.encode(context, return_tensors='pt', truncation=True, padding='max_length').to(device)

## You can play with many hyperparams to condition the output, look at demo


output = model.generate(encodings, 
                          #max_length=300, 
                          #min_length=20, 
                          #length_penalty=10, 
                          num_beams=10,
                          #early_stopping=True,
                          #do_sample=True,
                          #temperature=0
                        )

  ## Multiple questions are expected to be delimited by '?' You can write a small wrapper to elegantly format. Look at the demo.
questions = [tokenizer.decode(id, clean_up_tokenization_spaces=False, skip_special_tokens=False) for id in output]
print(questions)
