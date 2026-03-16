export const straitsData = [
    { keyword: "Gibraltar", description: "Between Spain and Morocco" ,markers:{x: 600, y: 330 , l:30, b:5, r:90} },
]
export const mountainsData = [
    { keyword: "Himalayas", description: "Between India and China" ,markers:{x: 30, y: 80 , l:60, b:40, r:10} },
    { keyword: "Andes", description: "Along the western coast of South America" ,markers:{x: 30, y: 20 , l:70, b:50, r:15} },
    { keyword: "Rockies", description: "In western North America" ,markers:{x: 40, y: 30 , l:80, b:60, r:25} },
]
export const riversData = [
    { keyword: "Nile", description: "Flows through northeastern Africa" ,markers:{x: 30, y: 30 , l:50, b:30, r:0} },
]
export const desertsData = [
    { keyword: "Sahara", description: "Covers much of North Africa" ,markers:{x: 30, y: 40 , l:100, b:60, r:0} },
]


export const capitalsData = [
    // NORTH & SOUTH AMERICA
    { keyword: "Washington D.C.", country: "United States" },
    { keyword: "Ottawa", country: "Canada" },
    { keyword: "Mexico City", country: "Mexico" },
    { keyword: "Brasília", country: "Brazil" },
    { keyword: "Buenos Aires", country: "Argentina" },
    { keyword: "Santiago", country: "Chile" },
    { keyword: "Lima", country: "Peru" },
    { keyword: "Bogotá", country: "Colombia" },
    { keyword: "Caracas", country: "Venezuela" },
    { keyword: "Quito", country: "Ecuador" },
    { keyword: "La Paz", country: "Bolivia" },
    { keyword: "Asunción", country: "Paraguay" },
    { keyword: "Montevideo", country: "Uruguay" },

    // EUROPE
    { keyword: "London", country: "United Kingdom" },
    { keyword: "Paris", country: "France" },
    { keyword: "Berlin", country: "Germany" },
    { keyword: "Rome", country: "Italy" },
    { keyword: "Madrid", country: "Spain" },
    { keyword: "Lisbon", country: "Portugal" },
    { keyword: "Athens", country: "Greece" },
    { keyword: "Amsterdam", country: "Netherlands" },
    { keyword: "Brussels", country: "Belgium" },
    { keyword: "Stockholm", country: "Sweden" },
    { keyword: "Oslo", country: "Norway" },
    { keyword: "Helsinki", country: "Finland" },
    { keyword: "Warsaw", country: "Poland" },
    { keyword: "Kyiv", country: "Ukraine" },
    { keyword: "Vienna", country: "Austria" },
    { keyword: "Budapest", country: "Hungary" },
    { keyword: "Prague", country: "Czech Republic" },
    { keyword: "Bucharest", country: "Romania" },

    // ASIA
    { keyword: "Tokyo", country: "Japan" },
    { keyword: "New Delhi", country: "India" },
    { keyword: "Beijing", country: "China" },
    { keyword: "Seoul", country: "South Korea" },
    { keyword: "Moscow", country: "Russia" },
    { keyword: "Jakarta", country: "Indonesia" },
    { keyword: "Bangkok", country: "Thailand" },
    { keyword: "Hanoi", country: "Vietnam" },
    { keyword: "Manila", country: "Philippines" },
    { keyword: "Tehran", country: "Iran" },
    { keyword: "Baghdad", country: "Iraq" },
    { keyword: "Riyadh", country: "Saudi Arabia" },
    { keyword: "Ankara", country: "Turkey" },
    { keyword: "Islamabad", country: "Pakistan" },
    { keyword: "Dhaka", country: "Bangladesh" },
    { keyword: "Naypyidaw", country: "Myanmar" },
    { keyword: "Astana", country: "Kazakhstan" },
    { keyword: "Kabul", country: "Afghanistan" },
    { keyword: "Ulaanbaatar", country: "Mongolia" },

    // AFRICA
    { keyword: "Cairo", country: "Egypt" },
    { keyword: "Pretoria", country: "South Africa" },
    { keyword: "Abuja", country: "Nigeria" },
    { keyword: "Nairobi", country: "Kenya" },
    { keyword: "Addis Ababa", country: "Ethiopia" },
    { keyword: "Algiers", country: "Algeria" },
    { keyword: "Rabat", country: "Morocco" },
    { keyword: "Kinshasa", country: "Democratic Republic of the Congo" },
    { keyword: "Luanda", country: "Angola" },
    { keyword: "Dar es Salaam", country: "Tanzania" },
    { keyword: "Khartoum", country: "Sudan" },
    { keyword: "Accra", country: "Ghana" },

    // OCEANIA
    { keyword: "Canberra", country: "Australia" },
    { keyword: "Wellington", country: "New Zealand" },
    { keyword: "Port Moresby", country: "Papua New Guinea" }
];



export const largestProduction = [
  // MINERALS & ENERGY (High priority for CDS)
  { 
    keyword: "Crude Oil", 
    country: "United States", 
    type: "producer", 
    question: "Which nation has recently emerged as the world's leading producer of crude oil?" 
  },
  { 
    keyword: "Crude Oil", 
    country: "Saudi Arabia", 
    type: "exporter", 
    question: "Which country remains the world's largest exporter of petroleum (crude oil)?" 
  },
  { 
    keyword: "Coal", 
    country: "China", 
    type: "importer", 
    question: "Which country is the largest global importer of coal to fuel its massive industrial base?" 
  },
  { 
    keyword: "Iron Ore", 
    country: "Australia", 
    type: "producer", 
    question: "Which country leads the world in the production of iron ore, primarily from its Pilbara region?" 
  },
  { 
    keyword: "Lithium", 
    country: "Australia", 
    type: "producer", 
    question: "Crucial for EV batteries, which country is currently the largest producer of Lithium?" 
  },
  { 
    keyword: "Copper", 
    country: "Chile", 
    type: "producer", 
    question: "In the context of non-ferrous metals, which nation is the undisputed leader in copper production?" 
  },

  // AGRICULTURE (Essential for UPSC Geography)
  { 
    keyword: "Wheat", 
    country: "Russia", 
    type: "exporter", 
    question: "Which nation is currently the world's largest exporter of wheat, significantly impacting global food security?" 
  },
  { 
    keyword: "Rice", 
    country: "India", 
    type: "exporter", 
    question: "Which country accounts for nearly 40% of global rice exports?" 
  },
  { 
    keyword: "Sugar", 
    country: "Brazil", 
    type: "producer", 
    question: "Which country is the perennial leader in the production of sugarcane and ethanol?" 
  },
  { 
    keyword: "Palm Oil", 
    country: "Indonesia", 
    type: "producer", 
    question: "Which Southeast Asian nation is the world's largest producer of Palm Oil?" 
  },
  { 
    keyword: "Coffee", 
    country: "Brazil", 
    type: "exporter", 
    question: "Often called the 'Coffee Pot of the World', which country leads in coffee exports?" 
  },
  { 
    keyword: "Milk", 
    country: "India", 
    type: "producer", 
    question: "Which country ranks first in milk production, contributing significantly to the global livestock economy?" 
  },

  // INDUSTRIAL
  { 
    keyword: "Gold", 
    country: "China", 
    type: "importer", 
    question: "Along with India, which country is one of the world's two largest importers and consumers of Gold?" 
  },
  { 
    keyword: "Natural Gas", 
    country: "China", 
    type: "importer", 
    question: "As it transitions to cleaner energy, which country has become the largest importer of Natural Gas (including LNG)?" 
  }
];
 