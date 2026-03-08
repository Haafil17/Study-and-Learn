export interface Analogy {
  id: string;
  chapterId: string;
  concept: string;
  analogyType: "car" | "airplane";
  title: string;
  explanation: string;
  conceptSide: string;
  analogySide: string;
}

export const analogies: Analogy[] = [
  // ===== BIOLOGY =====
  {
    id: "a1", chapterId: "bio-5", concept: "Heart", analogyType: "car",
    title: "The Heart is Like a Car Engine",
    explanation: "Just as a car engine pumps fuel to all parts of the car to keep it running, your heart pumps blood to every part of your body to keep you alive and active.",
    conceptSide: "The heart has 4 chambers that pump oxygenated and deoxygenated blood through separate circuits (double circulation).",
    analogySide: "A car engine has cylinders that pump fuel and air in a cycle — intake, compression, power, exhaust — to keep the car moving."
  },
  {
    id: "a2", chapterId: "bio-5", concept: "Blood Vessels", analogyType: "car",
    title: "Blood Vessels are Like Fuel Pipes",
    explanation: "Arteries, veins, and capillaries carry blood just like pipes carry fuel, coolant, and oil through a car's systems.",
    conceptSide: "Arteries carry oxygen-rich blood away from the heart; veins bring oxygen-poor blood back.",
    analogySide: "Fuel lines carry petrol from the tank to the engine; return lines bring unused fuel back."
  },
  {
    id: "a3", chapterId: "bio-6", concept: "Nervous System", analogyType: "car",
    title: "The Nervous System is Like Car Wiring",
    explanation: "Your nervous system sends electrical signals through nerves, just like a car's wiring system sends electrical signals to headlights, dashboard, and engine.",
    conceptSide: "The brain sends signals through the spinal cord and nerves to muscles and organs.",
    analogySide: "The car's ECU (computer) sends signals through wires to control ignition, lights, and sensors."
  },
  {
    id: "a4", chapterId: "phy-3", concept: "Force and Pressure", analogyType: "airplane",
    title: "Lift Force — How Airplanes Fly",
    explanation: "An airplane flies because of lift — air moves faster over the curved top of the wing, creating lower pressure above and higher pressure below, pushing the plane up.",
    conceptSide: "Pressure = Force / Area. A larger area with the same force means less pressure.",
    analogySide: "Airplane wings are shaped (airfoil) so air travels faster on top, creating low pressure — this difference in pressure creates lift."
  },
  {
    id: "a5", chapterId: "phy-4", concept: "Energy Conversion", analogyType: "car",
    title: "Energy Conversion in a Car",
    explanation: "A car converts chemical energy (petrol) → heat energy (combustion) → kinetic energy (movement). Energy is never lost, just transformed!",
    conceptSide: "The Law of Conservation of Energy states energy cannot be created or destroyed, only transformed from one form to another.",
    analogySide: "In a car: Chemical energy in fuel → thermal energy from burning → mechanical energy turning wheels → kinetic energy of motion."
  },
  {
    id: "a6", chapterId: "bio-1", concept: "Xylem Transport", analogyType: "car",
    title: "Xylem is Like a Car's Fuel Pump System",
    explanation: "Just as a car's fuel pump draws fuel from the tank and delivers it to the engine, xylem draws water from the roots and delivers it to the leaves using transpiration pull.",
    conceptSide: "Xylem transports water and minerals upward from roots to leaves through dead, hollow vessels using root pressure and transpiration pull.",
    analogySide: "A car's fuel pump creates suction to draw fuel from the tank through fuel lines to the engine — similar to transpiration pull in plants."
  },
  {
    id: "a7", chapterId: "phy-7", concept: "Sound Waves", analogyType: "airplane",
    title: "Breaking the Sound Barrier",
    explanation: "When a jet flies faster than sound (Mach 1), it creates a sonic boom — a loud shockwave caused by compressed sound waves piling up.",
    conceptSide: "Sound travels as longitudinal waves through a medium. Its speed in air is about 343 m/s.",
    analogySide: "A fighter jet pushing past 1,235 km/h outruns its own sound waves, creating a cone-shaped shockwave heard as a 'boom' on the ground."
  },
  {
    id: "a8", chapterId: "phy-9", concept: "Electric Circuits", analogyType: "car",
    title: "Electric Circuits are Like a Car's Fuel System",
    explanation: "Just as fuel flows from the tank through pipes to the engine and back, electric current flows from the battery through wires to devices and back.",
    conceptSide: "A circuit needs a source (battery), conductor (wire), load (bulb), and switch to work.",
    analogySide: "A car's fuel system needs a tank (source), fuel lines (conductor), engine (load), and ignition key (switch)."
  },
  {
    id: "a9", chapterId: "bio-4", concept: "Hormones", analogyType: "car",
    title: "Hormones are Like Dashboard Warning Lights",
    explanation: "Hormones are chemical messengers that signal the body to take action — just like dashboard warning lights signal the driver about fuel, temperature, or engine issues.",
    conceptSide: "Endocrine glands release hormones into the bloodstream. They travel to target organs and trigger specific responses (e.g., insulin lowers blood sugar).",
    analogySide: "A car's sensors detect changes (low fuel, high temperature) and display warning lights on the dashboard — the driver then takes appropriate action."
  },
  {
    id: "a10", chapterId: "phy-6", concept: "Heat Transfer", analogyType: "car",
    title: "Car Radiator — Heat Transfer in Action",
    explanation: "A car radiator uses all three types of heat transfer to keep the engine cool — conduction, convection, and radiation.",
    conceptSide: "Heat transfers via conduction (direct contact), convection (fluid movement), and radiation (electromagnetic waves).",
    analogySide: "Engine heat conducts to coolant fluid, which convects through the radiator, and the radiator radiates heat into the surrounding air."
  },

  // ===== CHEMISTRY =====
  {
    id: "a11", chapterId: "chem-4", concept: "Atomic Structure", analogyType: "airplane",
    title: "An Atom is Like a Solar System",
    explanation: "Just as planets orbit the Sun, electrons orbit the nucleus of an atom in fixed energy levels (shells).",
    conceptSide: "The nucleus (protons + neutrons) sits at the centre. Electrons revolve around in K, L, M, N shells with increasing energy.",
    analogySide: "The Sun is at the centre. Mercury is closest (least energy), then Venus, Earth, Mars — each in a bigger orbit."
  },
  {
    id: "a12", chapterId: "chem-6", concept: "Chemical Reactions", analogyType: "car",
    title: "Chemical Reactions are Like Car Manufacturing",
    explanation: "In a combination reaction, parts come together to make a car. In decomposition, you disassemble a car into parts. Displacement is swapping one part for another.",
    conceptSide: "Combination: A + B → AB. Decomposition: AB → A + B. Displacement: A + BC → AC + B.",
    analogySide: "Building a car = combination. Scrapping a car for parts = decomposition. Replacing an old tyre with a new one = displacement."
  },
  {
    id: "a13", chapterId: "chem-9", concept: "Carbon Allotropes", analogyType: "car",
    title: "Diamond vs Graphite — Same Material, Different Build",
    explanation: "Imagine two cars made from the same steel but designed differently — one is a tank (diamond: strong, rigid) and the other is a skateboard (graphite: smooth, slippery).",
    conceptSide: "Diamond: each carbon bonds to 4 others (3D network, hardest). Graphite: each carbon bonds to 3 others (layers that slide, soft).",
    analogySide: "Same steel can make a heavily welded tank (rigid, strong) or smooth sliding rails (slippery, flexible). Structure determines properties."
  },
  {
    id: "a14", chapterId: "chem-3", concept: "Separation Techniques", analogyType: "car",
    title: "Separation is Like Sorting Car Parts",
    explanation: "Separating mixtures is like sorting mixed car parts — you use different techniques depending on what you're separating.",
    conceptSide: "Filtration (solid from liquid), Evaporation (dissolved solid), Distillation (different boiling points), Chromatography (colours).",
    analogySide: "At a junkyard: magnets separate iron parts (magnetic separation), size sorting separates nuts from bolts (filtration), melting separates metals by melting point (distillation)."
  },

  // ===== MATHEMATICS =====
  {
    id: "a15", chapterId: "math-8", concept: "Compound Interest", analogyType: "car",
    title: "Compound Interest is Like a Snowball Rolling Downhill",
    explanation: "Compound interest grows your money by earning interest on interest — like a snowball that picks up more snow as it rolls, getting bigger and faster.",
    conceptSide: "CI = P(1 + R/100)ⁿ − P. Each year, interest is added to the principal, so next year's interest is calculated on a larger amount.",
    analogySide: "A small snowball rolling down a hill picks up more snow → gets bigger → picks up even more snow per rotation → exponential growth."
  },
  {
    id: "a16", chapterId: "math-6", concept: "Sets and Venn Diagrams", analogyType: "airplane",
    title: "Sets are Like Airport Terminal Groups",
    explanation: "At an airport, passengers belong to different groups — domestic, international, connecting. Some belong to multiple groups (intersection), and the terminal holds everyone (universal set).",
    conceptSide: "Union (A∪B) = all elements. Intersection (A∩B) = common elements. Complement (A') = elements not in A.",
    analogySide: "All passengers = Universal set. Domestic ∪ International = everyone. Passengers with connecting flights = intersection of two flight sets."
  },
  {
    id: "a17", chapterId: "math-11", concept: "Algebraic Identities", analogyType: "car",
    title: "Identities are Like Shortcut Routes",
    explanation: "Algebraic identities like (a+b)² = a² + 2ab + b² are shortcut formulas — just like knowing a shortcut route saves time driving instead of going the long way.",
    conceptSide: "(a+b)² = a² + 2ab + b². Instead of multiplying (a+b)(a+b) step by step, use the identity directly.",
    analogySide: "A GPS shortcut saves 20 minutes compared to the main road. Similarly, identities save time compared to long multiplication."
  },
  {
    id: "a18", chapterId: "math-19", concept: "Volume and Surface Area", analogyType: "car",
    title: "Volume is Fuel Tank, Surface Area is Paint",
    explanation: "Volume tells you how much a container holds (like a fuel tank's capacity). Surface area tells you how much paint you need to cover the outside.",
    conceptSide: "Volume of cuboid = l × b × h (space inside). Surface area = 2(lb + bh + lh) (outer covering).",
    analogySide: "A car's fuel tank capacity = volume. The amount of paint needed for the car body = surface area."
  },
  {
    id: "a19", chapterId: "math-20", concept: "Probability", analogyType: "car",
    title: "Probability is Like Traffic Predictions",
    explanation: "Probability predicts how likely something is to happen — like predicting the chance of hitting a green light at an intersection.",
    conceptSide: "P(event) = favourable outcomes / total outcomes. P = 0 (impossible) to 1 (certain).",
    analogySide: "If a traffic light is green for 30 seconds out of every 90 seconds, the probability of arriving at green = 30/90 = 1/3."
  },

  // ===== GEOGRAPHY =====
  {
    id: "a20", chapterId: "geo-3", concept: "Water Cycle", analogyType: "airplane",
    title: "The Water Cycle is Like an Airplane's Journey",
    explanation: "Water evaporates (takes off), forms clouds (cruises at altitude), precipitates as rain (lands), and flows back to the ocean (taxis to gate) — a continuous cycle!",
    conceptSide: "Evaporation → Condensation → Precipitation → Collection → Evaporation again. Solar energy drives this cycle.",
    analogySide: "Takeoff (evaporation) → Cruising altitude (clouds/condensation) → Landing (precipitation/rain) → Taxiing to gate (rivers flowing to ocean)."
  },
  {
    id: "a21", chapterId: "geo-8", concept: "Physical Divisions of India", analogyType: "airplane",
    title: "India's Geography is Like Airplane Layers",
    explanation: "From an airplane window, India looks like layers — snow-capped mountains in the north, flat green plains, and the plateau in the south.",
    conceptSide: "India has 6 physical divisions: Northern Mountains, Northern Plains, Peninsular Plateau, Coastal Plains, Islands, and the Thar Desert.",
    analogySide: "Flying south: first you see the white Himalayas, then the green Indo-Gangetic plains, then the brown Deccan plateau, then the blue coastline."
  },
  {
    id: "a22", chapterId: "geo-4", concept: "Soil Layers", analogyType: "car",
    title: "Soil Profile is Like a Layer Cake",
    explanation: "The soil profile has layers (horizons) stacked on top of each other — like a layered cake where each layer has different ingredients.",
    conceptSide: "O horizon (organic matter) → A horizon (topsoil, fertile) → B horizon (subsoil) → C horizon (weathered rock) → R (bedrock).",
    analogySide: "Frosting on top (organic layer) → Sponge cake (topsoil) → Dense filling (subsoil) → Cracker base (rock) → Plate (bedrock)."
  },

  // ===== HISTORY =====
  {
    id: "a23", chapterId: "hist-8", concept: "Freedom Movement", analogyType: "car",
    title: "India's Freedom Struggle was Like Starting a Car",
    explanation: "The freedom movement progressed in stages — petitions (turning the key), boycotts (engine starting), mass movements (car moving), and independence (reaching the destination).",
    conceptSide: "Moderates (petitions) → Extremists (boycott/swadeshi) → Gandhi (non-cooperation, civil disobedience) → Quit India → Independence (1947).",
    analogySide: "Turning the key (Moderates) → Engine revving (Extremists) → Car in gear (Gandhi's movements) → Full speed (Quit India) → Destination reached (Independence)."
  },
  {
    id: "a24", chapterId: "hist-9", concept: "Parliament", analogyType: "airplane",
    title: "Parliament is Like an Airplane's Cockpit",
    explanation: "Just as an airplane needs both pilot (Lok Sabha) and co-pilot (Rajya Sabha) working together to fly safely, both houses of Parliament work together to govern India.",
    conceptSide: "Lok Sabha (directly elected, more powerful, money bills) and Rajya Sabha (indirectly elected, reviews legislation) together form Parliament.",
    analogySide: "The pilot (captain) makes key decisions and controls the aircraft. The co-pilot assists, reviews, and provides checks. Both are essential for safe flight."
  },

  // ===== COMPUTER STUDIES =====
  {
    id: "a25", chapterId: "comp-1", concept: "Binary System", analogyType: "car",
    title: "Binary is Like a Light Switch",
    explanation: "A computer uses binary (0 and 1) — like a light switch that's either OFF (0) or ON (1). Every image, sound, and text is stored as millions of tiny on/off switches!",
    conceptSide: "Binary (base 2): only 0 and 1. A bit is one binary digit. 8 bits = 1 byte = 256 possible values.",
    analogySide: "One switch: ON or OFF (1 bit). Two switches: 4 combinations (00, 01, 10, 11). Eight switches: 256 combinations — enough to represent any letter, number, or symbol."
  },
  {
    id: "a26", chapterId: "comp-4", concept: "Conditional Statements", analogyType: "car",
    title: "If-Else is Like a Traffic Signal",
    explanation: "Conditional statements (if-elif-else) work like traffic signals — different conditions lead to different actions.",
    conceptSide: "if (condition): do X. elif (another condition): do Y. else: do Z. Only one block executes based on which condition is true.",
    analogySide: "Green light (if) → Go. Yellow light (elif) → Slow down. Red light (else) → Stop. Only one action based on the current signal."
  },
  {
    id: "a27", chapterId: "comp-5", concept: "Loops", analogyType: "car",
    title: "Loops are Like a Car on a Race Track",
    explanation: "A loop repeats code — like a car going around a race track for a fixed number of laps (for loop) or until it runs out of fuel (while loop).",
    conceptSide: "for loop: repeats a set number of times. while loop: repeats as long as a condition is true. break exits the loop.",
    analogySide: "for: 'Complete 10 laps' (fixed). while: 'Keep racing until fuel runs out' (condition-based). break: 'Pit stop — exit the track early.'"
  },
  {
    id: "a28", chapterId: "comp-7", concept: "Cyber Safety", analogyType: "car",
    title: "Cyber Safety is Like Car Safety",
    explanation: "Just as you wear seatbelts, lock doors, and follow traffic rules while driving, you need passwords, antivirus, and safe browsing habits online.",
    conceptSide: "Use strong passwords (seatbelt), antivirus (airbag), 2FA (double lock), avoid suspicious links (avoid bad roads), update software (car maintenance).",
    analogySide: "Seatbelt = password. Door lock = 2FA. Airbag = antivirus. Following traffic rules = safe browsing. Regular service = software updates."
  },
];

export function getAnalogiesForChapter(chapterId: string) {
  return analogies.filter((a) => a.chapterId === chapterId);
}
