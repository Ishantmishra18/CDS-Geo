export const vitamins = [
  // Vitamin A
  {
    type: 'bioname',
    keyword: 'Retinol',
    ans: 'A'
  },
  {
    type: 'dis',
    keyword: 'Night Blindness',
    des: 'Inability to see in low light and drying of the conjunctiva',
    ans: 'A'
  },

  // Vitamin B Complex (Detailed for CDS)
  {
    type: 'bioname',
    keyword: 'Thiamine',
    ans: 'B1'
  },
  {
    type: 'dis',
    keyword: 'Beriberi',
    des: 'Degeneration of the nervous system and heart failure symptoms',
    ans: 'B1'
  },
  {
    type: 'dis',
    keyword: 'Wernicke-Korsakoff Syndrome',
    des: 'Neurological disorder characterized by confusion and loss of muscle coordination',
    ans: 'B1'
  },
  {
    type: 'bioname',
    keyword: 'Riboflavin',
    ans: 'B2'
  },
  {
    type: 'dis',
    keyword: 'Ariboflavinosis',
    des: 'Cracks at the corners of the mouth and inflammation of the tongue',
    ans: 'B2'
  },
  {
    type: 'bioname',
    keyword: 'Niacin (Nicotinic Acid)',
    ans: 'B3'
  },
  {
    type: 'dis',
    keyword: 'Pellagra',
    des: 'Condition identified by the 3 Ds: Dermatitis, Diarrhea, and Dementia',
    ans: 'B3'
  },
  {
    type: 'bioname',
    keyword: 'Pantothenic Acid',
    ans: 'B5'
  },
  {
    type: 'dis',
    keyword: 'Burning Feet Syndrome',
    des: 'Nerve damage causing severe sensation of heat and pain in the extremities',
    ans: 'B5'
  },
  {
    type: 'bioname',
    keyword: 'Pyridoxine',
    ans: 'B6'
  },
  {
    type: 'dis',
    keyword: 'microcytic Anemia',
    des: 'Small, pale red blood cells causing weakness and fatigue',
    ans: 'B6'
  },
  {
    type: 'bioname',
    keyword: 'Biotin',
    ans: 'B7'
  },
  {
    type: 'dis',
    keyword: 'Dermatitis and Hair Loss',
    des: 'Scaly skin rash and thinning of hair or loss of hair color',
    ans: 'B7'
  },
  {
    type: 'bioname',
    keyword: 'Folic Acid',
    ans: 'B9'
  },
  {
    type: 'dis',
    keyword: 'Megaloblastic Anemia',
    des: 'Production of abnormally large, immature red blood cells in the bone marrow',
    ans: 'B9'
  },
  {
    type: 'dis',
    keyword: 'Neural Tube Defects',
    des: 'Birth defects of the brain or spinal cord during early embryonic development',
    ans: 'B9'
  },
  {
    type: 'bioname',
    keyword: 'Cyanocobalamin',
    ans: 'B12'
  },
  {
    type: 'dis',
    keyword: 'Pernicious Anemia',
    des: 'Failure of the body to produce enough healthy red blood cells due to intrinsic factor deficiency',
    ans: 'B12'
  },

  // Vitamin C
  {
    type: 'bioname',
    keyword: 'Ascorbic Acid',
    ans: 'C'
  },
  {
    type: 'dis',
    keyword: 'Scurvy',
    des: 'Swollen, bleeding gums and opening of previously healed wounds',
    ans: 'C'
  },

  // Vitamin D
  {
    type: 'bioname',
    keyword: 'Calciferol',
    ans: 'D'
  },
  {
    type: 'dis',
    keyword: 'Rickets',
    des: 'Delayed growth and bow-legged appearance in children',
    ans: 'D'
  },
  {
    type: 'dis',
    keyword: 'Osteomalacia',
    des: 'Softening of the bones in adults, leading to frequent fractures',
    ans: 'D'
  },

  // Vitamin E
  {
    type: 'bioname',
    keyword: 'Tocopherol',
    ans: 'E'
  },
  {
    type: 'dis',
    keyword: 'Hemolytic Anemia',
    des: 'Rupturing of red blood cells and oxidative damage to cell membranes',
    ans: 'E'
  },

  // Vitamin K
  {
    type: 'bioname',
    keyword: 'Phylloquinone',
    ans: 'K'
  },
  {
    type: 'dis',
    keyword: 'Hemorrhagic Disease',
    des: 'Uncontrolled bleeding due to failure of the blood to clot properly',
    ans: 'K'
  }
];


