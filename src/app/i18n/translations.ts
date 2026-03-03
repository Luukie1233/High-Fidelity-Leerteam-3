export type Language = 'nl' | 'en';

export const translations = {
  // TabBar
  tabHome: { nl: 'Home', en: 'Home' },
  tabMap: { nl: 'Kaart', en: 'Map' },
  tabPlanner: { nl: 'Planner', en: 'Planner' },
  tabNews: { nl: 'Nieuws', en: 'News' },
  tabMore: { nl: 'Meer', en: 'More' },

  // Home
  homeSubtitle: { nl: 'Plan je dag & reis met de shuttlebus!', en: 'Plan your day & travel with the shuttle bus!' },
  homeStartPlanner: { nl: 'Start Planner', en: 'Start Planner' },
  homeStartPlannerSub: { nl: 'Kies attracties & ontvang QR-code', en: 'Choose attractions & receive QR code' },
  homeViewMap: { nl: 'Bekijk Kaart', en: 'View Map' },
  homeViewMapSub: { nl: 'Plattegrond & live businfo', en: 'Map & live bus info' },
  homeNews: { nl: 'Nieuws & Acties', en: 'News & Deals' },
  homeNewsSub: { nl: 'Updates van Lake Side Mania', en: 'Updates from Lake Side Mania' },
  homeFeedback: { nl: 'Geef Feedback', en: 'Give Feedback' },
  homeFeedbackSub: { nl: 'Vertel ons over je busrit', en: 'Tell us about your bus ride' },
  homeShuttleIn: { nl: 'Shuttlebus over 3 min', en: 'Shuttle bus in 3 min' },
  homeStopRoute: { nl: 'Halte Centraal → Avonturenland', en: 'Stop Central → Adventure Land' },
  homeFeedbackModalTitle: { nl: 'Vertel ons over je busrit', en: 'Tell us about your bus ride' },
  homeFeedbackModalBody: { nl: 'Help ons de shuttle-ervaring te verbeteren door je mening te delen. Het duurt maar 1 minuut!', en: 'Help us improve the shuttle experience by sharing your opinion. It only takes 1 minute!' },
  homeFeedbackModalBtn: { nl: 'Geef feedback', en: 'Give feedback' },
  homeNotNow: { nl: 'Niet nu', en: 'Not now' },

  // Instellingen
  settingsTitle: { nl: 'Instellingen', en: 'Settings' },
  settingsLanguage: { nl: 'Taal', en: 'Language' },
  settingsLanguageSub: { nl: 'Nederlands', en: 'English' },
  settingsDisplay: { nl: 'Weergave', en: 'Display' },
  settingsDisplaySub: { nl: 'Tekstgrootte & meer', en: 'Text size & more' },
  settingsVoice: { nl: 'Spraakassistent', en: 'Voice assistant' },
  settingsVoiceOff: { nl: 'Uit', en: 'Off' },
  settingsAbout: { nl: 'Over Lake Side Mania', en: 'About Lake Side Mania' },

  // TaalKiezen
  chooseLanguageTitle: { nl: 'Taal kiezen', en: 'Choose language' },
  langDutch: { nl: 'Nederlands', en: 'Dutch' },
  langEnglish: { nl: 'Engels', en: 'English' },

  // KiesAttracties
  chooseAttractions: { nl: 'Kies Attracties', en: 'Choose Attractions' },
  searchAttraction: { nl: 'Zoek attractie...', en: 'Search attraction...' },
  attractionsSelected: { nl: 'attracties geselecteerd', en: 'attractions selected' },
  selectAttractions: { nl: 'Selecteer attracties', en: 'Select attractions' },
  further: { nl: 'Verder', en: 'Continue' },

  // Nieuws
  newsTitle: { nl: 'Nieuws & Updates', en: 'News & Updates' },
  // News items
  news1Title: { nl: 'De Waterval opent deze zomer!', en: 'The Waterfall opens this summer!' },
  news1Sub: { nl: 'Lake Side Mania\'s grootste waterattractie komt eraan. Met een 25 meter hoge val en spectaculaire effecten.', en: 'Lake Side Mania\'s biggest water attraction is coming. With a 25 meter high drop and spectacular effects.' },
  news1Time: { nl: '3 uur geleden', en: '3 hours ago' },
  news2Title: { nl: 'Avondopenstelling dit weekend', en: 'Evening opening this weekend' },
  news2Sub: { nl: 'Park blijft open tot 23:00 uur. Geniet van verlichtte attracties en een spectaculaire vuurwerkshow om 22:30.', en: 'Park stays open until 11 PM. Enjoy illuminated attractions and a spectacular fireworks show at 10:30 PM.' },
  news2Time: { nl: '5 uur geleden', en: '5 hours ago' },
  news3Title: { nl: 'Nieuw restaurant: Meerterras', en: 'New restaurant: Lakeside Terrace' },
  news3Sub: { nl: 'Proef de Italiaanse keuken met uitzicht op het meer. Nu geopend naast halte H3!', en: 'Taste Italian cuisine with a view of the lake. Now open next to stop H3!' },
  news3Time: { nl: '1 dag geleden', en: '1 day ago' },
  news4Title: { nl: 'Extra shuttlebussen ingezet', en: 'Extra shuttle buses deployed' },
  news4Sub: { nl: 'Door de drukte rijden er nu om de 3 minuten bussen. Korte wachttijden gegarandeerd!', en: 'Due to high demand, buses now run every 3 minutes. Short waiting times guaranteed!' },
  news4Time: { nl: '1 dag geleden', en: '1 day ago' },
  news5Title: { nl: 'Piratenshow om 15:00 uur', en: 'Pirate show at 3:00 PM' },
  news5Sub: { nl: 'Captain Jack en zijn bemanning nemen het park over! Spectaculaire stunts bij het Dromenpark.', en: 'Captain Jack and his crew take over the park! Spectacular stunts at the Dream Park.' },
  news5Time: { nl: '2 dagen geleden', en: '2 days ago' },
  news6Title: { nl: 'Weerbericht: Perfect parkweer', en: 'Weather: Perfect park weather' },
  news6Sub: { nl: 'Komende week zonnig en 24°C. Ideaal voor een dag vol avontuur bij Lake Side Mania!', en: 'Coming week sunny and 24°C. Ideal for a day full of adventure at Lake Side Mania!' },
  news6Time: { nl: '3 dagen geleden', en: '3 days ago' },

  // Feedback
  feedbackTitle: { nl: 'Feedback', en: 'Feedback' },
  feedbackHowSatisfied: { nl: 'Hoe tevreden ben je?', en: 'How satisfied are you?' },
  feedbackWhatGood: { nl: 'Wat vond je goed?', en: 'What did you like?' },
  feedbackTagComfortable: { nl: 'Comfortabel', en: 'Comfortable' },
  feedbackTagOnTime: { nl: 'Op tijd', en: 'On time' },
  feedbackTagClean: { nl: 'Schoon', en: 'Clean' },
  feedbackTagFriendly: { nl: 'Vriendelijk', en: 'Friendly' },
  feedbackTagFast: { nl: 'Snel', en: 'Fast' },
  feedbackTagQuiet: { nl: 'Rustig', en: 'Quiet' },
  feedbackExtraComments: { nl: 'Extra opmerkingen (optioneel)', en: 'Additional comments (optional)' },
  feedbackPlaceholder: { nl: 'Vertel ons meer...', en: 'Tell us more...' },
  feedbackSubmit: { nl: 'Verstuur feedback', en: 'Submit feedback' },
  feedbackThanks: { nl: 'Bedankt voor je feedback!', en: 'Thanks for your feedback!' },

  // Busstatus
  busStatusTitle: { nl: 'Busstatus', en: 'Bus Status' },
  busDirection: { nl: 'Richting: H5 – Dromenpark', en: 'Direction: H5 – Dream Park' },
  busCurrentLocation: { nl: 'Huidige locatie', en: 'Current location' },
  busBetweenStops: { nl: 'Tussen H3 en H4', en: 'Between H3 and H4' },
  busNextStop: { nl: 'Volgende halte', en: 'Next stop' },
  busNextStopValue: { nl: 'H4 – Toekomstzone (2 min)', en: 'H4 – Future Zone (2 min)' },
  busDepartureFreq: { nl: 'Vertrekfrequentie', en: 'Departure frequency' },
  busEvery5Min: { nl: 'Elke 5 minuten', en: 'Every 5 minutes' },
  busOccupancy: { nl: 'Bezetting', en: 'Occupancy' },
  busPersons: { nl: 'personen', en: 'persons' },
  busSufficientSpace: { nl: 'Voldoende plek beschikbaar', en: 'Sufficient space available' },

  // Plattegrond
  mapTitle: { nl: 'Plattegrond', en: 'Map' },
  mapLegendStop: { nl: 'Halte', en: 'Stop' },
  mapLegendBus: { nl: 'Bus (live)', en: 'Bus (live)' },
  mapLegendTap: { nl: 'Tap voor details', en: 'Tap for details' },
  mapShuttleTo: { nl: 'Shuttlebus → H5 Dromenpark', en: 'Shuttle bus → H5 Dream Park' },
  mapPersonsArrival: { nl: '52/80 personen · Aankomst 2 min', en: '52/80 persons · Arrival 2 min' },
  // Bus stop names
  stopIngang: { nl: 'Ingang', en: 'Entrance' },
  stopAvonturenland: { nl: 'Avonturenland', en: 'Adventure Land' },
  stopKruispunt: { nl: 'Kruispunt', en: 'Crossroads' },
  stopToekomstzone: { nl: 'Toekomstzone', en: 'Future Zone' },
  stopDromenpark: { nl: 'Dromenpark', en: 'Dream Park' },
  stopUitgang: { nl: 'Uitgang', en: 'Exit' },

  // Busfaciliteiten
  busFacilitiesTitle: { nl: 'Busfaciliteiten', en: 'Bus Facilities' },
  busFacilitiesSubtitle: { nl: 'Heb je een speciale plek nodig in de shuttlebus?', en: 'Do you need a special spot on the shuttle bus?' },
  facilityDisabled: { nl: 'Zitplaats mindervaliden', en: 'Disabled seating' },
  facilityStroller: { nl: 'Kinderwagen-ruimte', en: 'Stroller space' },
  facilityWheelchair: { nl: 'Rollator/rolstoel', en: 'Walker/wheelchair' },
  facilityNone: { nl: 'Geen reservering', en: 'No reservation' },
  familySize: { nl: 'Gezinsgrootte', en: 'Family size' },
  persons: { nl: 'personen', en: 'persons' },
  generateQR: { nl: 'Genereer QR-code', en: 'Generate QR code' },

  // JouwQRCode
  yourQRCode: { nl: 'Jouw QR-code', en: 'Your QR code' },
  scanAtEveryStop: { nl: 'Scan deze code bij elke halte', en: 'Scan this code at every stop' },
  familyName: { nl: 'Gezin Van Dijk', en: 'Van Dijk Family' },
  personsQR: { nl: '4 personen · 1 QR-code', en: '4 persons · 1 QR code' },
  summary: { nl: 'Samenvatting', en: 'Summary' },
  selectedAttractions: { nl: 'Geselecteerde attracties:', en: 'Selected attractions:' },
  busFacility: { nl: 'Busfaciliteit:', en: 'Bus facility:' },
  noSpecialFacility: { nl: 'Geen speciale faciliteit', en: 'No special facility' },
  modify: { nl: 'Wijzig', en: 'Modify' },
  shareQR: { nl: 'Deel QR', en: 'Share QR' },

  // Weergave
  displayTitle: { nl: 'Weergave', en: 'Display' },
  textSize: { nl: 'Tekstgrootte', en: 'Text size' },
  lineSpacing: { nl: 'Regelafstand', en: 'Line spacing' },
  voiceAssistant: { nl: 'Spraakassistent', en: 'Voice assistant' },
  readAloud: { nl: 'Tekst voorlezen', en: 'Read text aloud' },
  voiceBanner: { nl: 'Spraakassistent actief — tik op tekst om voor te lezen', en: 'Voice assistant active — tap text to read aloud' },
  preview: { nl: 'Voorbeeld', en: 'Preview' },
  previewText: { nl: 'Dit is voorbeeldtekst om de leesbaarheid van je instellingen te controleren. De shuttlebus vertrekt om de 5 minuten naar alle attracties.', en: 'This is sample text to check the readability of your settings. The shuttle bus departs every 5 minutes to all attractions.' },

  // AttractieDetail
  attractionNotFound: { nl: 'Attractie niet gevonden', en: 'Attraction not found' },
  waitTime: { nl: 'Wachttijd', en: 'Wait time' },
  stop: { nl: 'Halte', en: 'Stop' },
  nextBus: { nl: 'Volgende bus', en: 'Next bus' },
  addToPlan: { nl: 'Voeg toe aan plan', en: 'Add to plan' },
  arrivalIn: { nl: 'Aankomst over', en: 'Arrival in' },
  minutes: { nl: 'minuten', en: 'minutes' },

  // Attraction names
  attrTornado: { nl: 'De Tornado', en: 'The Tornado' },
  attrToekomstzone: { nl: 'Toekomstzone', en: 'Future Zone' },
  attrSprookjesbos: { nl: 'Sprookjesbos', en: 'Fairy Tale Forest' },
  attrWaterglijbaan: { nl: 'Waterglijbaan Splash', en: 'Water Slide Splash' },
  attrAchtbaan: { nl: 'Mega Achtbaan', en: 'Mega Roller Coaster' },
  attrPiratenboot: { nl: 'Piratenboot', en: 'Pirate Boat' },

  // BusHalteDetail
  stopNotFound: { nl: 'Halte niet gevonden', en: 'Stop not found' },
  stopDetails: { nl: 'Halte Details', en: 'Stop Details' },
  facilitiesNearby: { nl: 'Faciliteiten in de buurt', en: 'Nearby facilities' },
  attractionsNearby: { nl: 'Attracties in de buurt', en: 'Nearby attractions' },
  viewLiveBus: { nl: 'Bekijk live buslocaties', en: 'View live bus locations' },
  busEvery3Min: { nl: 'Om de 3 minuten', en: 'Every 3 minutes' },

  // BusHalteDetail - descriptions
  h1Desc: { nl: 'De hoofdingang van Lake Side Mania. Start hier je avontuur!', en: 'The main entrance of Lake Side Mania. Start your adventure here!' },
  h2Desc: { nl: 'Het hart van de actie! Hier vind je onze meest spannende achtbanen.', en: 'The heart of the action! Here you\'ll find our most thrilling roller coasters.' },
  h3Desc: { nl: 'Centrale locatie met gemakkelijke toegang tot alle zones.', en: 'Central location with easy access to all zones.' },
  h4Desc: { nl: 'Futuristische attracties en innovatieve ervaringen wachten op je.', en: 'Futuristic attractions and innovative experiences await you.' },
  h5Desc: { nl: 'Magische omgeving perfect voor families en kinderen.', en: 'Magical environment perfect for families and children.' },
  h6Desc: { nl: 'Uitgang en toegang tot waterattracties. Tot snel!', en: 'Exit and access to water attractions. See you soon!' },

  // BusHalteDetail - facility names
  facilityTicketCounter: { nl: 'Ticketbalie', en: 'Ticket counter' },
  facilityToilets: { nl: 'Toiletten', en: 'Toilets' },
  facilitySouvenirShop: { nl: 'Souvenirshop', en: 'Souvenir shop' },
  facilityInfoCenter: { nl: 'Informatiecentrum', en: 'Information center' },
  facilitySnackBar: { nl: 'Snackbar Twister', en: 'Snack bar Twister' },
  facilityArcade: { nl: 'Arcade Hall', en: 'Arcade Hall' },
  facilityFirstAid: { nl: 'EHBO Post', en: 'First Aid' },
  facilityRestaurant: { nl: 'Restaurant Meerterras', en: 'Restaurant Lakeside Terrace' },
  facilityCoffee: { nl: 'Coffee Corner', en: 'Coffee Corner' },
  facilityFountain: { nl: 'Drinkfontein', en: 'Drinking fountain' },
  facilityCinemaSnacks: { nl: '4D Cinema Snacks', en: '4D Cinema Snacks' },
  facilityCinema: { nl: '4D Cinema', en: '4D Cinema' },
  facilityVR: { nl: 'VR Experience', en: 'VR Experience' },
  facilityIceCream: { nl: 'IJssalon Dromen', en: 'Dream Ice Cream Parlor' },
  facilityToiletsChanging: { nl: 'Toiletten + Verschoonruimte', en: 'Toilets + Changing room' },
  facilityKidsZone: { nl: 'Kinderspeelzone', en: 'Children\'s play area' },
  facilityTheater: { nl: 'Theater (15:00 show)', en: 'Theater (3:00 PM show)' },
  facilitySouvenirExit: { nl: 'Souvenirshop Uitgang', en: 'Souvenir shop Exit' },
  facilityParking: { nl: 'Parkeerplaats', en: 'Parking lot' },
  facilityPhotoPickup: { nl: 'Foto Pickup', en: 'Photo Pickup' },

  // BusHalteDetail - nearby attractions
  nearWelkomstplein: { nl: 'Welkomstplein', en: 'Welcome Square' },
  nearFotoPoint: { nl: 'Foto Point', en: 'Photo Point' },
  nearDeTornado: { nl: 'De Tornado', en: 'The Tornado' },
  nearVrijeVal: { nl: 'Vrije Val', en: 'Free Fall' },
  nearLoopDeLoop: { nl: 'Loop-de-Loop', en: 'Loop-de-Loop' },
  nearSpeeltuin: { nl: 'Speeltuin Wonderland', en: 'Playground Wonderland' },
  nearReuzenrad: { nl: 'Reuzenrad', en: 'Ferris Wheel' },
  nearRuimteOdyssee: { nl: 'Ruimte Odyssee', en: 'Space Odyssey' },
  nearGalacticSpinner: { nl: 'Galactic Spinner', en: 'Galactic Spinner' },
  nearLaserQuest: { nl: 'Laser Quest', en: 'Laser Quest' },
  nearSprookjesbos: { nl: 'Sprookjesbos', en: 'Fairy Tale Forest' },
  nearDraaimolen: { nl: 'Draaimolen Magie', en: 'Magic Carousel' },
  nearWaterplezier: { nl: 'Waterplezier', en: 'Water Fun' },
  nearWaterval: { nl: 'De Waterval (binnenkort)', en: 'The Waterfall (coming soon)' },
  nearWildwaterbaan: { nl: 'Wildwaterbaan', en: 'Wild Water Rapids' },

  // NieuwsDetail
  newsNotFound: { nl: 'Nieuwsbericht niet gevonden', en: 'News article not found' },
  share: { nl: 'Delen', en: 'Share' },
  save: { nl: 'Opslaan', en: 'Save' },
  // News categories
  catNewAttraction: { nl: 'Nieuwe attractie', en: 'New attraction' },
  catEvent: { nl: 'Evenement', en: 'Event' },
  catFood: { nl: 'Horeca', en: 'Food & Drinks' },
  catService: { nl: 'Service', en: 'Service' },
  catEntertainment: { nl: 'Entertainment', en: 'Entertainment' },
  catInfo: { nl: 'Info', en: 'Info' },

  // News detail content
  news1Content: {
    nl: [
      'Lake Side Mania is trots om De Waterval aan te kondigen - onze grootste waterattractie tot nu toe!',
      'Met een adembenemende val van 25 meter stormt je bootje naar beneden, waarbij je onderweg spectaculaire licht- en watereffecten ervaart.',
      'De attractie opent op 15 juni en belooft de perfecte verkoeling tijdens warme zomerdagen. Geschikt voor bezoekers vanaf 1.20m lengte.',
      'Early bird tickets zijn nu beschikbaar via de app. Boek je plek en wees een van de eersten om deze sensatie te ervaren!',
    ],
    en: [
      'Lake Side Mania is proud to announce The Waterfall - our biggest water attraction to date!',
      'With a breathtaking 25 meter drop, your boat races down while experiencing spectacular light and water effects along the way.',
      'The attraction opens on June 15th and promises the perfect refreshment during hot summer days. Suitable for visitors from 1.20m height.',
      'Early bird tickets are now available through the app. Book your spot and be one of the first to experience this sensation!',
    ],
  },
  news2Content: {
    nl: [
      'Dit weekend blijft Lake Side Mania extra lang open voor een magische avondervaring!',
      'Het park is toegankelijk tot 23:00 uur, waarbij alle attracties prachtig verlicht zijn met duizenden LED-lampjes.',
      'Het hoogtepunt van de avond is de spectaculaire vuurwerkshow om 22:30 uur boven het meer. Met muziek en special effects wordt dit een onvergetelijk moment.',
      'De shuttlebussen blijven doorrijden tot 23:30 uur, dus je kunt zorgeloos van deze bijzondere avond genieten.',
      'Tickets voor de avondopenstelling kosten €15 extra bovenop je dagticket.',
    ],
    en: [
      'This weekend Lake Side Mania stays open extra long for a magical evening experience!',
      'The park is accessible until 11:00 PM, with all attractions beautifully lit with thousands of LED lights.',
      'The highlight of the evening is the spectacular fireworks show at 10:30 PM over the lake. With music and special effects, this will be an unforgettable moment.',
      'The shuttle buses keep running until 11:30 PM, so you can enjoy this special evening worry-free.',
      'Tickets for the evening opening cost €15 extra on top of your day ticket.',
    ],
  },
  news3Content: {
    nl: [
      'Welkom bij Meerterras - Lake Side Mania\'s nieuwste culinaire hotspot!',
      'Gelegen naast bushalte H3 Kruispunt, biedt dit restaurant een prachtig uitzicht op het meer terwijl je geniet van authentieke Italiaanse gerechten.',
      'Op het menu: verse pizza\'s uit de steenoven, pasta gemaakt met liefde, en verrukkelijke tiramisu als dessert.',
      'Het terras heeft 120 zitplaatsen en is voorzien van parasols en verwarming, waardoor je het hele seizoen comfortabel kunt dineren.',
      'Reserveren is mogelijk via de app. Tip: vraag om een tafeltje bij het raam tijdens zonsondergang!',
    ],
    en: [
      'Welcome to Lakeside Terrace - Lake Side Mania\'s newest culinary hotspot!',
      'Located next to bus stop H3 Crossroads, this restaurant offers a beautiful view of the lake while you enjoy authentic Italian dishes.',
      'On the menu: fresh stone-oven pizzas, pasta made with love, and delicious tiramisu for dessert.',
      'The terrace has 120 seats and is equipped with parasols and heating, so you can dine comfortably all season.',
      'Reservations are possible through the app. Tip: ask for a window table during sunset!',
    ],
  },
  news4Content: {
    nl: [
      'Goed nieuws voor alle bezoekers: we hebben extra shuttlebussen ingezet!',
      'Door de grote toestroom van gasten deze week rijden er nu bussen om de 3 minuten in plaats van om de 5 minuten.',
      'Dit betekent kortere wachttijden bij alle haltes en meer comfort tijdens je parkbezoek.',
      'Alle bussen zijn uitgerust met airconditioning en hebben extra ruimte voor kinderwagens en rolstoelen.',
      'Bekijk de live buslocaties op je Plattegrond-scherm en plan je route optimaal!',
    ],
    en: [
      'Good news for all visitors: we have deployed extra shuttle buses!',
      'Due to the large influx of guests this week, buses now run every 3 minutes instead of every 5 minutes.',
      'This means shorter waiting times at all stops and more comfort during your park visit.',
      'All buses are equipped with air conditioning and have extra space for strollers and wheelchairs.',
      'Check the live bus locations on your Map screen and plan your route optimally!',
    ],
  },
  news5Content: {
    nl: [
      'Ahoy mateys! Captain Jack en zijn bemanning kapen vandaag Lake Side Mania!',
      'Om precies 15:00 uur begint de spectaculaire piratenshow bij het Dromenpark (halte H5).',
      'Verwacht epische zwaardgevechten, acrobatische stunts, en een schat aan humor. De show duurt ongeveer 30 minuten.',
      'Na afloop kun je foto\'s maken met de piraten en krijgen alle kinderen een gratis piratenvlag.',
      'Kom op tijd want de tribunes zitten vaak vol. De show wordt bij mooi weer ook op het water uitgevoerd!',
    ],
    en: [
      'Ahoy mateys! Captain Jack and his crew are taking over Lake Side Mania today!',
      'At exactly 3:00 PM the spectacular pirate show starts at Dream Park (stop H5).',
      'Expect epic sword fights, acrobatic stunts, and a treasure trove of humor. The show lasts about 30 minutes.',
      'Afterwards you can take photos with the pirates and all children receive a free pirate flag.',
      'Come on time as the stands are often full. In good weather, the show is also performed on the water!',
    ],
  },
  news6Content: {
    nl: [
      'Het weer werkt volledig mee voor een fantastische parkweek!',
      'De komende 7 dagen verwachten we temperaturen rond de 24°C met veel zonneperiodes en af en toe een wolkje.',
      'De kans op regen is minimaal, dus je kunt je zonnecrème inpakken en je paraplu thuislaten.',
      'Tips voor warm weer: drink voldoende water (gratis bij alle fonteinen), draag een pet, en bezoek onze waterattracties tijdens de warmste uren.',
      'De avondtemperatuur daalt naar een aangename 18°C - perfect voor de avondshows!',
    ],
    en: [
      'The weather is fully cooperating for a fantastic park week!',
      'For the coming 7 days we expect temperatures around 24°C with plenty of sunshine and the occasional cloud.',
      'The chance of rain is minimal, so you can pack your sunscreen and leave your umbrella at home.',
      'Tips for warm weather: drink plenty of water (free at all fountains), wear a cap, and visit our water attractions during the hottest hours.',
      'The evening temperature drops to a pleasant 18°C - perfect for the evening shows!',
    ],
  },

  // Attraction detail data
  attrTornadoStop: { nl: 'Avonturenland', en: 'Adventure Land' },
  attrTornadoBus: { nl: 'Aankomst over 3 minuten', en: 'Arrival in 3 minutes' },
  attrToekomstzoneStop: { nl: 'Toekomstzone', en: 'Future Zone' },
  attrToekomstzoneBus: { nl: 'Aankomst over 2 minuten', en: 'Arrival in 2 minutes' },
  attrSprookjesbosStop: { nl: 'Sprookjesland', en: 'Fairy Tale Land' },
  attrSprookjesbosBus: { nl: 'Aankomst over 5 minuten', en: 'Arrival in 5 minutes' },
  attrWaterglijbaanStop: { nl: 'Waterwereld', en: 'Water World' },
  attrWaterglijbaanBus: { nl: 'Aankomst over 7 minuten', en: 'Arrival in 7 minutes' },
  attrAchtbaanStop: { nl: 'Thrillzone', en: 'Thrill Zone' },
  attrAchtbaanBus: { nl: 'Aankomst over 4 minuten', en: 'Arrival in 4 minutes' },
  attrPiratenbootStop: { nl: 'Piratenbaai', en: 'Pirate Bay' },
  attrPiratenbootBus: { nl: 'Aankomst over 6 minuten', en: 'Arrival in 6 minutes' },
} as const;

export type TranslationKey = keyof typeof translations;
