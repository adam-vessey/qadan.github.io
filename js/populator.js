var locations = [
  ['http://peiburgerlove.ca/burger/21-Breakwater-Restaurant', 'BREAK BURGER - 21 Breakwater Restaurant', 46.352017, -62.250608],
  ['http://peiburgerlove.ca/burger/Ansons-Restaurant', 'CRACKERJACK - Anson\'s Restaurant', 46.4362962, -63.8263904],
  ['http://peiburgerlove.ca/burger/Big-Burger', 'SWEET B BURGER - Big Burger', 46.2648, -63.147119],
  ['http://peiburgerlove.ca/burger/BOOMburger', 'FIRECRACKER - BOOMburger', 46.2584534, -63.1799403],
  ['http://peiburgerlove.ca/burger/Brits-Fish-And-Chips', 'MARDI GRAS - Brit\'s Fish \& Chips', 46.235746, -63.1273014],
  ['http://peiburgerlove.ca/burger/Brothers-2', 'B2 BEACHCOMBER - Brothers 2', 46.3935934, -63.7696681],
  ['http://peiburgerlove.ca/burger/Budleys', 'THE AVIATOR - Budley\'s Charlottetown Airport', 46.285894, -63.131315],
  ['http://peiburgerlove.ca/burger/Casa-Mia-Cafe', 'TORO BURGER - Casa Mia Cafe', 46.234036, -63.127822],
  ['http://peiburgerlove.ca/burger/Cedars-Eatery', 'THE SHAWARMA BURGER - Cedar\'s Eatery', 46.2367844, -63.1283617],
  ['http://peiburgerlove.ca/burger/Chambers', 'HOOK \& LADDER - Chambers Restaurant at Rodd Charlottetown Hotel', 46.2347188, -63.1305164],
  ['http://peiburgerlove.ca/burger/Claddagh-Oyster-House', 'THE DILLY - Claddagh Oyster House', 46.23374, -63.125914],
  ['http://peiburgerlove.ca/burger/Cornwall-Pizza-Delight', 'STUFFED BESSIE - Cornwall Pizza Delight', 46.227184, -63.218737],
  ['http://peiburgerlove.ca/burger/Downtown-Deli', 'SMOKEY \& THE BANDIT - Downtown Deli', 46.2337099, -63.1289952],
  ['http://peiburgerlove.ca/burger/Dundee-Arms-Inn', 'MUFFULETTA BURGER - Dundee Arms Inn', 46.2346822, -63.1311629],
  ['http://peiburgerlove.ca/burger/East-Side-Marios', 'SWEET \& SLAWPY - East Side Mario\'s', 46.249476, -63.1370869],
  ['http://peiburgerlove.ca/burger/Edens-Gate', 'THE SINNER BURGER - Eden\'s Gate', 46.190614, -62.537055],
  ['http://peiburgerlove.ca/burger/Five-Eleven-West', 'SUGAR DADDY - FiveEleven West', 46.3978089, -63.8001693],
  ['http://peiburgerlove.ca/burger/Frosty-Treat', 'THE DEEP FREEZE - Frosty Treat', 46.4341807, -63.6441382],
  ['http://peiburgerlove.ca/burger/Gahan-House', 'BREW BUDDY - Gahan House', 46.233511, -63.125886],
  ['http://peiburgerlove.ca/burger/Gentleman-Jims', 'GJ\'S BAD BOY - Gentleman Jim\'s', 46.4143014, -63.7813483],
  ['http://peiburgerlove.ca/burger/Hunters-Ale-House', 'THE BARBER Q - Hunter\'s Ale House', 46.237253, -63.126008],
  ['http://peiburgerlove.ca/burger/Ladys-Slipper-Cafe', 'EL RIO - Lady\'s Slipper Cafe', 46.1726236, -62.6505631],
  ['http://peiburgerlove.ca/burger/Main-Street-Pub', 'THE POTLUCK - Main Street Pub', 46.167469, -62.649774],
  ['http://peiburgerlove.ca/burger/Mavors', 'M-3 - Mavor\'s', 46.2343503, -63.1267368],
  ['http://peiburgerlove.ca/burger/The-Merchantman-Pub', 'THE OLD FASHIONED - Merchantman Fresh Seafood \& Oyster Bar', 46.2317553, -63.1248155],
  ['http://peiburgerlove.ca/burger/Nightcap', 'THE PHOENIX - NightCap', 46.237253, -63.126008],
  ['http://peiburgerlove.ca/burger/Osheas-Pub-Eatery', 'SHEA-NANIGANS - O\'Shea\'s Pub and Eatery', 46.32262, -63.594414],
  ['http://peiburgerlove.ca/burger/Olde-Dublin-Pub', 'DUBTASTIC - Olde Dublin Pub', 46.2337192, -63.1258855],
  ['http://peiburgerlove.ca/burger/Outriders-Cookhouse', 'CARIBBEAN HEAT - Outriders Cookhouse', 46.2750106, -63.1430634],
  ['http://peiburgerlove.ca/burger/Papa-Joes', 'CIAO BELLA - Papa Joe\'s', 46.2429444, -63.1331161],
  ['http://peiburgerlove.ca/burger/Peakes-Tee', 'THE ULTIMATE WEDGE - Peakes Tee', 46.2893877, -62.7609746],
  ['http://peiburgerlove.ca/burger/PEI-Brewing-Company', 'BIG AL\'S BEER\'D BURGER - PEI Brewing Company', 46.2524891, -63.1149192],
  ['http://peiburgerlove.ca/burger/Phinleys-Diner', 'THE SUCKER PUNCH - Phinley\'s Diner', 46.2202172, -63.0875034],
  ['http://peiburgerlove.ca/burger/Piatto', 'LA DOLCE VITA - Piatto Pizzeria + Enoteca', 46.2330903, -63.1283852],
  ['http://peiburgerlove.ca/burger/Pizza-Delight-1911-Jail', 'ITALIAN COWBOY - Pizza Delight 1911 Jail', 46.2459203, -63.123513],
  ['http://peiburgerlove.ca/burger/Pizza-Delight-Summerside', 'THE PICNIC - Pizza Delight Summerside', 46.411708, -63.782175],
  ['http://peiburgerlove.ca/burger/The-Prince-Edward-Restaurant', 'FIREBALL - Prince Edward Restaurant', 46.2381473, -63.1295563],
  ['http://peiburgerlove.ca/burger/Quality-Inn-On-The-Hill', 'THE ZORRO - Quality Inn on the Hill', 46.2384328, -63.1287223],
  ['http://peiburgerlove.ca/burger/Razzys-Roadhouse', 'MT. MUNCHIE - Razzy\'s Roadhouse', 46.2579377, -63.1198301],
  ['http://peiburgerlove.ca/burger/Reds-Corner', 'EAST COAST CRIMINAL - Red\'s Corner', 46.209541, -62.653766],
  ['http://peiburgerlove.ca/burger/Redwater-Rustic-Grille', 'THE SHORTLIST - Redwater Rustic Grille', 46.2349819, -63.127278],
  ['http://peiburgerlove.ca/burger/Riverside-Diner', 'COUNTRY VIXEN - Riverside Diner', 46.415973, -62.70108],
  ['http://peiburgerlove.ca/burger/Row-House', 'CAPTAIN COW - Row House Lobster Co.', 46.23407, -63.126438],
  ['http://peiburgerlove.ca/burger/Sams-Restaurant', 'BRONCO BURGER - Sam\'s Restaurant', 46.2559718, -63.1202144],
  ['http://peiburgerlove.ca/burger/Sims-Corner', 'THE DANDY - Sims Corner', 46.2332307, -63.1264482],
  ['http://peiburgerlove.ca/burger/Smittys', 'THE BEEFCAKE - Smitty\'s', 46.249459, -63.13715],
  ['http://peiburgerlove.ca/burger/Terre-Rouge', 'O.G. BACON \& CHEESE - Terre Rouge', 46.2328745, -63.1259499],
  ['http://peiburgerlove.ca/burger/The-Bay-Restaurant', 'HULA BURGER - The Bay Restaurant', 46.39387, -63.79215],
  ['http://peiburgerlove.ca/burger/The-Brickhouse', 'THE BRICK MAC - The Brickhouse Kitchen \& Bar', 46.2335432, -63.1261676],
  ['http://peiburgerlove.ca/burger/The%20Factory%20Cookhouse', 'THE TAILGATER - The Factory Cookhouse', 46.2374524, -63.1257856],
  ['http://peiburgerlove.ca/burger/The-Home-Place', 'THE CABBAGE PATCH - The Home Place', 46.440365, -63.629332],
  ['http://peiburgerlove.ca/burger/The-Landing-Oyster-House', 'LOCALVORE - The Landing Oyster House \& Pub', 46.576602, -63.929093],
  ['http://peiburgerlove.ca/burger/The-Loyalist-Country-Inn', 'THE ACADIANA - The Loyalist Country Inn', 46.389789, -63.7867663],
  ['http://peiburgerlove.ca/burger/Maple-Grille', 'THE GRILLE NEXT DOOR - The Maple Grille', 46.23644, -63.128092],
  ['http://peiburgerlove.ca/burger/The-Old-Triangle', 'THE MOOOO Shiner - The Old Triangle', 46.2368338, -63.1287633],
  ['http://peiburgerlove.ca/burger/The-Pilot-House', 'MISO HUNGRY - The Pilot House', 46.2339371, -63.1287021],
  ['http://peiburgerlove.ca/burger/The-Whiskey-Pub-Kitchen', 'SOUTHERN JACK - The Whiskey Pub \& Kitchen', 46.2308994, -63.0991685],
  ['http://peiburgerlove.ca/burger/Turfs-Bar-And-Grill', 'LET IT RIDE - Turf\'s Bar \& Grill / West End Bar \& Grill', 46.2487447, -63.1167449],
  ['http://peiburgerlove.ca/burger/Water-St-Fish-And-Chips', 'THE MARITIMER - Water St Fish \& Chips', 46.2321388, -63.1247516],
  ['http://peiburgerlove.ca/burger/Waters-Edge', 'BURNER \& HOOCH - Water\'s Edge', 46.2322473, -63.1243675]
];

var infoWindows = [];

var markers = [];

function setMarkers(destinationMap, locations) {
  locations.forEach(function(restaurant) {
    var coords = new google.maps.LatLng(restaurant[2], restaurant[3]);
    var marker = new google.maps.Marker({
      position: coords,
      map: destinationMap,
      title: restaurant[1]
    });
    markers.push(marker);
    var infoWindow = new google.maps.InfoWindow({
      content: "<a href='" + restaurant[0] + "'>" + restaurant[1] + "</a>"
    });
    infoWindows.push([infoWindow, marker]);
  });
}

function initialize() {
  var mapOptions = {
    center: { lat: 46.5151303, lng: -63.2609883 },
    zoom: 9
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  setMarkers(map, locations);
  new MarkerClusterer(map, markers);
  infoWindows.forEach(function(infoWindow) {
    google.maps.event.addListener(infoWindow[1], 'click', function() { closeInfoWindows(); infoWindow[0].open(map, infoWindow[1]) });
  });
}

function closeInfoWindows() {
  for (var i = 0; i < infoWindows.length; i++) {
    infoWindows[i][0].close();
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
