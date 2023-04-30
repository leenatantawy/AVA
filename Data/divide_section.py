

# Read input file and split into sections
with open('CScourseDescription.txt', 'r') as f:
    sections = f.read().split('\n\n')
    
# Print the sections (for demonstration purposes)
for i, section in enumerate(sections):
    if len(section)!=0:
        print(f'Section {i+1}:\n{section}\n')
