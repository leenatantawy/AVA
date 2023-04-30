import re

# Open the input and output files
with open("cs.txt", "r") as input_file, open("output.txt", "w") as output_file:

    # Read in the input text
    input_text = input_file.read()

    # Split the text into sentences using regular expressions
    sentences = re.split("(?<=[.!?])\s+", input_text)

    # Loop through each sentence and write it to the output file if it is a valid sentence
    for sentence in sentences:

        # Check if the sentence is not entirely blank and contains a period
        if sentence.strip() != "" and "." in sentence.strip():

            # Use regular expressions to check if the sentence is a valid sentence
            if re.match("^[A-Z][^?!.]*[.!?]$", sentence.strip()):
                output_file.write(sentence.strip() + "\n")
