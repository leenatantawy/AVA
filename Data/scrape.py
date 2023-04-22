import requests
from bs4 import BeautifulSoup

# Step 1: Fetch the HTML content of the target page
url = 'http://collegecatalog.uchicago.edu/thecollege/computerscience/'
response = requests.get(url)
html_content = response.content

# Step 2: Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')
text_content = soup.get_text()


print(text_content)

"""
# Step 3: Extract the data of interest
# For example, let's extract all the links on the page
links = []
for link in soup.find_all('a'):
    href = link.get('href')
    if href:
        links.append(href)

# Step 4: Do something with the extracted data
# For example, let's print the links we found
for link in links:
    print(link)

"""
