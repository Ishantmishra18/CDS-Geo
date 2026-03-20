


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

export const natural = [
  // LAKES (High priority)
  { 
    keyword: "Lake Superior", 
    country: "United States", 
    type: "lake",
    description: "The largest freshwater lake in the world by surface area; famous for vast iron ore (ferrous) deposits in its surrounding ranges." 
  },
  { 
    keyword: "Lake Baikal", 
    country: "Russia", 
    type: "lake",
    description: "The deepest and oldest freshwater lake in the world, formed within a continental rift valley." 
  },
  { 
    keyword: "Lake Victoria", 
    country: "Tanzania", 
    type: "lake",
    description: "Africa's largest lake and the primary reservoir of the River Nile; shared by Uganda, Kenya, and Tanzania." 
  },
  { 
    keyword: "Caspian Sea", 
    country: "Kazakhstan", 
    type: "lake",
    description: "The world's largest inland body of water; classified as both a lake and a full-fledged sea due to its size and salinity." 
  },
  { 
    keyword: "Lake Titicaca", 
    country: "Bolivia", 
    type: "lake",
    description: "The highest navigable lake in the world, located in the Andes Mountains." 
  },

  // DESERTS & GRASSLANDS
  { 
    keyword: "Atacama Desert", 
    country: "Chile", 
    type: "desert",
    description: "The driest non-polar place on Earth; famous for being the world's largest natural supply of Sodium Nitrate." 
  },
  { 
    keyword: "Rub' al Khali", 
    country: "Saudi Arabia", 
    type: "desert",
    description: "Known as the 'Empty Quarter', it is the largest contiguous sand desert in the world." 
  },
 

  // MOUNTAINS & VOLCANOES
  { 
    keyword: "Mount Etna", 
    country: "Italy", 
    type: "volcano",
    description: "One of the world's most active stratovolcanoes, located on the east coast of Sicily." 
  },
  { 
    keyword: "Mount Aconcagua", 
    country: "Argentina", 
    type: "mountain",
    description: "The highest point in both the Western and Southern Hemispheres, part of the Andes Range." 
  },
  { 
    keyword: "Mount Kilimanjaro", 
    country: "Tanzania", 
    type: "mountain",
    description: "A dormant volcano and the highest free-standing mountain in the world." 
  },
  { 
    keyword: "Grand Canyon", 
    country: "United States", 
    type: "canyon",
    description: "A steep-sided canyon carved by the Colorado River; a classic example of the erosional power of water." 
  },
  { 
    keyword: "Great Barrier Reef", 
    country: "Australia", 
    type: "reef",
    description: "The world's largest coral reef system, composed of over 2,900 individual reefs." 
  },
  { 
    keyword: "Ural Mountains", 
    country: "Russia", 
    type: "mountain",
    description: "The primary boundary between Europe and Asia; exceptionally rich in minerals like iron and coal." 
  },
  {
    keyword: "Mount Fuji",
    country: "Japan",
    type: "volcano",
    description: "An active stratovolcano and the highest peak in Japan."
  },
  {
    keyword: "Krakatoa",
    country: "Indonesia",
    type: "volcano",
    description: "Famous for its massive eruption in 1883 causing global climatic effects."
  },
  { 
    keyword: "Drakensberg", 
    country: "South Africa", 
    type: "mountain",
    description: "The highest mountain range in Southern Africa, forming the Great Escarpment." 
  },
  { 
    keyword: "The Alps", 
    country: "Switzerland", 
    type: "mountain",
    description: "The highest and most extensive mountain range system in Europe, formed by the African and Eurasian plates." 
  },
  { 
    keyword: "Mount Stromboli", 
    country: "Italy", 
    type: "volcano",
    description: "Known as the 'Lighthouse of the Mediterranean' due to its near-continuous activity since ancient times." 
  },
  { 
    keyword: "Guallatiri", 
    country: "Chile", 
    type: "volcano",
    description: "One of the highest active volcanoes in the world, located in the Andes near the Bolivia border." 
  },
  { 
    keyword: "Mount Cotopaxi", 
    country: "Ecuador", 
    type: "volcano",
    description: "A famous high-altitude active stratovolcano in the Andes; known for its nearly symmetrical cone." 
  },
  { 
    keyword: "Mount Vesuvius", 
    country: "Italy", 
    type: "volcano",
    description: "The only active volcano on the European mainland; historic for the 79 AD eruption." 
  },
  { 
    keyword: "Barren Island", 
    country: "India", 
    type: "volcano",
    description: "The only active volcano in South Asia, located in the Andaman and Nicobar Islands chain." 
  },
  { 
    keyword: "Mauna Loa", 
    country: "United States", 
    type: "volcano",
    description: "The largest subaerial volcano in the world, characterized by its massive shield shape." 
  },
  { 
    keyword: "Mount Merapi", 
    country: "Indonesia", 
    type: "volcano",
    description: "Part of the Ring of Fire; it is considered the most active volcano in Indonesia." 
  },
  { 
    keyword: "Mount Erebus", 
    country: "Antarctica", 
    type: "volcano",
    description: "The southernmost active volcano on Earth, famous for its persistent convecting lava lake." 
  },
  { 
    keyword: "Ojos del Salado", 
    country: "Argentina", 
    type: "volcano",
    description: "The highest volcano on Earth (6,893m) and the second-highest mountain in the Western Hemisphere." 
  },
  { 
    keyword: "Mount Pinatubo", 
    country: "Philippines", 
    type: "volcano",
    description: "Site of a massive 1991 eruption that caused a temporary drop in global temperatures." 
  },
  { 
    keyword: "Narcondam Island", 
    country: "India", 
    type: "volcano",
    description: "A dormant volcanic island in the Andaman Sea; often asked in Indian geography sections." 
  },


  //grasslands
   { 
    keyword: "Pampas", 
    country: "Argentina", 
    type: "grassland",
    description: "Vast fertile lowlands famous for wheat cultivation and cattle rearing; a key temperate grassland." 
  },
  { 
    keyword: "Steppes", 
    country: "Russia", 
    type: "grassland",
    description: "Vast temperate grasslands stretching from Ukraine to eastern Russia; known as the 'Granary of the World'." 
  },
  { 
    keyword: "Velds", 
    country: "South Africa", 
    type: "grassland",
    description: "High-altitude temperate grasslands in Southern Africa; famous for maize cultivation and cattle ranching." 
  },
  { 
    keyword: "Downs", 
    country: "Australia", 
    type: "grassland",
    description: "Temperate grasslands in the Murray-Darling basin, crucial for sheep rearing and wheat." 
  },
  { 
    keyword: "Prairies", 
    country: "Canada", 
    type: "grassland",
    description: "North American temperate grasslands; famous for extensive mechanized wheat farming." 
  },

  // WATER BODIES & STRAITS (Strategic for CDS)
  { 
    keyword: "Dead Sea", 
    country: "Jordan", 
    type: "lake",
    description: "An endorheic salt lake and the lowest land point on Earth; famous for its high salinity and buoyancy." 
  },
  { 
    keyword: "Lake Tanganyika", 
    country: "Democratic Republic of the Congo", 
    type: "lake",
    description: "The longest freshwater lake in the world and part of the Great Rift Valley system." 
  },{ 
    keyword: "Angel Falls", 
    country: "Venezuela", 
    type: "waterfall",
    description: "The world's highest uninterrupted waterfall, with a height of 979 meters." 
  },

  // DESERTS & PHENOMENA
  { 
    keyword: "Gobi Desert", 
    country: "Mongolia", 
    type: "desert",
    description: "A cold winter desert created by the rain shadow effect of the Himalayas." 
  },
  { 
    keyword: "Kalahari Desert", 
    country: "Botswana", 
    type: "desert",
    description: "A large semi-arid sandy savannah in Southern Africa; home to the Orange River." 
  },
  { 
    keyword: "Suez Canal", 
    country: "Egypt", 
    type: "canal",
    description: "An artificial sea-level waterway connecting the Mediterranean Sea to the Red Sea." 
  }
];

