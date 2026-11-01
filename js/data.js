// ============================================================
//  MONUMENTS OF INDIA — all the content of the site lives here.
//  To add or edit a monument, change this list and save.
//  "id" is used in the web address: monument.html?id=taj-mahal
//  "wiki" is the English Wikipedia page title (used to fetch the photo).
//  "image" (optional) picks a specific Wikimedia Commons file instead.
//  After adding a monument, run:  python tools/fetch_images.py
//                                 python tools/make_qr.py
// ============================================================

const MONUMENTS = [
  // ---------------- STATES ----------------
  {
    id: "lepakshi-temple", name: "Lepakshi Temple", state: "Andhra Pradesh", region: "State",
    wiki: "Veerabhadra Temple, Lepakshi",
    location: "Lepakshi, Sri Sathya Sai district",
    builtBy: "Brothers Virupanna and Viranna, governors under the Vijayanagara Empire",
    period: "16th century (around 1530s)",
    style: "Vijayanagara architecture",
    unesco: "On UNESCO's Tentative List (2022)",
    facts: [
      "One of its stone pillars, the famous 'Hanging Pillar', barely touches the floor — visitors try to slide a cloth underneath it.",
      "Near the temple stands a giant Nandi (bull) carved from a single stone — one of the largest in India.",
      "Its ceilings are covered with colourful paintings from the Vijayanagara period.",
      "Legend says the name comes from Lord Rama saying 'Le Pakshi' ('Rise, O bird') to the wounded bird Jatayu here."
    ]
  },
  {
    id: "tawang-monastery", name: "Tawang Monastery", state: "Arunachal Pradesh", region: "State",
    wiki: "Tawang Monastery",
    location: "Tawang town",
    builtBy: "Merak Lama Lodre Gyatso, as wished by the 5th Dalai Lama",
    period: "1680–1681",
    style: "Tibetan Buddhist monastery",
    unesco: "No",
    facts: [
      "It is the largest Buddhist monastery in India.",
      "It sits at a height of about 3,000 metres (10,000 feet) in the Himalayas.",
      "Its Tibetan name, 'Galden Namgey Lhatse', means 'celestial paradise on a clear night'.",
      "It has a huge golden statue of the Buddha, about 8 metres tall."
    ]
  },
  {
    id: "kamakhya-temple", name: "Kamakhya Temple", state: "Assam", region: "State",
    wiki: "Kamakhya Temple",
    location: "Nilachal Hill, Guwahati",
    builtBy: "Rebuilt by the Koch dynasty (King Nara Narayan) in 1565",
    period: "Ancient site; present temple from 1565",
    style: "Nilachal style (a local Assamese style)",
    unesco: "No",
    facts: [
      "It is one of the most important Shakti Peethas — temples of the Mother Goddess.",
      "There is no idol inside; a natural stone kept wet by an underground spring is worshipped.",
      "Every year the Ambubachi Mela held here attracts lakhs of pilgrims.",
      "Its dome is shaped like a beehive, a design special to this region."
    ]
  },
  {
    id: "mahabodhi-temple", name: "Mahabodhi Temple", state: "Bihar", region: "State",
    wiki: "Mahabodhi Temple",
    location: "Bodh Gaya, Gaya district",
    builtBy: "First shrine by Emperor Ashoka; present temple from the Gupta period",
    period: "First shrine 3rd century BCE; present temple 5th–6th century CE",
    style: "Early brick temple architecture",
    unesco: "Yes — World Heritage Site (2002)",
    facts: [
      "Gautama Buddha attained enlightenment here, sitting under a Bodhi tree.",
      "The Bodhi tree growing here today is believed to be a descendant of the original tree.",
      "It is one of the oldest brick temples still standing in India.",
      "The main tower is about 55 metres tall."
    ]
  },
  {
    id: "lakshmana-temple-sirpur", name: "Lakshmana Temple, Sirpur", state: "Chhattisgarh", region: "State",
    wiki: "Sirpur Group of Monuments",
    image: "7th century Lakshmana Hindu temple, Sirpur Chhattisgarh India 1.jpg",
    location: "Sirpur, Mahasamund district",
    builtBy: "Queen Vasata, in memory of her husband King Harshagupta",
    period: "7th century CE",
    style: "Nagara style, built of brick",
    unesco: "No",
    facts: [
      "It is one of the finest brick temples of ancient India.",
      "Even though it is named after Lakshmana, it is dedicated to Lord Vishnu.",
      "Its bricks are carved with detailed decorations — very hard to do in brick!",
      "Sirpur was once an important centre of Hindu, Buddhist and Jain learning."
    ]
  },
  {
    id: "basilica-of-bom-jesus", name: "Basilica of Bom Jesus", state: "Goa", region: "State",
    wiki: "Basilica of Bom Jesus",
    location: "Old Goa",
    builtBy: "The Jesuits (a Catholic order) during Portuguese rule",
    period: "1594–1605",
    style: "Baroque",
    unesco: "Yes — part of 'Churches and Convents of Goa' (1986)",
    facts: [
      "It holds the remains of St. Francis Xavier, a famous missionary.",
      "His remains are shown to the public roughly once every 10 years in an event called the Exposition.",
      "'Bom Jesus' means 'Good Jesus' or 'Infant Jesus' in Portuguese.",
      "Its outer walls are not plastered, showing the red laterite stone it is made of."
    ]
  },
  {
    id: "rani-ki-vav", name: "Rani ki Vav", state: "Gujarat", region: "State",
    wiki: "Rani ki vav",
    location: "Patan",
    builtBy: "Queen Udayamati, in memory of King Bhima I of the Chaulukya (Solanki) dynasty",
    period: "11th century CE",
    style: "Maru-Gurjara; a stepwell",
    unesco: "Yes — World Heritage Site (2014)",
    facts: [
      "It is a 'stepwell' — steps lead down many levels to reach water.",
      "It has hundreds of beautiful stone sculptures, many showing avatars of Vishnu.",
      "It was buried under silt for centuries and was dug out by the Archaeological Survey of India in the 20th century.",
      "Rani ki Vav appears on the back of the ₹100 note."
    ]
  },
  {
    id: "pinjore-gardens", name: "Pinjore Gardens", state: "Haryana", region: "State",
    wiki: "Pinjore Gardens",
    location: "Pinjore, Panchkula district",
    builtBy: "Nawab Fidai Khan, a Mughal noble (foster brother of Aurangzeb)",
    period: "17th century",
    style: "Mughal garden (terraced)",
    unesco: "No",
    facts: [
      "The garden is built on seven terraces going down a slope.",
      "It is also called Yadavindra Gardens, after Maharaja Yadavindra Singh of Patiala.",
      "It has fountains, water channels and palace pavilions in Mughal style.",
      "A Mango Festival is held here every year."
    ]
  },
  {
    id: "masrur-temples", name: "Masrur Rock-cut Temples", state: "Himachal Pradesh", region: "State",
    wiki: "Masrur Temples",
    location: "Masrur, Kangra district",
    builtBy: "Unknown rulers of the region",
    period: "8th century CE",
    style: "Nagara style, rock-cut",
    unesco: "No",
    facts: [
      "The temples were carved out of one single rock — from the top down!",
      "There is a pond in front of the temples that reflects them beautifully.",
      "The temples were damaged in the big Kangra earthquake of 1905.",
      "They are among the very few rock-cut temples in the Himalayas."
    ]
  },
  {
    id: "jagannath-temple-ranchi", name: "Jagannath Temple, Ranchi", state: "Jharkhand", region: "State",
    wiki: "Jagannath Temple, Ranchi",
    location: "Jagannathpur, Ranchi",
    builtBy: "King Thakur Ani Nath Shahdeo of Barkagarh",
    period: "1691",
    style: "Kalinga style, similar to the Puri Jagannath Temple",
    unesco: "No",
    facts: [
      "It looks like a smaller version of the famous Jagannath Temple in Puri, Odisha.",
      "A big Rath Yatra (chariot festival) and fair are held here every year.",
      "The temple stands on top of a small hill.",
      "People from tribal and non-tribal communities both take part in its festivals."
    ]
  },
  {
    id: "hampi", name: "Hampi", state: "Karnataka", region: "State",
    wiki: "Group of Monuments at Hampi",
    location: "Hampi, Vijayanagara district",
    builtBy: "Rulers of the Vijayanagara Empire",
    period: "14th–16th century",
    style: "Vijayanagara architecture",
    unesco: "Yes — World Heritage Site (1986)",
    facts: [
      "Hampi was the capital of the rich Vijayanagara Empire.",
      "The Vittala Temple has 'musical pillars' that make sounds when tapped gently.",
      "Its famous Stone Chariot is shown on the back of the ₹50 note.",
      "The city was attacked and ruined after the Battle of Talikota in 1565.",
      "The Virupaksha Temple here is still used for worship today."
    ]
  },
  {
    id: "padmanabhaswamy-temple", name: "Padmanabhaswamy Temple", state: "Kerala", region: "State",
    wiki: "Padmanabhaswamy Temple",
    location: "Thiruvananthapuram",
    builtBy: "Rebuilt by King Marthanda Varma of Travancore",
    period: "Ancient temple; present structure 18th century",
    style: "Mix of Kerala and Dravidian styles",
    unesco: "No",
    facts: [
      "Lord Vishnu is shown lying on the serpent Anantha.",
      "The idol is so big that it is seen through three separate doors.",
      "In 2011, huge treasures of gold and jewels were found in its underground vaults.",
      "The city name Thiruvananthapuram means 'City of Lord Anantha'."
    ]
  },
  {
    id: "khajuraho", name: "Khajuraho Temples", state: "Madhya Pradesh", region: "State",
    wiki: "Khajuraho Group of Monuments",
    location: "Khajuraho, Chhatarpur district",
    builtBy: "Chandela dynasty",
    period: "Around 950–1050 CE",
    style: "Nagara style",
    unesco: "Yes — World Heritage Site (1986)",
    facts: [
      "There were once about 85 temples here; around 25 survive today.",
      "There are both Hindu and Jain temples in the group.",
      "The Kandariya Mahadeva Temple is the largest and most decorated.",
      "The name comes from 'khajur', meaning date palm.",
      "A famous classical dance festival is held here every February."
    ]
  },
  {
    id: "gateway-of-india", name: "Gateway of India", state: "Maharashtra", region: "State",
    wiki: "Gateway of India",
    location: "Apollo Bunder, Mumbai",
    builtBy: "British government; designed by architect George Wittet",
    period: "Completed 1924",
    style: "Indo-Saracenic",
    unesco: "No",
    facts: [
      "It was built to mark the visit of King George V and Queen Mary to India in 1911.",
      "It is about 26 metres tall and faces the Arabian Sea.",
      "The last British troops left India by passing through it in 1948.",
      "It is made of yellow basalt stone."
    ]
  },
  {
    id: "ajanta-caves", name: "Ajanta Caves", state: "Maharashtra", region: "State",
    wiki: "Ajanta Caves",
    location: "Near Chhatrapati Sambhajinagar (Aurangabad)",
    builtBy: "Buddhist monks and royal patrons",
    period: "2nd century BCE to about 480 CE",
    style: "Rock-cut Buddhist caves",
    unesco: "Yes — World Heritage Site (1983)",
    facts: [
      "There are about 30 caves carved into a horseshoe-shaped cliff.",
      "The paintings inside tell the Jataka tales — stories of the Buddha's past lives.",
      "The caves were forgotten for centuries and rediscovered by a British officer, John Smith, in 1819 while hunting a tiger.",
      "The paintings are among the finest examples of ancient Indian art."
    ]
  },
  {
    id: "kangla-fort", name: "Kangla Fort", state: "Manipur", region: "State",
    wiki: "Kangla Fort",
    image: "Kangla Sha.JPG",
    location: "Imphal",
    builtBy: "Meitei kings of Manipur",
    period: "Royal seat for centuries; used until 1891",
    style: "Traditional Manipuri",
    unesco: "No",
    facts: [
      "It was the palace and seat of power of the kings of Manipur.",
      "The British took it after the Anglo-Manipur War of 1891.",
      "It was handed back to the people of Manipur in 2004.",
      "Huge white statues of 'Kangla Sha', a mythical dragon-lion, guard the site."
    ]
  },
  {
    id: "living-root-bridges", name: "Living Root Bridges", state: "Meghalaya", region: "State",
    wiki: "Living root bridge",
    location: "East Khasi Hills and Jaintia Hills (e.g. Nongriat)",
    builtBy: "The Khasi and Jaintia people",
    period: "Traditional; some are over a hundred years old",
    style: "Living architecture — grown from tree roots",
    unesco: "On UNESCO's Tentative List (2022)",
    facts: [
      "These bridges are not built — they are grown by guiding the roots of rubber fig trees across streams.",
      "A bridge can take 10 to 15 years or more to become strong enough to walk on.",
      "Unlike normal bridges, they get stronger as they get older.",
      "The village of Nongriat has a famous 'double-decker' root bridge."
    ]
  },
  {
    id: "solomons-temple-aizawl", name: "Solomon's Temple", state: "Mizoram", region: "State",
    wiki: "Solomon's Temple, Aizawl",
    location: "Kidron Valley, Aizawl",
    builtBy: "The Kohhran Thianghlim (Holy Church)",
    period: "Construction began in 1996; completed 2017",
    style: "Modern church architecture",
    unesco: "No",
    facts: [
      "It is one of the largest churches in Mizoram.",
      "Its bright white building with towers is a well-known landmark of Aizawl.",
      "Most people in Mizoram follow Christianity, and churches are central to community life.",
      "The church took more than 20 years to build."
    ]
  },
  {
    id: "kohima-war-cemetery", name: "Kohima War Cemetery", state: "Nagaland", region: "State",
    wiki: "Kohima War Cemetery",
    location: "Garrison Hill, Kohima",
    builtBy: "Commonwealth War Graves Commission",
    period: "After the Battle of Kohima, 1944",
    style: "War memorial and cemetery",
    unesco: "No",
    facts: [
      "It honours soldiers who died in the Battle of Kohima during World War II (1944).",
      "The battle stopped the Japanese army from advancing into India.",
      "Part of the battle was fought around a tennis court, which is still marked in the cemetery.",
      "Its memorial says: 'When you go home, tell them of us and say, for your tomorrow, we gave our today.'"
    ]
  },
  {
    id: "konark-sun-temple", name: "Konark Sun Temple", state: "Odisha", region: "State",
    wiki: "Konark Sun Temple",
    location: "Konark, Puri district",
    builtBy: "King Narasimhadeva I of the Eastern Ganga dynasty",
    period: "Around 1250 CE",
    style: "Kalinga architecture",
    unesco: "Yes — World Heritage Site (1984)",
    facts: [
      "The temple is shaped like a giant chariot of the Sun God, with 24 carved stone wheels and 7 horses.",
      "The wheels work as sundials — you can tell the time from their shadows!",
      "European sailors called it the 'Black Pagoda' and used it as a landmark.",
      "Konark Sun Temple appears on the back of the ₹10 note."
    ]
  },
  {
    id: "golden-temple", name: "Golden Temple (Harmandir Sahib)", state: "Punjab", region: "State",
    wiki: "Golden Temple",
    location: "Amritsar",
    builtBy: "Guru Arjan Dev, the fifth Sikh Guru; gold added by Maharaja Ranjit Singh",
    period: "Completed 1604; gold covering added in the early 1800s",
    style: "Sikh architecture",
    unesco: "No",
    facts: [
      "It has four entrances, showing that people from all directions and religions are welcome.",
      "Its community kitchen (langar) serves free meals to around 1 lakh people every day.",
      "The temple stands in the middle of a holy pool called the Amrit Sarovar.",
      "Its upper floors are covered in real gold."
    ]
  },
  {
    id: "hawa-mahal", name: "Hawa Mahal", state: "Rajasthan", region: "State",
    wiki: "Hawa Mahal",
    location: "Jaipur",
    builtBy: "Maharaja Sawai Pratap Singh; designed by Lal Chand Ustad",
    period: "1799",
    style: "Rajput architecture with Mughal influence",
    unesco: "Part of the 'Jaipur City' World Heritage Site (2019)",
    facts: [
      "'Hawa Mahal' means 'Palace of Winds'.",
      "It has 953 small windows called jharokhas.",
      "The windows let royal ladies watch street festivals without being seen.",
      "The breeze through the windows kept the palace cool in the hot summer.",
      "It is made of pink and red sandstone — Jaipur is called the 'Pink City'."
    ]
  },
  {
    id: "rumtek-monastery", name: "Rumtek Monastery", state: "Sikkim", region: "State",
    wiki: "Rumtek Monastery",
    location: "Near Gangtok",
    builtBy: "Originally by the 9th Karmapa; rebuilt by the 16th Karmapa",
    period: "Founded 1740s; rebuilt in the 1960s",
    style: "Tibetan Buddhist monastery",
    unesco: "No",
    facts: [
      "It is one of the largest monasteries in Sikkim.",
      "It is also called the 'Dharma Chakra Centre'.",
      "It was rebuilt by the 16th Karmapa after he came to India from Tibet.",
      "A Golden Stupa inside holds the relics of the 16th Karmapa."
    ]
  },
  {
    id: "meenakshi-temple", name: "Meenakshi Amman Temple", state: "Tamil Nadu", region: "State",
    wiki: "Meenakshi Temple",
    image: "Madurai Meenakshi Amman Temple Gopuram.jpg",
    location: "Madurai",
    builtBy: "Mostly built by the Nayaka rulers of Madurai",
    period: "Ancient temple; most of today's structure from the 16th–17th century",
    style: "Dravidian architecture",
    unesco: "No",
    facts: [
      "It is dedicated to Goddess Meenakshi (a form of Parvati) and Lord Sundareswarar (Shiva).",
      "It has 14 tall gateway towers called gopurams, covered with thousands of colourful statues.",
      "Its 'Hall of a Thousand Pillars' actually has 985 carved pillars.",
      "The Chithirai festival here celebrates the wedding of Meenakshi and Sundareswarar."
    ]
  },
  {
    id: "charminar", name: "Charminar", state: "Telangana", region: "State",
    wiki: "Charminar",
    location: "Hyderabad",
    builtBy: "Muhammad Quli Qutb Shah",
    period: "1591",
    style: "Indo-Islamic (Qutb Shahi)",
    unesco: "No",
    facts: [
      "'Char Minar' means 'Four Minarets'.",
      "It was built when the city of Hyderabad was founded.",
      "There is a small mosque on its top floor.",
      "The nearby Laad Bazaar is famous for colourful bangles."
    ]
  },
  {
    id: "ujjayanta-palace", name: "Ujjayanta Palace", state: "Tripura", region: "State",
    wiki: "Ujjayanta Palace",
    location: "Agartala",
    builtBy: "Maharaja Radha Kishore Manikya",
    period: "1899–1901",
    style: "Indo-Saracenic with European touches",
    unesco: "No",
    facts: [
      "The name 'Ujjayanta' was given by the poet Rabindranath Tagore.",
      "It was the palace of the kings of Tripura.",
      "It was later used as the Tripura Legislative Assembly building.",
      "Today it is the Tripura State Museum."
    ]
  },
  {
    id: "taj-mahal", name: "Taj Mahal", state: "Uttar Pradesh", region: "State",
    wiki: "Taj Mahal",
    location: "Agra, on the banks of the Yamuna river",
    builtBy: "Mughal Emperor Shah Jahan, in memory of his wife Mumtaz Mahal",
    period: "1632–1653",
    style: "Mughal architecture",
    unesco: "Yes — World Heritage Site (1983)",
    facts: [
      "About 20,000 workers helped build it over around 20 years.",
      "It is made of white Makrana marble from Rajasthan.",
      "The marble seems to change colour — pinkish in the morning, white in the day, golden in moonlight.",
      "The four minarets lean slightly outwards, so they would fall away from the tomb in an earthquake.",
      "It was chosen as one of the 'New Seven Wonders of the World' in 2007."
    ]
  },
  {
    id: "kedarnath-temple", name: "Kedarnath Temple", state: "Uttarakhand", region: "State",
    wiki: "Kedarnath Temple",
    location: "Kedarnath, Rudraprayag district",
    builtBy: "Believed to have been revived by Adi Shankaracharya",
    period: "Ancient; present temple believed to be from the 8th century",
    style: "Himalayan stone temple (Nagara)",
    unesco: "No",
    facts: [
      "It stands at about 3,583 metres in the Himalayas.",
      "It is one of the 12 Jyotirlingas of Lord Shiva and part of the Char Dham yatra.",
      "Because of heavy snow, it is open only from about April–May to October–November.",
      "In the 2013 floods, a huge rock (now called 'Bhim Shila') stopped behind the temple and protected it."
    ]
  },
  {
    id: "victoria-memorial", name: "Victoria Memorial", state: "West Bengal", region: "State",
    wiki: "Victoria Memorial, Kolkata",
    location: "Kolkata",
    builtBy: "British government (idea by Lord Curzon); architect William Emerson",
    period: "1906–1921",
    style: "Indo-Saracenic with European design",
    unesco: "No",
    facts: [
      "It was built in memory of Queen Victoria.",
      "Like the Taj Mahal, it is made of white Makrana marble.",
      "A bronze 'Angel of Victory' statue stands on top of the dome.",
      "Today it is a museum about India's history."
    ]
  },

  // ---------------- UNION TERRITORIES ----------------
  {
    id: "cellular-jail", name: "Cellular Jail", state: "Andaman and Nicobar Islands", region: "Union Territory",
    wiki: "Cellular Jail",
    location: "Sri Vijaya Puram (Port Blair)",
    builtBy: "British government",
    period: "1896–1906",
    style: "Colonial prison",
    unesco: "No",
    facts: [
      "It was also known as 'Kala Pani' (Black Water).",
      "Its seven wings spread out from a central tower like the spokes of a wheel.",
      "It had 693 small cells so that each prisoner was kept alone.",
      "Many Indian freedom fighters, including Veer Savarkar, were imprisoned here.",
      "It was declared a National Memorial in 1979."
    ]
  },
  {
    id: "rock-garden-chandigarh", name: "Rock Garden", state: "Chandigarh", region: "Union Territory",
    wiki: "Rock Garden of Chandigarh",
    image: "Chandigarh Rock Garden 54.jpg",
    location: "Sector 1, Chandigarh",
    builtBy: "Nek Chand, a road inspector",
    period: "Started secretly in 1957; opened to the public in 1976",
    style: "Sculpture garden made from waste",
    unesco: "No",
    facts: [
      "It is made from recycled waste — broken tiles, bangles, bottles, and old electrical items.",
      "Nek Chand built it secretly in his spare time for years.",
      "When officials found it, they liked it so much that they made it a public park.",
      "It has thousands of sculptures of people and animals."
    ]
  },
  {
    id: "diu-fort", name: "Diu Fort", state: "Dadra and Nagar Haveli and Daman and Diu", region: "Union Territory",
    wiki: "Diu Fort",
    location: "Diu island",
    builtBy: "The Portuguese",
    period: "From 1535",
    style: "Portuguese colonial fort",
    unesco: "No",
    facts: [
      "The sea surrounds the fort on three sides.",
      "Diu was ruled by Portugal until 1961, when it became part of India.",
      "There is another small fortress, Panikota, built in the sea nearby.",
      "Old cannons can still be seen on the fort walls."
    ]
  },
  {
    id: "qutub-minar", name: "Qutub Minar", state: "Delhi", region: "Union Territory",
    wiki: "Qutb Minar",
    location: "Mehrauli, New Delhi",
    builtBy: "Started by Qutb ud-Din Aibak, completed by Iltutmish",
    period: "Begun around 1199; completed in the 1220s",
    style: "Indo-Islamic",
    unesco: "Yes — World Heritage Site (1993)",
    facts: [
      "At about 72.5 metres, it is the tallest brick minaret in the world.",
      "It has five storeys, each with a balcony.",
      "Nearby stands the Iron Pillar, about 1,600 years old, which has hardly rusted.",
      "Verses from the Quran are carved on its walls."
    ]
  },
  {
    id: "red-fort", name: "Red Fort", state: "Delhi", region: "Union Territory",
    wiki: "Red Fort",
    location: "Old Delhi",
    builtBy: "Mughal Emperor Shah Jahan",
    period: "1639–1648",
    style: "Mughal architecture",
    unesco: "Yes — World Heritage Site (2007)",
    facts: [
      "Every Independence Day, the Prime Minister raises the national flag here.",
      "It is made of red sandstone, which gives it its name.",
      "Its original name was 'Qila-e-Mubarak' (the Blessed Fort).",
      "The famous Peacock Throne was kept here until Nadir Shah took it away in 1739."
    ]
  },
  {
    id: "martand-sun-temple", name: "Martand Sun Temple", state: "Jammu and Kashmir", region: "Union Territory",
    wiki: "Martand Sun Temple",
    location: "Near Anantnag",
    builtBy: "King Lalitaditya Muktapida of the Karkota dynasty",
    period: "8th century CE",
    style: "Kashmiri architecture with Gandharan and Greek influences",
    unesco: "No",
    facts: [
      "It was dedicated to Surya, the Sun God.",
      "Though now in ruins, it shows how grand ancient Kashmiri temples were.",
      "The temple courtyard was surrounded by a row of 84 columns.",
      "It sits on a plateau with a wide view of the Kashmir valley."
    ]
  },
  {
    id: "thiksey-monastery", name: "Thiksey Monastery", state: "Ladakh", region: "Union Territory",
    wiki: "Thiksey Monastery",
    location: "Thiksey, near Leh",
    builtBy: "Monks of the Gelugpa school of Tibetan Buddhism",
    period: "15th century",
    style: "Tibetan Buddhist monastery",
    unesco: "No",
    facts: [
      "It looks similar to the Potala Palace in Lhasa, Tibet.",
      "It has a giant statue of the Maitreya (future) Buddha, about 15 metres tall, filling two floors.",
      "It is built in levels on a hillside, at about 3,600 metres.",
      "Monks hold prayers here early every morning, and visitors can watch."
    ]
  },
  {
    id: "minicoy-lighthouse", name: "Minicoy Lighthouse", state: "Lakshadweep", region: "Union Territory",
    wiki: "Minicoy Island Lighthouse",
    location: "Minicoy island",
    builtBy: "British government",
    period: "1885",
    style: "Colonial lighthouse",
    unesco: "No",
    facts: [
      "Minicoy is the southernmost island of Lakshadweep.",
      "The lighthouse guides ships sailing past the busy Nine Degree Channel.",
      "Visitors can climb to the top for a view of the blue lagoon and coral reefs.",
      "Lakshadweep is India's smallest union territory, made of coral islands."
    ]
  },
  {
    id: "sri-aurobindo-ashram", name: "Sri Aurobindo Ashram", state: "Puducherry", region: "Union Territory",
    wiki: "Sri Aurobindo Ashram",
    image: "Sri Aurobindo Ashram, a spiritual ashram of Sri Aurobindo in Pondicherry 01.jpg",
    location: "Puducherry (White Town)",
    builtBy: "Sri Aurobindo and The Mother (Mirra Alfassa)",
    period: "Founded 1926",
    style: "French colonial-era buildings",
    unesco: "No",
    facts: [
      "Sri Aurobindo was a freedom fighter who later became a spiritual teacher.",
      "The tomb (Samadhi) of Sri Aurobindo and The Mother is in the courtyard, under a tree.",
      "Puducherry was a French colony until 1954, and the ashram is in its old French quarter.",
      "Visitors are asked to keep silence inside the ashram."
    ]
  }
];