export const diseases = [
  {
    keyword: "Tuberculosis",
    des: "Primarily affects the lungs, characterized by persistent cough, chest pain, and significant weight loss.",
    stamp: ["airborne"],
    ans: "bacteria"
  },
  {
    keyword: "Cholera",
    des: "Causes severe watery diarrhea and dehydration, typically spread through contaminated water or food sources.",
    stamp: ["waterborne", "foodborne"],
    ans: "bacteria"
  },
  {
    keyword: "Typhoid",
    des: "Marked by high fever, headache, and abdominal pain; common in areas with poor sanitation and contaminated handling.",
    stamp: ["waterborne", "foodborne"],
    ans: "bacteria"
  },
  {
    keyword: "Malaria",
    des: "Characterized by periodic chills, high fever, and sweating; transmitted through the bite of an infected female Anopheles mosquito.",
    stamp: ["vector-borne"],
    ans: "protozoa"
  },
  {
    keyword: "Dengue",
    des: "Often called 'break-bone fever' due to severe joint and muscle pain, accompanied by high fever and rashes; spread by Aedes mosquitoes.",
    stamp: ["vector-borne"],
    ans: "virus"
  },
  {
    keyword: "Kala-azar",
    des: "Leads to irregular fever, weight loss, and enlargement of the spleen and liver; transmitted by the bite of infected sandflies.",
    stamp: ["vector-borne"],
    ans: "protozoa"
  },
  {
    keyword: "Influenza",
    des: "A respiratory ailment causing sudden fever, sore throat, and extreme fatigue; spreads through droplets from coughing or sneezing.",
    stamp: ["airborne", "droplet"],
    ans: "virus"
  },
  {
    keyword: "Pneumonia",
    des: "Causes inflammation in the air sacs of the lungs, which may fill with fluid or pus, leading to cough and difficulty breathing.",
    stamp: ["airborne", "droplet"],
    ans: "bacteria"
  },
  {
    keyword: "Amoebiasis",
    des: "An intestinal infection that causes cramping and diarrhea, often contracted via the fecal-oral route or contaminated water.",
    stamp: ["waterborne", "fecal-oral"],
    ans: "protozoa"
  },
  {
    keyword: "AIDS",
    des: "Gradually weakens the immune system, making the body vulnerable to various secondary infections; transmitted through body fluids.",
    stamp: ["body-fluids"],
    ans: "virus"
  },
  {
    keyword: "Tetanus",
    des: "Commonly known as 'lockjaw,' it causes painful muscle contractions, particularly in the jaw and neck; enters the body through deep cuts or wounds.",
    stamp: ["wound-contact"],
    ans: "bacteria"
  },
  {
    keyword: "Ringworm",
    des: "Presents as circular, itchy, red scaly patches on the skin; highly contagious through skin-to-skin contact or shared items.",
    stamp: ["direct-contact"],
    ans: "fungi"
  },
  {
    keyword: "Japanese Encephalitis",
    des: "Causes inflammation of the brain, leading to headache, high fever, and potentially coma; transmitted by Culex mosquitoes.",
    stamp: ["vector-borne"],
    ans: "virus"
  },
  {
    keyword: "Smallpox",
    des: "Characterized by high fever and a distinctive, progressive skin rash that leaves permanent pitted scars; notable for being the first human disease eradicated globally through vaccination.",
    stamp: ["airborne", "direct-contact"],
    ans: "virus"
  },
  {
    keyword: "Rabies",
    des: "An acute infection of the central nervous system that causes inflammation of the brain; symptoms often include 'hydrophobia' (fear of water) and confusion, typically following an animal bite.",
    stamp: ["animal-bite"],
    ans: "virus"
  },
  {
    keyword: "Measles",
    des: "A highly contagious respiratory infection that causes a total-body skin rash and flu-like symptoms; spreads rapidly through droplets in the air.",
    stamp: ["airborne"],
    ans: "virus"
  },
  {
    keyword: "Ebola",
    des: "A severe illness causing high fever and internal bleeding (hemorrhagic fever), often leading to organ failure; transmitted through direct contact with infected blood or bodily fluids.",
    stamp: ["body-fluids"],
    ans: "virus"
  },
  {
    keyword: "Polio",
    des: "Attacks the nervous system and can cause irreversible paralysis within hours, primarily affecting children; often spreads through contaminated water or food.",
    stamp: ["fecal-oral", "waterborne"],
    ans: "virus"
  },
  {
    keyword: "Athlete's Foot",
    des: "Causes scaling, redness, and intense itching, typically between the toes; thrives in warm, damp environments like public showers and locker rooms.",
    stamp: ["direct-contact"],
    ans: "fungi"
  },
  {
    keyword: "Whooping Cough",
    des: "Also known as Pertussis, it involves severe, uncontrollable hacking coughs followed by a high-pitched intake of breath that sounds like a 'whoop'.",
    stamp: ["airborne", "droplet"],
    ans: "bacteria"
  }
];