export const currencies = [
  { 
    keyword: "Rupee", 
    country: "India", 
    type: "INR", 
    description: "The symbol ₹ was designed by D. Udaya Kumar, blending Devanagari 'र' and Roman 'R'." 
  },
  { 
    keyword: "Yen", 
    country: "Japan", 
    type: "JPY", 
    description: "A major global reserve currency; the name literally translates to 'round object'." 
  },
  { 
    keyword: "Pound Sterling", 
    country: "United Kingdom", 
    type: "GBP", 
    description: "The world's oldest currency still in use; issued by the Bank of England." 
  },
  { 
    keyword: "Swiss Franc", 
    country: "Switzerland", 
    type: "CHF", 
    description: "Often called a 'Safe Haven' currency because of the country's economic stability." 
  },
  { 
    keyword: "Ruble", 
    country: "Russia", 
    type: "RUB", 
    description: "The first currency in Europe to be decimalized (1 ruble = 100 kopeks) in 1704." 
  },
  { 
    keyword: "Rand", 
    country: "South Africa", 
    type: "ZAR", 
    description: "Named after the 'Witwatersrand' ridge, where most of the country's gold was found." 
  },
  { 
    keyword: "Real", 
    country: "Brazil", 
    type: "BRL", 
    description: "Introduced as part of a plan to stop hyperinflation in the mid-1990s." 
  },
  { 
    keyword: "Won", 
    country: "South Korea", 
    type: "KRW", 
    description: "The currency's name is derived from the same origin as the Yuan and the Yen." 
  },
  { 
    keyword: "Lira", 
    country: "Turkey", 
    type: "TRY", 
    description: "Re-denominated in 2005; one 'New Lira' was worth one million 'Old Lira'." 
  },
  { 
    keyword: "Baht", 
    country: "Thailand", 
    type: "THB", 
    description: "Originally a unit of weight for gold/silver; it is one of the strongest currencies in SE Asia." 
  },
  { 
    keyword: "Dirham", 
    country: "United Arab Emirates", 
    type: "AED", 
    description: "Its value is pegged to the US Dollar ($1 = approx. 3.67 AED)." 
  },
  { 
    keyword: "Shekel", 
    country: "Israel", 
    type: "ILS", 
    description: "The name refers to an ancient unit of weight used for trading grain and silver." 
  }
]
 