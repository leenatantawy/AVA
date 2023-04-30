import re

with open("cs.txt", "r") as f_input, open("csClass.txt", "w") as f_output:
    for line in f_input:
        if line.startswith("CMSC"):
            line = line.strip().replace("100 Units.", "").replace(".", "")
            # Add a space after the last digit of any number if it's not already there
            line = re.sub(r"(\d+)(\D)", lambda match: match.group(1) + " " + match.group(2), line)
            f_output.write(line + "\n")
