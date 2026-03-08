import type { SolvedExample, ExamTip, FillBlank, MatchPair } from "./chapterContent";

interface ChapterExtras {
  solvedExamples: SolvedExample[];
  examTips: ExamTip[];
  markingScheme?: string[];
  fillInBlanks: FillBlank[];
  matchPairs: MatchPair[];
}

export const chapterExtras: Record<string, ChapterExtras> = {
  "bio-2": {
    solvedExamples: [
      { question: "Differentiate between self-pollination and cross-pollination. (4 marks)", solution: "Self-pollination:\n1. Transfer of pollen within the same flower or same plant\n2. Does not require external agents\n3. Produces genetically identical offspring\n4. Seeds are less viable\n\nCross-pollination:\n1. Transfer of pollen between flowers of different plants of same species\n2. Requires agents (insects, wind, water, birds)\n3. Produces genetically diverse offspring\n4. Seeds are more viable and healthier", marks: 4 },
      { question: "Explain tissue culture and its advantages. (4 marks)", solution: "Tissue culture is a technique of growing plants from a small piece of plant tissue (explant) in a nutrient medium under sterile conditions.\n\nSteps:\n1. A small piece of tissue is taken from the plant\n2. Placed in sterile nutrient medium with plant hormones\n3. Grows into callus → plantlets → transferred to soil\n\nAdvantages:\n• Mass production of disease-free plants\n• Production in any season\n• Conservation of endangered species\n• Genetically identical plants (clones)", marks: 4 },
    ],
    examTips: [
      { category: "Diagram", tip: "Draw a labelled diagram of a flower showing all four whorls — appears almost every year." },
      { category: "Compare", tip: "Asexual vs Sexual reproduction differentiation is a common 4-mark question." },
      { category: "Application", tip: "Know real-life examples for each type of vegetative propagation (potato=tuber, onion=bulb, Bryophyllum=leaf)." },
    ],
    fillInBlanks: [
      { sentence: "The transfer of pollen from anther to stigma is called ___.", answer: "pollination", hint: "Starts with 'p'" },
      { sentence: "The cell formed by fusion of male and female gametes is called a ___.", answer: "zygote" },
      { sentence: "Growing plants from a small tissue in a nutrient medium is called ___.", answer: "tissue culture" },
      { sentence: "In Hydra, reproduction occurs by ___.", answer: "budding", hint: "A bud grows into a new organism" },
    ],
    matchPairs: [
      { left: "Binary fission", right: "Amoeba" },
      { left: "Budding", right: "Hydra" },
      { left: "Spore formation", right: "Ferns" },
      { left: "Vegetative propagation", right: "Bryophyllum" },
      { left: "Tissue culture", right: "Mass production of plants" },
    ],
  },
  "bio-3": {
    solvedExamples: [
      { question: "Construct a food chain with four trophic levels in a forest ecosystem. (3 marks)", solution: "Grass (Producer) → Deer (Primary consumer) → Tiger (Secondary consumer) → Decomposers (bacteria/fungi)\n\nTrophic levels:\n1st: Producer (autotroph)\n2nd: Primary consumer (herbivore)\n3rd: Secondary consumer (carnivore)\n4th: Tertiary consumer/Decomposer", marks: 3 },
      { question: "Explain the 10% law of energy transfer. Why do food chains rarely have more than 4-5 trophic levels? (4 marks)", solution: "The 10% law (Lindeman's law) states that only about 10% of the energy at one trophic level is transferred to the next level. The remaining 90% is lost as heat through life processes.\n\nExample: If producers have 10,000 J:\n• Primary consumers get 1,000 J\n• Secondary consumers get 100 J\n• Tertiary consumers get 10 J\n\nFood chains rarely exceed 4-5 levels because the energy available decreases so much that it cannot sustain another trophic level.", marks: 4 },
    ],
    examTips: [
      { category: "Diagram", tip: "Always show direction of energy flow with arrows in food chains — arrows point FROM prey TO predator." },
      { category: "Calculation", tip: "10% law numerical questions are common — practice calculating energy at each trophic level." },
      { category: "Compare", tip: "Know the difference between food chain and food web with clear examples." },
    ],
    fillInBlanks: [
      { sentence: "Organisms that make their own food are called ___.", answer: "producers", hint: "Also called autotrophs" },
      { sentence: "Only ___% of energy passes from one trophic level to the next.", answer: "10" },
      { sentence: "An interconnection of many food chains is called a ___.", answer: "food web" },
      { sentence: "Organisms that break down dead matter are called ___.", answer: "decomposers" },
    ],
    matchPairs: [
      { left: "Producer", right: "Green plants" },
      { left: "Primary consumer", right: "Herbivore" },
      { left: "Secondary consumer", right: "Carnivore" },
      { left: "Decomposer", right: "Bacteria and fungi" },
      { left: "Omnivore", right: "Eats plants and animals" },
    ],
  },
  "bio-4": {
    solvedExamples: [
      { question: "Name the hormone and gland involved in the following: (a) Controls metabolism (b) Fight-or-flight response (c) Regulates blood sugar (3 marks)", solution: "(a) Thyroxine — secreted by the Thyroid gland. Controls metabolic rate; needs iodine for production.\n(b) Adrenaline — secreted by the Adrenal glands (adrenal medulla). Increases heart rate, blood pressure, and sugar level during stress.\n(c) Insulin — secreted by the Pancreas (Islets of Langerhans). Lowers blood sugar by converting glucose to glycogen.", marks: 3 },
    ],
    examTips: [
      { category: "Table", tip: "Gland-Hormone-Function table questions are very common — memorize all major glands." },
      { category: "Disease", tip: "Link hormonal disorders to their causes: Goitre=iodine deficiency, Diabetes=insulin deficiency." },
    ],
    fillInBlanks: [
      { sentence: "The ___ gland is called the master gland.", answer: "pituitary" },
      { sentence: "Iodine deficiency causes enlargement of the ___ gland called goitre.", answer: "thyroid" },
      { sentence: "___ is the hormone that lowers blood sugar levels.", answer: "Insulin" },
      { sentence: "The fight-or-flight hormone is called ___.", answer: "adrenaline" },
    ],
    matchPairs: [
      { left: "Pituitary", right: "Master gland" },
      { left: "Thyroid", right: "Metabolism control" },
      { left: "Adrenal", right: "Fight or flight" },
      { left: "Pancreas", right: "Blood sugar regulation" },
      { left: "Gonads", right: "Reproductive hormones" },
    ],
  },
  "bio-5": {
    solvedExamples: [
      { question: "Describe double circulation in the human body. (5 marks)", solution: "Double circulation means blood passes through the heart twice in one complete cycle.\n\nPulmonary circulation (heart → lungs → heart):\n1. Deoxygenated blood from right ventricle → pulmonary artery → lungs\n2. CO₂ released, O₂ absorbed\n3. Oxygenated blood returns via pulmonary vein → left atrium\n\nSystemic circulation (heart → body → heart):\n1. Oxygenated blood from left ventricle → aorta → body organs\n2. O₂ and nutrients delivered, CO₂ collected\n3. Deoxygenated blood returns via vena cava → right atrium\n\nAdvantage: Efficient separation of oxygenated and deoxygenated blood ensures maximum oxygen delivery.", marks: 5 },
      { question: "Why is the left ventricle wall thicker than the right? (2 marks)", solution: "The left ventricle pumps oxygenated blood to all parts of the body through the aorta (systemic circulation), which requires more force to push blood over a longer distance. The right ventricle only pumps blood to the nearby lungs (pulmonary circulation), requiring less force. Therefore, the left ventricle has thicker muscular walls to generate higher pressure.", marks: 2 },
    ],
    examTips: [
      { category: "Diagram", tip: "Heart diagram with correct labelling of all 4 chambers and major vessels is a guaranteed question." },
      { category: "Reason", tip: "'Why is the left ventricle thicker?' — answer must mention systemic circulation and distance." },
      { category: "Compare", tip: "Arteries vs Veins differentiation: include wall thickness, valves, blood type, and direction." },
    ],
    fillInBlanks: [
      { sentence: "The human heart has ___ chambers.", answer: "four", hint: "2 atria + 2 ventricles" },
      { sentence: "The ___ is the universal blood donor group.", answer: "O" },
      { sentence: "Blood vessels that carry blood away from the heart are called ___.", answer: "arteries" },
      { sentence: "The protein in red blood cells that carries oxygen is ___.", answer: "haemoglobin" },
      { sentence: "The wall separating left and right sides of the heart is called the ___.", answer: "septum" },
    ],
    matchPairs: [
      { left: "Arteries", right: "Carry blood away from heart" },
      { left: "Veins", right: "Carry blood toward heart" },
      { left: "Capillaries", right: "Exchange of materials" },
      { left: "Plasma", right: "Liquid part of blood" },
      { left: "Platelets", right: "Blood clotting" },
    ],
  },
  "bio-6": {
    solvedExamples: [
      { question: "Describe the reflex arc with an example. (4 marks)", solution: "A reflex arc is the pathway of nerve impulses during a reflex action.\n\nPath: Stimulus → Receptor → Sensory (afferent) nerve → Spinal cord (relay centre) → Motor (efferent) nerve → Effector (muscle/gland)\n\nExample: Touching a hot object:\n1. Heat (stimulus) detected by pain receptors in skin\n2. Sensory nerve carries impulse to spinal cord\n3. Spinal cord processes and sends response\n4. Motor nerve carries impulse to hand muscles (effector)\n5. Hand is pulled away immediately\n\nThis happens without brain involvement — it's automatic and fast.", marks: 4 },
    ],
    examTips: [
      { category: "Diagram", tip: "Neuron structure diagram and reflex arc diagram are must-practice — label all parts clearly." },
      { category: "Compare", tip: "Voluntary vs involuntary actions: include control centre (brain vs spinal cord) and speed." },
    ],
    fillInBlanks: [
      { sentence: "The basic unit of the nervous system is the ___.", answer: "neuron" },
      { sentence: "The ___ controls balance and coordination.", answer: "cerebellum" },
      { sentence: "The gap between two neurons is called a ___.", answer: "synapse" },
      { sentence: "Quick, automatic responses to stimuli are called ___ actions.", answer: "reflex" },
    ],
    matchPairs: [
      { left: "Cerebrum", right: "Thinking and memory" },
      { left: "Cerebellum", right: "Balance and coordination" },
      { left: "Medulla", right: "Breathing and heartbeat" },
      { left: "Spinal cord", right: "Reflex actions" },
      { left: "Dendrites", right: "Receive nerve signals" },
    ],
  },
  "bio-7": {
    solvedExamples: [
      { question: "Differentiate between active and passive immunity. (4 marks)", solution: "Active immunity:\n1. Body produces its own antibodies\n2. Develops after infection or vaccination\n3. Takes time to develop\n4. Long-lasting protection\n\nPassive immunity:\n1. Ready-made antibodies received from another source\n2. From mother (through placenta/breast milk) or injection\n3. Immediate protection\n4. Short-lasting (temporary)", marks: 4 },
    ],
    examTips: [
      { category: "List", tip: "Know modes of transmission with examples: airborne, waterborne, vector-borne, contact." },
      { category: "Application", tip: "First aid procedures are practical questions — know burns, bleeding, fractures, snakebite." },
    ],
    fillInBlanks: [
      { sentence: "Diseases that spread from person to person are called ___ diseases.", answer: "communicable" },
      { sentence: "Malaria is spread by ___ mosquitoes.", answer: "Anopheles" },
      { sentence: "Edward Jenner developed the first ___ against smallpox.", answer: "vaccine" },
      { sentence: "The body's ability to resist infections is called ___.", answer: "immunity" },
    ],
    matchPairs: [
      { left: "Tuberculosis", right: "Bacteria" },
      { left: "Malaria", right: "Protozoa (Plasmodium)" },
      { left: "Ringworm", right: "Fungi" },
      { left: "COVID-19", right: "Virus" },
      { left: "BCG vaccine", right: "Tuberculosis prevention" },
    ],
  },
  "bio-8": {
    solvedExamples: [
      { question: "What is the Green Revolution? Discuss its advantages and disadvantages. (5 marks)", solution: "The Green Revolution was introduced in India in the 1960s by Dr. M.S. Swaminathan to increase food production using modern agricultural techniques.\n\nMethods: High-Yielding Variety (HYV) seeds, chemical fertilizers, pesticides, modern irrigation (tube wells)\n\nAdvantages:\n• Dramatically increased wheat and rice production\n• India became self-sufficient in food grains\n• Reduced food imports and famines\n\nDisadvantages:\n• Benefits limited to Punjab, Haryana, UP (regional inequality)\n• Excessive use of chemicals degraded soil quality\n• Groundwater depletion from over-irrigation\n• Loss of traditional crop varieties (reduced biodiversity)\n• Increased costs for small farmers", marks: 5 },
    ],
    examTips: [
      { category: "Application", tip: "Green Revolution questions always ask for both advantages AND disadvantages — cover both sides." },
      { category: "Compare", tip: "Organic farming vs conventional farming is a trending ICSE question." },
    ],
    fillInBlanks: [
      { sentence: "Crossing two varieties for desired traits is called ___.", answer: "hybridization" },
      { sentence: "___ is the process of heating milk to kill bacteria.", answer: "Pasteurization" },
      { sentence: "Scientific management of animal livestock is called ___.", answer: "animal husbandry" },
      { sentence: "The Green Revolution was led by Dr. ___.", answer: "M.S. Swaminathan" },
    ],
    matchPairs: [
      { left: "Drip irrigation", right: "Water-efficient method" },
      { left: "Hybridization", right: "Combining desired traits" },
      { left: "Pasteurization", right: "Killing bacteria in milk" },
      { left: "Vermicomposting", right: "Using earthworms" },
      { left: "Pisciculture", right: "Fish farming" },
    ],
  },

  // ===== CHEMISTRY =====
  "chem-1": {
    solvedExamples: [
      { question: "Compare the arrangement and movement of molecules in solids, liquids, and gases. (4 marks)", solution: "Solids:\n• Molecules closely packed in fixed positions\n• Strong intermolecular forces\n• Vibrate about fixed points\n• Fixed shape and volume\n\nLiquids:\n• Molecules less closely packed\n• Moderate intermolecular forces\n• Can slide over each other\n• Fixed volume, takes shape of container\n\nGases:\n• Molecules far apart\n• Very weak intermolecular forces\n• Move randomly at high speed\n• No fixed shape or volume", marks: 4 },
    ],
    examTips: [
      { category: "Diagram", tip: "Draw molecular arrangement diagrams for all three states — shows understanding clearly." },
      { category: "Definition", tip: "Sublimation definition must mention 'direct conversion without liquid state'." },
    ],
    fillInBlanks: [
      { sentence: "Direct conversion of solid to gas is called ___.", answer: "sublimation" },
      { sentence: "The random zigzag movement of particles in a fluid is called ___ motion.", answer: "Brownian" },
      { sentence: "At absolute zero, all molecular motion theoretically ___.", answer: "stops" },
      { sentence: "As temperature increases, kinetic energy of molecules ___.", answer: "increases" },
    ],
    matchPairs: [
      { left: "Melting", right: "Solid to liquid" },
      { left: "Boiling", right: "Liquid to gas" },
      { left: "Condensation", right: "Gas to liquid" },
      { left: "Sublimation", right: "Solid to gas directly" },
      { left: "Freezing", right: "Liquid to solid" },
    ],
  },
  "chem-2": {
    solvedExamples: [
      { question: "Classify the following as physical or chemical change and give reasons: (a) Burning of candle (b) Dissolving sugar (c) Rusting (d) Melting of ice. (4 marks)", solution: "(a) Burning of candle — Chemical change. Wax burns to produce CO₂, water vapour, and soot. New substances formed; irreversible.\n(b) Dissolving sugar — Physical change. Sugar molecules disperse in water but remain the same substance. Can be recovered by evaporation.\n(c) Rusting — Chemical change. Iron reacts with oxygen and moisture to form iron oxide (Fe₂O₃). New substance formed; irreversible.\n(d) Melting of ice — Physical change. Ice (solid H₂O) becomes water (liquid H₂O). Same substance, different state. Reversible by freezing.", marks: 4 },
    ],
    examTips: [
      { category: "Classify", tip: "For classify questions, always give the REASON — not just 'physical' or 'chemical'." },
      { category: "Signs", tip: "Memorize 5 signs of chemical change: colour, gas, temperature, precipitate, smell." },
    ],
    fillInBlanks: [
      { sentence: "A change that produces a new substance is a ___ change.", answer: "chemical" },
      { sentence: "Reactions that release heat are called ___ reactions.", answer: "exothermic" },
      { sentence: "Rusting of iron is a ___ change.", answer: "chemical" },
      { sentence: "Melting of ice is a ___ change.", answer: "physical" },
    ],
    matchPairs: [
      { left: "Burning paper", right: "Chemical change" },
      { left: "Melting wax", right: "Physical change" },
      { left: "Cooking food", right: "Chemical change" },
      { left: "Dissolving salt", right: "Physical change" },
      { left: "Photosynthesis", right: "Endothermic reaction" },
    ],
  },
  "chem-3": {
    solvedExamples: [
      { question: "Differentiate between elements, compounds, and mixtures. (4 marks)", solution: "Elements:\n• Made of one type of atom\n• Cannot be broken down further\n• Example: Iron (Fe), Oxygen (O₂)\n\nCompounds:\n• Two or more elements chemically combined in fixed ratio\n• Properties differ from constituent elements\n• Example: Water (H₂O), NaCl\n\nMixtures:\n• Two or more substances physically mixed in any ratio\n• Each substance retains its properties\n• Can be separated by physical methods\n• Example: Air, salt water", marks: 4 },
    ],
    examTips: [
      { category: "Compare", tip: "Element vs Compound vs Mixture — 3-column table works best for differentiation." },
      { category: "Application", tip: "Know which separation technique is used for each type of mixture." },
    ],
    fillInBlanks: [
      { sentence: "A pure substance made of only one type of atom is an ___.", answer: "element" },
      { sentence: "A mixture with uniform composition is called ___.", answer: "homogeneous" },
      { sentence: "Separating coloured components of ink uses ___.", answer: "chromatography" },
      { sentence: "There are ___ known elements in the periodic table.", answer: "118" },
    ],
    matchPairs: [
      { left: "Filtration", right: "Insoluble solid from liquid" },
      { left: "Evaporation", right: "Dissolved solid from solution" },
      { left: "Distillation", right: "Different boiling point liquids" },
      { left: "Chromatography", right: "Coloured substances" },
      { left: "Magnetic separation", right: "Iron from sand" },
    ],
  },
  "chem-4": {
    solvedExamples: [
      { question: "Write the electronic configuration of: (a) Sodium (Z=11) (b) Chlorine (Z=17). Predict their valency. (3 marks)", solution: "(a) Sodium (Na, Z=11):\nElectronic configuration: 2, 8, 1\nValence electrons: 1\nValency: 1 (tends to lose 1 electron)\n\n(b) Chlorine (Cl, Z=17):\nElectronic configuration: 2, 8, 7\nValence electrons: 7\nValency: 1 (tends to gain 1 electron to complete octet)\n\nWhen Na and Cl combine: Na donates 1 electron to Cl, forming Na⁺Cl⁻ (ionic bond), creating NaCl (common salt).", marks: 3 },
    ],
    examTips: [
      { category: "Formula", tip: "Maximum electrons per shell: 2n². K=2, L=8, M=18, N=32. Always apply this rule." },
      { category: "Application", tip: "Be ready to predict valency from electronic configuration — it's a guaranteed question." },
    ],
    fillInBlanks: [
      { sentence: "The maximum electrons in the L shell is ___.", answer: "8", hint: "2n² where n=2" },
      { sentence: "Rutherford's experiment used a thin ___ foil.", answer: "gold" },
      { sentence: "The number of protons in an atom is called its ___ number.", answer: "atomic" },
      { sentence: "Electronic configuration of Oxygen (Z=8) is ___.", answer: "2, 6", hint: "K shell gets 2, remaining go to L" },
    ],
    matchPairs: [
      { left: "Dalton", right: "Solid sphere model" },
      { left: "Thomson", right: "Plum pudding model" },
      { left: "Rutherford", right: "Nuclear model" },
      { left: "Bohr", right: "Electron shell model" },
      { left: "Proton", right: "Positive charge" },
    ],
  },
  "chem-5": {
    solvedExamples: [
      { question: "Write the chemical formula of: (a) Calcium oxide (b) Aluminium sulphate (c) Sodium carbonate. (3 marks)", solution: "(a) Calcium oxide:\nCa²⁺ and O²⁻ → CaO (valencies cancel out: 2,2)\n\n(b) Aluminium sulphate:\nAl³⁺ and SO₄²⁻ → Al₂(SO₄)₃ (cross-multiply: 3,2)\n\n(c) Sodium carbonate:\nNa¹⁺ and CO₃²⁻ → Na₂CO₃ (cross-multiply: 1,2)", marks: 3 },
    ],
    examTips: [
      { category: "Method", tip: "Use the criss-cross method for writing formulae — cross the valencies and simplify." },
      { category: "Symbols", tip: "Know Latin-origin symbols: Na (Natrium), K (Kalium), Fe (Ferrum), Au (Aurum), Ag (Argentum)." },
    ],
    fillInBlanks: [
      { sentence: "The valency of carbon is ___.", answer: "4", hint: "Tetravalent" },
      { sentence: "The symbol Na comes from the Latin word ___.", answer: "Natrium" },
      { sentence: "In a balanced equation, the number of ___ on both sides must be equal.", answer: "atoms" },
    ],
    matchPairs: [
      { left: "Na", right: "Sodium" },
      { left: "K", right: "Potassium" },
      { left: "Fe", right: "Iron" },
      { left: "Au", right: "Gold" },
      { left: "Ag", right: "Silver" },
    ],
  },
  "chem-6": {
    solvedExamples: [
      { question: "Identify the type of reaction and balance: Fe + O₂ → Fe₂O₃ (3 marks)", solution: "Type: Combination reaction (two substances combine to form one product)\n\nBalancing:\nStep 1: Fe + O₂ → Fe₂O₃ (Fe: 1 vs 2, O: 2 vs 3 — unbalanced)\nStep 2: Balance Fe: 2Fe + O₂ → Fe₂O₃\nStep 3: Balance O: need 3 O atoms, so use 3/2 O₂\nStep 4: Remove fraction: 4Fe + 3O₂ → 2Fe₂O₃\n\nBalanced equation: 4Fe + 3O₂ → 2Fe₂O₃", marks: 3 },
    ],
    examTips: [
      { category: "Balance", tip: "Always check atom count on both sides. Start with metals, then non-metals, oxygen last." },
      { category: "Identify", tip: "Know how to identify reaction types: A+B→AB (combination), AB→A+B (decomposition), etc." },
    ],
    fillInBlanks: [
      { sentence: "A + B → AB is a ___ reaction.", answer: "combination" },
      { sentence: "AB → A + B is a ___ reaction.", answer: "decomposition" },
      { sentence: "Oxidation is the ___ of electrons.", answer: "loss" },
      { sentence: "Acid + Base → Salt + ___ is a neutralization reaction.", answer: "Water" },
    ],
    matchPairs: [
      { left: "Combination", right: "A + B → AB" },
      { left: "Decomposition", right: "AB → A + B" },
      { left: "Single displacement", right: "A + BC → AC + B" },
      { left: "Double displacement", right: "AB + CD → AD + CB" },
      { left: "Neutralization", right: "Acid + Base → Salt + Water" },
    ],
  },
  "chem-7": {
    solvedExamples: [
      { question: "Describe the laboratory preparation of hydrogen gas. (5 marks)", solution: "Aim: To prepare hydrogen gas from zinc and dilute sulphuric acid.\n\nApparatus: Flat-bottomed flask, thistle funnel, delivery tube, gas jar, water trough\n\nChemicals: Granulated zinc, dilute sulphuric acid\n\nProcedure:\n1. Place granulated zinc in the flat-bottomed flask\n2. Add dilute H₂SO₄ through the thistle funnel\n3. Reaction: Zn + H₂SO₄ → ZnSO₄ + H₂↑\n4. Collect hydrogen gas by downward displacement of water (as H₂ is insoluble)\n5. Test: Bring a burning splint near the mouth — it burns with a 'pop' sound\n\nPrecautions:\n• Use granulated zinc (not powder) to control reaction rate\n• Ensure apparatus is airtight\n• Do not bring flame near the apparatus", marks: 5 },
    ],
    examTips: [
      { category: "Experiment", tip: "Lab preparation questions need: apparatus, chemicals, procedure, equation, test, precautions." },
      { category: "Test", tip: "Hydrogen test: burns with a 'pop' sound — always mention this." },
    ],
    fillInBlanks: [
      { sentence: "Hydrogen burns with a ___ sound.", answer: "pop" },
      { sentence: "The most common isotope of hydrogen is ___.", answer: "protium" },
      { sentence: "Addition of hydrogen to unsaturated oils is called ___.", answer: "hydrogenation" },
      { sentence: "Heavy water is the oxide of ___ (isotope).", answer: "deuterium" },
    ],
    matchPairs: [
      { left: "Protium", right: "1 proton, 0 neutrons" },
      { left: "Deuterium", right: "1 proton, 1 neutron" },
      { left: "Tritium", right: "1 proton, 2 neutrons" },
      { left: "Hydrogenation", right: "Making ghee from oil" },
      { left: "Haber process", right: "Making ammonia" },
    ],
  },
  "chem-8": {
    solvedExamples: [
      { question: "Differentiate between temporary and permanent hardness of water. How can each be removed? (4 marks)", solution: "Temporary hardness:\n• Caused by bicarbonates of Ca and Mg: Ca(HCO₃)₂, Mg(HCO₃)₂\n• Removed by boiling: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑\n• Precipitate can be filtered out\n\nPermanent hardness:\n• Caused by sulphates and chlorides of Ca and Mg: CaSO₄, MgCl₂\n• Cannot be removed by boiling\n• Removed by: Washing soda (Na₂CO₃) — converts to insoluble carbonates\n• Or ion-exchange method (water softeners)", marks: 4 },
    ],
    examTips: [
      { category: "Reason", tip: "'Why does ice float on water?' — mention anomalous expansion and density at 4°C." },
      { category: "Equation", tip: "Know the equation for removing temporary hardness by boiling." },
    ],
    fillInBlanks: [
      { sentence: "Water has maximum density at ___°C.", answer: "4" },
      { sentence: "Hard water does not lather easily due to dissolved ___ and magnesium salts.", answer: "calcium" },
      { sentence: "Water is called a ___ solvent.", answer: "universal" },
      { sentence: "Temporary hardness is caused by ___ of calcium and magnesium.", answer: "bicarbonates" },
    ],
    matchPairs: [
      { left: "Soft water", right: "Lathers easily with soap" },
      { left: "Temporary hardness", right: "Removed by boiling" },
      { left: "Permanent hardness", right: "Removed by washing soda" },
      { left: "Chlorination", right: "Kills bacteria in water" },
      { left: "Anomalous expansion", right: "Ice floats on water" },
    ],
  },
  "chem-9": {
    solvedExamples: [
      { question: "Compare diamond and graphite. Why does graphite conduct electricity but diamond does not? (4 marks)", solution: "Diamond:\n• Each carbon bonded to 4 others in 3D tetrahedral network\n• Hardest natural substance\n• Transparent, colourless\n• Does NOT conduct electricity (no free electrons)\n• Used in jewellery and cutting tools\n\nGraphite:\n• Each carbon bonded to 3 others in flat hexagonal layers\n• Soft and slippery (layers slide)\n• Grey-black, opaque\n• Conducts electricity (4th electron of each carbon is free to move between layers)\n• Used in pencils and lubricants\n\nGraphite conducts because each carbon uses only 3 of its 4 electrons for bonding — the 4th electron is delocalised (free to move), allowing electrical conduction.", marks: 4 },
    ],
    examTips: [
      { category: "Reason", tip: "Graphite conductivity question is common — must explain 'free/delocalised electron'." },
      { category: "Compare", tip: "Diamond vs Graphite: include bonding, hardness, conductivity, and uses." },
    ],
    fillInBlanks: [
      { sentence: "The hardest natural substance is ___.", answer: "diamond" },
      { sentence: "Carbon's ability to form long chains is called ___.", answer: "catenation" },
      { sentence: "Carbon has a valency of ___ (tetravalent).", answer: "4" },
      { sentence: "Compounds containing only carbon and hydrogen are called ___.", answer: "hydrocarbons" },
    ],
    matchPairs: [
      { left: "Diamond", right: "Hardest, 4 bonds per carbon" },
      { left: "Graphite", right: "Soft, conducts electricity" },
      { left: "Fullerene", right: "Spherical C₆₀ molecule" },
      { left: "Catenation", right: "Carbon chain formation" },
      { left: "Methane", right: "Simplest hydrocarbon (CH₄)" },
    ],
  },

  // ===== PHYSICS =====
  "phy-1": {
    solvedExamples: [
      { question: "Explain why gases are easily compressible but solids are not. (2 marks)", solution: "In gases, molecules are far apart with large intermolecular spaces and very weak forces of attraction. When pressure is applied, molecules can be pushed closer together, reducing the volume — hence gases are highly compressible.\n\nIn solids, molecules are closely packed with very little space between them and strong intermolecular forces hold them in fixed positions. There is almost no space for molecules to come closer — hence solids are virtually incompressible.", marks: 2 },
    ],
    examTips: [
      { category: "Compare", tip: "Properties of states of matter table (shape, volume, compressibility, density) is a common question." },
    ],
    fillInBlanks: [
      { sentence: "In ___, molecules are most closely packed.", answer: "solids" },
      { sentence: "Temperature is a measure of average ___ energy of molecules.", answer: "kinetic" },
      { sentence: "Gas pressure is caused by molecular ___ with container walls.", answer: "collisions" },
    ],
    matchPairs: [
      { left: "Solid", right: "Fixed shape and volume" },
      { left: "Liquid", right: "Fixed volume only" },
      { left: "Gas", right: "No fixed shape or volume" },
      { left: "Temperature", right: "Average kinetic energy" },
    ],
  },
  "phy-2": {
    solvedExamples: [
      { question: "A block has mass 500g and volume 200 cm³. (a) Find its density. (b) Will it float or sink in water? (c) Find its relative density. (3 marks)", solution: "(a) Density = Mass/Volume = 500g / 200cm³ = 2.5 g/cm³\n\n(b) Since density (2.5 g/cm³) > density of water (1 g/cm³), the block will SINK in water.\n\n(c) Relative Density = Density of substance / Density of water = 2.5 / 1 = 2.5 (no unit)", marks: 3 },
    ],
    examTips: [
      { category: "Numerical", tip: "Always show formula → substitution → calculation → unit. This earns method marks even if the answer is wrong." },
      { category: "Concept", tip: "Float/sink questions: compare density with water (1 g/cm³). Less = float, more = sink." },
    ],
    fillInBlanks: [
      { sentence: "Density = Mass / ___.", answer: "Volume" },
      { sentence: "The SI unit of density is ___.", answer: "kg/m³" },
      { sentence: "An object floats if its density is ___ than water.", answer: "less" },
      { sentence: "Relative density has ___ unit.", answer: "no" },
    ],
    matchPairs: [
      { left: "Density", right: "Mass per unit volume" },
      { left: "Volume of irregular solid", right: "Water displacement method" },
      { left: "Relative density", right: "Density / Density of water" },
      { left: "Iron (RD ≈ 7.8)", right: "Sinks in water" },
      { left: "Cork (RD ≈ 0.24)", right: "Floats on water" },
    ],
  },
  "phy-3": {
    solvedExamples: [
      { question: "A block of weight 100 N rests on a table. The area of contact is 0.5 m². Calculate the pressure exerted. If the block is turned so the area is 0.25 m², find the new pressure. (3 marks)", solution: "Case 1:\nP = F/A = 100 N / 0.5 m² = 200 Pa\n\nCase 2:\nP = F/A = 100 N / 0.25 m² = 400 Pa\n\nConclusion: Same force on smaller area produces greater pressure (double the pressure). This is why sharp objects cut better — they concentrate force on a small area.", marks: 3 },
    ],
    examTips: [
      { category: "Numerical", tip: "Pressure numericals are straightforward — always state P = F/A, substitute, and give the unit (Pa)." },
      { category: "Application", tip: "Know real-life pressure applications: sharp knife, camel's feet, foundations, snowshoes." },
    ],
    fillInBlanks: [
      { sentence: "Pressure = Force / ___.", answer: "Area" },
      { sentence: "The SI unit of pressure is ___ (Pascal).", answer: "Pa" },
      { sentence: "Pascal's Law applies to ___ fluids.", answer: "confined" },
      { sentence: "Atmospheric pressure ___ with altitude.", answer: "decreases" },
    ],
    matchPairs: [
      { left: "Sharp knife", right: "Small area, high pressure" },
      { left: "Snowshoes", right: "Large area, low pressure" },
      { left: "Pascal's Law", right: "Hydraulic machines" },
      { left: "Barometer", right: "Measures atmospheric pressure" },
    ],
  },
  "phy-4": {
    solvedExamples: [
      { question: "A body of mass 5 kg is lifted to a height of 10 m. Calculate: (a) Work done (b) Potential energy gained. (g = 10 m/s²) (3 marks)", solution: "(a) Work done = Force × Distance = mg × h\nW = 5 × 10 × 10 = 500 J\n\n(b) Potential energy gained = mgh\nPE = 5 × 10 × 10 = 500 J\n\nNote: Work done against gravity equals the potential energy gained (energy is conserved).", marks: 3 },
      { question: "A car of mass 1000 kg is moving at 20 m/s. Find its kinetic energy. If speed doubles, what happens to KE? (3 marks)", solution: "KE = ½mv² = ½ × 1000 × 20² = ½ × 1000 × 400 = 200,000 J = 200 kJ\n\nIf speed doubles to 40 m/s:\nKE = ½ × 1000 × 40² = ½ × 1000 × 1600 = 800,000 J = 800 kJ\n\nKE becomes 4 times (because KE ∝ v²). Speed doubles → KE quadruples.", marks: 3 },
    ],
    examTips: [
      { category: "Formula", tip: "Memorize: W = F×d, KE = ½mv², PE = mgh, P = W/t. These cover most numericals." },
      { category: "Concept", tip: "Conservation of energy: total energy stays constant, only form changes." },
    ],
    fillInBlanks: [
      { sentence: "The SI unit of work and energy is the ___.", answer: "Joule" },
      { sentence: "Power is the rate of doing ___.", answer: "work" },
      { sentence: "If speed doubles, kinetic energy becomes ___ times.", answer: "four" },
      { sentence: "Energy can neither be ___ nor destroyed.", answer: "created" },
    ],
    matchPairs: [
      { left: "Work", right: "Force × Distance" },
      { left: "Kinetic energy", right: "½mv²" },
      { left: "Potential energy", right: "mgh" },
      { left: "Power", right: "Work / Time" },
      { left: "1 Watt", right: "1 Joule per second" },
    ],
  },
  "phy-5": {
    solvedExamples: [
      { question: "State the laws of reflection. A ray of light strikes a mirror at 30° to the surface. Find the angle of incidence and angle of reflection. (3 marks)", solution: "Laws of reflection:\n1. The angle of incidence equals the angle of reflection (∠i = ∠r)\n2. The incident ray, reflected ray, and normal all lie in the same plane\n\nCalculation:\nAngle with surface = 30°\nAngle of incidence = 90° − 30° = 60° (measured from the normal)\nBy first law: Angle of reflection = 60°\n\nNote: Angles are always measured from the NORMAL, not the mirror surface.", marks: 3 },
    ],
    examTips: [
      { category: "Diagram", tip: "Always draw the normal (dotted line perpendicular to mirror) — angles are measured from it." },
      { category: "Application", tip: "Know defects of vision: Myopia (concave lens), Hypermetropia (convex lens)." },
    ],
    fillInBlanks: [
      { sentence: "Angle of incidence equals angle of ___.", answer: "reflection" },
      { sentence: "Splitting white light into colours is called ___.", answer: "dispersion" },
      { sentence: "Myopia is corrected by a ___ lens.", answer: "concave" },
      { sentence: "The sequence of colours in a spectrum is ___.", answer: "VIBGYOR" },
    ],
    matchPairs: [
      { left: "Concave lens", right: "Corrects myopia" },
      { left: "Convex lens", right: "Corrects hypermetropia" },
      { left: "Prism", right: "Dispersion of light" },
      { left: "VIBGYOR", right: "Colours of spectrum" },
      { left: "Total internal reflection", right: "Optical fibre" },
    ],
  },
  "phy-6": {
    solvedExamples: [
      { question: "Explain the anomalous expansion of water and its importance. (4 marks)", solution: "Normal behaviour: Most substances expand when heated and contract when cooled.\n\nAnomalous behaviour of water:\n• Water contracts when heated from 0°C to 4°C (abnormal)\n• Water expands when heated above 4°C (normal)\n• Water has maximum density at 4°C\n• Below 4°C, water expands — ice is less dense than water\n\nImportance:\n• Ice floats on water (density of ice < water)\n• In winter, the surface of lakes freezes but water below remains at 4°C\n• This allows aquatic life to survive under the frozen surface\n• If water contracted on freezing like other substances, lakes would freeze bottom-up, killing all life", marks: 4 },
    ],
    examTips: [
      { category: "Graph", tip: "Be ready to draw the density vs temperature graph for water showing maximum at 4°C." },
      { category: "Reason", tip: "Anomalous expansion questions always ask for the importance for aquatic life." },
    ],
    fillInBlanks: [
      { sentence: "Heat transfer through direct contact is called ___.", answer: "conduction" },
      { sentence: "Heat transfer through fluid movement is called ___.", answer: "convection" },
      { sentence: "Water has maximum density at ___°C.", answer: "4" },
      { sentence: "Heat transfer through electromagnetic waves is called ___.", answer: "radiation" },
    ],
    matchPairs: [
      { left: "Conduction", right: "Through solids by contact" },
      { left: "Convection", right: "Through fluids by currents" },
      { left: "Radiation", right: "Through electromagnetic waves" },
      { left: "Anomalous expansion", right: "Water expands below 4°C" },
    ],
  },
  "phy-7": {
    solvedExamples: [
      { question: "A person hears an echo after 3 seconds. If the speed of sound is 340 m/s, find the distance of the reflecting surface. (2 marks)", solution: "Time for echo = 3 s\nSpeed of sound = 340 m/s\n\nTotal distance = Speed × Time = 340 × 3 = 1020 m\n\nBut sound travels to the surface AND back:\nDistance to surface = 1020 / 2 = 510 m\n\nThe reflecting surface is 510 metres away.", marks: 2 },
    ],
    examTips: [
      { category: "Numerical", tip: "Echo distance = (Speed × Time) / 2 — remember to divide by 2 because sound travels there and back." },
      { category: "Concept", tip: "Sound needs a medium — it cannot travel through vacuum. This is a common 'give reason' question." },
    ],
    fillInBlanks: [
      { sentence: "Sound cannot travel through a ___.", answer: "vacuum" },
      { sentence: "Sound travels fastest in ___.", answer: "solids" },
      { sentence: "The number of vibrations per second is called ___.", answer: "frequency" },
      { sentence: "Unwanted or unpleasant sound is called ___.", answer: "noise" },
    ],
    matchPairs: [
      { left: "Frequency", right: "Pitch of sound" },
      { left: "Amplitude", right: "Loudness of sound" },
      { left: "Echo", right: "Reflection of sound" },
      { left: "Ultrasound", right: "Above 20,000 Hz" },
      { left: "Infrasound", right: "Below 20 Hz" },
    ],
  },
  "phy-8": {
    solvedExamples: [
      { question: "Explain three methods of charging a body. (3 marks)", solution: "1. Friction: Rubbing two bodies together transfers electrons.\nExample: Rubbing glass rod with silk — glass becomes positively charged, silk negatively.\n\n2. Conduction: Touching a charged body to an uncharged body transfers charge.\nExample: Touch a charged rod to a metal sphere — charge flows to sphere.\n\n3. Induction: Bringing a charged body near (not touching) an uncharged conductor rearranges its charges.\nExample: Bring a negative rod near a metal ball — positive charges move toward the rod, negative charges move away.", marks: 3 },
    ],
    examTips: [
      { category: "Experiment", tip: "Gold-leaf electroscope working principle is a must-know for practical/diagram questions." },
      { category: "Rule", tip: "Like charges repel, unlike attract — explain with electron transfer for 'give reason' questions." },
    ],
    fillInBlanks: [
      { sentence: "Like charges ___ each other.", answer: "repel" },
      { sentence: "A gold-leaf electroscope detects the presence of electric ___.", answer: "charge" },
      { sentence: "Materials that allow electric charges to flow are called ___.", answer: "conductors" },
      { sentence: "Lightning is a large-scale ___ discharge.", answer: "electric" },
    ],
    matchPairs: [
      { left: "Friction", right: "Rubbing transfers electrons" },
      { left: "Conduction", right: "Touching transfers charge" },
      { left: "Induction", right: "No contact, charge rearranged" },
      { left: "Conductor", right: "Allows charge to flow" },
      { left: "Insulator", right: "Does not allow charge flow" },
    ],
  },
  "phy-9": {
    solvedExamples: [
      { question: "Three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel. Find the equivalent resistance. (3 marks)", solution: "For parallel combination:\n1/R = 1/R₁ + 1/R₂ + 1/R₃\n1/R = 1/2 + 1/3 + 1/6\n1/R = 3/6 + 2/6 + 1/6 = 6/6 = 1\nR = 1 Ω\n\nThe equivalent resistance is 1 Ω.\n\nNote: Parallel resistance is always less than the smallest individual resistance.", marks: 3 },
      { question: "Calculate the current when V = 12V and R = 4Ω. Also find the power consumed. (2 marks)", solution: "Using Ohm's Law: V = IR\nI = V/R = 12/4 = 3 Amperes\n\nPower = V × I = 12 × 3 = 36 Watts\n(Or P = V²/R = 144/4 = 36 W)", marks: 2 },
    ],
    examTips: [
      { category: "Formula", tip: "Ohm's Law triangle: V = IR, I = V/R, R = V/I. Know all three forms." },
      { category: "Compare", tip: "Series vs Parallel table: current, voltage, resistance, applications — guaranteed question." },
    ],
    fillInBlanks: [
      { sentence: "Ohm's Law states V = ___.", answer: "IR" },
      { sentence: "In a series circuit, the ___ is the same through all components.", answer: "current" },
      { sentence: "In a parallel circuit, the ___ is the same across all components.", answer: "voltage" },
      { sentence: "The SI unit of resistance is the ___.", answer: "Ohm" },
    ],
    matchPairs: [
      { left: "Current (I)", right: "Measured in Amperes" },
      { left: "Voltage (V)", right: "Measured in Volts" },
      { left: "Resistance (R)", right: "Measured in Ohms" },
      { left: "Series circuit", right: "Same current, resistance adds" },
      { left: "Parallel circuit", right: "Same voltage, 1/R adds" },
    ],
  },

  // ===== MATHEMATICS =====
  "math-1": {
    solvedExamples: [
      { question: "Find three rational numbers between 1/4 and 1/2. (2 marks)", solution: "Method: Make denominators equal\n1/4 = 4/16 and 1/2 = 8/16\n\nThree rational numbers between 4/16 and 8/16:\n5/16, 6/16 (= 3/8), 7/16\n\nAlternatively, use average method:\nBetween a and b: (a+b)/2\nBetween 1/4 and 1/2: (1/4 + 1/2)/2 = (3/4)/2 = 3/8", marks: 2 },
    ],
    examTips: [
      { category: "Method", tip: "To find rationals between two numbers: make denominators equal, then pick numbers between numerators." },
    ],
    fillInBlanks: [
      { sentence: "A rational number is expressed as p/q where q ≠ ___.", answer: "0" },
      { sentence: "The additive identity for rational numbers is ___.", answer: "0" },
      { sentence: "The multiplicative identity is ___.", answer: "1" },
    ],
    matchPairs: [
      { left: "Closure property", right: "Result stays in the same set" },
      { left: "Commutative", right: "a + b = b + a" },
      { left: "Associative", right: "(a+b)+c = a+(b+c)" },
      { left: "Distributive", right: "a×(b+c) = a×b + a×c" },
    ],
  },
  "math-2": {
    solvedExamples: [
      { question: "Simplify: (2³ × 2⁵) ÷ 2⁴. Express 0.00067 in standard form. (3 marks)", solution: "(2³ × 2⁵) ÷ 2⁴\n= 2³⁺⁵ ÷ 2⁴ (using aᵐ × aⁿ = aᵐ⁺ⁿ)\n= 2⁸ ÷ 2⁴\n= 2⁸⁻⁴ (using aᵐ ÷ aⁿ = aᵐ⁻ⁿ)\n= 2⁴ = 16\n\n0.00067 in standard form:\n= 6.7 × 10⁻⁴\n(Move decimal 4 places right → negative exponent)", marks: 3 },
    ],
    examTips: [
      { category: "Rule", tip: "Remember: a⁰ = 1, a⁻ⁿ = 1/aⁿ. These catch many students off guard." },
      { category: "Standard Form", tip: "Count decimal places moved. Right = negative power, Left = positive power of 10." },
    ],
    fillInBlanks: [
      { sentence: "Any number to the power 0 equals ___.", answer: "1" },
      { sentence: "a⁻ⁿ equals ___.", answer: "1/aⁿ", hint: "Reciprocal" },
      { sentence: "3.84 × 10⁸ in standard form represents ___.", answer: "384000000", hint: "Move decimal 8 places right" },
    ],
    matchPairs: [
      { left: "aᵐ × aⁿ", right: "aᵐ⁺ⁿ" },
      { left: "aᵐ ÷ aⁿ", right: "aᵐ⁻ⁿ" },
      { left: "(aᵐ)ⁿ", right: "aᵐⁿ" },
      { left: "a⁰", right: "1" },
    ],
  },
  "math-3": {
    solvedExamples: [
      { question: "Find √7056 by long division. (3 marks)", solution: "Step 1: Group digits in pairs from right: 70 | 56\nStep 2: Find largest number whose square ≤ 70: 8 (8²=64)\nStep 3: Write 8 as divisor and quotient. Remainder = 70-64 = 6\nStep 4: Bring down 56. New dividend = 656\nStep 5: Double quotient: 8×2 = 16_. Find digit x such that 16x × x ≤ 656\nStep 6: 164 × 4 = 656. Perfect!\n\n√7056 = 84", marks: 3 },
    ],
    examTips: [
      { category: "Method", tip: "Long division method for square root: group in pairs from right, then follow the algorithm." },
    ],
    fillInBlanks: [
      { sentence: "A number whose square root is a whole number is called a ___ square.", answer: "perfect" },
      { sentence: "√144 = ___.", answer: "12" },
      { sentence: "Perfect squares never end in ___, 3, 7, or 8.", answer: "2" },
    ],
    matchPairs: [
      { left: "√81", right: "9" },
      { left: "√169", right: "13" },
      { left: "√256", right: "16" },
      { left: "√625", right: "25" },
    ],
  },
  "math-7": {
    solvedExamples: [
      { question: "MP = ₹1200, Discount = 15%, GST = 10%. Find the final price. (3 marks)", solution: "Marked Price (MP) = ₹1200\n\nDiscount = 15% of 1200 = 15/100 × 1200 = ₹180\n\nSelling Price = MP − Discount = 1200 − 180 = ₹1020\n\nGST = 10% of SP = 10/100 × 1020 = ₹102\n\nFinal Price = SP + GST = 1020 + 102 = ₹1122", marks: 3 },
    ],
    examTips: [
      { category: "Order", tip: "Calculate discount FIRST on MP, then apply tax on discounted price — not the other way around." },
      { category: "Formula", tip: "Profit% = (Profit/CP)×100. Loss% = (Loss/CP)×100. Always on CP, not SP." },
    ],
    fillInBlanks: [
      { sentence: "Profit = SP − ___.", answer: "CP" },
      { sentence: "Discount is calculated on the ___ Price.", answer: "Marked" },
      { sentence: "If SP < CP, it is a ___.", answer: "loss" },
    ],
    matchPairs: [
      { left: "Profit", right: "SP > CP" },
      { left: "Loss", right: "CP > SP" },
      { left: "Discount", right: "MP − SP" },
      { left: "GST", right: "Added to selling price" },
    ],
  },
  "math-8": {
    solvedExamples: [
      { question: "Find the difference between CI and SI on ₹5000 at 8% for 2 years. (3 marks)", solution: "Principal P = ₹5000, Rate R = 8%, Time n = 2 years\n\nSI = PRT/100 = 5000 × 8 × 2 / 100 = ₹800\n\nCI: A = P(1 + R/100)ⁿ = 5000(1 + 8/100)² = 5000 × (1.08)²\n= 5000 × 1.1664 = ₹5832\nCI = A − P = 5832 − 5000 = ₹832\n\nDifference = CI − SI = 832 − 800 = ₹32\n\nShortcut for 2 years: Difference = P × (R/100)² = 5000 × (0.08)² = 5000 × 0.0064 = ₹32", marks: 3 },
    ],
    examTips: [
      { category: "Shortcut", tip: "For 2-year CI vs SI difference: Diff = P × (R/100)². Saves time in exams!" },
      { category: "Half-Yearly", tip: "For half-yearly compounding: use R/2 as rate and 2n as time periods." },
    ],
    fillInBlanks: [
      { sentence: "CI formula: A = P(1 + R/100)___.", answer: "ⁿ" },
      { sentence: "Compound interest is calculated on principal plus ___ interest.", answer: "accumulated" },
    ],
    matchPairs: [
      { left: "Simple Interest", right: "PRT/100" },
      { left: "Compound Interest", right: "P(1+R/100)ⁿ − P" },
      { left: "Half-yearly CI", right: "Use R/2 and 2n" },
    ],
  },
  "math-11": {
    solvedExamples: [
      { question: "Evaluate 105² using a suitable identity. (2 marks)", solution: "105² = (100 + 5)²\nUsing (a + b)² = a² + 2ab + b²\n= 100² + 2(100)(5) + 5²\n= 10000 + 1000 + 25\n= 11025", marks: 2 },
    ],
    examTips: [
      { category: "Identity", tip: "For evaluation questions, break number into (a+b) or (a−b) form: 99² = (100−1)²." },
    ],
    fillInBlanks: [
      { sentence: "(a + b)² = a² + 2ab + ___.", answer: "b²" },
      { sentence: "a² − b² = (a + b)(___)", answer: "a − b" },
    ],
    matchPairs: [
      { left: "(a+b)²", right: "a² + 2ab + b²" },
      { left: "(a−b)²", right: "a² − 2ab + b²" },
      { left: "a² − b²", right: "(a+b)(a−b)" },
    ],
  },
  "math-15": {
    solvedExamples: [
      { question: "In a quadrilateral ABCD, ∠A = 80°, ∠B = 100°, ∠C = 70°. Find ∠D. (2 marks)", solution: "Sum of angles of a quadrilateral = 360°\n∠A + ∠B + ∠C + ∠D = 360°\n80° + 100° + 70° + ∠D = 360°\n250° + ∠D = 360°\n∠D = 360° − 250° = 110°", marks: 2 },
    ],
    examTips: [
      { category: "Property", tip: "Know properties of each quadrilateral: parallelogram (opposite sides equal, diagonals bisect), rhombus (all sides equal, diagonals perpendicular), rectangle (all angles 90°)." },
    ],
    fillInBlanks: [
      { sentence: "Sum of angles in a quadrilateral = ___°.", answer: "360" },
      { sentence: "A quadrilateral with all sides equal is a ___.", answer: "rhombus" },
      { sentence: "The diagonals of a rectangle are ___.", answer: "equal" },
    ],
    matchPairs: [
      { left: "Parallelogram", right: "Opposite sides parallel and equal" },
      { left: "Rhombus", right: "All sides equal" },
      { left: "Rectangle", right: "All angles 90°" },
      { left: "Trapezium", right: "One pair of parallel sides" },
    ],
  },
  "math-19": {
    solvedExamples: [
      { question: "Find the area of a trapezium with parallel sides 12 cm and 8 cm, and height 5 cm. Also find the volume of a cylinder with radius 7 cm and height 10 cm. (4 marks)", solution: "Area of trapezium = ½(a + b) × h\n= ½(12 + 8) × 5\n= ½ × 20 × 5\n= 50 cm²\n\nVolume of cylinder = πr²h\n= 22/7 × 7² × 10\n= 22/7 × 49 × 10\n= 22 × 70\n= 1540 cm³", marks: 4 },
    ],
    examTips: [
      { category: "Formula", tip: "Memorize: Trapezium = ½(a+b)h, Cylinder volume = πr²h, CSA = 2πrh, TSA = 2πr(r+h)." },
      { category: "Value", tip: "Use π = 22/7 unless told otherwise. If radius is a multiple of 7, calculation is cleaner." },
    ],
    fillInBlanks: [
      { sentence: "Area of trapezium = ½(a + b) × ___.", answer: "h" },
      { sentence: "Volume of a cube with side 'a' = ___.", answer: "a³" },
      { sentence: "Volume of a cylinder = πr²___.", answer: "h" },
    ],
    matchPairs: [
      { left: "Cube volume", right: "a³" },
      { left: "Cuboid volume", right: "l × b × h" },
      { left: "Cylinder volume", right: "πr²h" },
      { left: "Trapezium area", right: "½(a+b)×h" },
    ],
  },

  // ===== GEOGRAPHY =====
  "geo-1": {
    solvedExamples: [
      { question: "What do closely spaced contour lines indicate? How does a contour map show a valley and a ridge? (3 marks)", solution: "Closely spaced contour lines indicate a STEEP SLOPE — the closer the lines, the steeper the gradient.\n\nValley: V-shaped contours pointing uphill (toward higher ground). The V opens toward lower ground.\n\nRidge: V-shaped contours pointing downhill (toward lower ground). The V opens toward higher ground.\n\nTip: 'V points Valley-ward (uphill)' — the V of contours in a valley points to higher elevation.", marks: 3 },
    ],
    examTips: [
      { category: "Map Reading", tip: "Practice reading contour maps — they appear in every ICSE Geography paper." },
      { category: "Drawing", tip: "For cross-sections, mark contour heights, plot points, and join smoothly." },
    ],
    fillInBlanks: [
      { sentence: "Closely spaced contour lines indicate a ___ slope.", answer: "steep" },
      { sentence: "Contour lines never ___.", answer: "cross", hint: "They can't be at two heights at once" },
    ],
    matchPairs: [
      { left: "Close contours", right: "Steep slope" },
      { left: "Wide contours", right: "Gentle slope" },
      { left: "V-shaped (pointing uphill)", right: "Valley" },
      { left: "Concentric circles", right: "Hill" },
    ],
  },
  "geo-3": {
    solvedExamples: [
      { question: "Explain three types of rainfall with diagrams. (5 marks)", solution: "1. Convectional Rainfall:\n• Common in equatorial regions\n• Sun heats ground → hot air rises → cools → condenses → heavy rain with thunder\n• Occurs in afternoon\n\n2. Orographic/Relief Rainfall:\n• Moist wind hits a mountain\n• Forced to rise → cools → condenses → rain on windward side\n• Leeward side gets less rain (rain shadow)\n\n3. Cyclonic/Frontal Rainfall:\n• Warm and cold air masses meet\n• Warm air rises over cold air → cools → condenses → prolonged light rain\n• Common in temperate regions", marks: 5 },
    ],
    examTips: [
      { category: "Diagram", tip: "Always draw labelled diagrams for rainfall types — windward/leeward, warm air rising, etc." },
      { category: "Compare", tip: "Weather vs Climate differentiation is a simple but frequently asked question." },
    ],
    fillInBlanks: [
      { sentence: "Weather occurs in the ___ layer of the atmosphere.", answer: "troposphere" },
      { sentence: "Lines joining places of equal temperature are called ___.", answer: "isotherms" },
      { sentence: "The rain shadow region is on the ___ side of the mountain.", answer: "leeward" },
    ],
    matchPairs: [
      { left: "Troposphere", right: "Weather layer (0-12 km)" },
      { left: "Stratosphere", right: "Ozone layer" },
      { left: "Isobar", right: "Equal pressure line" },
      { left: "Isotherm", right: "Equal temperature line" },
    ],
  },
  "geo-8": {
    solvedExamples: [
      { question: "Differentiate between the Western and Eastern Ghats. (4 marks)", solution: "Western Ghats:\n1. Continuous and unbroken range\n2. Higher average elevation (1000-2500m)\n3. Highest peak: Anaimudi (2695m) in Kerala\n4. Steep western slope, gentle eastern slope\n5. Receives heavy orographic rainfall\n6. Dense tropical evergreen forests\n\nEastern Ghats:\n1. Discontinuous and broken by rivers\n2. Lower average elevation (600-900m)\n3. Highest peak: Mahendragiri (1501m)\n4. Less rainfall\n5. Rivers like Godavari, Krishna, Kaveri cut through them", marks: 4 },
    ],
    examTips: [
      { category: "Compare", tip: "Western vs Eastern Ghats is asked almost every year — prepare at least 5 points of comparison." },
      { category: "Map", tip: "Know locations of major peaks, passes, and physical divisions on an India map." },
    ],
    fillInBlanks: [
      { sentence: "The highest Himalayan range is called ___.", answer: "Himadri" },
      { sentence: "The most fertile soil in the Northern Plains is ___ (new alluvium).", answer: "Khadar" },
      { sentence: "The ___ Plateau is south of the Narmada River.", answer: "Deccan" },
    ],
    matchPairs: [
      { left: "Himadri", right: "Greater Himalayas" },
      { left: "Himachal", right: "Middle Himalayas" },
      { left: "Shiwaliks", right: "Outer Himalayas" },
      { left: "Khadar", right: "New alluvium, most fertile" },
      { left: "Bangar", right: "Old alluvium" },
    ],
  },

  // ===== HISTORY =====
  "hist-2": {
    solvedExamples: [
      { question: "Discuss the causes and effects of the French Revolution. (5 marks)", solution: "Causes:\n1. Social inequality — Three Estates system (clergy, nobility, commoners)\n2. Heavy taxation on the Third Estate (commoners)\n3. Financial crisis due to wars and extravagant spending by Louis XVI\n4. Influence of Enlightenment thinkers (Voltaire, Rousseau, Montesquieu)\n5. Food shortage and rising bread prices\n\nEffects:\n1. End of absolute monarchy in France\n2. Declaration of Rights of Man and Citizen (1789)\n3. Rise of Napoleon Bonaparte\n4. Spread of ideas of liberty, equality, fraternity across Europe\n5. Inspired revolutions worldwide", marks: 5 },
    ],
    examTips: [
      { category: "Dates", tip: "Key dates: French Revolution 1789, American Independence 1776, Civil War 1861-65." },
      { category: "Cause-Effect", tip: "For revolution questions, always structure as Causes → Events → Effects." },
    ],
    fillInBlanks: [
      { sentence: "The French Revolution began in ___.", answer: "1789" },
      { sentence: "The slogan of the French Revolution was 'Liberty, Equality, ___'.", answer: "Fraternity" },
      { sentence: "The American Declaration of Independence was in ___.", answer: "1776" },
    ],
    matchPairs: [
      { left: "1776", right: "American Independence" },
      { left: "1789", right: "French Revolution" },
      { left: "Voltaire", right: "Freedom of speech" },
      { left: "Rousseau", right: "Social Contract" },
      { left: "Abraham Lincoln", right: "Abolished slavery" },
    ],
  },
  "hist-6": {
    solvedExamples: [
      { question: "Discuss the causes and consequences of the Revolt of 1857. (5 marks)", solution: "Causes:\n1. Political: Doctrine of Lapse, annexation of kingdoms\n2. Military: Discrimination against Indian soldiers, greased cartridges (cow/pig fat)\n3. Economic: Exploitation of Indian resources, destruction of Indian industries\n4. Social: Interference with customs, religious practices\n5. Immediate: Mangal Pandey's revolt at Barrackpore (March 1857)\n\nConsequences:\n1. End of East India Company rule — Crown took over (Queen's Proclamation 1858)\n2. Indian Councils Act, greater Indian representation\n3. Indian Army reorganized\n4. Policy of non-interference in religious matters\n5. Rise of Indian nationalism", marks: 5 },
    ],
    examTips: [
      { category: "Structure", tip: "For 1857 revolt: Political, Military, Economic, Social causes — use this framework." },
      { category: "Names", tip: "Know key leaders: Mangal Pandey, Rani Lakshmibai, Tantia Tope, Bahadur Shah Zafar, Nana Sahib." },
    ],
    fillInBlanks: [
      { sentence: "The Revolt of 1857 is also called the First War of ___.", answer: "Independence" },
      { sentence: "___ fired the first shot of the 1857 revolt at Barrackpore.", answer: "Mangal Pandey" },
      { sentence: "After 1857, India was governed directly by the British ___.", answer: "Crown" },
    ],
    matchPairs: [
      { left: "Mangal Pandey", right: "Barrackpore" },
      { left: "Rani Lakshmibai", right: "Jhansi" },
      { left: "Nana Sahib", right: "Kanpur" },
      { left: "Bahadur Shah Zafar", right: "Delhi" },
      { left: "Tantia Tope", right: "Military leader" },
    ],
  },
  "hist-8": {
    solvedExamples: [
      { question: "Explain Gandhi's three major movements for India's independence. (5 marks)", solution: "1. Non-Cooperation Movement (1920-22):\n• Boycott of British goods, courts, schools\n• Promotion of khadi and swadeshi goods\n• Called off after Chauri Chaura violence (1922)\n\n2. Civil Disobedience Movement (1930-34):\n• Salt March: Gandhi walked 388 km from Sabarmati to Dandi\n• Broke salt law by making salt from sea water\n• Mass participation, including women\n\n3. Quit India Movement (1942):\n• 'Do or Die' — demand for immediate British withdrawal\n• Leaders arrested; spontaneous protests across India\n• Showed British that Indian independence was inevitable", marks: 5 },
    ],
    examTips: [
      { category: "Timeline", tip: "NCM (1920), CDM (1930), QIM (1942) — remember chronological order with key dates." },
      { category: "Significance", tip: "For each movement: know the cause, method, outcome, and why it was called off." },
    ],
    fillInBlanks: [
      { sentence: "The Salt March took place in ___.", answer: "1930" },
      { sentence: "Gandhi's slogan for the Quit India Movement was '___'.", answer: "Do or Die" },
      { sentence: "The Indian National Congress was founded in ___.", answer: "1885" },
    ],
    matchPairs: [
      { left: "1920", right: "Non-Cooperation Movement" },
      { left: "1930", right: "Civil Disobedience / Salt March" },
      { left: "1942", right: "Quit India Movement" },
      { left: "1885", right: "INC founded" },
      { left: "1947", right: "Independence" },
    ],
  },
  "hist-9": {
    solvedExamples: [
      { question: "Explain the legislative process of passing a bill in Parliament. (4 marks)", solution: "Steps to pass a bill:\n1. First Reading: Bill introduced; title and objectives read\n2. Second Reading: General discussion; detailed clause-by-clause examination by committee\n3. Third Reading: Bill put to vote; passed by simple majority\n4. Sent to other House: Same three readings in the other house\n5. President's Assent: After both houses pass, sent to President for assent\n\nMoney Bills can only be introduced in Lok Sabha. Rajya Sabha can delay a Money Bill for maximum 14 days.", marks: 4 },
    ],
    examTips: [
      { category: "Compare", tip: "Lok Sabha vs Rajya Sabha comparison is asked every year — prepare at least 6 points." },
    ],
    fillInBlanks: [
      { sentence: "The ___ presides over Lok Sabha sessions.", answer: "Speaker" },
      { sentence: "Money bills can only be introduced in ___.", answer: "Lok Sabha" },
      { sentence: "The maximum strength of Lok Sabha is ___.", answer: "552" },
    ],
    matchPairs: [
      { left: "Lok Sabha", right: "House of the People" },
      { left: "Rajya Sabha", right: "Council of States" },
      { left: "Speaker", right: "Presides over Lok Sabha" },
      { left: "Vice-President", right: "Chairs Rajya Sabha" },
    ],
  },
  "hist-12": {
    solvedExamples: [
      { question: "Discuss the composition and functions of the Security Council. (4 marks)", solution: "Composition:\n• 15 members total\n• 5 Permanent members: USA, UK, France, Russia, China (P5)\n• 10 Non-permanent members: elected by General Assembly for 2-year terms\n\nFunctions:\n1. Maintains international peace and security\n2. Investigates disputes between nations\n3. Recommends methods of settlement\n4. Can impose economic sanctions on nations\n5. Can authorize use of military force\n6. Recommends admission of new members\n\nVeto Power: Any permanent member can block a resolution with a single 'no' vote.", marks: 4 },
    ],
    examTips: [
      { category: "Facts", tip: "Know the 5 permanent members and their veto power — this is tested every year." },
      { category: "Agencies", tip: "UN agencies with headquarters: UNESCO (Paris), WHO (Geneva), UNICEF (New York)." },
    ],
    fillInBlanks: [
      { sentence: "The UN was established in ___.", answer: "1945" },
      { sentence: "The Security Council has ___ permanent members.", answer: "5" },
      { sentence: "The ICJ is located in ___.", answer: "The Hague" },
    ],
    matchPairs: [
      { left: "General Assembly", right: "All 193 member nations" },
      { left: "Security Council", right: "Peace and security" },
      { left: "ICJ", right: "Legal disputes between nations" },
      { left: "UNESCO", right: "Education and culture" },
      { left: "UNICEF", right: "Children's welfare" },
    ],
  },

  // ===== COMPUTER STUDIES =====
  "comp-1": {
    solvedExamples: [
      { question: "Convert 255₁₀ to binary and hexadecimal. (3 marks)", solution: "Decimal to Binary:\n255 ÷ 2 = 127 R 1\n127 ÷ 2 = 63 R 1\n63 ÷ 2 = 31 R 1\n31 ÷ 2 = 15 R 1\n15 ÷ 2 = 7 R 1\n7 ÷ 2 = 3 R 1\n3 ÷ 2 = 1 R 1\n1 ÷ 2 = 0 R 1\n\n255₁₀ = 11111111₂ (read remainders bottom-up)\n\nDecimal to Hexadecimal:\n255 ÷ 16 = 15 R 15\n15 ÷ 16 = 0 R 15\n\n15 = F in hex\n255₁₀ = FF₁₆", marks: 3 },
    ],
    examTips: [
      { category: "Method", tip: "For conversions, always show the division steps — method marks are given even if final answer has a small error." },
      { category: "Shortcut", tip: "Binary to Hex: group 4 bits from right. Binary to Octal: group 3 bits from right." },
    ],
    fillInBlanks: [
      { sentence: "Binary uses only digits ___ and ___.", answer: "0", hint: "Two digits" },
      { sentence: "Hexadecimal uses base ___.", answer: "16" },
      { sentence: "1 byte = ___ bits.", answer: "8" },
    ],
    matchPairs: [
      { left: "Binary", right: "Base 2" },
      { left: "Octal", right: "Base 8" },
      { left: "Decimal", right: "Base 10" },
      { left: "Hexadecimal", right: "Base 16" },
    ],
  },
  "comp-3": {
    solvedExamples: [
      { question: "Write a Python program to convert Celsius to Fahrenheit. (3 marks)", solution: "# Program to convert Celsius to Fahrenheit\n\ncelsius = float(input('Enter temperature in Celsius: '))\nfahrenheit = (celsius * 9/5) + 32\nprint(f'{celsius}°C = {fahrenheit}°F')\n\n# Sample Output:\n# Enter temperature in Celsius: 37\n# 37.0°C = 98.6°F\n\n# Formula: F = (C × 9/5) + 32", marks: 3 },
    ],
    examTips: [
      { category: "Syntax", tip: "Remember: input() always returns string. Use int() or float() for numeric operations." },
      { category: "Output", tip: "Show clean output with labels. Use f-strings: f'{variable} text'." },
    ],
    fillInBlanks: [
      { sentence: "print() in Python is used to display ___.", answer: "output" },
      { sentence: "input() function always returns a ___ type.", answer: "string", hint: "str" },
      { sentence: "** operator is used for ___.", answer: "exponentiation", hint: "Power" },
    ],
    matchPairs: [
      { left: "int", right: "Whole numbers" },
      { left: "float", right: "Decimal numbers" },
      { left: "str", right: "Text data" },
      { left: "bool", right: "True or False" },
    ],
  },
  "comp-5": {
    solvedExamples: [
      { question: "Write a Python program to check if a number is prime. (4 marks)", solution: "# Program to check if a number is prime\n\nnum = int(input('Enter a number: '))\nis_prime = True\n\nif num < 2:\n    is_prime = False\nelse:\n    for i in range(2, int(num**0.5) + 1):\n        if num % i == 0:\n            is_prime = False\n            break\n\nif is_prime:\n    print(f'{num} is a prime number')\nelse:\n    print(f'{num} is not a prime number')\n\n# Logic: Check divisibility from 2 to √n\n# If divisible by any, not prime. Otherwise, prime.", marks: 4 },
    ],
    examTips: [
      { category: "Logic", tip: "For prime check, only test up to √n — this shows efficient programming knowledge." },
      { category: "Pattern", tip: "Practice star patterns with nested loops — they're frequently asked in practical exams." },
    ],
    fillInBlanks: [
      { sentence: "range(1, 10, 2) generates ___, 3, 5, 7, 9.", answer: "1" },
      { sentence: "The ___ statement exits a loop immediately.", answer: "break" },
      { sentence: "The ___ statement skips the current iteration.", answer: "continue" },
    ],
    matchPairs: [
      { left: "for loop", right: "Iterates over a sequence" },
      { left: "while loop", right: "Repeats while condition true" },
      { left: "break", right: "Exits loop" },
      { left: "continue", right: "Skips to next iteration" },
      { left: "range(5)", right: "0, 1, 2, 3, 4" },
    ],
  },
  "comp-7": {
    solvedExamples: [
      { question: "What is phishing? How can you protect yourself from cyber crimes? (4 marks)", solution: "Phishing is a type of cyber crime where attackers send fake emails or create fake websites that look legitimate to trick users into revealing personal information (passwords, credit card numbers, etc.).\n\nProtection measures:\n1. Never click on suspicious links in emails\n2. Verify website URLs — look for https:// and the padlock icon\n3. Use strong, unique passwords for each account\n4. Enable two-factor authentication (2FA)\n5. Keep software and antivirus updated\n6. Never share OTP or banking details over phone/email\n7. Be cautious of offers that seem too good to be true\n8. Report suspicious emails to authorities", marks: 4 },
    ],
    examTips: [
      { category: "Definition", tip: "Know definitions of: phishing, hacking, cyber bullying, identity theft, malware." },
      { category: "Application", tip: "Safety measures questions want practical, actionable points — give at least 5." },
    ],
    fillInBlanks: [
      { sentence: "___ is using fake emails/websites to steal personal information.", answer: "Phishing" },
      { sentence: "Your online trail of activities is called your digital ___.", answer: "footprint" },
      { sentence: "Rules of good behavior on the internet are called ___.", answer: "netiquette" },
    ],
    matchPairs: [
      { left: "Phishing", right: "Fake emails to steal data" },
      { left: "Malware", right: "Malicious software" },
      { left: "Cyber bullying", right: "Online harassment" },
      { left: "2FA", right: "Two-factor authentication" },
      { left: "VPN", right: "Virtual Private Network" },
    ],
  },
};
