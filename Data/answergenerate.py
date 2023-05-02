import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
import scipy.spatial
import matplotlib.pyplot as plt


# from transformers import T5Tokenizer, T5ForConditionalGeneration
from tqdm import tqdm
import pandas as pd
from torch.utils.data import DataLoader, SequentialSampler, TensorDataset
import torch
import pandas as pd
from pprint import pprint

import sys
import os
import glob


dataset = pd.read_csv("/Users/leenatantawy/UncommonHacks_AVA/Data/QA_context_question_answer.csv")
dataset.head()


q_list = "question: " + dataset['Prompt']    
n_list = dataset['Completion']

dict_data = {'source_text': q_list,
      'target_text': n_list}

df = pd.DataFrame(dict_data)
df.head()


