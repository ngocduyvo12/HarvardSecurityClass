"use strict";

let parksData = {
  "parks": [
    {
      "fullName": "Tour des Geants",
      "description": "The TOR330 - Tor des Géants® is a long distance run in the individual style with no compulsory stages. The Tor des Géants® is the first race of this kind to cover an entire region, running along its spectacular paths at the foot of the highest Four-Thousanders in the Alps and through the Gran Paradiso Natural Park and the Mont Avic Regional Park.",
      "latitude": "45.79340361023837",
      "longitude": "6.971231438900442",
      "link": "https://www.tordesgeants.it/en",
      "dist": "220 miles, 90,000ft"
      

    },
    {
      "fullName": "The Hardrock 100 Endurance Run",
      "description": "The run starts and ends in Silverton, Colorado and travels through the towns of Telluride, Ouray, and the ghost town of Sherman, crossing thirteen major passes in the 12,000' to 13,000' range. Entrants must travel above 12,000 feet (3,700 m) of elevation a total of 13 times, with the highest point on the course being the 14,048' summit of Handies Peak.",
      "latitude": "37.8136422511147",
      "longitude": "-107.67107896380634",
      "link": "https://hardrock100.com",
      "dist": "100 miles, 33,000ft"
    },
    {
      "fullName": "Petite Trotte à Léon",
      "description": "This ultra-endurance pedestrian event leads participants on a large tour of Mont-Blanc, taking high routes, without way-markers on the ground, which necessitates the sense of orientation on and off paths. Each year the route is different to allow for the discovery of the richness and diversity of paths in France, Italy and Switzerland within the Mont-Blanc massif. The  PTL® is realised in teams of 2 ou 3 inseparable and loyally supportive people, without final ranking. The teams move through a rough, technically exacting and mentally and physically  demanding mountain environment.",
      "latitude": "45.921309666945454",
      "longitude": "6.870348803475243",
      "link": "https://utmbmontblanc.com/en/page/45/course-&-profile.html",
      "dist": "186 miles, 82,020ft"
    },
    {
      "fullName": "Nolan's 14",
      "description": "Nolan's 14 is a run over the 14 summits over 14,000 ft. in Colorado's Sawatch Range, from Mt. Massive to Mt. Shavano in either direction. You can choose your own route between summits, but the most practical routes have been estimated to be 88 to 106 miles with 44,000 ft. of climb. Cutoff is 60 hours to the last summit.",
      "latitude": "38.5963355525798",
      "longitude": "-106.1966176769937",
      "link": "http://www.mattmahoney.net/nolans14/",
      "dist": "100 miles, 44,000ft"
    },
    {
      "fullName": "Ehunmilak",
      "description": "This mountain Ultra-Trail®, which is a 168 km run across 5 regions, goes through back roads and trails for a total cumulative elevation gain of 11.000 m. The start and finish lines are in Beasain and there is a maximum completion time of 48 hours.",
      "latitude": "43.04796427479767",
      "longitude": "-2.205166295356687",
      "link": "https://www.ehunmilak.com/en/",
      "dist": "104 miles, 36,089ft"
    },
    {
      "fullName": "Val d'Aran",
      "description": "Air, fire, earth and water; you will find yourself immersed in all these elements as you run around the valley. 161km with 10,200 metres of ascent is what is waiting for you in this spectacular race.",
      "latitude": "42.7018465169249",
      "longitude": "0.7955860904380814",
      "link": "https://www.aranbyutmb.com/en/",
      "dist": "100 miles, 33,464ft"
    },
    {
      "fullName": "Cruel Jewel 100",
      "description": "The Cruel Jewel 100 is a 106 mile foot race deep with in the beautiful Chattahoochee National Forest of the North Georgia Mountains. It consists of 94 miles of trails, 12 miles of mountain roads, and 20 aid station. Along your journey from Vogel State Park to Blue Ridge, GA and back, you will experience tough, and sometimes technical, single track trails, ferns and old growth poplar trees, steep ascents and even steeper descents, an historic steel bridge spanning the Toccoa River, the Dragon's Spine, lush green hardwood forests, rocks, roots and ridge lines...",
      "latitude": "34.766993142501185",
      "longitude": "-83.92058752905345",
      "link": "http://www.dumassevents.com/",
      "dist": "100 miles, 33,464ft"
    },
    {
      "fullName": "La Pica Pica",
      "description": "The Legendary PICaPICA – 109km, with more than 11,500m of elevation gain. The PICaPICA is a challenge set by mountaineers for mountaineers.",
      "latitude": "42.76712225751873",
      "longitude": "1.4794907592206787",
      "link": "https://www.marathon-montcalm.com/en/",
      "dist": "68 miles, 37,729ft"
    },
    {
      "fullName": "Ouray 100 Mile Endurance Run",
      "description": "The Ouray 100 starts and finishes at Fellin Park, only yards from the hot springs.  With over 40k feet of elevation gain, this is one of the most difficult 100 milers in the world.  The route includes:  Camp Bird Road, Silver Basin, Imogene Pass Road, Chicago Tunnel, Fort Peabody, Ptarmigan Lake, Richmond Trail, Ironton, Corkscrew Gulch, Gray Copper Trail, Weehawken Trail/Alpine Mine Overlook, Hayden Trail/Crystal Lake, Old Twin Peaks Trail, Silvershield Trail, Perimeter Trail/Lower Cascade Trail, Chief Ouray Mine Trail, and Old Horsethief Trail/Bridge of Heaven.",
      "latitude": "38.02801001723071",
      "longitude": "-107.67223159380477",
      "link": "https://www.ouray100.com/home",
      "dist": "100 miles, 40,000ft"
    },
    {
      "fullName": "Swiss Peaks",
      "description": "Valais is open to you. From glaciers to Lake Geneva, a myth it’s built kilometer after kilometer through the most beautiful alpine valleys. In the middle of the “4,000” peaks of the Alps, on a route whose reputation is no longer to be made. Travel, enjoy these wonders that nature entrusts us. An Ultra-trail among the most difficult in the world: A demanding, technical and capricious race.",
      "latitude": "46.533866055774205",
      "longitude": "8.350731867172826",
      "link": "https://swisspeaks.ch/?lang=en",
      "dist": "223 miles, 87,303ft"
    },
    {
      "fullName": "High Five 100",
      "description": "The most practical route between points is estimated to be between 90 and 105 miles with over 40000 ft of gain.  If you complete this challenge you will summit 5 14ers along with traversing some of the most beautiful, rugged terrain the San Juans have to offer. ",
      "latitude": "38.02829036120199",
      "longitude": "-107.31702484748303",
      "link": "https://www.highfive100.com/",
      "dist": "100 miles, 40,000ft"
    },
    {
    "fullName": "Pirin Ultra",
    "description": "Pirin Ultra is a mountain ultramarathon held in the heart of Pirin National Park. The park is part of UNESCO World Heritage list and it offers extremely suitable terrain for skyrunning, as well as amazing, breathtaking views.",
    "latitude": "41.83665415870342",
    "longitude": "23.485458360299408",
    "link": "https://en.pirinultra.com/",
    "dist": "100 miles, 36,089ft"
  },
  {
    "fullName": "Ultra Tour Monte Rosa",
    "description": "Ultra Tour Monte Rosa is a 100 mile / 170 km ultra trail race along a classic European long distance footpath, the Tour de Monte Rosa. The race route leads anticlockwise around the Monte Rosa massif, making a compete circuit of the Mischabel Peaks and the 4000m summits of the Nadelgrat ridge. At 4634m Monte Rosa is the second highest mountain in the Alps and western Europe.",
    "latitude": "46.19575623214989",
    "longitude": "7.838442583076706",
    "link": "https://www.ultratourmonterosa.com/",
    "dist": "105 miles, 38,057ft"
  },
  {
    "fullName": "Ultra Tour Monte Rosa",
    "description": "Ultra Tour Monte Rosa is a 100 mile / 170 km ultra trail race along a classic European long distance footpath, the Tour de Monte Rosa. The race route leads anticlockwise around the Monte Rosa massif, making a compete circuit of the Mischabel Peaks and the 4000m summits of the Nadelgrat ridge. At 4634m Monte Rosa is the second highest mountain in the Alps and western Europe.",
    "latitude": "46.19575623214989",
    "longitude": "7.838442583076706",
    "link": "https://www.ultratourmonterosa.com/",
    "dist": "105 miles, 38,057ft"
  },
  {
    "fullName": "Hardcore Hundred Miles",
    "description": "Hardcore 100 Miles (H1) is the first 100-mile trail race in the Philippines. It belongs to an exclusive club of 100-mile races worldwide that have a total elevation gain of more than 35,000 feet. (Total elevation gain is approximately 37,098 feet, while total elevation loss is around 37,112 feet). The ITRA-certified race meets the international standards of a trail course, with less than 10% of the route made up of concreted roads, and the rest, of single track trails, dirt/gravel paths, dry stream beds, grasslands, farmlands, forest trails and hanging bridges. It takes runners to two major peaks: Mount Pulag Tower (2800masl) and Mount Ugo (2150masl), and several hills and hamlets in between.",
    "latitude": "16.357682810486114",
    "longitude": "120.88647692468398",
    "link": "https://kotmtrailrun.com/hardcore-hundred-miles/",
    "dist": "105 miles, 37,098ft"
  },
  {
    "fullName": "The Northburn 100 Miler",
    "description": "100 miles is 161km folks, and this course will have you climbing and descending around 10,000m (32,808feet). This is a dry, hard, rocky course mostly run over high country 4WD tracks but also including some short sections of fence lines and sheep tracks.",
    "latitude": "-45.00622085671878",
    "longitude": "169.23532146330407",
    "link": "https://www.northburn100.co.nz/100miler",
    "dist": "100 miles, 32,808ft"
  },
  {
    "fullName": "Ultra Tour Des 4 Massifs",
    "description": "The Ut4M 160 is THE race covering all the peaks. A race taking place over several consecutive days and making you discover the 4 massifs surrounding Grenoble and its agglomeration: Vercors, Taillefer, Belledonne and Chartreuse.",
    "latitude": "45.162642119766105",
    "longitude": "5.687979117570462",
    "link": "https://ut4m.fr/fr/courses/les-12-courses/ut4m-160-xtrem",
    "dist": "106 miles, 37,172ft"
  },
  {
    "fullName": "Transylvania 100",
    "description": "WELCOME to the Transylvania 100! Now looking forward to our seventh edition, these are mountain ultras which cross one of the most beautiful and mysterious regions of Eastern Europe. On May 28th 2022, runners will again assemble on a start-line beneath Dracula's Castle in the village of Bran, ready for an adventure through the alpine-like scenery of rural Transylvania. Twisting single track, ancient forest trails, mountain plateaus and windswept ridges will link together in grand, single-lap traverses of the Bucegi Range, climbing and descending many thousands of metres before finishing back at the Bran Castle.",
    "latitude": "45.514770798672544",
    "longitude": "25.367383620988008",
    "link": "https://www.transylvania100k.com/",
    "dist": "62 miles, 21,141ft"
  }        
  ]
};
