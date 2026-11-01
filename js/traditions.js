// India's Living Traditions — used by the Traditions page, the map and the games.
// Each tradition is linked to the state it is best known from.
// kind: "Dance", "Art & Craft" or "Festival".
// "wiki" is the English Wikipedia page title (used to fetch the photo);
// "image" (optional) picks a specific Wikimedia Commons file instead.
// After adding one, run:  python tools/fetch_images.py

const TRADITIONS = [
  // ---- Dance & music ----
  { id: "bharatanatyam", name: "Bharatanatyam", kind: "Dance", state: "Tamil Nadu", icon: "💃", wiki: "Bharatanatyam" },
  { id: "kathakali", name: "Kathakali", kind: "Dance", state: "Kerala", icon: "🎭", wiki: "Kathakali" },
  { id: "kuchipudi", name: "Kuchipudi", kind: "Dance", state: "Andhra Pradesh", icon: "💃", wiki: "Kuchipudi" },
  { id: "odissi", name: "Odissi", kind: "Dance", state: "Odisha", icon: "💃", wiki: "Odissi" },
  { id: "manipuri-dance", name: "Manipuri dance", kind: "Dance", state: "Manipur", icon: "💃", wiki: "Manipuri dance", image: "The Enchanting Manipuri Raas Leela Dance in Traditional Attire.jpg" },
  { id: "sattriya", name: "Sattriya", kind: "Dance", state: "Assam", icon: "💃", wiki: "Sattriya" },
  { id: "bihu-dance", name: "Bihu dance", kind: "Dance", state: "Assam", icon: "🥁", wiki: "Bihu dance" },
  { id: "kathak", name: "Kathak", kind: "Dance", state: "Uttar Pradesh", icon: "💃", wiki: "Kathak" },
  { id: "garba", name: "Garba", kind: "Dance", state: "Gujarat", icon: "🪘", wiki: "Garba (dance)" },
  { id: "bhangra", name: "Bhangra", kind: "Dance", state: "Punjab", icon: "🥁", wiki: "Bhangra (dance)" },
  { id: "ghoomar", name: "Ghoomar", kind: "Dance", state: "Rajasthan", icon: "💃", wiki: "Ghoomar" },
  { id: "lavani", name: "Lavani", kind: "Dance", state: "Maharashtra", icon: "💃", wiki: "Lavani" },
  { id: "yakshagana", name: "Yakshagana", kind: "Dance", state: "Karnataka", icon: "🎭", wiki: "Yakshagana" },
  { id: "cheraw", name: "Cheraw (bamboo dance)", kind: "Dance", state: "Mizoram", icon: "🎋", wiki: "Cheraw dance" },

  // ---- Art & craft ----
  { id: "madhubani", name: "Madhubani painting", kind: "Art & Craft", state: "Bihar", icon: "🎨", wiki: "Madhubani art" },
  { id: "warli", name: "Warli painting", kind: "Art & Craft", state: "Maharashtra", icon: "🎨", wiki: "Warli painting" },
  { id: "pattachitra", name: "Pattachitra", kind: "Art & Craft", state: "Odisha", icon: "🎨", wiki: "Pattachitra" },
  { id: "kalamkari", name: "Kalamkari", kind: "Art & Craft", state: "Andhra Pradesh", icon: "🖌️", wiki: "Kalamkari" },
  { id: "gond-art", name: "Gond art", kind: "Art & Craft", state: "Madhya Pradesh", icon: "🎨", wiki: "Gond art", image: "Gond Painting.JPG" },
  { id: "phad", name: "Phad painting", kind: "Art & Craft", state: "Rajasthan", icon: "📜", wiki: "Phad painting", image: "Pabuji ka phad 01.JPG" },
  { id: "tanjore-painting", name: "Tanjore painting", kind: "Art & Craft", state: "Tamil Nadu", icon: "🖼️", wiki: "Thanjavur painting" },
  { id: "kalighat-painting", name: "Kalighat painting", kind: "Art & Craft", state: "West Bengal", icon: "🎨", wiki: "Kalighat painting" },
  { id: "cheriyal-scrolls", name: "Cheriyal scroll painting", kind: "Art & Craft", state: "Telangana", icon: "📜", wiki: "Cheriyal scroll painting" },
  { id: "chikankari", name: "Chikankari embroidery", kind: "Art & Craft", state: "Uttar Pradesh", icon: "🧵", wiki: "Chikan (embroidery)" },
  { id: "phulkari", name: "Phulkari embroidery", kind: "Art & Craft", state: "Punjab", icon: "🧵", wiki: "Phulkari" },
  { id: "pashmina", name: "Pashmina shawls", kind: "Art & Craft", state: "Jammu and Kashmir", icon: "🧣", wiki: "Pashmina" },
  { id: "muga-silk", name: "Muga silk", kind: "Art & Craft", state: "Assam", icon: "🧵", wiki: "Muga silk" },

  // ---- Festivals ----
  { id: "durga-puja", name: "Durga Puja", kind: "Festival", state: "West Bengal", icon: "🪔", wiki: "Durga Puja" },
  { id: "pongal", name: "Pongal", kind: "Festival", state: "Tamil Nadu", icon: "🍚", wiki: "Pongal (festival)" },
  { id: "baisakhi", name: "Baisakhi", kind: "Festival", state: "Punjab", icon: "🌾", wiki: "Vaisakhi" },
  { id: "onam", name: "Onam", kind: "Festival", state: "Kerala", icon: "🌼", wiki: "Onam" },
  { id: "bohag-bihu", name: "Bohag Bihu", kind: "Festival", state: "Assam", icon: "🌾", wiki: "Rongali Bihu" },
  { id: "hornbill-festival", name: "Hornbill Festival", kind: "Festival", state: "Nagaland", icon: "🪶", wiki: "Hornbill Festival", image: "Hornbill Festival Nagaland 01.jpg" },
  { id: "hemis-festival", name: "Hemis Festival", kind: "Festival", state: "Ladakh", icon: "🎭", wiki: "Hemis Monastery" },
  { id: "ganesh-chaturthi", name: "Ganesh Chaturthi", kind: "Festival", state: "Maharashtra", icon: "🐘", wiki: "Ganesh Chaturthi" },
  { id: "chhath-puja", name: "Chhath Puja", kind: "Festival", state: "Bihar", icon: "🌅", wiki: "Chhath" },
  { id: "rann-utsav", name: "Rann Utsav", kind: "Festival", state: "Gujarat", icon: "🏜️", wiki: "Rann Utsav", image: "Rann utsav 01.jpg" },
  { id: "pushkar-fair", name: "Pushkar Camel Fair", kind: "Festival", state: "Rajasthan", icon: "🐪", wiki: "Pushkar Fair" },
  { id: "bathukamma", name: "Bathukamma", kind: "Festival", state: "Telangana", icon: "🌸", wiki: "Bathukamma" },
  { id: "wangala", name: "Wangala", kind: "Festival", state: "Meghalaya", icon: "🥁", wiki: "Wangala" },
  { id: "sangai-festival", name: "Sangai Festival", kind: "Festival", state: "Manipur", icon: "🦌", wiki: "Sangai Festival" },
  { id: "mysuru-dasara", name: "Mysuru Dasara", kind: "Festival", state: "Karnataka", icon: "🐘", wiki: "Mysore Dasara" },
  { id: "rath-yatra", name: "Rath Yatra", kind: "Festival", state: "Odisha", icon: "🛕", wiki: "Ratha Yatra (Puri)" }
];
