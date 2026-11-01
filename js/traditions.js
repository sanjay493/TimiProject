// India's Living Traditions — used by the "Match the Tradition" and "Spin & Answer" games.
// Each tradition is linked to the state it is best known from.
// kind: "Dance", "Art & Craft" or "Festival".

const TRADITIONS = [
  // ---- Dance & music ----
  { name: "Bharatanatyam", kind: "Dance", state: "Tamil Nadu", icon: "💃" },
  { name: "Kathakali", kind: "Dance", state: "Kerala", icon: "🎭" },
  { name: "Kuchipudi", kind: "Dance", state: "Andhra Pradesh", icon: "💃" },
  { name: "Odissi", kind: "Dance", state: "Odisha", icon: "💃" },
  { name: "Manipuri dance", kind: "Dance", state: "Manipur", icon: "💃" },
  { name: "Sattriya", kind: "Dance", state: "Assam", icon: "💃" },
  { name: "Kathak", kind: "Dance", state: "Uttar Pradesh", icon: "💃" },
  { name: "Garba", kind: "Dance", state: "Gujarat", icon: "🪘" },
  { name: "Bhangra", kind: "Dance", state: "Punjab", icon: "🥁" },
  { name: "Ghoomar", kind: "Dance", state: "Rajasthan", icon: "💃" },
  { name: "Lavani", kind: "Dance", state: "Maharashtra", icon: "💃" },
  { name: "Yakshagana", kind: "Dance", state: "Karnataka", icon: "🎭" },
  { name: "Cheraw (bamboo dance)", kind: "Dance", state: "Mizoram", icon: "🎋" },

  // ---- Art & craft ----
  { name: "Madhubani painting", kind: "Art & Craft", state: "Bihar", icon: "🎨" },
  { name: "Warli painting", kind: "Art & Craft", state: "Maharashtra", icon: "🎨" },
  { name: "Pattachitra", kind: "Art & Craft", state: "Odisha", icon: "🎨" },
  { name: "Kalamkari", kind: "Art & Craft", state: "Andhra Pradesh", icon: "🖌️" },
  { name: "Gond art", kind: "Art & Craft", state: "Madhya Pradesh", icon: "🎨" },
  { name: "Phad painting", kind: "Art & Craft", state: "Rajasthan", icon: "📜" },
  { name: "Tanjore painting", kind: "Art & Craft", state: "Tamil Nadu", icon: "🖼️" },
  { name: "Kalighat painting", kind: "Art & Craft", state: "West Bengal", icon: "🎨" },
  { name: "Cheriyal scroll painting", kind: "Art & Craft", state: "Telangana", icon: "📜" },
  { name: "Chikankari embroidery", kind: "Art & Craft", state: "Uttar Pradesh", icon: "🧵" },
  { name: "Phulkari embroidery", kind: "Art & Craft", state: "Punjab", icon: "🧵" },
  { name: "Pashmina shawls", kind: "Art & Craft", state: "Jammu and Kashmir", icon: "🧣" },
  { name: "Muga silk", kind: "Art & Craft", state: "Assam", icon: "🧵" },

  // ---- Festivals ----
  { name: "Durga Puja", kind: "Festival", state: "West Bengal", icon: "🪔" },
  { name: "Pongal", kind: "Festival", state: "Tamil Nadu", icon: "🍚" },
  { name: "Baisakhi", kind: "Festival", state: "Punjab", icon: "🌾" },
  { name: "Onam", kind: "Festival", state: "Kerala", icon: "🌼" },
  { name: "Bohag Bihu", kind: "Festival", state: "Assam", icon: "🌾" },
  { name: "Hornbill Festival", kind: "Festival", state: "Nagaland", icon: "🪶" },
  { name: "Hemis Festival", kind: "Festival", state: "Ladakh", icon: "🎭" },
  { name: "Ganesh Chaturthi", kind: "Festival", state: "Maharashtra", icon: "🐘" },
  { name: "Chhath Puja", kind: "Festival", state: "Bihar", icon: "🌅" },
  { name: "Rann Utsav", kind: "Festival", state: "Gujarat", icon: "🏜️" },
  { name: "Pushkar Camel Fair", kind: "Festival", state: "Rajasthan", icon: "🐪" },
  { name: "Bathukamma", kind: "Festival", state: "Telangana", icon: "🌸" },
  { name: "Wangala", kind: "Festival", state: "Meghalaya", icon: "🥁" },
  { name: "Sangai Festival", kind: "Festival", state: "Manipur", icon: "🦌" },
  { name: "Mysuru Dasara", kind: "Festival", state: "Karnataka", icon: "🐘" },
  { name: "Rath Yatra", kind: "Festival", state: "Odisha", icon: "🛕" }
];
