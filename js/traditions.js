// India's Living Traditions — used by the Traditions page, the map and the games.
// Each tradition is linked to the state it is best known from.
// kind: "Dance", "Art & Craft" or "Festival".
// "wiki" is the English Wikipedia page title (used to fetch the photo);
// "image" (optional) picks a specific Wikimedia Commons file instead.
// After adding one, run:  python tools/fetch_images.py

const TRADITIONS = [
  // ---- Dance & music ----
  { id: "bharatanatyam", name: "Bharatanatyam", kind: "Dance", state: "Tamil Nadu", icon: "💃", wiki: "Bharatanatyam",
    facts: [
      "One of India's oldest classical dances, it grew in the temples of Tamil Nadu.",
      "Dancers tell stories with hand gestures called mudras and with expressive eyes and faces.",
      "It follows the Natya Shastra, an ancient book on drama and dance by the sage Bharata Muni."
    ] },
  { id: "kathakali", name: "Kathakali", kind: "Dance", state: "Kerala", icon: "🎭", wiki: "Kathakali",
    facts: [
      "A dance-drama from Kerala, famous for its colourful face make-up and huge costumes.",
      "Green make-up (called pacha) shows a noble hero, like a king or a god.",
      "The actors never speak. Singers tell the story while the dancers act it out with gestures."
    ] },
  { id: "kuchipudi", name: "Kuchipudi", kind: "Dance", state: "Andhra Pradesh", icon: "💃", wiki: "Kuchipudi",
    facts: [
      "It is named after Kuchipudi, a village in the Krishna district of Andhra Pradesh.",
      "In one famous item, the dancer performs on the rim of a brass plate, sometimes with a pot of water on the head!",
      "It mixes pure dance, acting and singing, and often tells stories about Lord Krishna."
    ] },
  { id: "odissi", name: "Odissi", kind: "Dance", state: "Odisha", icon: "💃", wiki: "Odissi",
    facts: [
      "A classical dance from the temples of Odisha. Carvings of dancers in ancient caves and temples show how old it is.",
      "Its two key poses are chowka (a square stance) and tribhangi (the body bent in three places).",
      "Many Odissi dances are set to the Gita Govinda, a 12th-century poem by Jayadeva."
    ] },
  { id: "manipuri-dance", name: "Manipuri dance", kind: "Dance", state: "Manipur", icon: "💃", wiki: "Manipuri dance", image: "The Enchanting Manipuri Raas Leela Dance in Traditional Attire.jpg",
    facts: [
      "A classical dance from Manipur, known for its soft, gentle and flowing movements.",
      "In the Raas Leela, dancers playing the gopis wear a stiff, barrel-shaped skirt called the potloi.",
      "Rabindranath Tagore loved this dance and brought it to his school at Santiniketan."
    ] },
  { id: "sattriya", name: "Sattriya", kind: "Dance", state: "Assam", icon: "💃", wiki: "Sattriya",
    facts: [
      "Created by the saint Srimanta Sankardev in Assam more than 500 years ago.",
      "For centuries it was performed by monks in Assam's monasteries, called sattras, which gave it its name.",
      "It was recognised as one of India's classical dances in the year 2000."
    ] },
  { id: "bihu-dance", name: "Bihu dance", kind: "Dance", state: "Assam", icon: "🥁", wiki: "Bihu dance",
    facts: [
      "A joyful folk dance of Assam, performed during Bohag Bihu, the Assamese New Year in April.",
      "The music uses the dhol drum, the pepa (a horn pipe) and the gogona (a bamboo instrument).",
      "Women dance in mekhela chador, the traditional Assamese dress, often made of golden muga silk."
    ] },
  { id: "kathak", name: "Kathak", kind: "Dance", state: "Uttar Pradesh", icon: "💃", wiki: "Kathak",
    facts: [
      "Its name comes from ‘katha’, meaning story. Kathakars were storytellers who travelled from place to place.",
      "Dancers wear many small bells (ghungroos) on their ankles and do lightning-fast footwork and spins called chakkars.",
      "It grew in temples and later in royal courts. Lucknow, Jaipur and Banaras have their own styles, called gharanas."
    ] },
  { id: "garba", name: "Garba", kind: "Dance", state: "Gujarat", icon: "🪘", wiki: "Garba (dance)",
    facts: [
      "Gujarat's favourite dance, performed in circles during the nine nights of Navratri.",
      "Dancers move around a lamp or an image of the Goddess, clapping in rhythm.",
      "In 2023, UNESCO added Garba of Gujarat to its list of the world's Intangible Cultural Heritage."
    ] },
  { id: "bhangra", name: "Bhangra", kind: "Dance", state: "Punjab", icon: "🥁", wiki: "Bhangra (dance)",
    facts: [
      "An energetic folk dance from Punjab, first danced by farmers to celebrate the harvest.",
      "The beat of the big dhol drum drives the dance, with shouts of ‘balle balle!’",
      "Today Bhangra is popular all over the world, and is often mixed with modern music."
    ] },
  { id: "ghoomar", name: "Ghoomar", kind: "Dance", state: "Rajasthan", icon: "💃", wiki: "Ghoomar",
    facts: [
      "A graceful dance from Rajasthan in which women twirl in long, swirling skirts called ghagras.",
      "‘Ghoomar’ comes from ‘ghoomna’, which means to spin around.",
      "It is danced at weddings and festivals such as Teej, and it began with the Bhil community."
    ] },
  { id: "lavani", name: "Lavani", kind: "Dance", state: "Maharashtra", icon: "💃", wiki: "Lavani",
    facts: [
      "A lively dance and song from Maharashtra, set to the fast beat of the dholki drum.",
      "Dancers usually wear a nine-yard saree, called the nauvari.",
      "It became very popular in the 18th century, and its songs often joke about society and everyday life."
    ] },
  { id: "yakshagana", name: "Yakshagana", kind: "Dance", state: "Karnataka", icon: "🎭", wiki: "Yakshagana",
    facts: [
      "A dance-drama from coastal Karnataka that mixes dance, music, dialogue and grand costumes.",
      "Actors wear tall, glittering headgear and bright make-up to play kings, gods and demons.",
      "Shows traditionally go on all night in the open air, with a singer-narrator called the bhagavata."
    ] },
  { id: "cheraw", name: "Cheraw (bamboo dance)", kind: "Dance", state: "Mizoram", icon: "🎋", wiki: "Cheraw dance",
    facts: [
      "Mizoram's famous bamboo dance. Dancers hop in and out of long bamboo poles that are clapped together.",
      "People sitting on the ground tap and clap the poles in rhythm. A missed step catches a foot!",
      "It is one of the oldest Mizo dances and is performed at festivals like Chapchar Kut."
    ] },

  // ---- Art & craft ----
  { id: "madhubani", name: "Madhubani painting", kind: "Art & Craft", state: "Bihar", icon: "🎨", wiki: "Madhubani art",
    facts: [
      "Comes from the Mithila region of Bihar, where women painted it on mud walls and floors for weddings and festivals.",
      "Colours are made from natural things: turmeric, flowers, indigo and soot. Twigs and fingers are used as brushes.",
      "The world noticed it after the 1934 earthquake, when a British officer saw paintings on broken walls. It now has a GI tag."
    ] },
  { id: "warli", name: "Warli painting", kind: "Art & Craft", state: "Maharashtra", icon: "🎨", wiki: "Warli painting",
    facts: [
      "Made by the Warli tribe of Maharashtra using only simple shapes: circles, triangles and lines.",
      "It is painted in white rice paste on walls of red mud or cow dung.",
      "A favourite design is the tarpa dance, with people holding hands in a big spiral. Artist Jivya Soma Mashe made it famous worldwide."
    ] },
  { id: "pattachitra", name: "Pattachitra", kind: "Art & Craft", state: "Odisha", icon: "🎨", wiki: "Pattachitra",
    facts: [
      "‘Patta’ means cloth and ‘chitra’ means picture: a painting on specially prepared cloth from Odisha.",
      "It often shows stories of Lord Jagannath of Puri, with bold outlines and fine borders.",
      "Raghurajpur, a village near Puri, is a heritage crafts village where almost every family paints."
    ] },
  { id: "kalamkari", name: "Kalamkari", kind: "Art & Craft", state: "Andhra Pradesh", icon: "🖌️", wiki: "Kalamkari",
    facts: [
      "‘Kalam’ means pen and ‘kari’ means work: drawing on cotton cloth with a bamboo pen.",
      "Only natural dyes from plants, roots and minerals are used.",
      "There are two styles: hand-drawn Srikalahasti, and block-printed Machilipatnam."
    ] },
  { id: "gond-art", name: "Gond art", kind: "Art & Craft", state: "Madhya Pradesh", icon: "🎨", wiki: "Gond art", image: "Gond Painting.JPG",
    facts: [
      "Made by the Gond people of Madhya Pradesh, one of India's largest tribal communities.",
      "Animals, birds and trees are filled with tiny dots, dashes and lines that seem to move.",
      "Artist Jangarh Singh Shyam made Gond painting famous in India and abroad."
    ] },
  { id: "phad", name: "Phad painting", kind: "Art & Craft", state: "Rajasthan", icon: "📜", wiki: "Phad painting", image: "Pabuji ka phad 01.JPG",
    facts: [
      "Long cloth scrolls from Rajasthan that tell the stories of folk heroes like Pabuji and Devnarayan.",
      "Priest-singers called bhopas unroll the phad at night and sing its story by lamplight.",
      "A phad can be many metres long, a whole story told like a comic strip!"
    ] },
  { id: "tanjore-painting", name: "Tanjore painting", kind: "Art & Craft", state: "Tamil Nadu", icon: "🖼️", wiki: "Thanjavur painting",
    facts: [
      "From Thanjavur in Tamil Nadu, known for rich colours, real gold foil and glittering stones.",
      "It is painted on a wooden board, and parts of it are raised to make it look 3-D.",
      "It flourished under the Maratha kings of Thanjavur in the 1700s and has a GI tag."
    ] },
  { id: "kalighat-painting", name: "Kalighat painting", kind: "Art & Craft", state: "West Bengal", icon: "🎨", wiki: "Kalighat painting",
    facts: [
      "Started in the 1800s near the Kalighat Kali temple in Kolkata.",
      "Painters called patuas sold these quick, bold paintings on paper as souvenirs to pilgrims.",
      "Besides gods and goddesses, they poked fun at the society of the time, a bit like cartoons."
    ] },
  { id: "cheriyal-scrolls", name: "Cheriyal scroll painting", kind: "Art & Craft", state: "Telangana", icon: "📜", wiki: "Cheriyal scroll painting",
    facts: [
      "Comes from Cheriyal, a village in the Siddipet district of Telangana.",
      "Long scrolls are painted panel by panel and used by storytellers who sing the tales aloud.",
      "A bright red background is a sign of this style. It has a GI tag."
    ] },
  { id: "chikankari", name: "Chikankari embroidery", kind: "Art & Craft", state: "Uttar Pradesh", icon: "🧵", wiki: "Chikan (embroidery)",
    facts: [
      "Delicate white-on-white embroidery from Lucknow, done on fine cotton cloth.",
      "There are more than 30 kinds of stitches, and a single piece can take weeks to finish.",
      "Legend says Empress Nur Jahan brought this art to the Mughal court. It has a GI tag."
    ] },
  { id: "phulkari", name: "Phulkari embroidery", kind: "Art & Craft", state: "Punjab", icon: "🧵", wiki: "Phulkari",
    facts: [
      "‘Phulkari’ means flower work: bright silk thread embroidered on cotton cloth from Punjab.",
      "The stitches are made from the back of the cloth, counting threads, so the pattern comes out perfect.",
      "Mothers and grandmothers made phulkaris for their daughters' weddings. A fully covered one is called a bagh (garden)."
    ] },
  { id: "pashmina", name: "Pashmina shawls", kind: "Art & Craft", state: "Jammu and Kashmir", icon: "🧣", wiki: "Pashmina",
    facts: [
      "Made from the super-soft wool of the Changthangi goat, which lives high in the cold mountains of Ladakh.",
      "The wool is spun and woven by hand in Kashmir to make light but very warm shawls.",
      "Pashmina fibres are about six times finer than a human hair. Kashmir Pashmina has a GI tag."
    ] },
  { id: "muga-silk", name: "Muga silk", kind: "Art & Craft", state: "Assam", icon: "🧵", wiki: "Muga silk",
    facts: [
      "A natural golden silk found only in Assam. It is not dyed; the golden colour is natural.",
      "It comes from silkworms that feed on the leaves of the som and soalu trees.",
      "Its shine gets brighter with every wash, and it can last for generations. It has a GI tag."
    ] },

  // ---- Festivals ----
  { id: "durga-puja", name: "Durga Puja", kind: "Festival", state: "West Bengal", icon: "🪔", wiki: "Durga Puja",
    facts: [
      "Celebrates Goddess Durga's victory over the demon Mahishasura, the win of good over evil.",
      "Kolkata builds thousands of pandals (decorated tents), and clay idols are made by artists in Kumartuli.",
      "In 2021, UNESCO added Durga Puja in Kolkata to its list of Intangible Cultural Heritage."
    ] },
  { id: "pongal", name: "Pongal", kind: "Festival", state: "Tamil Nadu", icon: "🍚", wiki: "Pongal (festival)",
    facts: [
      "A four-day harvest festival of Tamil Nadu in January, giving thanks to the Sun god.",
      "‘Pongal’ means boiling over: rice is cooked with milk and jaggery until it overflows the pot, a sign of plenty.",
      "On Mattu Pongal, cows and bulls are washed, decorated and honoured for their help on the farm."
    ] },
  { id: "baisakhi", name: "Baisakhi", kind: "Festival", state: "Punjab", icon: "🌾", wiki: "Vaisakhi",
    facts: [
      "Celebrated on 13 or 14 April, when farmers in Punjab harvest their wheat.",
      "On Baisakhi in 1699, Guru Gobind Singh founded the Khalsa at Anandpur Sahib.",
      "People celebrate with Bhangra and Giddha dances, fairs and visits to gurdwaras."
    ] },
  { id: "onam", name: "Onam", kind: "Festival", state: "Kerala", icon: "🌼", wiki: "Onam",
    facts: [
      "Kerala's biggest festival, celebrated in August or September at harvest time.",
      "It welcomes the legendary King Mahabali, who is believed to visit his people every year.",
      "Families make flower carpets called pookalam and enjoy the Onasadya, a feast of many dishes on a banana leaf."
    ] },
  { id: "bohag-bihu", name: "Bohag Bihu", kind: "Festival", state: "Assam", icon: "🌾", wiki: "Rongali Bihu",
    facts: [
      "Also called Rongali Bihu, it is the Assamese New Year, celebrated in mid-April.",
      "On the first day, called Goru Bihu, cattle are bathed and honoured.",
      "People enjoy pitha (rice cakes), and Bihu songs and dances are performed everywhere."
    ] },
  { id: "hornbill-festival", name: "Hornbill Festival", kind: "Festival", state: "Nagaland", icon: "🪶", wiki: "Hornbill Festival", image: "Hornbill Festival Nagaland 01.jpg",
    facts: [
      "Held every year from 1 to 10 December at Kisama Heritage Village, near Kohima in Nagaland.",
      "It is named after the hornbill bird, which appears in many Naga folk tales and dresses.",
      "Started in 2000, it brings together the tribes of Nagaland with their dances, songs, food and crafts."
    ] },
  { id: "hemis-festival", name: "Hemis Festival", kind: "Festival", state: "Ladakh", icon: "🎭", wiki: "Hemis Monastery",
    facts: [
      "Held at Hemis Monastery in Ladakh, one of the biggest Buddhist monasteries in the region.",
      "It celebrates the birth anniversary of Guru Padmasambhava, who spread Buddhism in the Himalayas.",
      "Monks perform masked dances called Cham. Every 12 years a giant painted cloth (thangka) is shown."
    ] },
  { id: "ganesh-chaturthi", name: "Ganesh Chaturthi", kind: "Festival", state: "Maharashtra", icon: "🐘", wiki: "Ganesh Chaturthi",
    facts: [
      "A ten-day festival celebrating the birth of Lord Ganesha, in August or September.",
      "In 1893, Lokmanya Tilak turned it into a big public festival to bring people together during the freedom struggle.",
      "Ganesha's favourite sweet, the modak, is made in every home. On the last day the idols are immersed in water."
    ] },
  { id: "chhath-puja", name: "Chhath Puja", kind: "Festival", state: "Bihar", icon: "🌅", wiki: "Chhath",
    facts: [
      "A festival of Bihar that worships Surya, the Sun god, and Chhathi Maiya.",
      "Devotees fast, often without even water, and stand in rivers to offer prayers to the setting and rising sun.",
      "It lasts four days, a few days after Diwali. Thekua, a sweet snack, is a special offering."
    ] },
  { id: "rann-utsav", name: "Rann Utsav", kind: "Festival", state: "Gujarat", icon: "🏜️", wiki: "Rann Utsav", image: "Rann utsav 01.jpg",
    facts: [
      "Held on the Great Rann of Kutch in Gujarat, a huge white desert made of salt.",
      "Visitors stay in a tent city and watch the salt desert shine under the full moon.",
      "It shows off the crafts, music and food of Kutch, such as embroidery and mirror work."
    ] },
  { id: "pushkar-fair", name: "Pushkar Camel Fair", kind: "Festival", state: "Rajasthan", icon: "🐪", wiki: "Pushkar Fair",
    facts: [
      "Held in Pushkar, Rajasthan, in October or November, ending on the full moon of Kartik.",
      "Thousands of camels, horses and cattle are traded. It is one of the world's largest camel fairs.",
      "There are camel races and fun contests, and pilgrims bathe in the holy Pushkar Lake."
    ] },
  { id: "bathukamma", name: "Bathukamma", kind: "Festival", state: "Telangana", icon: "🌸", wiki: "Bathukamma",
    facts: [
      "A colourful flower festival of Telangana, celebrated for nine days by women.",
      "Seasonal flowers like tangedu and gunugu are stacked in tall, cone-shaped piles.",
      "Women sing and dance in circles around the flower stacks and then float them on a lake. It is Telangana's state festival."
    ] },
  { id: "wangala", name: "Wangala", kind: "Festival", state: "Meghalaya", icon: "🥁", wiki: "Wangala",
    facts: [
      "A harvest thanksgiving festival of the Garo people of Meghalaya.",
      "It honours Saljong, the Sun god, for a good harvest.",
      "It is also called the 100 Drums Festival, because of the many big drums played as dancers move in rows."
    ] },
  { id: "sangai-festival", name: "Sangai Festival", kind: "Festival", state: "Manipur", icon: "🦌", wiki: "Sangai Festival",
    facts: [
      "Manipur's biggest tourism festival, held every November.",
      "It is named after the sangai, a rare dancing deer and the state animal of Manipur.",
      "The sangai lives only in Keibul Lamjao, the world's only floating national park, on Loktak Lake."
    ] },
  { id: "mysuru-dasara", name: "Mysuru Dasara", kind: "Festival", state: "Karnataka", icon: "🐘", wiki: "Mysore Dasara",
    facts: [
      "Karnataka's state festival, celebrated for ten days during Navaratri for over 400 years.",
      "Mysuru Palace glows with nearly one lakh light bulbs every evening.",
      "On the last day, the Jamboo Savari procession has a decorated elephant carrying the idol of Goddess Chamundeshwari in a golden howdah."
    ] },
  { id: "rath-yatra", name: "Rath Yatra", kind: "Festival", state: "Odisha", icon: "🛕", wiki: "Ratha Yatra (Puri)",
    facts: [
      "Lord Jagannath, his brother Balabhadra and sister Subhadra ride through Puri on three giant wooden chariots.",
      "New chariots are built every year, and huge crowds pull them with ropes to the Gundicha Temple.",
      "The English word ‘juggernaut’ comes from Jagannath and his mighty chariot."
    ] }
];
