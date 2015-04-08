import urllib2
import json
from bs4 import BeautifulSoup

def grab_from_generator(generator, place):
    for n in range(0, place):
        generator.next()
    return generator.next()

def extract_coords_from_url(url):
    '''
    TODO: this
    '''

def save_burger_image(url):
    '''
    TODO: yeah this one too
    if dir 'images' doesn't exist, mkdir 'images'
    curl url to images mmm hmm
    '''

def use_witchcraft_to_messily_divine_an_ingredient_list(ingredient_string):
    '''
    TODO: oh god
    '''

urls = [
    'http://peiburgerlove.ca/burger/21-Breakwater-Restaurant',
    'http://peiburgerlove.ca/burger/Ansons-Restaurant',
    'http://peiburgerlove.ca/burger/Big-Burger',
    'http://peiburgerlove.ca/burger/BOOMburger',
    'http://peiburgerlove.ca/burger/Brits-Fish-And-Chips',
    'http://peiburgerlove.ca/burger/Brothers-2',
    'http://peiburgerlove.ca/burger/Budleys',
    'http://peiburgerlove.ca/burger/Casa-Mia-Cafe',
    'http://peiburgerlove.ca/burger/Cedars-Eatery',
    'http://peiburgerlove.ca/burger/Chambers',
    'http://peiburgerlove.ca/burger/Claddagh-Oyster-House',
    'http://peiburgerlove.ca/burger/Cornwall-Pizza-Delight',
    'http://peiburgerlove.ca/burger/Downtown-Deli',
    'http://peiburgerlove.ca/burger/Dundee-Arms-Inn',
    'http://peiburgerlove.ca/burger/East-Side-Marios',
    'http://peiburgerlove.ca/burger/Edens-Gate',
    'http://peiburgerlove.ca/burger/Five-Eleven-West',
    'http://peiburgerlove.ca/burger/Frosty-Treat',
    'http://peiburgerlove.ca/burger/Gahan-House',
    'http://peiburgerlove.ca/burger/Gentleman-Jims',
    'http://peiburgerlove.ca/burger/Hunters-Ale-House',
    'http://peiburgerlove.ca/burger/Ladys-Slipper-Cafe',
    'http://peiburgerlove.ca/burger/Main-Street-Pub',
    'http://peiburgerlove.ca/burger/Mavors',
    'http://peiburgerlove.ca/burger/The-Merchantman-Pub',
    'http://peiburgerlove.ca/burger/Nightcap',
    'http://peiburgerlove.ca/burger/Osheas-Pub-Eatery',
    'http://peiburgerlove.ca/burger/Olde-Dublin-Pub',
    'http://peiburgerlove.ca/burger/Outriders-Cookhouse',
    'http://peiburgerlove.ca/burger/Papa-Joes',
    'http://peiburgerlove.ca/burger/Peakes-Tee',
    'http://peiburgerlove.ca/burger/PEI-Brewing-Company',
    'http://peiburgerlove.ca/burger/Phinleys-Diner',
    'http://peiburgerlove.ca/burger/Piatto',
    'http://peiburgerlove.ca/burger/Pizza-Delight-1911-Jail',
    'http://peiburgerlove.ca/burger/Pizza-Delight-Summerside',
    'http://peiburgerlove.ca/burger/The-Prince-Edward-Restaurant',
    'http://peiburgerlove.ca/burger/Quality-Inn-On-The-Hill',
    'http://peiburgerlove.ca/burger/Razzys-Roadhouse',
    'http://peiburgerlove.ca/burger/Reds-Corner',
    'http://peiburgerlove.ca/burger/Redwater-Rustic-Grille',
    'http://peiburgerlove.ca/burger/Riverside-Diner',
    'http://peiburgerlove.ca/burger/Row-House',
    'http://peiburgerlove.ca/burger/Sams-Restaurant',
    'http://peiburgerlove.ca/burger/Sims-Corner',
    'http://peiburgerlove.ca/burger/Smittys',
    'http://peiburgerlove.ca/burger/Terre-Rouge',
    'http://peiburgerlove.ca/burger/The-Bay-Restaurant',
    'http://peiburgerlove.ca/burger/The-Brickhouse',
    'http://peiburgerlove.ca/burger/The%20Factory%20Cookhouse',
    'http://peiburgerlove.ca/burger/The-Home-Place',
    'http://peiburgerlove.ca/burger/The-Landing-Oyster-House',
    'http://peiburgerlove.ca/burger/The-Loyalist-Country-Inn',
    'http://peiburgerlove.ca/burger/Maple-Grille',
    'http://peiburgerlove.ca/burger/The-Old-Triangle',
    'http://peiburgerlove.ca/burger/The-Pilot-House',
    'http://peiburgerlove.ca/burger/The-Whiskey-Pub-Kitchen',
    'http://peiburgerlove.ca/burger/Turfs-Bar-And-Grill',
    'http://peiburgerlove.ca/burger/Water-St-Fish-And-Chips',
    'http://peiburgerlove.ca/burger/Waters-Edge'
]

completed_list = []
for url in urls:
    list_item = {}
    page = urllib2.urlopen(url).read()
    parsed_page = BeautifulSoup(page)
    list_item['url'] = url
    list_item['burger_name'] = grab_from_generator(parsed_page.find(id="Burger-Title").stripped_strings, 0)
    list_item['restaurant_name'] = parsed_page.find(id="Restaurant-Name").string
    list_item['burger_quote'] = grab_from_generator(parsed_page.find(id="Burger-Quote").stripped_strings, 1)
    '''
    TODO: the rest of the list items that you scribbled on your sheet of paper as one would scribble 'proof' about how the moon landings were faked
    there were arrows and everything
    '''
    completed_list.append(list_item)

f = open('thing.json', 'w')
json.dump(completed_list, f)