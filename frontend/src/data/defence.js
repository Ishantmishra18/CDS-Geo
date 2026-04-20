export const AirCrafts = [
  {
    name: "Rafale",
    country: "France", // Flag will be accessed via `/world/flags/France.webp`
    type: "Omnirole",
    generation: "4.5 Gen",
    engine: "2 × Snecma M88-2",
    combatRadius: "1,850 km",
    radar: "RBE2 AESA Radar",
    weapons: "Meteor (BVR), SCALP, MICA, Hammer",
    description: "Highly versatile 'Omnirole' fighter capable of carrying out all combat missions: air superiority, strike, and nuclear deterrence.",
    operations: "Used in Op. Serval (Mali), Op. Chammal (Iraq/Syria), and Balakot standby support.",
    significance: "Provides 'Deep Strike' capability with SCALP missiles and unmatched BVR (Beyond Visual Range) dominance."
  },
  {
    name: "Su-30MKI",
    country: "Russia", // Manufactured under license by HAL in India
    type: "Air Superiority Fighter",
    generation: "4.5 Gen",
    engine: "2 × AL-31FP (Thrust Vectoring)",
    combatRadius: "1,500 km",
    radar: "Bars PESA Radar",
    weapons: "BrahMos-A, Astra, R-77, Kh-59",
    description: "The backbone of the IAF. A twin-seater, multirole air superiority fighter capable of carrying out complex missions in all weather conditions.",
    operations: "Key participant in Op. Safed Sagar (Kargil - older variants) and Balakot air strikes (escort role).",
    significance: "Crucial for 'Deep Penetration' and the primary platform for the air-launched BrahMos supersonic cruise missile."
  },
  {
    name: "Tejas MK1A",
    country: "India",
    type: "Light Combat Aircraft (LCA)",
    generation: "4+ Gen",
    engine: "1 × General Electric F404-GE-IN20",
    combatRadius: "500 km",
    radar: "EL/M-2052 AESA Radar",
    weapons: "Astra, Python-5, Derby, R-73",
    description: "An indigenous, single-engine, delta-wing, multirole light fighter. Designed by ADA and manufactured by HAL.",
    operations: "Inducted into No. 45 Squadron (Flying Daggers) and No. 18 Squadron (Flying Bullets).",
    significance: "Represents India's 'Atmanirbhar Bharat' initiative in aerospace. Designed to replace the aging MiG-21 fleet."
  },
  {
    name: "Mirage 2000",
    country: "France",
    type: "Multirole Fighter",
    generation: "4th Gen (Upgraded)",
    engine: "1 × SNECMA M53-P2",
    combatRadius: "1,550 km",
    radar: "RDY-2 Radar",
    weapons: "MICA, Spice 2000, Magic II",
    description: "A highly agile delta-wing fighter. Known for its reliability and precision bombing capabilities.",
    operations: "The hero of the Kargil War (1999) and the lead aircraft in the 2019 Balakot Air Strikes.",
    significance: "IAF's go-to aircraft for precision strikes and high-altitude warfare."
  },
  {
    name: "MiG-21 Bison",
    country: "Russia",
    type: "Interceptor / Multi-role",
    generation: "3rd Gen (Upgraded)",
    engine: "1 × Tumansky R-25",
    combatRadius: "370 km",
    radar: "Kopyo Radar",
    weapons: "R-73, R-77, 23mm GSh-23 Cannon",
    description: "The 'Legend of the Skies'. A supersonic interceptor that has served for over 6 decades. The 'Bison' is the most advanced version with upgraded avionics.",
    operations: "Famous for the 1971 War and the 2019 Aerial Skirmish (Wing Commander Abhinandan Varthaman).",
    significance: "Scheduled for phased retirement by 2025. It represents the grit of the IAF flying aging tech with high proficiency."
  },
  {
    name: "MiG-29UPG",
    country: "Russia",
    type: "Air Superiority Fighter",
    generation: "4th Gen (Upgraded)",
    engine: "2 × Klimov RD-33",
    combatRadius: "700 km",
    radar: "Zhuk-ME Radar",
    weapons: "R-77, R-27, Kh-35 Anti-ship",
    description: "Known as 'Baaz' (Falcon) in the IAF. A highly maneuverable twin-engine fighter designed for air dominance.",
    operations: "Played a major role in providing air cover during the 1999 Kargil War.",
    significance: "Recently upgraded to UPG standards with a glass cockpit and mid-air refuelling capability."
  },
  {
    name: "C-17 Globemaster III",
    country: "USA",
    type: "Strategic Airlift",
    generation: "Military Transport",
    engine: "4 × Pratt & Whitney F117-PW-100",
    combatRadius: "4,482 km (Payload dependent)",
    radar: "AN/APS-133 Weather Radar",
    weapons: "None (Defensive Flares/Chaff)",
    description: "A large military transport aircraft capable of carrying heavy equipment and troops directly to small, primitive airfields.",
    operations: "Op. Devi Shakti (Afghanistan), Op. Kaveri (Sudan), and Op. Dost (Turkey/Syria earthquake relief).",
    significance: "Provides India with rapid global reach. Critical for high-altitude logistics in the Ladakh and North-East sectors."
  },
  {
    name: "C-130J Super Hercules",
    country: "USA",
    type: "Tactical Airlift",
    engine: "4 × Rolls-Royce AE 2100D3",
    description: "A workhorse for Special Operations, capable of landing on short, unpaved runways.",
    operations: "Famously landed at Daulat Beg Oldie (DBO)—the world's highest airstrip.",
    significance: "The primary aircraft for Garud Commandos and rapid deployment."
  },
  {
    name: "IL-76 Gajraj",
    country: "Russia",
    type: "Heavy Lift Transport",
    description: "A strategic heavy-lift aircraft used for massive troop and cargo movements.",
    significance: "Provided the bulk of heavy lifting for decades before the C-17 arrived."
  },
  {
    name: "Netra (AEW&C)",
    country: "India",
    type: "Airborne Early Warning",
    platform: "Embraer ERJ 145",
    description: "The 'Eye in the Sky'. An indigenous system that detects enemy aircraft and directs friendly jets.",
    operations: "Played a critical role in directing IAF jets during the Balakot air skirmish.",
    significance: "Proves India's capability in complex electronic warfare systems."
  },
  {
    name: "Phalcon AWACS",
    country: "Israel / Russia",
    type: "Strategic AEW&C",
    platform: "IL-76",
    description: "A 360-degree radar system with a massive range of 400+ km.",
    significance: "IAF's most powerful sensor, capable of monitoring deep into enemy territory."
  },
  {
    name: "IL-78 Midas",
    country: "Russia",
    type: "Mid-Air Refueller",
    description: "Acting as a 'Flying Petrol Pump', it allows fighter jets to stay in the air for much longer.",
    significance: "A strategic force multiplier that extends the strike range of the IAF."
  },
  {
    name: "ALH Dhruv",
    country: "India",
    type: "Utility Helicopter",
    generation: "Indigenous (HAL)",
    engine: "2 × Shakti Engines",
    ceiling: "6,100 m",
    weapons: "Rudram variant carries rockets & anti-tank missiles",
    description: "A multi-role, multi-mission new generation helicopter in the 5.5-ton weight class.",
    operations: "Used extensively in Siachen Glacier and for 'Sarang' Aerobatic Display Team.",
    significance: "The backbone of indigenous vertical lift, exported to several countries."
  },
  {
    name: "LCH Prachand",
    country: "India",
    type: "Light Combat Helicopter",
    generation: "Dedicated Attack",
    engine: "2 × Shakti Engines",
    ceiling: "6,500 m (Highest in the world)",
    weapons: "70mm Rockets, Mistral Air-to-Air, 20mm Cannon",
    description: "The only attack helicopter in the world that can land and take off at altitudes of 5,000 meters with a significant load.",
    operations: "Recently inducted into the IAF and Army for high-altitude combat.",
    significance: "A game-changer for the LAC (Line of Actual Control) security."
  },
  {
    name: "CH-47 Chinook",
    country: "USA",
    type: "Heavy Lift",
    generation: "Multi-mission",
    engine: "2 × Lycoming T55-GA-714A",
    payload: "11,000 kg",
    description: "A tandem-rotor heavy-lift helicopter with exceptional lift capabilities in thin mountain air.",
    operations: "Vital for carrying heavy artillery (M777 Howitzers) to border areas.",
    significance: "Changed the logistics speed in the Eastern Sector (Arunachal Pradesh)."
  },
  {
    name: "Cheetah / Chetak",
    country: "France / India",
    type: "Light Utility",
    generation: "Legacy System",
    engine: "Artouste III B turboshaft",
    description: "Small, agile helicopters used for CASEVAC (Casualty Evacuation) and search & rescue.",
    operations: "The lifelines of the Siachen Glacier for decades.",
    significance: "Being replaced by the indigenous LUH (Light Utility Helicopter)."
  },
  {
    name: "Apache AH-64E",
    country: "USA",
    type: "Attack Helicopter",
    generation: "Advanced Attack",
    engine: "2 × T700-GE-701D",
    combatRadius: "480 km",
    radar: "Longbow Fire Control Radar",
    weapons: "Hellfire Missiles, Hydra Rockets, 30mm Chain Gun",
    description: "The world's most advanced multi-role combat helicopter. Known for its 'fire and forget' capabilities and stealthy characteristics.",
    operations: "Deployed at forward bases along the LAC during recent tensions.",
    significance: "A major force multiplier for the Indian Army and IAF in tank-hunting and anti-armor operations in diverse terrains."
  }
  // Add more...
];



export const ranking = {
keyword : "army" , ranks : [ "Field Marshal", "General", "Lieutenant General", "Major General", "Brigadier", "Colonel", "Lieutenant Colonel", "Major", "Captain", "Lieutenant", "Second Lieutenant" ],
keyword : "navy" , ranks : [ "Admiral of the Fleet", "Admiral", "Vice Admiral", "Rear Admiral", "Commodore", "Captain", "Commander", "Lieutenant Commander", "Lieutenant", "Sub Lieutenant" ],
keyword : "airforce" , ranks : [ "Marshal of the Air Force", "Air Chief Marshal", "Air Marshal", "Air Vice Marshal", "Air Commodore", "Group Captain", "Wing Commander", "Squadron Leader", "Flight Lieutenant", "Flying Officer" ]
}


  
