export interface SolvedExample {
  question: string;
  solution: string;
  marks?: number;
}

export interface ExamTip {
  category: string;
  tip: string;
}

export interface FillBlank {
  sentence: string;
  answer: string;
  hint?: string;
}

export interface MatchPair {
  left: string;
  right: string;
}

export interface ChapterContent {
  chapterId: string;
  introduction: string;
  sections: { heading: string; content: string }[];
  keyDefinitions: { term: string; definition: string }[];
  didYouKnow: string[];
  revisionSummary: string[];
  practiceQuestions: { type: "short" | "long" | "icse"; question: string }[];
  solvedExamples?: SolvedExample[];
  examTips?: ExamTip[];
  markingScheme?: string[];
  fillInBlanks?: FillBlank[];
  matchPairs?: MatchPair[];
}

export const chapterContents: Record<string, ChapterContent> = {
  // =============================================
  // ===== BIOLOGY =====
  // =============================================
  "bio-1": {
    chapterId: "bio-1",
    introduction: "Plants need water, minerals, and food to survive. This chapter explores how plants transport these essential substances through specialized tissues — xylem and phloem — using processes like osmosis, diffusion, and transpiration.",
    sections: [
      { heading: "Diffusion", content: "Diffusion is the movement of molecules from a region of higher concentration to a region of lower concentration. It occurs in gases and liquids. Example: The smell of perfume spreads across a room due to diffusion of perfume molecules through air. In plants, CO₂ enters and O₂ exits leaves through stomata by diffusion." },
      { heading: "Osmosis", content: "Osmosis is the movement of water molecules from a dilute solution (higher water concentration) to a concentrated solution (lower water concentration) through a semipermeable membrane. This is how root cells absorb water from the soil. The root hair cells have a lower water concentration than the soil water, so water enters by osmosis. Root pressure helps push water upward." },
      { heading: "Transpiration", content: "Transpiration is the loss of water vapour from the aerial parts of a plant, mainly through stomata on leaves. It creates a suction pull (transpiration pull) that draws water upward through the xylem. Factors affecting transpiration: temperature, humidity, wind speed, and light intensity. Transpiration also helps in cooling the plant and maintaining mineral transport." },
      { heading: "Xylem and Phloem", content: "Xylem is responsible for transporting water and dissolved minerals from roots to leaves (upward transport). Xylem vessels are dead, hollow tubes with lignified walls. Phloem transports prepared food (sucrose) from leaves to other parts of the plant (translocation). Phloem consists of living sieve tubes and companion cells. Together, xylem and phloem form the vascular bundle." },
      { heading: "Mineral Nutrition", content: "Plants require macro-nutrients (nitrogen, phosphorus, potassium, calcium, magnesium, sulphur) in large quantities and micro-nutrients (iron, manganese, zinc, copper, boron, molybdenum) in small quantities. Deficiency of nitrogen causes yellowing of leaves (chlorosis). Deficiency of phosphorus causes poor root development. Deficiency of potassium causes weak stems." },
    ],
    keyDefinitions: [
      { term: "Diffusion", definition: "Movement of molecules from a region of higher concentration to lower concentration." },
      { term: "Osmosis", definition: "Movement of water from a dilute to a concentrated solution through a semipermeable membrane." },
      { term: "Transpiration", definition: "Loss of water vapour from the aerial parts of a plant, mainly through stomata." },
      { term: "Xylem", definition: "Plant tissue that transports water and minerals upward from roots to leaves." },
      { term: "Phloem", definition: "Plant tissue that transports prepared food from leaves to other plant parts." },
      { term: "Root Pressure", definition: "Pressure in the roots that helps push water upward through the xylem." },
      { term: "Translocation", definition: "Transport of food materials from leaves to other parts of the plant through phloem." },
    ],
    didYouKnow: [
      "A large tree can transpire over 400 litres of water per day!",
      "Xylem vessels in a tall tree can transport water up to heights of over 100 metres against gravity.",
      "The Venus flytrap uses rapid changes in water pressure (turgor) to snap shut on insects in less than a second!",
    ],
    revisionSummary: [
      "Diffusion: molecules move from high to low concentration.",
      "Osmosis: water moves through a semipermeable membrane from dilute to concentrated solution.",
      "Transpiration creates a suction pull that draws water up through xylem.",
      "Xylem carries water up; Phloem carries food down (translocation).",
      "Macro-nutrients needed in large amounts; micro-nutrients in small amounts.",
    ],
    practiceQuestions: [
      { type: "short", question: "Define osmosis. How does it differ from diffusion?" },
      { type: "short", question: "Name the tissue that transports water in plants." },
      { type: "short", question: "List three factors affecting transpiration." },
      { type: "long", question: "Describe the structure and function of xylem and phloem." },
      { type: "long", question: "Explain the process of transpiration and its importance to plants." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Root hairs are important for water absorption in plants." },
      { type: "icse", question: "[ICSE Board Style] Differentiate between xylem and phloem. (Any 4 points)" },
    ],
    solvedExamples: [
      { question: "Differentiate between xylem and phloem. (4 marks)", solution: "Xylem:\n1. Transports water and minerals upward\n2. Made of dead cells (vessels and tracheids)\n3. Transport is mainly physical (transpiration pull)\n4. Located in the centre of vascular bundle\n\nPhloem:\n1. Transports prepared food (sucrose) both ways\n2. Made of living cells (sieve tubes and companion cells)\n3. Transport requires metabolic energy\n4. Located on the outer side of vascular bundle", marks: 4 },
      { question: "Explain the process of transpiration and its significance. (5 marks)", solution: "Transpiration is the loss of water vapour from the aerial parts of a plant, mainly through stomata on leaves.\n\nProcess:\n1. Water is absorbed by root hairs through osmosis\n2. It moves upward through xylem vessels\n3. In leaves, water evaporates from mesophyll cells into air spaces\n4. Water vapour exits through stomatal pores\n\nSignificance:\n• Creates transpiration pull — the main force drawing water upward\n• Helps in absorption of minerals dissolved in soil water\n• Cools the plant surface (like sweating in humans)\n• Maintains turgidity of cells\n• Helps in distribution of minerals throughout the plant", marks: 5 },
      { question: "Define osmosis. An experiment shows wilting of a plant kept in concentrated salt solution. Explain why. (3 marks)", solution: "Osmosis: Movement of water molecules from a region of higher water concentration (dilute solution) to a region of lower water concentration (concentrated solution) through a semipermeable membrane.\n\nExplanation of wilting:\n1. The concentrated salt solution outside the root cells has lower water concentration than inside the cells\n2. Water moves OUT of the root cells by exosmosis\n3. Cells lose water, become flaccid (lose turgidity)\n4. The plant wilts because cells can no longer maintain their shape", marks: 3 },
    ],
    examTips: [
      { category: "Diagram", tip: "Always draw labelled diagrams for xylem and phloem cross-sections — this can fetch 2 extra marks." },
      { category: "Definition", tip: "Osmosis definition must include 'semipermeable membrane' — without it, you lose marks." },
      { category: "Compare", tip: "For differentiation questions, use a table format with at least 4 points for full marks." },
      { category: "Experiment", tip: "Questions on transpiration experiments (cobalt chloride paper) are frequently asked — practice the procedure." },
    ],
    markingScheme: [
      "Definition questions: 1-2 marks — write concise, precise definitions with key terms",
      "Differentiation: 4 marks — use table format, minimum 4 points of comparison",
      "Diagram-based: 2-3 marks — neat, labelled diagrams with title",
      "Experiment questions: 3-5 marks — aim, materials, procedure, observation, conclusion",
      "Give reasons: 2 marks — state the fact + explain the science behind it",
    ],
    fillInBlanks: [
      { sentence: "The movement of water from a dilute to concentrated solution through a semipermeable membrane is called ___.", answer: "osmosis", hint: "Starts with 'o'" },
      { sentence: "___ is the plant tissue that transports water and minerals upward.", answer: "Xylem", hint: "Starts with 'X'" },
      { sentence: "The transport of food materials in phloem is called ___.", answer: "translocation", hint: "Starts with 'trans'" },
      { sentence: "Loss of water vapour from aerial parts of a plant is called ___.", answer: "transpiration", hint: "Through stomata" },
      { sentence: "Elements needed in large quantities by plants are called ___.", answer: "macro-nutrients", hint: "Macro means large" },
    ],
    matchPairs: [
      { left: "Xylem", right: "Transports water upward" },
      { left: "Phloem", right: "Transports food" },
      { left: "Stomata", right: "Site of transpiration" },
      { left: "Root hair", right: "Absorbs water by osmosis" },
      { left: "Translocation", right: "Movement of food in phloem" },
    ],
  },
  "bio-2": {
    chapterId: "bio-2",
    introduction: "Reproduction is the biological process by which organisms produce new individuals of the same species, ensuring the continuation of life. Plants and animals use different methods — both asexual and sexual — to reproduce.",
    sections: [
      { heading: "Asexual Reproduction in Plants", content: "Asexual reproduction produces offspring from a single parent without gametes. Types include: Binary fission (e.g., Amoeba splits into two), Budding (e.g., yeast, Hydra develop buds), Fragmentation (e.g., Spirogyra breaks into fragments), Spore formation (e.g., ferns, Mucor produce spores), Vegetative propagation (stems, roots, or leaves grow new plants — e.g., potato tubers, onion bulbs, Bryophyllum leaves)." },
      { heading: "Artificial Propagation", content: "Humans propagate plants artificially through cutting (e.g., rose), layering (e.g., jasmine), grafting (e.g., mango), and tissue culture (growing plants from a small piece of tissue in a nutrient medium under sterile conditions). Tissue culture allows mass production of disease-free plants." },
      { heading: "Sexual Reproduction in Plants", content: "Sexual reproduction involves the fusion of male and female gametes. A typical flower has four whorls: calyx (sepals), corolla (petals), androecium (stamens — male), and gynoecium (pistil — female). The stamen produces pollen grains (male gametes). The pistil contains the ovary with ovules (female gametes)." },
      { heading: "Pollination and Fertilization", content: "Pollination is the transfer of pollen from anther to stigma. Self-pollination occurs within the same flower; cross-pollination occurs between different flowers of the same species. Agents: insects, wind, water, birds. After pollination, the pollen tube grows down to the ovule, and fertilization occurs — the male gamete fuses with the egg cell to form a zygote. The ovule develops into a seed and the ovary into a fruit." },
      { heading: "Reproduction in Humans", content: "Male reproductive system: testes produce sperm; female reproductive system: ovaries produce ova (eggs). Fertilization occurs in the fallopian tube when a sperm fuses with an ovum to form a zygote. The zygote divides and implants in the uterus, developing into an embryo and then a foetus." },
    ],
    keyDefinitions: [
      { term: "Binary Fission", definition: "Asexual reproduction where an organism splits into two equal halves." },
      { term: "Pollination", definition: "Transfer of pollen grains from the anther to the stigma of a flower." },
      { term: "Fertilization", definition: "Fusion of male and female gametes to form a zygote." },
      { term: "Tissue Culture", definition: "Growing plants from a small piece of tissue in a nutrient medium under sterile conditions." },
      { term: "Zygote", definition: "The cell formed by the fusion of male and female gametes." },
    ],
    didYouKnow: [
      "A single orchid capsule can contain up to 3 million seeds — the smallest seeds in the plant kingdom!",
      "Starfish can regenerate an entire new body from just one arm — an extreme form of asexual reproduction.",
      "The world's largest flower, Rafflesia arnoldii, can grow up to 1 metre in diameter and smells like rotting flesh to attract pollinators!",
    ],
    revisionSummary: [
      "Asexual reproduction: single parent, no gametes (fission, budding, fragmentation, spores, vegetative).",
      "Artificial propagation: cutting, layering, grafting, tissue culture.",
      "Flower parts: sepals, petals, stamens (male), pistil (female).",
      "Pollination → Pollen tube growth → Fertilization → Seed formation.",
      "In humans: sperm + ovum = zygote → embryo → foetus.",
    ],
    practiceQuestions: [
      { type: "short", question: "Name four methods of asexual reproduction in plants with examples." },
      { type: "short", question: "Differentiate between self-pollination and cross-pollination." },
      { type: "long", question: "Describe the process of fertilization in flowering plants." },
      { type: "long", question: "Explain tissue culture and its advantages." },
      { type: "icse", question: "[ICSE Board Style] Draw a labelled diagram of a typical flower showing all four whorls." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Cross-pollination leads to healthier offspring than self-pollination." },
    ],
  },
  "bio-3": {
    chapterId: "bio-3",
    introduction: "An ecosystem is a community of living organisms interacting with each other and their non-living environment. Understanding ecosystems helps us appreciate biodiversity and the importance of ecological balance.",
    sections: [
      { heading: "Components of an Ecosystem", content: "An ecosystem has two main components: Biotic (living) — producers, consumers, decomposers; and Abiotic (non-living) — sunlight, water, air, soil, temperature. Producers (green plants) make food by photosynthesis. Consumers (herbivores, carnivores, omnivores) eat other organisms. Decomposers (bacteria, fungi) break down dead matter and recycle nutrients." },
      { heading: "Food Chains and Food Webs", content: "A food chain shows the transfer of energy from one organism to another: Grass → Grasshopper → Frog → Snake → Eagle. Each level is called a trophic level. A food web is an interconnection of many food chains in an ecosystem." },
      { heading: "Energy Flow", content: "Energy flows in one direction — from the sun to producers to consumers. At each trophic level, about 10% of energy is transferred to the next level (10% law). The rest is lost as heat." },
      { heading: "Ecological Balance", content: "Ecological balance is maintained when the number of organisms at each trophic level remains relatively stable. Human activities like deforestation, pollution, and overexploitation disturb this balance. Conservation efforts include afforestation, wildlife protection, and sustainable use of resources." },
    ],
    keyDefinitions: [
      { term: "Ecosystem", definition: "A community of living organisms interacting with their non-living environment." },
      { term: "Food Chain", definition: "A linear sequence showing the transfer of energy from one organism to another." },
      { term: "Food Web", definition: "An interconnection of multiple food chains in an ecosystem." },
      { term: "Trophic Level", definition: "Each step in a food chain representing a feeding level." },
      { term: "Decomposer", definition: "An organism that breaks down dead organic matter and recycles nutrients." },
    ],
    didYouKnow: [
      "The Amazon Rainforest produces about 20% of the world's oxygen!",
      "A single tree can be home to hundreds of species of insects, birds, and mammals.",
      "If all decomposers disappeared, dead matter would pile up and nutrients would not be recycled!",
    ],
    revisionSummary: [
      "Ecosystem = biotic (living) + abiotic (non-living) components.",
      "Food chain: Producer → Primary consumer → Secondary consumer → Tertiary consumer.",
      "Food web = interconnected food chains.",
      "10% law: only 10% of energy passes to the next trophic level.",
      "Human activities disturb ecological balance; conservation is essential.",
    ],
    practiceQuestions: [
      { type: "short", question: "Differentiate between biotic and abiotic components with examples." },
      { type: "short", question: "What is the 10% law of energy transfer?" },
      { type: "long", question: "Explain the difference between a food chain and a food web with examples." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Food chains rarely have more than 4-5 trophic levels." },
    ],
  },
  "bio-4": {
    chapterId: "bio-4",
    introduction: "The endocrine system is a network of glands that produce hormones — chemical messengers that regulate growth, metabolism, reproduction, and other body functions.",
    sections: [
      { heading: "Endocrine Glands", content: "Endocrine glands are ductless glands that secrete hormones directly into the bloodstream. Major glands: Pituitary (master gland), Thyroid, Parathyroid, Adrenal, Pancreas, Gonads (testes/ovaries), Pineal, and Thymus." },
      { heading: "Important Hormones", content: "Pituitary: Growth hormone (GH). Thyroid: Thyroxine (controls metabolism; needs iodine). Adrenal: Adrenaline (fight-or-flight response). Pancreas: Insulin (lowers blood sugar) and Glucagon (raises blood sugar). Testes: Testosterone. Ovaries: Oestrogen and Progesterone." },
      { heading: "Hormonal Disorders", content: "Dwarfism: too little growth hormone. Gigantism: too much growth hormone. Goitre: iodine deficiency → enlarged thyroid. Diabetes mellitus: insufficient insulin → high blood sugar. Cretinism: thyroid deficiency in children causing stunted growth." },
    ],
    keyDefinitions: [
      { term: "Hormone", definition: "A chemical messenger secreted by endocrine glands into the bloodstream to regulate body functions." },
      { term: "Endocrine Gland", definition: "A ductless gland that secretes hormones directly into the blood." },
      { term: "Insulin", definition: "Hormone produced by the pancreas that lowers blood sugar levels." },
      { term: "Adrenaline", definition: "Hormone from adrenal glands that prepares the body for 'fight or flight' response." },
    ],
    didYouKnow: [
      "The pituitary gland is only the size of a pea but controls all other endocrine glands!",
      "Adrenaline can give you 'superhuman' strength in emergencies.",
      "Insulin was discovered in 1921 by Banting and Best, saving millions of diabetics worldwide.",
    ],
    revisionSummary: [
      "Endocrine glands secrete hormones directly into the bloodstream (ductless).",
      "Pituitary = master gland; Thyroid = metabolism; Adrenal = fight/flight.",
      "Insulin lowers blood sugar; Glucagon raises it.",
      "Disorders: Dwarfism, Gigantism, Goitre, Diabetes, Cretinism.",
    ],
    practiceQuestions: [
      { type: "short", question: "What is the function of insulin?" },
      { type: "short", question: "Name the hormone responsible for the fight-or-flight response." },
      { type: "long", question: "Describe the functions of the pituitary gland. Why is it called the master gland?" },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Iodine deficiency leads to goitre." },
    ],
  },
  "bio-5": {
    chapterId: "bio-5",
    introduction: "The circulatory system is your body's transport network. It delivers oxygen, nutrients, and hormones to every cell and carries away waste products like carbon dioxide.",
    sections: [
      { heading: "Structure of the Heart", content: "The human heart is a muscular organ about the size of your fist, located slightly to the left in your chest. It has four chambers: two upper atria and two lower ventricles. The right side pumps deoxygenated blood to the lungs (pulmonary circulation), while the left side pumps oxygenated blood to the body (systemic circulation). The septum separates left and right sides." },
      { heading: "Blood Vessels", content: "Three types: Arteries carry oxygenated blood away from the heart (except pulmonary artery) — thick, elastic walls. Veins carry deoxygenated blood back (except pulmonary vein) — thinner walls with valves. Capillaries are tiny vessels where exchange of O₂, nutrients, and CO₂ occurs." },
      { heading: "Double Circulation", content: "Pulmonary circulation: Right ventricle → Pulmonary artery → Lungs → Pulmonary vein → Left atrium. Systemic circulation: Left ventricle → Aorta → Body → Vena cava → Right atrium." },
      { heading: "Composition of Blood", content: "Plasma (55%) — liquid carrying nutrients, hormones, waste. Red Blood Cells (RBCs) — contain haemoglobin. White Blood Cells (WBCs) — fight infections. Platelets — blood clotting." },
      { heading: "Blood Groups", content: "Four groups: A, B, AB, O based on antigens. O = universal donor; AB = universal recipient. Rh factor (+/-)." },
      { heading: "The Lymphatic System", content: "Lymph is a colourless fluid draining from tissues back to the bloodstream via lymph vessels. Lymph nodes filter harmful substances. Plays crucial role in immunity and fluid balance." },
    ],
    keyDefinitions: [
      { term: "Artery", definition: "A blood vessel that carries blood away from the heart, usually oxygenated." },
      { term: "Vein", definition: "A blood vessel that carries blood toward the heart, usually deoxygenated." },
      { term: "Capillary", definition: "The smallest blood vessel where exchange of materials occurs." },
      { term: "Haemoglobin", definition: "A protein in red blood cells that binds to oxygen and gives blood its red colour." },
      { term: "Double Circulation", definition: "Blood passes through the heart twice in one complete circulation." },
      { term: "Septum", definition: "The muscular wall separating left and right sides of the heart." },
      { term: "Plasma", definition: "The liquid component of blood carrying cells, nutrients, and waste." },
    ],
    didYouKnow: [
      "Your heart beats about 100,000 times a day — over 36 million beats per year!",
      "Blood vessels stretched end to end would circle the Earth more than twice (96,000+ km)!",
      "RBCs live for about 120 days; your body makes 2 million new ones every second!",
    ],
    revisionSummary: [
      "Heart: 4 chambers — 2 atria, 2 ventricles; right = deoxygenated, left = oxygenated.",
      "Double circulation: pulmonary + systemic.",
      "Arteries (away), Veins (toward, valves), Capillaries (exchange).",
      "Blood = Plasma + RBCs + WBCs + Platelets.",
      "Blood groups: A, B, AB (universal recipient), O (universal donor).",
    ],
    practiceQuestions: [
      { type: "short", question: "Name the four chambers of the human heart." },
      { type: "short", question: "What is the function of haemoglobin?" },
      { type: "long", question: "Describe double circulation with a diagram." },
      { type: "long", question: "Explain the composition of blood and function of each component." },
      { type: "icse", question: "[ICSE Board Style] Why is the left ventricle wall thicker than the right?" },
    ],
  },
  "bio-6": {
    chapterId: "bio-6",
    introduction: "The nervous system is your body's communication network — transmitting signals between different parts of the body to coordinate voluntary and involuntary actions.",
    sections: [
      { heading: "The Neuron", content: "A neuron has: Cell body (with nucleus), Dendrites (receive signals), Axon (transmit signals, covered by myelin sheath). The gap between neurons is the synapse where neurotransmitters are released." },
      { heading: "The Brain", content: "Three main parts: Cerebrum (thinking, memory, voluntary actions), Cerebellum (balance, coordination), Medulla Oblongata (involuntary actions — breathing, heartbeat). Protected by skull and meninges." },
      { heading: "The Spinal Cord", content: "Runs inside the vertebral column. Acts as a relay centre between brain and body. Controls reflex actions independently." },
      { heading: "Reflex Actions", content: "Quick, automatic responses without conscious thought. Reflex arc: Stimulus → Receptor → Sensory nerve → Spinal cord → Motor nerve → Effector (muscle). Example: pulling hand from hot object." },
    ],
    keyDefinitions: [
      { term: "Neuron", definition: "The basic structural and functional unit of the nervous system." },
      { term: "Synapse", definition: "The gap between two neurons where nerve impulses are transmitted." },
      { term: "Reflex Arc", definition: "The pathway followed by nerve impulses during a reflex action." },
      { term: "Cerebrum", definition: "Largest part of the brain; responsible for thinking and voluntary actions." },
      { term: "Myelin Sheath", definition: "Fatty covering on axon that insulates and speeds up nerve impulse transmission." },
    ],
    didYouKnow: [
      "The human brain contains about 86 billion neurons!",
      "Nerve signals can travel at speeds up to 120 metres per second.",
      "Your brain uses 20% of your body's energy despite being only 2% of body weight.",
    ],
    revisionSummary: [
      "Neuron = cell body + dendrites + axon (with myelin sheath).",
      "Brain: Cerebrum (thinking), Cerebellum (balance), Medulla (involuntary).",
      "Spinal cord: relay centre + controls reflexes.",
      "Reflex arc: Stimulus → Receptor → Sensory nerve → Spinal cord → Motor nerve → Effector.",
    ],
    practiceQuestions: [
      { type: "short", question: "Draw and label the structure of a neuron." },
      { type: "short", question: "What is a reflex action? Give two examples." },
      { type: "long", question: "Describe the three main parts of the brain and their functions." },
      { type: "icse", question: "[ICSE Board Style] Differentiate between voluntary and involuntary actions." },
    ],
  },
  "bio-7": {
    chapterId: "bio-7",
    introduction: "Health is a state of complete physical, mental, and social well-being and not merely the absence of disease. Hygiene refers to practices that help maintain health and prevent disease.",
    sections: [
      { heading: "Types of Diseases", content: "Communicable (infectious) diseases spread from person to person through pathogens — bacteria (tuberculosis, cholera), viruses (COVID-19, influenza, dengue), fungi (ringworm), protozoa (malaria, amoebic dysentery). Non-communicable diseases are not spread person-to-person — diabetes, cancer, heart disease, asthma." },
      { heading: "Modes of Transmission", content: "Direct contact (skin infections, STDs), Airborne (TB, influenza — droplets), Waterborne (cholera, typhoid — contaminated water), Vector-borne (malaria — mosquitoes, plague — fleas), Contaminated food (food poisoning, hepatitis A)." },
      { heading: "Immunity", content: "Immunity is the body's ability to resist infections. Innate immunity: present from birth (skin, mucus, stomach acid). Acquired immunity: develops after exposure — Active (body produces antibodies after infection or vaccination), Passive (antibodies received from mother or injection)." },
      { heading: "Vaccination", content: "A vaccine contains dead or weakened pathogens that stimulate the immune system to produce antibodies without causing disease. This provides long-lasting immunity. Examples: BCG (TB), OPV (polio), MMR (measles, mumps, rubella). Edward Jenner developed the first vaccine (smallpox) in 1796." },
      { heading: "Personal Hygiene", content: "Regular handwashing, brushing teeth twice daily, bathing regularly, wearing clean clothes, drinking clean water, eating balanced diet, regular exercise, adequate sleep. Community hygiene: proper sewage disposal, clean water supply, waste management." },
      { heading: "First Aid", content: "First aid is the immediate help given to an injured or ill person before medical help arrives. Burns: cool with running water. Bleeding: apply pressure with clean cloth. Fractures: immobilize the area. Snakebite: keep calm, immobilize limb, seek medical help immediately." },
    ],
    keyDefinitions: [
      { term: "Communicable Disease", definition: "A disease that can spread from one person to another through pathogens." },
      { term: "Pathogen", definition: "A microorganism that causes disease (bacteria, virus, fungus, protozoa)." },
      { term: "Immunity", definition: "The body's ability to resist or fight infections." },
      { term: "Vaccine", definition: "A preparation of dead/weakened pathogens that stimulates immunity without causing disease." },
      { term: "Antibody", definition: "A protein produced by the immune system to fight specific pathogens." },
    ],
    didYouKnow: [
      "Handwashing with soap can reduce diarrheal diseases by 40% and respiratory infections by 20%!",
      "Edward Jenner's smallpox vaccine in 1796 was the world's first vaccine, and smallpox was officially eradicated by 1980.",
      "Your body produces about 10 billion white blood cells every day to fight infections!",
    ],
    revisionSummary: [
      "Communicable diseases spread through pathogens; non-communicable don't.",
      "Transmission: direct contact, airborne, waterborne, vector-borne, food.",
      "Innate immunity (from birth) vs Acquired immunity (active/passive).",
      "Vaccines stimulate antibody production for long-lasting immunity.",
      "Hygiene: handwashing, clean water, balanced diet, exercise, sleep.",
    ],
    practiceQuestions: [
      { type: "short", question: "Differentiate between communicable and non-communicable diseases with examples." },
      { type: "short", question: "What is a vaccine? How does it work?" },
      { type: "long", question: "Explain the different modes of disease transmission with examples." },
      { type: "long", question: "Describe innate and acquired immunity." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: We should wash hands before eating." },
    ],
  },
  "bio-8": {
    chapterId: "bio-8",
    introduction: "Food production involves improving methods of farming and animal rearing to increase yield and quality. Modern agriculture combines traditional knowledge with scientific techniques.",
    sections: [
      { heading: "Crop Improvement", content: "Methods: Selection (choosing best plants for seeds), Hybridization (crossing two varieties for desired traits), Genetic modification (altering genes). Goals: higher yield, disease resistance, shorter maturity period, better nutritional quality." },
      { heading: "Crop Management", content: "Preparation of soil (ploughing, levelling), Sowing (seed drills), Adding manure and fertilizers (organic vs chemical), Irrigation (drip, sprinkler, canal), Weed control (manual, chemical herbicides), Crop protection (pesticides, biological control), Harvesting and storage." },
      { heading: "Animal Husbandry", content: "Scientific management of animal livestock for food products. Dairy farming: proper shelter, balanced feed, regular health check-ups, clean milking. Poultry farming: broilers (meat) and layers (eggs). Fish farming (pisciculture): freshwater and marine fish cultivation." },
      { heading: "Food Preservation", content: "Methods to prevent food spoilage: Refrigeration, Pasteurization (heating milk to kill bacteria), Dehydration (drying), Canning, Pickling (salt/vinegar), Chemical preservatives, Vacuum packing. Louis Pasteur developed pasteurization." },
      { heading: "Organic Farming", content: "Farming without synthetic chemicals. Uses organic manure (compost, vermicompost), biological pest control (ladybugs eat aphids), crop rotation, and green manuring. Benefits: healthier food, less pollution, sustainable soil fertility." },
    ],
    keyDefinitions: [
      { term: "Hybridization", definition: "Crossing two different varieties of plants or animals to combine desirable traits." },
      { term: "Irrigation", definition: "Supplying water to crops by artificial methods." },
      { term: "Animal Husbandry", definition: "The scientific management of animal livestock for food and other products." },
      { term: "Pasteurization", definition: "Heating a liquid (like milk) to kill harmful bacteria without changing its taste." },
      { term: "Organic Farming", definition: "Farming method using natural inputs instead of synthetic chemicals." },
    ],
    didYouKnow: [
      "The Green Revolution in the 1960s led by Dr. M.S. Swaminathan dramatically increased India's wheat production!",
      "Vermicomposting uses earthworms to convert organic waste into nutrient-rich compost.",
      "India is the world's largest producer of milk, thanks to Operation Flood (White Revolution).",
    ],
    revisionSummary: [
      "Crop improvement: selection, hybridization, genetic modification.",
      "Crop management: soil preparation → sowing → fertilizing → irrigating → harvesting.",
      "Animal husbandry: dairy, poultry, fish farming.",
      "Food preservation: refrigeration, pasteurization, dehydration, canning.",
      "Organic farming: no synthetic chemicals, uses natural methods.",
    ],
    practiceQuestions: [
      { type: "short", question: "What is hybridization? Why is it done?" },
      { type: "short", question: "Name three methods of food preservation." },
      { type: "long", question: "Describe the steps involved in crop management from sowing to harvesting." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Organic farming is better for the environment than conventional farming." },
    ],
  },

  // =============================================
  // ===== CHEMISTRY =====
  // =============================================
  "chem-1": {
    chapterId: "chem-1",
    introduction: "The Kinetic Molecular Theory explains the behaviour of matter in its three states based on the motion and arrangement of molecules.",
    sections: [
      { heading: "States of Matter", content: "Solids: fixed shape and volume, closely packed molecules, strong intermolecular forces, vibrate in fixed positions. Liquids: fixed volume, take shape of container, molecules less closely packed, can slide over each other. Gases: neither fixed shape nor volume, molecules far apart, move freely and rapidly." },
      { heading: "Kinetic Theory", content: "All matter is made of tiny particles in constant motion. Kinetic energy increases with temperature. In solids, particles vibrate; in liquids, they slide; in gases, they move randomly at high speeds." },
      { heading: "Interconversion of States", content: "Melting: Solid → Liquid. Boiling: Liquid → Gas. Condensation: Gas → Liquid. Freezing: Liquid → Solid. Sublimation: Solid → Gas directly (e.g., dry ice, camphor). Each change involves absorbing or releasing heat energy." },
      { heading: "Diffusion and Brownian Motion", content: "Diffusion: spreading of particles from high to low concentration. Gases diffuse fastest. Brownian Motion: random zigzag movement of particles in a fluid, caused by collisions with fast-moving molecules. Observed by Robert Brown in pollen grains." },
    ],
    keyDefinitions: [
      { term: "Kinetic Energy", definition: "Energy possessed by an object due to its motion." },
      { term: "Diffusion", definition: "Movement of particles from higher to lower concentration." },
      { term: "Sublimation", definition: "Direct conversion of solid to gas without passing through liquid state." },
      { term: "Brownian Motion", definition: "Random zigzag movement of particles suspended in a fluid." },
    ],
    didYouKnow: [
      "At absolute zero (−273.15°C), all molecular motion theoretically stops!",
      "Dry ice (solid CO₂) sublimes directly into gas — that's why it creates fog without any liquid.",
    ],
    revisionSummary: [
      "Solids: fixed shape/volume. Liquids: fixed volume. Gases: no fixed shape/volume.",
      "Kinetic energy increases with temperature.",
      "Interconversion: melting, boiling, condensation, freezing, sublimation.",
      "Diffusion fastest in gases; Brownian motion proves particle movement.",
    ],
    practiceQuestions: [
      { type: "short", question: "Define sublimation with an example." },
      { type: "short", question: "Why do gases diffuse faster than liquids?" },
      { type: "long", question: "Explain the kinetic molecular theory for three states of matter." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: A gas fills the entire container." },
    ],
  },
  "chem-2": {
    chapterId: "chem-2",
    introduction: "Changes in matter can be classified as physical or chemical. Understanding the difference is fundamental to studying chemistry.",
    sections: [
      { heading: "Physical Changes", content: "A physical change alters the form or appearance of a substance without changing its chemical composition. It is usually reversible. Examples: melting of ice (water remains H₂O), dissolving sugar in water, breaking glass, cutting paper, change of state (solid/liquid/gas). No new substance is formed." },
      { heading: "Chemical Changes", content: "A chemical change produces one or more new substances with different chemical properties. It is usually irreversible. Examples: burning of paper (produces CO₂ and ash), rusting of iron (Fe₂O₃), cooking food, digestion, curdling of milk. Signs of chemical change: colour change, gas evolution, change in temperature, formation of precipitate, change in smell." },
      { heading: "Differences Between Physical and Chemical Changes", content: "Physical: no new substance, usually reversible, no energy change (or small). Chemical: new substance formed, usually irreversible, energy absorbed or released. Some changes are borderline: dissolving salt is physical, but dissolving zinc in acid is chemical." },
      { heading: "Energy Changes", content: "Exothermic reactions release energy (burning, rusting). Endothermic reactions absorb energy (photosynthesis, dissolving ammonium chloride in water). Energy can be in the form of heat, light, sound, or electricity." },
    ],
    keyDefinitions: [
      { term: "Physical Change", definition: "A change in form or appearance without altering chemical composition; usually reversible." },
      { term: "Chemical Change", definition: "A change that produces new substances with different properties; usually irreversible." },
      { term: "Exothermic Reaction", definition: "A reaction that releases heat energy to the surroundings." },
      { term: "Endothermic Reaction", definition: "A reaction that absorbs heat energy from the surroundings." },
    ],
    didYouKnow: [
      "Rusting is so slow you can't see it happening, but it destroys more iron each year than all natural disasters combined!",
      "Photosynthesis is an endothermic chemical change — plants absorb light energy from the sun to make food.",
    ],
    revisionSummary: [
      "Physical change: no new substance, reversible (melting, dissolving, cutting).",
      "Chemical change: new substance, irreversible (burning, rusting, cooking).",
      "Signs of chemical change: colour, gas, temperature, precipitate, smell.",
      "Exothermic = releases energy; Endothermic = absorbs energy.",
    ],
    practiceQuestions: [
      { type: "short", question: "Give three examples each of physical and chemical changes." },
      { type: "short", question: "What are the signs of a chemical change?" },
      { type: "long", question: "Differentiate between physical and chemical changes with examples." },
      { type: "icse", question: "[ICSE Board Style] Classify the following as physical or chemical change: (a) Burning of candle (b) Melting of wax (c) Rusting of iron (d) Dissolving sugar in water." },
    ],
  },
  "chem-3": {
    chapterId: "chem-3",
    introduction: "Matter can be classified into elements, compounds, and mixtures based on its composition. Understanding these categories helps us study the properties and behavior of different substances.",
    sections: [
      { heading: "Elements", content: "An element is a pure substance made of only one type of atom. It cannot be broken down into simpler substances by chemical means. There are 118 known elements. Examples: Hydrogen (H), Oxygen (O), Gold (Au), Iron (Fe), Carbon (C). Elements are classified as metals (iron, copper), non-metals (oxygen, carbon), and metalloids (silicon, boron)." },
      { heading: "Compounds", content: "A compound is a pure substance made of two or more elements chemically combined in a fixed ratio. Properties of a compound differ from its elements. Example: Water (H₂O) — hydrogen is flammable, oxygen supports combustion, but water extinguishes fire! Common compounds: NaCl (salt), CO₂, H₂SO₄ (sulphuric acid). Compounds can be separated only by chemical reactions." },
      { heading: "Mixtures", content: "A mixture contains two or more substances physically mixed (not chemically combined) in any ratio. Each substance retains its own properties. Homogeneous mixtures: uniform composition (salt water, air, alloys). Heterogeneous mixtures: non-uniform composition (sand and iron filings, oil and water, salad)." },
      { heading: "Separation Techniques", content: "Filtration: separating insoluble solid from liquid (sand from water). Evaporation: obtaining dissolved solid from solution (salt from sea water). Distillation: separating liquids with different boiling points. Chromatography: separating coloured substances (ink pigments). Magnetic separation: iron filings from sand. Sublimation: separating sublimable solid (camphor from salt)." },
    ],
    keyDefinitions: [
      { term: "Element", definition: "A pure substance made of only one type of atom; cannot be broken down further." },
      { term: "Compound", definition: "A pure substance formed by chemical combination of two or more elements in a fixed ratio." },
      { term: "Mixture", definition: "A combination of two or more substances that are not chemically combined." },
      { term: "Homogeneous Mixture", definition: "A mixture with uniform composition throughout (e.g., salt solution)." },
      { term: "Heterogeneous Mixture", definition: "A mixture with non-uniform composition (e.g., sand and water)." },
      { term: "Distillation", definition: "Separation technique based on different boiling points of liquids." },
    ],
    didYouKnow: [
      "Air is a homogeneous mixture of gases — about 78% nitrogen, 21% oxygen, and 1% other gases!",
      "Bronze (copper + tin) is one of the oldest known alloys, used since 3000 BC!",
      "Chromatography was originally used to separate plant pigments — 'chroma' means colour in Greek.",
    ],
    revisionSummary: [
      "Element: one type of atom, cannot be broken down (e.g., H, O, Fe).",
      "Compound: two+ elements chemically combined in fixed ratio (e.g., H₂O, NaCl).",
      "Mixture: physically mixed, any ratio, retains individual properties.",
      "Homogeneous = uniform; Heterogeneous = non-uniform.",
      "Separation: filtration, evaporation, distillation, chromatography, magnetic.",
    ],
    practiceQuestions: [
      { type: "short", question: "Differentiate between an element and a compound." },
      { type: "short", question: "Give two examples each of homogeneous and heterogeneous mixtures." },
      { type: "long", question: "Describe any four separation techniques with examples." },
      { type: "icse", question: "[ICSE Board Style] Classify the following as element, compound, or mixture: (a) Air (b) Water (c) Gold (d) Brass (e) Carbon dioxide." },
    ],
  },
  "chem-4": {
    chapterId: "chem-4",
    introduction: "The atom is the smallest unit of an element. Over centuries, scientists developed models to explain its structure.",
    sections: [
      { heading: "Dalton's Atomic Theory", content: "John Dalton (1808): All matter is made of indivisible atoms. Atoms of same element are identical. Atoms combine in fixed ratios. Limitations: atoms are divisible; isotopes exist." },
      { heading: "Thomson's Model", content: "J.J. Thomson (1897) discovered the electron. 'Plum pudding model' — atom is a sphere of positive charge with electrons embedded in it." },
      { heading: "Rutherford's Model", content: "Gold foil experiment (1911): Most alpha particles passed through, some deflected, few bounced back. Conclusion: tiny dense positive nucleus; electrons revolve around it; mostly empty space." },
      { heading: "Bohr's Model", content: "Niels Bohr (1913): Electrons in fixed circular orbits (shells K, L, M, N). Each shell has fixed energy. Max electrons = 2n². K=2, L=8, M=18, N=32." },
      { heading: "Electronic Configuration", content: "Electrons fill shells in order: K, L, M. Outermost electrons = valence electrons = determine valency. Na (11) = 2,8,1 → valency 1. Cl (17) = 2,8,7 → valency 1." },
    ],
    keyDefinitions: [
      { term: "Atom", definition: "Smallest unit of an element that takes part in a chemical reaction." },
      { term: "Nucleus", definition: "Dense, positively charged centre containing protons and neutrons." },
      { term: "Electron", definition: "Negatively charged subatomic particle orbiting the nucleus." },
      { term: "Proton", definition: "Positively charged subatomic particle in the nucleus." },
      { term: "Neutron", definition: "Neutral subatomic particle in the nucleus." },
      { term: "Atomic Number", definition: "Number of protons in the nucleus (Z)." },
      { term: "Mass Number", definition: "Total protons + neutrons in the nucleus (A)." },
      { term: "Valency", definition: "Combining capacity of an atom, based on valence electrons." },
    ],
    didYouKnow: [
      "If an atom were a football stadium, the nucleus would be a marble at the centre!",
      "Rutherford was shocked when alpha particles bounced back — 'as if you fired a cannon at tissue paper and it came back'!",
    ],
    revisionSummary: [
      "Dalton: atoms indivisible (disproven). Thomson: plum pudding. Rutherford: nucleus discovered.",
      "Bohr: electrons in shells (K, L, M, N). Max = 2n².",
      "Valency based on outermost shell electrons.",
    ],
    practiceQuestions: [
      { type: "short", question: "Write the electronic configuration of Calcium (Z=20)." },
      { type: "short", question: "What was Rutherford's gold foil experiment conclusion?" },
      { type: "long", question: "Compare Thomson's and Rutherford's atomic models." },
      { type: "icse", question: "[ICSE Board Style] Define: (i) Atomic number (ii) Mass number (iii) Valency." },
    ],
  },
  "chem-5": {
    chapterId: "chem-5",
    introduction: "The language of chemistry uses symbols, formulae, and equations to represent elements, compounds, and reactions concisely. Learning this language is essential for understanding all of chemistry.",
    sections: [
      { heading: "Chemical Symbols", content: "Each element is represented by a symbol — usually the first letter (capitalized) or first two letters (first capital, second small). Examples: H (Hydrogen), He (Helium), Na (Sodium — from Latin 'Natrium'), Fe (Iron — from Latin 'Ferrum'), Au (Gold — from Latin 'Aurum'). Symbols come from English, Latin, or Greek names." },
      { heading: "Valency", content: "Valency is the combining capacity of an element. It equals the number of electrons an atom needs to gain, lose, or share to complete its outermost shell. Hydrogen = 1, Oxygen = 2, Nitrogen = 3, Carbon = 4. Variable valency: Iron (Fe) = 2 or 3, Copper (Cu) = 1 or 2." },
      { heading: "Chemical Formulae", content: "A chemical formula represents a compound using element symbols and numbers. Writing formulae using valency: Cross-over method — write symbols, cross-over valencies, simplify. Example: Aluminium oxide — Al(3) and O(2) → Al₂O₃. Molecular formula shows actual number of atoms: H₂O, CO₂, H₂SO₄, NaOH." },
      { heading: "Chemical Equations", content: "A chemical equation represents a chemical reaction using formulae. Word equation: Hydrogen + Oxygen → Water. Formula equation: H₂ + O₂ → H₂O (unbalanced). Balanced: 2H₂ + O₂ → 2H₂O. Balancing ensures equal atoms on both sides (Law of Conservation of Mass)." },
    ],
    keyDefinitions: [
      { term: "Chemical Symbol", definition: "A one- or two-letter abbreviation representing an element." },
      { term: "Valency", definition: "The combining capacity of an element based on electrons in its outermost shell." },
      { term: "Chemical Formula", definition: "A representation of a compound using element symbols and subscript numbers." },
      { term: "Chemical Equation", definition: "A symbolic representation of a chemical reaction." },
      { term: "Balanced Equation", definition: "An equation with equal numbers of each type of atom on both sides." },
    ],
    didYouKnow: [
      "The symbol 'Na' for Sodium comes from the Latin word 'Natrium' — ancient Romans used sodium compounds!",
      "The chemical formula for sugar (sucrose) is C₁₂H₂₂O₁₁ — that's 45 atoms in one molecule!",
    ],
    revisionSummary: [
      "Symbols: H, O, Na, Fe, Au — from English, Latin, or Greek.",
      "Valency = combining capacity (H=1, O=2, N=3, C=4).",
      "Cross-over method for writing formulae: Al₂O₃, CaCl₂.",
      "Balanced equation: equal atoms on both sides.",
    ],
    practiceQuestions: [
      { type: "short", question: "Write the chemical formulae of: (a) Calcium chloride (b) Aluminium oxide." },
      { type: "short", question: "What is valency? State the valency of nitrogen and carbon." },
      { type: "long", question: "Explain the cross-over method for writing chemical formulae with examples." },
      { type: "icse", question: "[ICSE Board Style] Balance the equation: Fe + H₂O → Fe₃O₄ + H₂." },
    ],
  },
  "chem-6": {
    chapterId: "chem-6",
    introduction: "A chemical reaction converts reactants into products with different properties. Understanding reaction types is fundamental to chemistry.",
    sections: [
      { heading: "Types of Chemical Reactions", content: "Combination: A + B → AB (2Mg + O₂ → 2MgO). Decomposition: AB → A + B (2H₂O → 2H₂ + O₂). Single Displacement: A + BC → AC + B (Zn + CuSO₄ → ZnSO₄ + Cu). Double Displacement: AB + CD → AD + CB (NaCl + AgNO₃ → AgCl + NaNO₃). Neutralization: Acid + Base → Salt + Water." },
      { heading: "Balancing Chemical Equations", content: "Steps: Write unbalanced equation. Count atoms on each side. Adjust coefficients to balance. Example: H₂ + O₂ → H₂O becomes 2H₂ + O₂ → 2H₂O." },
      { heading: "Redox Reactions", content: "Oxidation: loss of electrons or gain of oxygen. Reduction: gain of electrons or loss of oxygen. In redox reactions, both occur simultaneously. CuO + H₂ → Cu + H₂O (CuO reduced, H₂ oxidised)." },
    ],
    keyDefinitions: [
      { term: "Chemical Reaction", definition: "Process where reactants are converted into products with different properties." },
      { term: "Combination Reaction", definition: "Two or more substances combine to form a single product." },
      { term: "Decomposition", definition: "A compound breaks into simpler substances." },
      { term: "Oxidation", definition: "Loss of electrons or gain of oxygen." },
      { term: "Reduction", definition: "Gain of electrons or loss of oxygen." },
    ],
    didYouKnow: [
      "Rusting is a slow chemical reaction — iron reacts with oxygen and moisture!",
      "Combustion of a match involves several chemical reactions in milliseconds.",
    ],
    revisionSummary: [
      "5 types: Combination, Decomposition, Single Displacement, Double Displacement, Neutralization.",
      "Balanced equation: equal atoms on both sides.",
      "Oxidation = loss of electrons; Reduction = gain of electrons.",
    ],
    practiceQuestions: [
      { type: "short", question: "Balance: Fe + O₂ → Fe₂O₃" },
      { type: "short", question: "What is a decomposition reaction? Give an example." },
      { type: "long", question: "Explain different types of chemical reactions with examples." },
      { type: "icse", question: "[ICSE Board Style] Identify the type: Zn + H₂SO₄ → ZnSO₄ + H₂. Justify." },
    ],
  },
  "chem-7": {
    chapterId: "chem-7",
    introduction: "Hydrogen is the lightest and most abundant element in the universe. It plays a vital role in chemistry as a fuel, reducing agent, and component of water and organic compounds.",
    sections: [
      { heading: "Occurrence and Properties", content: "Hydrogen is the first element in the periodic table (Z=1). It exists as a diatomic molecule H₂. Physical properties: colourless, odourless, tasteless, lightest gas, insoluble in water. Chemical properties: combustible (burns with a pop sound), acts as a reducing agent, combines with non-metals to form hydrides." },
      { heading: "Preparation of Hydrogen", content: "Laboratory method: Zinc + dilute sulphuric acid → Zinc sulphate + Hydrogen. Zn + H₂SO₄ → ZnSO₄ + H₂↑. Collect by downward displacement of water (since H₂ is insoluble in water). Industrial method: Electrolysis of water (2H₂O → 2H₂ + O₂), or steam reforming of natural gas." },
      { heading: "Uses of Hydrogen", content: "Manufacture of ammonia (Haber process: N₂ + 3H₂ → 2NH₃). Hydrogenation of oils (making ghee/vanaspati from vegetable oils). Fuel for rockets (liquid hydrogen). Fuel cells (clean energy — produces only water). Oxy-hydrogen flame for welding and cutting metals." },
      { heading: "Isotopes of Hydrogen", content: "Protium (¹H): 1 proton, 0 neutrons — most common (99.98%). Deuterium (²H or D): 1 proton, 1 neutron — heavy hydrogen. Tritium (³H or T): 1 proton, 2 neutrons — radioactive. Heavy water (D₂O) is used as a moderator in nuclear reactors." },
    ],
    keyDefinitions: [
      { term: "Hydrogen", definition: "Lightest element (Z=1), colourless gas, burns with a pop sound." },
      { term: "Reducing Agent", definition: "A substance that reduces another substance by donating electrons or removing oxygen." },
      { term: "Hydrogenation", definition: "Addition of hydrogen to unsaturated compounds (e.g., converting liquid oil to solid fat)." },
      { term: "Isotope", definition: "Atoms of the same element with same atomic number but different mass numbers." },
    ],
    didYouKnow: [
      "Hydrogen makes up about 75% of all matter in the universe by mass!",
      "The Sun's energy comes from nuclear fusion of hydrogen atoms into helium — 600 million tonnes per second!",
      "Hydrogen fuel cells power some buses and cars with zero emissions — the only byproduct is water!",
    ],
    revisionSummary: [
      "Hydrogen: lightest gas, colourless, odourless, burns with pop sound.",
      "Lab prep: Zn + H₂SO₄ → ZnSO₄ + H₂↑. Collect over water.",
      "Uses: ammonia production, hydrogenation, rocket fuel, fuel cells.",
      "Isotopes: Protium (0n), Deuterium (1n), Tritium (2n, radioactive).",
    ],
    practiceQuestions: [
      { type: "short", question: "Write the equation for lab preparation of hydrogen." },
      { type: "short", question: "Name the three isotopes of hydrogen." },
      { type: "long", question: "Describe the laboratory preparation of hydrogen with a diagram." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Hydrogen is collected by downward displacement of water." },
    ],
  },
  "chem-8": {
    chapterId: "chem-8",
    introduction: "Water is essential for all forms of life. It is a remarkable compound with unique properties that make it vital for biological processes, industry, and daily life.",
    sections: [
      { heading: "Composition and Properties", content: "Water (H₂O) is a compound of hydrogen and oxygen in 2:1 ratio by volume. It is a universal solvent. Physical properties: colourless, odourless, tasteless, boils at 100°C, freezes at 0°C. Anomalous expansion: water expands on freezing (ice is less dense than water — that's why ice floats!)." },
      { heading: "Hard and Soft Water", content: "Soft water lathers easily with soap (e.g., rainwater, distilled water). Hard water does not lather easily due to dissolved calcium and magnesium salts. Temporary hardness: caused by bicarbonates — removed by boiling. Permanent hardness: caused by sulphates and chlorides — removed by washing soda (Na₂CO₃) or ion-exchange method." },
      { heading: "Water Treatment", content: "Steps for purifying water: Sedimentation (heavy particles settle), Filtration (sand filter removes remaining particles), Chlorination (adding chlorine to kill bacteria), Boiling (kills germs at home). Municipal water treatment also includes coagulation (using alum) and aeration." },
      { heading: "Water Pollution", content: "Causes: industrial waste, sewage, agricultural chemicals (pesticides, fertilizers), oil spills, thermal pollution. Effects: death of aquatic life, spread of waterborne diseases, loss of biodiversity. Prevention: treat sewage before release, reduce chemical use, proper waste disposal, rainwater harvesting." },
      { heading: "Water Cycle", content: "The continuous circulation of water in nature: Evaporation (water bodies → water vapour) → Condensation (vapour → clouds) → Precipitation (rain/snow) → Collection (rivers, lakes, groundwater) → Evaporation again. This cycle purifies and redistributes water across the planet." },
    ],
    keyDefinitions: [
      { term: "Universal Solvent", definition: "Water is called a universal solvent because it dissolves more substances than any other liquid." },
      { term: "Hard Water", definition: "Water containing dissolved calcium and magnesium salts that does not lather with soap." },
      { term: "Soft Water", definition: "Water that lathers easily with soap (free from Ca and Mg salts)." },
      { term: "Anomalous Expansion", definition: "Water expands on freezing (below 4°C), unlike most substances." },
      { term: "Water Cycle", definition: "The continuous circulation of water through evaporation, condensation, and precipitation." },
    ],
    didYouKnow: [
      "Only about 2.5% of all water on Earth is freshwater, and less than 1% is accessible for human use!",
      "If ice didn't float (anomalous expansion), lakes would freeze from the bottom up, killing aquatic life!",
      "The water you drink today could contain molecules that dinosaurs drank millions of years ago!",
    ],
    revisionSummary: [
      "Water (H₂O): universal solvent, boils at 100°C, freezes at 0°C.",
      "Anomalous expansion: ice floats because water expands on freezing.",
      "Hard water (Ca/Mg salts) — temporary (boiling) and permanent (washing soda).",
      "Water treatment: sedimentation → filtration → chlorination.",
      "Water cycle: evaporation → condensation → precipitation → collection.",
    ],
    practiceQuestions: [
      { type: "short", question: "What is hard water? How can temporary hardness be removed?" },
      { type: "short", question: "Why does ice float on water?" },
      { type: "long", question: "Describe the steps involved in the purification of water." },
      { type: "long", question: "Explain the water cycle with a diagram." },
      { type: "icse", question: "[ICSE Board Style] Differentiate between temporary and permanent hardness of water." },
    ],
  },
  "chem-9": {
    chapterId: "chem-9",
    introduction: "Carbon is one of the most versatile elements in nature. It forms millions of compounds and is the basis of all organic chemistry and life itself.",
    sections: [
      { heading: "Allotropes of Carbon", content: "Carbon exists in different physical forms called allotropes. Diamond: hardest natural substance, transparent, each carbon bonded to 4 others in a 3D network, used in jewellery and cutting tools. Graphite: soft, grey, slippery, each carbon bonded to 3 others in layers, conducts electricity, used in pencils and lubricants. Fullerenes (C₆₀): spherical cage-like structures called 'buckyballs'. Charcoal, coke, and carbon black are amorphous forms." },
      { heading: "Properties of Carbon", content: "Carbon has atomic number 6 and valency 4 (tetravalent). It forms covalent bonds by sharing electrons. Catenation: carbon atoms can bond to each other to form long chains, branched chains, and rings. This property, along with tetravalency, allows carbon to form millions of different compounds." },
      { heading: "Hydrocarbons", content: "Compounds containing only carbon and hydrogen. Saturated hydrocarbons (alkanes): single bonds only — methane (CH₄), ethane (C₂H₆). Unsaturated hydrocarbons: contain double (alkenes) or triple (alkynes) bonds — ethene (C₂H₄), ethyne (C₂H₂). Methane is the main component of natural gas." },
      { heading: "Importance of Carbon Compounds", content: "Carbon compounds are everywhere: food (carbohydrates, fats, proteins), fuels (petrol, diesel, LPG, CNG), medicines, plastics, textiles, and DNA. CO₂ is essential for photosynthesis but excess causes global warming (greenhouse effect). Carbon monoxide (CO) is a poisonous gas produced by incomplete combustion." },
    ],
    keyDefinitions: [
      { term: "Allotropy", definition: "The existence of an element in two or more physical forms (allotropes)." },
      { term: "Catenation", definition: "The ability of carbon to form bonds with other carbon atoms, creating chains and rings." },
      { term: "Tetravalency", definition: "Carbon has a valency of 4, allowing it to form four covalent bonds." },
      { term: "Hydrocarbon", definition: "A compound containing only carbon and hydrogen atoms." },
    ],
    didYouKnow: [
      "Diamond and graphite are both pure carbon — but diamond is the hardest material while graphite is one of the softest!",
      "Carbon compounds make up about 18% of the human body by mass.",
      "There are more known carbon compounds (over 10 million) than compounds of all other elements combined!",
    ],
    revisionSummary: [
      "Allotropes: diamond (hard, 4 bonds), graphite (soft, 3 bonds, conducts), fullerene (C₆₀).",
      "Carbon: Z=6, valency=4, forms covalent bonds, catenation.",
      "Hydrocarbons: alkanes (single bond), alkenes (double), alkynes (triple).",
      "CO₂: photosynthesis + greenhouse effect. CO: poisonous.",
    ],
    practiceQuestions: [
      { type: "short", question: "What is catenation? Why is it unique to carbon?" },
      { type: "short", question: "Differentiate between diamond and graphite." },
      { type: "long", question: "Describe the allotropes of carbon with diagrams." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Graphite is a good conductor of electricity but diamond is not." },
    ],
  },

  // =============================================
  // ===== PHYSICS =====
  // =============================================
  "phy-1": {
    chapterId: "phy-1",
    introduction: "The Kinetic Molecular Theory of Matter explains the arrangement and movement of particles (atoms/molecules) in different states of matter and how they determine the physical properties of solids, liquids, and gases.",
    sections: [
      { heading: "Molecular Arrangement", content: "Solids: molecules closely packed in fixed positions, strong intermolecular forces, vibrate about fixed points. Liquids: molecules less tightly packed, can move around each other, moderate forces. Gases: molecules far apart, move randomly at high speed, very weak forces. This arrangement determines properties like shape, volume, compressibility, and density." },
      { heading: "Kinetic Energy and Temperature", content: "Temperature is a measure of the average kinetic energy of molecules. Higher temperature = faster molecular motion. At absolute zero (0 K = −273.15°C), molecular motion theoretically stops. The three states can be converted by adding or removing heat energy." },
      { heading: "Behaviour of Gases", content: "Gas molecules move in random straight lines, colliding with each other and container walls. Gas pressure is caused by molecular collisions with container walls. Gases are highly compressible because molecules are far apart. Gases expand to fill any container." },
    ],
    keyDefinitions: [
      { term: "Kinetic Molecular Theory", definition: "Theory explaining properties of matter based on the motion and arrangement of molecules." },
      { term: "Intermolecular Forces", definition: "Forces of attraction between molecules that hold them together." },
      { term: "Absolute Zero", definition: "The lowest possible temperature (0 K = −273.15°C) where molecular motion stops." },
    ],
    didYouKnow: [
      "At room temperature, air molecules move at about 500 m/s — faster than a bullet from some guns!",
      "Scientists have cooled atoms to within billionths of a degree above absolute zero, creating exotic states of matter!",
    ],
    revisionSummary: [
      "Solids: fixed shape/volume, strong forces, molecules vibrate.",
      "Liquids: fixed volume, moderate forces, molecules slide.",
      "Gases: no fixed shape/volume, weak forces, random fast motion.",
      "Temperature = average kinetic energy of molecules.",
      "Gas pressure = molecular collisions with container walls.",
    ],
    practiceQuestions: [
      { type: "short", question: "Why are gases easily compressible but solids are not?" },
      { type: "short", question: "What happens to molecular motion as temperature increases?" },
      { type: "long", question: "Explain the arrangement and motion of molecules in solids, liquids, and gases." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Gases exert pressure on the walls of their container." },
    ],
  },
  "phy-2": {
    chapterId: "phy-2",
    introduction: "Volume is the amount of space an object occupies. Density is the mass per unit volume. These concepts are fundamental for understanding buoyancy, floating, and sinking.",
    sections: [
      { heading: "Measuring Volume", content: "Regular solids: use formulae — Cube: V = l³, Cuboid: V = l × b × h, Cylinder: V = πr²h, Sphere: V = 4/3πr³. SI unit: cubic metre (m³), commonly cm³ or mL. Irregular solids: use water displacement method — submerge object in water in a measuring cylinder, volume = rise in water level." },
      { heading: "Density", content: "Density = Mass / Volume (ρ = m/V). SI unit: kg/m³ (commonly g/cm³). Density of water = 1 g/cm³ = 1000 kg/m³. Objects with density less than water float; greater than water sink. Density depends on the material, not the size of the object." },
      { heading: "Relative Density", content: "Relative density (specific gravity) = Density of substance / Density of water. It has no unit (it's a ratio). If RD > 1, substance sinks. If RD < 1, substance floats. Example: Iron RD ≈ 7.8 (sinks), Cork RD ≈ 0.24 (floats), Mercury RD ≈ 13.6 (very dense liquid)." },
    ],
    keyDefinitions: [
      { term: "Volume", definition: "The amount of space occupied by an object. SI unit: m³." },
      { term: "Density", definition: "Mass per unit volume (ρ = m/V). SI unit: kg/m³." },
      { term: "Relative Density", definition: "Ratio of density of a substance to density of water; no unit." },
    ],
    didYouKnow: [
      "Archimedes discovered how to measure volume of irregular objects while taking a bath — he shouted 'Eureka!'",
      "Mercury is the only metal that is liquid at room temperature, with a density of 13.6 g/cm³.",
      "The Dead Sea is so salty (density ~1.24 g/cm³) that humans float effortlessly in it!",
    ],
    revisionSummary: [
      "Volume of regular solids: use formulae. Irregular solids: water displacement.",
      "Density = Mass / Volume. Unit: kg/m³ or g/cm³.",
      "Density of water = 1 g/cm³. Float if density < water, sink if >.",
      "Relative Density = Density of substance / Density of water (no unit).",
    ],
    practiceQuestions: [
      { type: "short", question: "A block has mass 500g and volume 200 cm³. Find its density." },
      { type: "short", question: "How do you measure the volume of an irregular solid?" },
      { type: "long", question: "Explain density and relative density with examples." },
      { type: "icse", question: "[ICSE Board Style] A substance has mass 150g and volume 50 cm³. Will it float or sink in water? Calculate its relative density." },
    ],
  },
  "phy-3": {
    chapterId: "phy-3",
    introduction: "Force is a push or pull that can change motion, shape, or direction. Pressure is force per unit area.",
    sections: [
      { heading: "Types of Forces", content: "Contact forces: friction, muscular force, normal force, tension. Non-contact forces: gravitational, magnetic, electrostatic. A force can change speed, direction, or shape." },
      { heading: "Pressure", content: "Pressure = Force / Area (P = F/A). SI unit: Pascal (Pa). Sharp knife cuts better — small area = more pressure. Snowshoes — large area = less pressure." },
      { heading: "Pressure in Fluids", content: "Fluids exert pressure in all directions. Pressure increases with depth. Pascal's Law: pressure applied to confined fluid is transmitted equally. Atmospheric pressure ≈ 101,325 Pa at sea level, decreases with altitude." },
    ],
    keyDefinitions: [
      { term: "Force", definition: "A push or pull that can change motion or shape. SI unit: Newton (N)." },
      { term: "Pressure", definition: "Force per unit area (P = F/A). SI unit: Pascal (Pa)." },
      { term: "Pascal's Law", definition: "Pressure applied to confined fluid is transmitted equally in all directions." },
      { term: "Atmospheric Pressure", definition: "Pressure exerted by the weight of the atmosphere on Earth's surface." },
    ],
    didYouKnow: [
      "A karate expert breaks bricks by applying large force on a small area — enormous pressure!",
      "We don't feel atmospheric pressure because our body pushes back equally.",
    ],
    revisionSummary: [
      "Force = push or pull (Newtons). Pressure = Force/Area (Pascals).",
      "Contact forces need touch; non-contact act at a distance.",
      "Pascal's Law: fluid pressure transmitted equally.",
      "Atmospheric pressure decreases with altitude.",
    ],
    practiceQuestions: [
      { type: "short", question: "Define pressure and state its SI unit." },
      { type: "short", question: "Why does a sharp knife cut better?" },
      { type: "long", question: "Explain Pascal's Law with daily life examples." },
      { type: "icse", question: "[ICSE Board Style] Calculate pressure of 500 N force on 2 m² area." },
    ],
  },
  "phy-4": {
    chapterId: "phy-4",
    introduction: "Work, energy, and power are fundamental concepts. Work is done when force causes displacement. Energy is the ability to do work. Power is the rate of doing work.",
    sections: [
      { heading: "Work", content: "W = F × d × cos θ. SI unit: Joule (J). No work done if: force is zero, displacement is zero, or force is perpendicular to displacement." },
      { heading: "Energy", content: "Kinetic energy KE = ½mv² (energy of motion). Potential energy PE = mgh (energy of position). Other forms: heat, light, sound, chemical, electrical, nuclear." },
      { heading: "Conservation of Energy", content: "Energy cannot be created or destroyed, only transformed. Falling ball: PE converts to KE. At top: max PE, zero KE. At bottom: zero PE, max KE. Total energy remains constant." },
      { heading: "Power", content: "P = W/t. SI unit: Watt (W). 1 kW = 1000 W. 1 HP ≈ 746 W." },
    ],
    keyDefinitions: [
      { term: "Work", definition: "Product of force and displacement in direction of force. W = F × d. Unit: Joule." },
      { term: "Kinetic Energy", definition: "Energy due to motion. KE = ½mv²." },
      { term: "Potential Energy", definition: "Energy due to position or height. PE = mgh." },
      { term: "Power", definition: "Rate of doing work. P = W/t. Unit: Watt." },
    ],
    didYouKnow: [
      "A car at 100 km/h has 4 times the KE of the same car at 50 km/h!",
      "The Sun converts 4 million tonnes of matter into energy every second!",
    ],
    revisionSummary: [
      "Work = Force × Displacement. Unit: Joule.",
      "KE = ½mv²; PE = mgh.",
      "Conservation: energy transforms but total stays constant.",
      "Power = Work/Time. Unit: Watt.",
    ],
    practiceQuestions: [
      { type: "short", question: "Define work. When is work said to be done?" },
      { type: "short", question: "Calculate PE of 5 kg at 10 m height (g = 10 m/s²)." },
      { type: "long", question: "Explain the Law of Conservation of Energy with an example." },
      { type: "icse", question: "[ICSE Board Style] A machine does 5000 J in 20 seconds. Find its power." },
    ],
  },
  "phy-5": {
    chapterId: "phy-5",
    introduction: "Light is a form of energy that enables us to see. It travels in straight lines and can be reflected, refracted, and dispersed.",
    sections: [
      { heading: "Reflection of Light", content: "When light bounces off a surface, it is reflected. Laws of reflection: (1) Angle of incidence = Angle of reflection. (2) Incident ray, reflected ray, and normal all lie in the same plane. Regular reflection occurs on smooth surfaces (mirrors). Irregular/diffused reflection occurs on rough surfaces." },
      { heading: "Refraction of Light", content: "When light passes from one medium to another, it bends. This is refraction. Light bends toward the normal when entering a denser medium, and away from the normal when entering a less dense medium. Example: a pencil appears bent in a glass of water. Refractive index = speed of light in vacuum / speed of light in medium." },
      { heading: "Lenses", content: "Convex lens (converging): thicker in the middle, converges light rays, forms real and virtual images. Used in magnifying glass, camera, projector. Concave lens (diverging): thinner in the middle, diverges light rays, always forms virtual, erect, diminished images. Used in spectacles for short-sightedness." },
      { heading: "Dispersion of Light", content: "White light is composed of seven colours: VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red). When white light passes through a prism, it splits into its component colours — this is dispersion. Violet bends the most; red bends the least. A rainbow is a natural example of dispersion." },
      { heading: "The Human Eye", content: "The eye works like a camera. Cornea allows light to enter. Iris controls the size of the pupil (amount of light). Lens focuses light on the retina. Retina contains rods (dim light) and cones (colour vision). Optic nerve sends signals to the brain. Common defects: Myopia (short-sightedness — corrected by concave lens), Hypermetropia (long-sightedness — corrected by convex lens)." },
    ],
    keyDefinitions: [
      { term: "Reflection", definition: "Bouncing back of light when it hits a surface." },
      { term: "Refraction", definition: "Bending of light when it passes from one medium to another." },
      { term: "Dispersion", definition: "Splitting of white light into its component colours by a prism." },
      { term: "Convex Lens", definition: "A lens thicker in the middle that converges light rays." },
      { term: "Concave Lens", definition: "A lens thinner in the middle that diverges light rays." },
      { term: "Refractive Index", definition: "Ratio of speed of light in vacuum to speed of light in a medium." },
    ],
    didYouKnow: [
      "Light travels at about 300,000 km/s — it takes only 1.3 seconds to reach us from the Moon!",
      "A rainbow is actually a full circle, but we only see half because the ground blocks the rest!",
      "Cats can see in light levels six times lower than humans — their pupils can expand to cover most of their eyes!",
    ],
    revisionSummary: [
      "Reflection: angle of incidence = angle of reflection.",
      "Refraction: light bends toward normal in denser medium, away in less dense.",
      "Convex lens: converges, real/virtual images. Concave: diverges, virtual images.",
      "Dispersion: white light → VIBGYOR through a prism.",
      "Eye defects: Myopia (concave lens), Hypermetropia (convex lens).",
    ],
    practiceQuestions: [
      { type: "short", question: "State the two laws of reflection." },
      { type: "short", question: "What is dispersion? Name the colours of the spectrum." },
      { type: "long", question: "Describe the structure of the human eye and how it forms images." },
      { type: "long", question: "Differentiate between convex and concave lenses with ray diagrams." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: A pencil appears bent when partly immersed in water." },
    ],
  },
  "phy-6": {
    chapterId: "phy-6",
    introduction: "Heat is a form of energy that transfers from a hotter body to a cooler body. Thermal expansion is the increase in size of a substance when heated.",
    sections: [
      { heading: "Modes of Heat Transfer", content: "Conduction: heat transfer through direct contact (solid to solid). Metals are good conductors; wood, plastic are insulators. Convection: heat transfer through fluid movement (liquids and gases). Hot fluid rises, cool fluid sinks, creating convection currents. Example: sea and land breezes. Radiation: heat transfer without any medium (through electromagnetic waves). Example: heat from the sun. Dark, rough surfaces absorb and emit radiation better than light, shiny surfaces." },
      { heading: "Thermal Expansion", content: "Most substances expand when heated and contract when cooled. Linear expansion (solids): length increases. Volumetric expansion (liquids and gases). Applications: gaps in railway tracks, expansion joints in bridges, bimetallic strips in thermostats. Liquids expand more than solids; gases expand the most." },
      { heading: "Anomalous Expansion of Water", content: "Water behaves unusually — it contracts when heated from 0°C to 4°C, and expands above 4°C. Water has maximum density at 4°C. This means ice floats on water, and lakes freeze from the top down, allowing aquatic life to survive underneath." },
    ],
    keyDefinitions: [
      { term: "Conduction", definition: "Transfer of heat through a substance without the substance moving." },
      { term: "Convection", definition: "Transfer of heat by movement of a heated fluid (liquid or gas)." },
      { term: "Radiation", definition: "Transfer of heat through electromagnetic waves without any medium." },
      { term: "Thermal Expansion", definition: "Increase in size of a substance when its temperature rises." },
      { term: "Anomalous Expansion", definition: "Unusual behaviour of water — it expands when cooled below 4°C." },
    ],
    didYouKnow: [
      "The Eiffel Tower grows by about 15 cm in summer due to thermal expansion of iron!",
      "If water didn't have anomalous expansion, lakes would freeze solid from the bottom, killing all aquatic life!",
      "Astronauts in space feel the sun's heat through radiation — the only mode of heat transfer that works in a vacuum!",
    ],
    revisionSummary: [
      "Conduction: through direct contact (solids). Convection: fluid movement (liquids/gases). Radiation: electromagnetic waves (no medium needed).",
      "Most substances expand on heating. Gaps in railway tracks prevent buckling.",
      "Anomalous expansion of water: contracts 0-4°C, expands above 4°C. Max density at 4°C.",
      "Dark rough surfaces absorb/emit radiation better than shiny smooth surfaces.",
    ],
    practiceQuestions: [
      { type: "short", question: "Name the three modes of heat transfer with one example each." },
      { type: "short", question: "Why are gaps left between railway tracks?" },
      { type: "long", question: "Explain the anomalous expansion of water and its significance." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Cooking utensils have wooden handles." },
    ],
  },
  "phy-7": {
    chapterId: "phy-7",
    introduction: "Sound is a form of energy produced by vibrations. It travels through a medium as longitudinal waves and cannot travel through a vacuum.",
    sections: [
      { heading: "Production and Propagation", content: "Sound is produced when an object vibrates. These vibrations travel through a medium (solid, liquid, gas) as compressions and rarefactions — longitudinal waves. Sound cannot travel through a vacuum (space is silent!). Speed of sound: fastest in solids (~5000 m/s in steel), then liquids (~1500 m/s in water), slowest in gases (~343 m/s in air at 20°C)." },
      { heading: "Characteristics of Sound", content: "Frequency: number of vibrations per second (Hz). Pitch: how high or low a sound is — higher frequency = higher pitch. Amplitude: maximum displacement of vibration. Loudness: related to amplitude — larger amplitude = louder sound (measured in decibels, dB). Quality/Timbre: distinguishes sounds of same pitch and loudness from different sources." },
      { heading: "Echo and Reverberation", content: "Echo: reflected sound heard after a distinct gap (minimum distance = 17.2 m for the reflecting surface). Used in SONAR (Sound Navigation and Ranging) to measure ocean depth. Reverberation: multiple reflections causing sound to persist — controlled in auditoriums using sound-absorbing materials." },
      { heading: "Noise Pollution", content: "Unwanted, loud, or disturbing sound is noise. Sources: traffic, factories, loudspeakers, construction. Effects: hearing loss, stress, sleep disturbance, high blood pressure. Prevention: silencers on vehicles, sound barriers, limiting loudspeaker use, ear protection in noisy areas. Safe limit: 80 dB." },
    ],
    keyDefinitions: [
      { term: "Sound", definition: "A form of energy produced by vibrations, travelling as longitudinal waves." },
      { term: "Frequency", definition: "Number of vibrations per second. SI unit: Hertz (Hz)." },
      { term: "Amplitude", definition: "Maximum displacement of a vibrating particle from its mean position." },
      { term: "Echo", definition: "A reflected sound heard after a distinct time gap." },
      { term: "SONAR", definition: "Sound Navigation and Ranging — uses echoes to measure underwater distances." },
    ],
    didYouKnow: [
      "In space, no one can hear you scream — sound cannot travel through a vacuum!",
      "The loudest natural sound ever recorded was the eruption of Krakatoa in 1883 — heard 4,800 km away!",
      "Dolphins use echolocation (like SONAR) to navigate and find food underwater.",
    ],
    revisionSummary: [
      "Sound: produced by vibrations, travels as longitudinal waves through a medium.",
      "Speed: solids > liquids > gases. Cannot travel in vacuum.",
      "Frequency → pitch; Amplitude → loudness; Quality → timbre.",
      "Echo: reflected sound (min 17.2 m). SONAR uses echoes.",
      "Noise pollution: hearing damage, stress. Safe limit: 80 dB.",
    ],
    practiceQuestions: [
      { type: "short", question: "Why can't sound travel through a vacuum?" },
      { type: "short", question: "Differentiate between pitch and loudness." },
      { type: "long", question: "Explain the characteristics of sound with examples." },
      { type: "long", question: "What is SONAR? How does it work?" },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Sound travels faster in solids than in gases." },
    ],
  },
  "phy-8": {
    chapterId: "phy-8",
    introduction: "Static electricity deals with electric charges at rest. Understanding how charges build up, transfer, and interact explains phenomena like lightning and how rubbing creates electricity.",
    sections: [
      { heading: "Electric Charges", content: "All matter contains electric charges. Protons carry positive (+) charge, electrons carry negative (−) charge. Normally, atoms are neutral (equal protons and electrons). An object becomes charged when it gains or loses electrons. Like charges repel; unlike charges attract." },
      { heading: "Methods of Charging", content: "Friction: rubbing two objects transfers electrons (e.g., rubbing balloon on hair — balloon gains electrons, becomes negative). Conduction: direct contact with a charged object. Induction: bringing a charged object near (without touching) causes charge separation — used to charge objects without contact." },
      { heading: "Electroscope", content: "A gold-leaf electroscope detects electric charge. It has a metal disc, metal rod, and two gold leaves inside a glass case. When a charged object touches the disc, charge flows to the leaves — both leaves get the same charge and repel each other, diverging. Greater charge = more divergence." },
      { heading: "Lightning", content: "Lightning is a massive discharge of static electricity. During a thunderstorm, friction between water droplets and ice in clouds builds up charge — top of cloud becomes positive, bottom becomes negative. When the charge difference is large enough, electricity discharges as lightning. Lightning conductors protect buildings by providing a safe path for charge to reach the ground." },
    ],
    keyDefinitions: [
      { term: "Static Electricity", definition: "Electric charge that accumulates on the surface of objects (charges at rest)." },
      { term: "Conductor", definition: "Material that allows electric charges to flow through it easily (e.g., metals)." },
      { term: "Insulator", definition: "Material that does not allow charges to flow easily (e.g., rubber, plastic)." },
      { term: "Electroscope", definition: "A device used to detect the presence and magnitude of electric charge." },
      { term: "Lightning Conductor", definition: "A metal rod that protects buildings by safely conducting lightning charge to the ground." },
    ],
    didYouKnow: [
      "A lightning bolt can reach temperatures of about 30,000°C — five times hotter than the surface of the Sun!",
      "Benjamin Franklin proved lightning is electrical by flying a kite in a thunderstorm in 1752 (extremely dangerous — don't try this!).",
      "Static electricity is why you sometimes get a small shock when touching a metal doorknob after walking on carpet!",
    ],
    revisionSummary: [
      "Charges: positive (protons), negative (electrons). Like repel, unlike attract.",
      "Charging methods: friction, conduction, induction.",
      "Electroscope: gold leaves diverge when charged.",
      "Lightning: massive static discharge in clouds. Lightning conductor = safe ground path.",
    ],
    practiceQuestions: [
      { type: "short", question: "What are the three methods of charging? Give an example of each." },
      { type: "short", question: "How does a gold-leaf electroscope work?" },
      { type: "long", question: "Explain how lightning occurs and how lightning conductors protect buildings." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: A glass rod becomes positively charged when rubbed with silk." },
    ],
  },
  "phy-9": {
    chapterId: "phy-9",
    introduction: "Electric current is the flow of electric charges through a conductor. Understanding circuits, Ohm's law, and series/parallel connections is essential.",
    sections: [
      { heading: "Electric Current", content: "Current I = Q/t. SI unit: Ampere (A). Conventional current: positive to negative. Electron flow: negative to positive. Ammeter measures current (connected in series)." },
      { heading: "Potential Difference", content: "Voltage V = W/Q. SI unit: Volt (V). Voltmeter measures voltage (connected in parallel). Battery provides potential difference." },
      { heading: "Ohm's Law", content: "V = IR (at constant temperature). R depends on length, cross-section, material, temperature." },
      { heading: "Series and Parallel Circuits", content: "Series: same current, R total = R₁+R₂+R₃, voltage divides, one fails = circuit breaks. Parallel: same voltage, 1/R = 1/R₁+1/R₂+1/R₃, current divides, one fails = others work." },
    ],
    keyDefinitions: [
      { term: "Electric Current", definition: "Rate of flow of charge. I = Q/t. Unit: Ampere." },
      { term: "Potential Difference", definition: "Work done per unit charge. V = W/Q. Unit: Volt." },
      { term: "Resistance", definition: "Opposition to current flow. Unit: Ohm (Ω)." },
      { term: "Ohm's Law", definition: "V = IR at constant temperature." },
    ],
    didYouKnow: [
      "Lightning carries about 30,000 Amperes!",
      "The electric eel generates up to 860 volts!",
    ],
    revisionSummary: [
      "I = Q/t (Ampere). V = W/Q (Volt). R (Ohm).",
      "Ohm's Law: V = IR.",
      "Series: same current, R adds. Parallel: same voltage, 1/R adds.",
    ],
    practiceQuestions: [
      { type: "short", question: "State Ohm's Law with formula." },
      { type: "short", question: "Calculate current when V=12V, R=4Ω." },
      { type: "long", question: "Compare series and parallel circuits with diagrams." },
      { type: "icse", question: "[ICSE Board Style] Three resistors 2Ω, 3Ω, 6Ω in parallel — find equivalent resistance." },
    ],
  },

  // =============================================
  // ===== MATHEMATICS =====
  // =============================================
  "math-1": {
    chapterId: "math-1",
    introduction: "Rational numbers can be expressed as p/q where q ≠ 0. They include integers, fractions, and terminating/repeating decimals.",
    sections: [
      { heading: "Properties", content: "Closure: closed under +, −, ×. Commutativity: a+b=b+a, a×b=b×a. Associativity: (a+b)+c=a+(b+c). Distributive: a×(b+c)=a×b+a×c. Additive identity: 0. Multiplicative identity: 1." },
      { heading: "Representation on Number Line", content: "Every rational number has a position on the number line. Between any two rationals, infinitely many rationals exist." },
    ],
    keyDefinitions: [
      { term: "Rational Number", definition: "A number expressible as p/q where p, q are integers and q ≠ 0." },
      { term: "Closure Property", definition: "An operation on a set produces a result within the same set." },
    ],
    didYouKnow: ["0.999... (repeating) is mathematically equal to 1!"],
    revisionSummary: ["Rational = p/q (q≠0). Closed under +,−,×. Additive identity=0, Multiplicative identity=1."],
    practiceQuestions: [
      { type: "short", question: "Find three rational numbers between 1/4 and 1/2." },
      { type: "long", question: "Explain properties of rational numbers with examples." },
      { type: "icse", question: "[ICSE Board Style] Represent −3/5 and 7/5 on a number line." },
    ],
  },
  "math-2": {
    chapterId: "math-2",
    introduction: "Exponents provide a shorthand for repeated multiplication. Understanding laws of exponents is essential for simplifying expressions and representing very large or small numbers.",
    sections: [
      { heading: "Laws of Exponents", content: "aᵐ × aⁿ = aᵐ⁺ⁿ. aᵐ ÷ aⁿ = aᵐ⁻ⁿ. (aᵐ)ⁿ = aᵐⁿ. a⁰ = 1 (a ≠ 0). a⁻ⁿ = 1/aⁿ. (ab)ⁿ = aⁿbⁿ. (a/b)ⁿ = aⁿ/bⁿ." },
      { heading: "Standard Form", content: "Very large or small numbers written as a × 10ⁿ where 1 ≤ a < 10. Example: 384,000,000 = 3.84 × 10⁸. Example: 0.000045 = 4.5 × 10⁻⁵." },
    ],
    keyDefinitions: [
      { term: "Exponent", definition: "The number indicating how many times the base is multiplied by itself." },
      { term: "Standard Form", definition: "A number written as a × 10ⁿ where 1 ≤ a < 10." },
    ],
    didYouKnow: ["The distance to the nearest star (Proxima Centauri) is about 4 × 10¹³ km — that's 40 trillion km!"],
    revisionSummary: ["aᵐ × aⁿ = aᵐ⁺ⁿ. aᵐ ÷ aⁿ = aᵐ⁻ⁿ. a⁰ = 1. a⁻ⁿ = 1/aⁿ. Standard form: a × 10ⁿ."],
    practiceQuestions: [
      { type: "short", question: "Simplify: (2³ × 2⁵) ÷ 2⁴." },
      { type: "short", question: "Express 0.00067 in standard form." },
      { type: "icse", question: "[ICSE Board Style] Evaluate: (3⁻² × 3⁴) ÷ 3³." },
    ],
  },
  "math-3": {
    chapterId: "math-3",
    introduction: "A perfect square is a number that is the square of an integer. Finding square roots is the inverse operation of squaring.",
    sections: [
      { heading: "Perfect Squares", content: "A number is a perfect square if it can be expressed as n². Examples: 1,4,9,16,25,36,49,64,81,100. Properties: Perfect squares end in 0,1,4,5,6,9 (never 2,3,7,8). Square of even number is even; square of odd is odd." },
      { heading: "Finding Square Roots", content: "Prime factorization: break into prime factors, pair them, take one from each pair. Long division method: for larger numbers and decimals. Estimation: find between which two perfect squares the number lies." },
    ],
    keyDefinitions: [
      { term: "Perfect Square", definition: "A number that is the square of a whole number (e.g., 16 = 4²)." },
      { term: "Square Root", definition: "A number which when multiplied by itself gives the original number. √25 = 5." },
    ],
    didYouKnow: ["The square root of 2 (√2 ≈ 1.414) was the first known irrational number, discovered by ancient Greeks!"],
    revisionSummary: ["Perfect squares end in 0,1,4,5,6,9. Square root by prime factorization or long division."],
    practiceQuestions: [
      { type: "short", question: "Find √1764 by prime factorization." },
      { type: "short", question: "Is 2352 a perfect square? If not, find the smallest number to multiply to make it one." },
      { type: "icse", question: "[ICSE Board Style] Find the square root of 7056 by long division." },
    ],
  },
  "math-4": {
    chapterId: "math-4",
    introduction: "A perfect cube is a number that is the cube of an integer. Cube roots are the inverse of cubing.",
    sections: [
      { heading: "Perfect Cubes", content: "n³ = n × n × n. Examples: 1,8,27,64,125,216,343,512,729,1000. Finding cube root by prime factorization: group factors in triples." },
    ],
    keyDefinitions: [
      { term: "Perfect Cube", definition: "A number that equals n³ for some integer n." },
      { term: "Cube Root", definition: "∛n is the number whose cube equals n. ∛27 = 3." },
    ],
    didYouKnow: ["1729 is the Hardy-Ramanujan number — the smallest number expressible as sum of two cubes in two ways: 12³+1³ = 10³+9³!"],
    revisionSummary: ["Cube root by prime factorization: group primes in triples. ∛8 = 2, ∛27 = 3, ∛64 = 4."],
    practiceQuestions: [
      { type: "short", question: "Find ∛13824 by prime factorization." },
      { type: "icse", question: "[ICSE Board Style] Is 392 a perfect cube? If not, find the smallest number to multiply." },
    ],
  },
  "math-5": {
    chapterId: "math-5",
    introduction: "Numbers can be written in generalized form to discover patterns and prove divisibility rules. Number puzzles make learning fun!",
    sections: [
      { heading: "Generalized Form", content: "A 2-digit number ab = 10a + b. A 3-digit number abc = 100a + 10b + c. Example: 57 = 10(5) + 7. Reversing: 75 = 10(7) + 5. Sum = 10a+b + 10b+a = 11(a+b), always divisible by 11!" },
      { heading: "Divisibility Rules", content: "By 2: last digit even. By 3: digit sum divisible by 3. By 5: ends in 0 or 5. By 9: digit sum divisible by 9. By 10: ends in 0." },
    ],
    keyDefinitions: [
      { term: "Generalized Form", definition: "Writing a number using place value: ab = 10a + b." },
    ],
    didYouKnow: ["The sum of a 2-digit number and its reverse is always divisible by 11!"],
    revisionSummary: ["ab = 10a + b. abc = 100a + 10b + c. Use these to prove divisibility tests."],
    practiceQuestions: [
      { type: "short", question: "Prove that the sum of a 2-digit number and its reverse is divisible by 11." },
      { type: "icse", question: "[ICSE Board Style] If 21y5 is divisible by 9, find the value of y." },
    ],
  },
  "math-6": {
    chapterId: "math-6",
    introduction: "Sets are well-defined collections of objects. Operations on sets — union, intersection, and complement — help solve problems involving groups and categories.",
    sections: [
      { heading: "Set Operations", content: "Union (A ∪ B): all elements in A or B or both. Intersection (A ∩ B): elements common to both A and B. Complement (A'): all elements NOT in A (from universal set). Disjoint sets: A ∩ B = ∅ (no common elements)." },
      { heading: "Venn Diagrams", content: "Visual representation of sets using circles inside a rectangle (universal set). Overlapping region = intersection. Combined region = union. Useful for solving problems involving groups." },
    ],
    keyDefinitions: [
      { term: "Union", definition: "A ∪ B = set of all elements in A or B or both." },
      { term: "Intersection", definition: "A ∩ B = set of elements common to both A and B." },
      { term: "Complement", definition: "A' = set of elements in the universal set but not in A." },
    ],
    didYouKnow: ["Set theory was developed by Georg Cantor in the 1870s and is the foundation of modern mathematics!"],
    revisionSummary: ["Union (∪) = all elements. Intersection (∩) = common. Complement (') = not in set. Venn diagrams visualize these."],
    practiceQuestions: [
      { type: "short", question: "If A = {1,2,3,4} and B = {3,4,5,6}, find A ∪ B and A ∩ B." },
      { type: "icse", question: "[ICSE Board Style] Draw a Venn diagram for A = {2,4,6,8} and B = {4,8,12} with U = {2,4,6,8,10,12}." },
    ],
  },
  "math-7": {
    chapterId: "math-7",
    introduction: "Percentages, profit & loss, discount, and tax are essential for everyday financial calculations.",
    sections: [
      { heading: "Percentage", content: "Percentage means 'per hundred'. To convert fraction to %: multiply by 100. To find % of a number: (percentage/100) × number." },
      { heading: "Profit and Loss", content: "Profit = SP − CP (when SP > CP). Loss = CP − SP (when CP > SP). Profit% = (Profit/CP) × 100. Loss% = (Loss/CP) × 100. SP = CP × (100 + P%)/100." },
      { heading: "Discount and Tax", content: "Discount = Marked Price − Selling Price. Discount% = (Discount/MP) × 100. Sales Tax/GST is added to the selling price. Final price = SP + Tax." },
    ],
    keyDefinitions: [
      { term: "Cost Price (CP)", definition: "The price at which an article is bought." },
      { term: "Selling Price (SP)", definition: "The price at which an article is sold." },
      { term: "Discount", definition: "Reduction given on the marked price." },
    ],
    didYouKnow: ["India's GST (Goods and Services Tax) replaced over 17 different taxes when introduced in 2017!"],
    revisionSummary: ["Profit = SP−CP. Loss = CP−SP. Discount = MP−SP. Tax added to SP."],
    practiceQuestions: [
      { type: "short", question: "A shirt costing ₹800 is sold for ₹920. Find the profit%." },
      { type: "icse", question: "[ICSE Board Style] MP = ₹1200, Discount = 15%, GST = 10%. Find the final price." },
    ],
  },
  "math-8": {
    chapterId: "math-8",
    introduction: "Compound interest is interest calculated on both the principal and accumulated interest. It grows money faster than simple interest.",
    sections: [
      { heading: "Simple vs Compound Interest", content: "SI = PRT/100 (interest on principal only). CI = P(1 + R/100)ⁿ − P (interest on principal + accumulated interest). Amount A = P(1 + R/100)ⁿ. For half-yearly: use R/2 and 2n." },
    ],
    keyDefinitions: [
      { term: "Compound Interest", definition: "Interest calculated on the principal and previously accumulated interest." },
      { term: "Principal", definition: "The original sum of money invested or borrowed." },
    ],
    didYouKnow: ["Albert Einstein reportedly called compound interest 'the eighth wonder of the world'!"],
    revisionSummary: ["A = P(1+R/100)ⁿ. CI = A − P. Half-yearly: R/2, 2n periods."],
    practiceQuestions: [
      { type: "short", question: "Find CI on ₹10,000 at 10% for 2 years." },
      { type: "icse", question: "[ICSE Board Style] Find the difference between CI and SI on ₹5000 at 8% for 2 years." },
    ],
  },
  "math-9": {
    chapterId: "math-9",
    introduction: "When two quantities change together, they may vary directly (both increase) or inversely (one increases, other decreases).",
    sections: [
      { heading: "Direct and Inverse Variation", content: "Direct: y = kx (if x doubles, y doubles). Example: more items → more cost. Inverse: y = k/x (if x doubles, y halves). Example: more workers → less time. Unitary method: find value for 1 unit, then for required units." },
    ],
    keyDefinitions: [
      { term: "Direct Variation", definition: "Two quantities increase or decrease together proportionally." },
      { term: "Inverse Variation", definition: "When one quantity increases, the other decreases proportionally." },
    ],
    didYouKnow: ["Speed and time are inversely proportional — drive twice as fast, reach in half the time!"],
    revisionSummary: ["Direct: y = kx. Inverse: y = k/x. Use unitary method for word problems."],
    practiceQuestions: [
      { type: "short", question: "If 5 books cost ₹350, find the cost of 12 books." },
      { type: "icse", question: "[ICSE Board Style] 15 workers finish a job in 20 days. How many days for 25 workers?" },
    ],
  },
  "math-10": {
    chapterId: "math-10",
    introduction: "Time and work problems involve calculating how long people or machines take to complete tasks individually or together.",
    sections: [
      { heading: "Time and Work", content: "If A does a job in n days, A's 1 day work = 1/n. Combined work: 1/A + 1/B = 1/total time. Pipes: inlet fills, outlet empties. Net work = filling rate − emptying rate." },
    ],
    keyDefinitions: [
      { term: "Work Rate", definition: "Fraction of work done per unit time (1/n if total work takes n days)." },
    ],
    didYouKnow: ["Time and work problems have been found in ancient Indian mathematics texts dating back 1500 years!"],
    revisionSummary: ["A's 1 day work = 1/n. Together: 1/A + 1/B. Pipes: inlet − outlet."],
    practiceQuestions: [
      { type: "short", question: "A can do a job in 10 days, B in 15 days. Together, how many days?" },
      { type: "icse", question: "[ICSE Board Style] A pipe fills a tank in 6 hrs, another empties in 8 hrs. How long to fill if both open?" },
    ],
  },
  "math-11": {
    chapterId: "math-11",
    introduction: "Algebraic expressions use variables, constants, and operations. Identities are equations true for all values of variables.",
    sections: [
      { heading: "Types and Multiplication", content: "Monomial (3x²), Binomial (2x+5), Trinomial (x²+3x+2). Multiply: distribute each term." },
      { heading: "Standard Identities", content: "(a+b)² = a²+2ab+b². (a−b)² = a²−2ab+b². (a+b)(a−b) = a²−b². (x+a)(x+b) = x²+(a+b)x+ab." },
    ],
    keyDefinitions: [
      { term: "Identity", definition: "An equation true for all values of the variables." },
      { term: "Coefficient", definition: "The numerical factor of a term." },
    ],
    didYouKnow: ["The word 'algebra' comes from Arabic 'al-jabr' by Al-Khwarizmi (820 AD)!"],
    revisionSummary: ["(a+b)² = a²+2ab+b². (a−b)² = a²−2ab+b². a²−b² = (a+b)(a−b)."],
    practiceQuestions: [
      { type: "short", question: "Expand: (3x + 4)²." },
      { type: "short", question: "Find: (2a + 5)(2a − 5)." },
      { type: "icse", question: "[ICSE Board Style] Evaluate 105² using a suitable identity." },
    ],
  },
  "math-12": {
    chapterId: "math-12",
    introduction: "Factorization is the reverse of expansion — expressing an algebraic expression as a product of its factors.",
    sections: [
      { heading: "Methods of Factorization", content: "Common factor: take out the HCF. Regrouping: rearrange terms to find common factors. Using identities: a²+2ab+b² = (a+b)², a²−b² = (a+b)(a−b). Splitting middle term: x²+(a+b)x+ab = (x+a)(x+b)." },
      { heading: "Division of Algebraic Expressions", content: "Monomial ÷ Monomial: divide coefficients and subtract exponents. Polynomial ÷ Monomial: divide each term separately." },
    ],
    keyDefinitions: [
      { term: "Factorization", definition: "Expressing an expression as a product of its factors." },
      { term: "HCF", definition: "Highest Common Factor — the greatest factor common to two or more terms." },
    ],
    didYouKnow: ["Factorization is the basis of modern encryption — RSA encryption relies on the difficulty of factoring very large numbers!"],
    revisionSummary: ["Methods: common factor, regrouping, identities, splitting middle term. Division: divide each term."],
    practiceQuestions: [
      { type: "short", question: "Factorize: x² − 9." },
      { type: "short", question: "Factorize: 6x² + 11x + 3." },
      { type: "icse", question: "[ICSE Board Style] Factorize: 4a² − 12ab + 9b²." },
    ],
  },
  "math-13": {
    chapterId: "math-13",
    introduction: "A linear equation in one variable has the form ax + b = c. Solving these equations is a fundamental algebra skill used in word problems.",
    sections: [
      { heading: "Solving Equations", content: "Transpose terms: move terms from one side to the other (change sign). Cross multiply for equations with fractions. Check solution by substituting back." },
      { heading: "Word Problems", content: "Convert English sentences to equations. 'A number added to 5 gives 12' → x + 5 = 12 → x = 7. Age problems, number problems, geometry problems." },
    ],
    keyDefinitions: [
      { term: "Linear Equation", definition: "An equation where the highest power of the variable is 1." },
      { term: "Transposing", definition: "Moving a term from one side of the equation to the other with opposite sign." },
    ],
    didYouKnow: ["The equals sign (=) was invented by Robert Recorde in 1557!"],
    revisionSummary: ["Transpose to isolate variable. Cross multiply for fractions. Always verify by substitution."],
    practiceQuestions: [
      { type: "short", question: "Solve: 3x + 7 = 22." },
      { type: "short", question: "Solve: (2x−3)/5 = (x+1)/3." },
      { type: "icse", question: "[ICSE Board Style] The sum of three consecutive even numbers is 78. Find them." },
    ],
  },
  "math-14": {
    chapterId: "math-14",
    introduction: "Inequalities compare quantities using <, >, ≤, ≥. Solving linear inequalities is similar to equations with one key difference.",
    sections: [
      { heading: "Properties and Solving", content: "Adding/subtracting same number: inequality preserved. Multiplying/dividing by positive: preserved. Multiplying/dividing by negative: inequality reverses! Example: −2x > 6 → x < −3 (sign flips)." },
    ],
    keyDefinitions: [
      { term: "Inequality", definition: "A mathematical statement comparing two expressions using <, >, ≤, or ≥." },
    ],
    didYouKnow: ["Inequalities are used in optimization problems — finding the best solution under constraints!"],
    revisionSummary: ["Solve like equations. Multiply/divide by negative → flip inequality sign. Graph on number line."],
    practiceQuestions: [
      { type: "short", question: "Solve: 3x − 5 > 10 and represent on a number line." },
      { type: "icse", question: "[ICSE Board Style] Solve: −3x + 9 ≤ 0 and graph the solution." },
    ],
  },
  "math-15": {
    chapterId: "math-15",
    introduction: "Quadrilaterals are polygons with four sides. Understanding their properties helps in geometry proofs and constructions.",
    sections: [
      { heading: "Angle Sum Property", content: "Sum of interior angles of a quadrilateral = 360°." },
      { heading: "Properties of Special Quadrilaterals", content: "Parallelogram: opposite sides equal and parallel, opposite angles equal, diagonals bisect each other. Rectangle: parallelogram + all angles 90°, diagonals equal. Rhombus: parallelogram + all sides equal, diagonals bisect at right angles. Square: rectangle + rhombus. Trapezium: one pair of parallel sides." },
    ],
    keyDefinitions: [
      { term: "Parallelogram", definition: "Quadrilateral with both pairs of opposite sides parallel." },
      { term: "Trapezium", definition: "Quadrilateral with exactly one pair of parallel sides." },
    ],
    didYouKnow: ["Every square is a rectangle and a rhombus, but not every rectangle or rhombus is a square!"],
    revisionSummary: ["Angle sum = 360°. Parallelogram: opp sides equal/parallel, diagonals bisect. Rectangle: + all 90°. Rhombus: + all sides equal."],
    practiceQuestions: [
      { type: "short", question: "Find the missing angle in a quadrilateral with angles 80°, 90°, 110°." },
      { type: "icse", question: "[ICSE Board Style] Prove that the diagonals of a parallelogram bisect each other." },
    ],
  },
  "math-16": {
    chapterId: "math-16",
    introduction: "Three-dimensional shapes can be represented in two dimensions through drawings, nets, and views. Euler's formula relates faces, edges, and vertices.",
    sections: [
      { heading: "3-D Shapes and Euler's Formula", content: "F + V − E = 2 (Euler's formula). Cube: 6 faces, 8 vertices, 12 edges. Cuboid: same counts as cube. Tetrahedron: 4F, 4V, 6E. Triangular prism: 5F, 6V, 9E." },
      { heading: "Nets and Views", content: "A net is a 2-D pattern that folds into a 3-D shape. Front view, side view, and top view show different perspectives of a 3-D object." },
    ],
    keyDefinitions: [
      { term: "Euler's Formula", definition: "For any polyhedron: Faces + Vertices − Edges = 2." },
      { term: "Net", definition: "A 2-D pattern that can be folded to form a 3-D shape." },
    ],
    didYouKnow: ["Euler's formula works for ALL polyhedra — from simple cubes to complex dodecahedrons!"],
    revisionSummary: ["F + V − E = 2. Cube: 6F, 8V, 12E. Nets fold into 3-D shapes."],
    practiceQuestions: [
      { type: "short", question: "Verify Euler's formula for a triangular prism." },
      { type: "icse", question: "[ICSE Board Style] A polyhedron has 7 faces and 10 vertices. Find the number of edges." },
    ],
  },
  "math-17": {
    chapterId: "math-17",
    introduction: "Constructing quadrilaterals requires specific measurements — sides, diagonals, and/or angles. Accuracy with compass and ruler is essential.",
    sections: [
      { heading: "Construction Methods", content: "Given four sides and one diagonal: draw the diagonal, construct two triangles on either side. Given three sides and two diagonals: use the two diagonals to locate the fourth vertex. Given three sides and two included angles: use protractor for angles, compass for sides. Given two adjacent sides and three angles: use the angle sum property (4th angle = 360° − sum of given angles)." },
    ],
    keyDefinitions: [
      { term: "Construction", definition: "Drawing a geometrical figure accurately using ruler, compass, and protractor." },
    ],
    didYouKnow: ["Ancient Egyptians used ropes with knots to construct perfect right angles for building pyramids!"],
    revisionSummary: ["Split quadrilateral into triangles using diagonal. Use SSS, SAS, ASA rules for triangle construction."],
    practiceQuestions: [
      { type: "short", question: "Construct a quadrilateral ABCD with AB=4cm, BC=5cm, CD=6cm, DA=5.5cm, AC=7cm." },
      { type: "icse", question: "[ICSE Board Style] Construct a parallelogram with sides 5cm and 3.5cm and included angle 60°." },
    ],
  },
  "math-18": {
    chapterId: "math-18",
    introduction: "A circle is a set of all points equidistant from a fixed point (centre). Understanding circle terminology is essential for geometry.",
    sections: [
      { heading: "Parts of a Circle", content: "Centre: fixed point. Radius: distance from centre to any point on circle. Diameter: longest chord = 2 × radius. Chord: line segment joining two points on circle. Arc: part of the circumference. Sector: region between two radii and an arc (like a pizza slice). Segment: region between a chord and an arc. Circumference = 2πr. Area = πr²." },
    ],
    keyDefinitions: [
      { term: "Radius", definition: "Line segment from centre to any point on the circle." },
      { term: "Chord", definition: "Line segment joining any two points on the circle." },
      { term: "Sector", definition: "Region enclosed by two radii and an arc." },
      { term: "Segment", definition: "Region between a chord and its arc." },
    ],
    didYouKnow: ["π (pi) is an irrational number — its digits go on forever without repeating! Over 100 trillion digits have been calculated."],
    revisionSummary: ["Diameter = 2r. Circumference = 2πr. Area = πr². Sector = 'pizza slice'. Segment = between chord and arc."],
    practiceQuestions: [
      { type: "short", question: "Find the circumference and area of a circle with radius 7 cm." },
      { type: "icse", question: "[ICSE Board Style] A chord is 24 cm long and 5 cm from the centre. Find the radius." },
    ],
  },
  "math-19": {
    chapterId: "math-19",
    introduction: "Mensuration deals with the measurement of area, surface area, and volume of geometric shapes.",
    sections: [
      { heading: "Area Formulae", content: "Trapezium: A = ½(a+b)×h. Triangle: A = ½×b×h. Semicircle: A = ½πr². General polygon: divide into triangles." },
      { heading: "Surface Area and Volume", content: "Cube: SA = 6l², V = l³. Cuboid: SA = 2(lb+bh+lh), V = l×b×h. Cylinder: CSA = 2πrh, TSA = 2πr(r+h), V = πr²h." },
    ],
    keyDefinitions: [
      { term: "Surface Area", definition: "Total area of all faces/surfaces of a 3-D figure." },
      { term: "Volume", definition: "Amount of space enclosed within a 3-D figure." },
      { term: "CSA", definition: "Curved Surface Area — area of the curved surface only (not including flat faces)." },
    ],
    didYouKnow: ["A sphere has the smallest surface area for a given volume — that's why bubbles are round!"],
    revisionSummary: ["Trapezium = ½(a+b)h. Cube: SA=6l², V=l³. Cuboid: V=lbh. Cylinder: V=πr²h, TSA=2πr(r+h)."],
    practiceQuestions: [
      { type: "short", question: "Find the area of a trapezium with parallel sides 12 cm and 8 cm, and height 5 cm." },
      { type: "short", question: "Find the volume of a cylinder with radius 7 cm and height 10 cm." },
      { type: "icse", question: "[ICSE Board Style] A cuboidal tank is 2m × 1.5m × 1m. Find its capacity in litres." },
    ],
  },
  "math-20": {
    chapterId: "math-20",
    introduction: "Data handling involves collecting, organizing, and interpreting data using graphs and measures of central tendency. Probability measures the likelihood of an event.",
    sections: [
      { heading: "Organizing Data", content: "Raw data → Frequency distribution table. Grouped data: class intervals (10-20, 20-30). Class size = upper limit − lower limit." },
      { heading: "Graphs", content: "Bar graph: rectangular bars for different categories. Histogram: bars for continuous grouped data (no gaps). Pie chart: circle divided into sectors proportional to data values. Angle = (value/total) × 360°." },
      { heading: "Probability", content: "Probability = Number of favourable outcomes / Total outcomes. 0 ≤ P ≤ 1. P(impossible) = 0. P(certain) = 1. P(not E) = 1 − P(E). Example: rolling a die, P(getting 3) = 1/6." },
    ],
    keyDefinitions: [
      { term: "Frequency", definition: "The number of times a particular value occurs in a dataset." },
      { term: "Histogram", definition: "A bar graph for continuous grouped data with no gaps between bars." },
      { term: "Probability", definition: "A numerical measure of the likelihood of an event occurring (0 to 1)." },
    ],
    didYouKnow: ["The probability of getting a royal flush in poker is about 1 in 650,000 — incredibly rare!"],
    revisionSummary: ["Pie chart angle = (value/total)×360°. Probability = favourable/total. 0 ≤ P ≤ 1."],
    practiceQuestions: [
      { type: "short", question: "A die is rolled. Find P(even number)." },
      { type: "short", question: "Draw a pie chart for: Cricket 40%, Football 25%, Tennis 20%, Others 15%." },
      { type: "icse", question: "[ICSE Board Style] A bag has 5 red, 3 blue, 2 green balls. Find P(not red)." },
    ],
  },

  // =============================================
  // ===== GEOGRAPHY =====
  // =============================================
  "geo-1": {
    chapterId: "geo-1",
    introduction: "Geographical features like hills, valleys, and plains are represented on maps using contour lines, colours, and symbols. Reading these representations is essential for understanding terrain.",
    sections: [
      { heading: "Contour Lines", content: "Contour lines join places of equal height above sea level. Contour interval is the difference in height between successive contours. Close contours = steep slope. Wide contours = gentle slope. V-shaped contours pointing uphill indicate a valley; pointing downhill indicate a ridge." },
      { heading: "Colours and Symbols", content: "Brown: contours and land features. Blue: water bodies. Green: vegetation. Yellow/White: open land. Black: man-made features. Conventional symbols represent features like churches, temples, bridges, railways." },
    ],
    keyDefinitions: [
      { term: "Contour Line", definition: "A line joining places of equal height above sea level." },
      { term: "Contour Interval", definition: "The constant height difference between two consecutive contour lines." },
    ],
    didYouKnow: ["The highest contour on any world map represents Mount Everest at 8,849 metres above sea level!"],
    revisionSummary: ["Contours: same height lines. Close = steep, wide = gentle. V uphill = valley. Colours: brown=land, blue=water, green=vegetation."],
    practiceQuestions: [
      { type: "short", question: "What do closely spaced contour lines indicate?" },
      { type: "icse", question: "[ICSE Board Style] Draw and label the contour pattern for a hill and a valley." },
    ],
  },
  "geo-2": {
    chapterId: "geo-2",
    introduction: "Maps are essential tools for representing the Earth's surface. Understanding scale, direction, and grid references helps us read and use maps effectively.",
    sections: [
      { heading: "Types of Maps", content: "Physical maps: show natural features (mountains, rivers). Political maps: show boundaries, cities, states. Thematic maps: specific topics (rainfall, population, minerals). Topographic maps: detailed terrain with contours." },
      { heading: "Scale and Direction", content: "Scale: ratio of map distance to actual distance. RF = map distance / ground distance. Large scale: shows small area in detail (1:25,000). Small scale: shows large area with less detail (1:1,000,000). Direction: North is usually at the top. Compass rose shows 8 directions." },
      { heading: "Grid References", content: "Four-figure grid reference: identifies a grid square. Six-figure grid reference: identifies a specific point within a square. Eastings (horizontal) read first, then Northings (vertical). 'Along the corridor and up the stairs.'" },
    ],
    keyDefinitions: [
      { term: "Scale", definition: "The ratio between distance on a map and the corresponding distance on the ground." },
      { term: "Grid Reference", definition: "A system of coordinates used to locate a point on a map." },
      { term: "Representative Fraction (RF)", definition: "Scale expressed as a ratio, e.g., 1:50,000." },
    ],
    didYouKnow: ["The oldest known map is a clay tablet from ancient Babylon, dating to about 600 BC!"],
    revisionSummary: ["Types: physical, political, thematic, topographic. Scale: large (detail) vs small (overview). Grid: eastings first, then northings."],
    practiceQuestions: [
      { type: "short", question: "Differentiate between large-scale and small-scale maps." },
      { type: "icse", question: "[ICSE Board Style] If the scale is 1:50,000, what is the ground distance for 4 cm on the map?" },
    ],
  },
  "geo-3": {
    chapterId: "geo-3",
    introduction: "Weather is short-term atmospheric conditions; climate is the long-term average. Understanding these helps predict natural events and plan activities.",
    sections: [
      { heading: "The Atmosphere", content: "Layers: Troposphere (weather, 0-12km), Stratosphere (ozone, 12-50km), Mesosphere, Thermosphere, Exosphere. Composition: N₂ 78%, O₂ 21%, others 1%." },
      { heading: "Temperature", content: "Decreases with altitude (6.5°C/1000m). Factors: latitude, altitude, distance from sea, ocean currents. Isotherms join places with equal temperature." },
      { heading: "Pressure and Winds", content: "Pressure decreases with altitude. Wind: high to low pressure. Types: permanent (trades, westerlies), seasonal (monsoons), local (land/sea breezes)." },
      { heading: "Rainfall", content: "Convectional (equatorial), Orographic/Relief (mountain), Cyclonic/Frontal (air masses meet). Rain shadow on leeward side." },
    ],
    keyDefinitions: [
      { term: "Weather", definition: "Atmospheric conditions at a particular time and place." },
      { term: "Climate", definition: "Average weather over 30+ years." },
      { term: "Isotherm", definition: "Line joining places with the same temperature." },
      { term: "Isobar", definition: "Line joining places with equal atmospheric pressure." },
    ],
    didYouKnow: ["Mawsynram, Meghalaya, India is the wettest place on Earth — ~11,871 mm annual rainfall!"],
    revisionSummary: ["Weather=short-term, Climate=long-term. Temp decreases with altitude. Rainfall: convectional, orographic, cyclonic."],
    practiceQuestions: [
      { type: "short", question: "Differentiate between weather and climate." },
      { type: "long", question: "Explain three types of rainfall with diagrams." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Places near the sea have a moderate climate." },
    ],
  },
  "geo-4": {
    chapterId: "geo-4",
    introduction: "Soil is the thin layer of material covering the Earth's surface, formed by weathering of rocks. Different types of soil support different types of agriculture.",
    sections: [
      { heading: "Soil Formation", content: "Soil forms through weathering of rocks by physical (temperature changes, frost), chemical (water reactions), and biological (roots, organisms) processes. It takes hundreds of years to form even a few centimetres of soil." },
      { heading: "Soil Profile", content: "O Horizon: organic matter (humus). A Horizon: topsoil (most fertile, dark). B Horizon: subsoil (minerals washed down). C Horizon: weathered rock. R Horizon: bedrock." },
      { heading: "Types of Soil in India", content: "Alluvial soil: most widespread, fertile, found in river plains (wheat, rice, sugarcane). Black/Regur soil: retains moisture, found in Deccan Plateau (cotton). Red soil: iron-rich, found in south India (millets, groundnut). Laterite soil: leached, found in heavy rainfall areas. Mountain soil: thin, found in hilly areas." },
      { heading: "Soil Erosion and Conservation", content: "Erosion by wind, water, deforestation, overgrazing. Prevention: afforestation, terrace farming, contour ploughing, building check dams, crop rotation, windbreaks." },
    ],
    keyDefinitions: [
      { term: "Soil", definition: "Thin layer of material covering Earth's surface formed by weathering of rocks." },
      { term: "Humus", definition: "Decayed organic matter in soil that provides nutrients." },
      { term: "Soil Erosion", definition: "Removal of topsoil by wind, water, or other agents." },
    ],
    didYouKnow: ["One tablespoon of soil contains more microorganisms than there are people on Earth!"],
    revisionSummary: ["Soil profile: O (humus) → A (topsoil) → B (subsoil) → C (weathered rock) → R (bedrock). India: alluvial, black, red, laterite. Conservation: terracing, afforestation."],
    practiceQuestions: [
      { type: "short", question: "Name four types of soil found in India with their characteristics." },
      { type: "icse", question: "[ICSE Board Style] Describe the soil profile with a labelled diagram." },
    ],
  },
  "geo-5": {
    chapterId: "geo-5",
    introduction: "Natural vegetation refers to the plant life growing naturally without human interference. India has diverse vegetation due to varied climate and terrain.",
    sections: [
      { heading: "Types of Forests in India", content: "Tropical Evergreen: heavy rainfall (>200cm), dense, tall trees, Western Ghats, NE India (rosewood, ebony, mahogany). Tropical Deciduous: monsoon forests, shed leaves in dry season (teak, sal, bamboo). Thorn and Scrub: dry areas, small thorny bushes (Rajasthan, Gujarat). Tidal/Mangrove: coastal, salt-tolerant, Sundarbans (sundari tree). Mountain/Alpine: varies with altitude — deciduous at base, coniferous higher up, alpine meadows at top." },
      { heading: "Importance of Forests", content: "Provide oxygen, absorb CO₂. Home to wildlife (biodiversity). Prevent soil erosion. Regulate water cycle. Provide timber, medicines, food. Support tribal livelihoods." },
      { heading: "Conservation", content: "Protected areas: National Parks, Wildlife Sanctuaries, Biosphere Reserves. Afforestation and social forestry. Chipko Movement (1973): people hugged trees to prevent logging. Van Mahotsav: tree planting festival." },
    ],
    keyDefinitions: [
      { term: "Evergreen Forest", definition: "Dense forest with trees that remain green all year due to heavy rainfall." },
      { term: "Deciduous Forest", definition: "Forest where trees shed leaves during the dry season." },
      { term: "Mangrove Forest", definition: "Salt-tolerant forests found in coastal tidal areas." },
    ],
    didYouKnow: ["India's Sundarbans is the largest mangrove forest in the world and home to the Royal Bengal Tiger!"],
    revisionSummary: ["Evergreen: heavy rain, always green. Deciduous: shed leaves. Thorn: dry areas. Mangrove: coastal. Mountain: altitude zones. Conservation: national parks, afforestation."],
    practiceQuestions: [
      { type: "short", question: "Differentiate between tropical evergreen and deciduous forests." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Mangrove forests are found in coastal areas." },
    ],
  },
  "geo-6": {
    chapterId: "geo-6",
    introduction: "Water is essential for life, agriculture, and industry. Understanding water resources and conservation is crucial for sustainable development.",
    sections: [
      { heading: "Sources of Water", content: "Surface water: rivers, lakes, ponds, reservoirs. Groundwater: water table, wells, tube wells, springs. Rainwater is the primary source of all fresh water." },
      { heading: "Irrigation", content: "Supplying water to crops artificially. Methods: Canal irrigation (from rivers/dams), Well/Tube well irrigation (from groundwater), Tank irrigation (from collected rainwater), Drip irrigation (water drips directly to roots — most efficient), Sprinkler irrigation." },
      { heading: "Water Conservation", content: "Rainwater harvesting: collecting and storing rainwater. Watershed management. Drip irrigation saves water. Recharging groundwater. Preventing water pollution. Reducing water wastage in homes and industries." },
    ],
    keyDefinitions: [
      { term: "Water Table", definition: "The upper level of underground water in saturated soil/rock." },
      { term: "Irrigation", definition: "Artificial supply of water to agricultural land." },
      { term: "Rainwater Harvesting", definition: "Collecting and storing rainwater for future use." },
    ],
    didYouKnow: ["Only 0.3% of Earth's total water is available as fresh surface water in rivers and lakes!"],
    revisionSummary: ["Sources: surface + ground water. Irrigation: canal, well, tank, drip, sprinkler. Conservation: rainwater harvesting, drip irrigation, reduce waste."],
    practiceQuestions: [
      { type: "short", question: "Name four methods of irrigation." },
      { type: "icse", question: "[ICSE Board Style] What is rainwater harvesting? Why is it important?" },
    ],
  },
  "geo-7": {
    chapterId: "geo-7",
    introduction: "Minerals and energy resources are essential for economic development. India has diverse mineral deposits and uses both conventional and non-conventional energy sources.",
    sections: [
      { heading: "Types of Minerals", content: "Metallic: iron ore, bauxite (aluminium), copper, manganese, gold. Non-metallic: limestone, mica, salt, gypsum. Minerals are found in specific geological formations. India's major iron ore deposits: Jharkhand, Odisha, Goa, Karnataka." },
      { heading: "Energy Resources", content: "Conventional: coal (most used in India), petroleum, natural gas, hydroelectric power. Non-conventional/Renewable: solar, wind, tidal, geothermal, biomass, nuclear. India aims to increase renewable energy to reduce dependence on fossil fuels." },
    ],
    keyDefinitions: [
      { term: "Mineral", definition: "A naturally occurring inorganic substance with a definite chemical composition." },
      { term: "Renewable Energy", definition: "Energy from sources that are naturally replenished (solar, wind, water)." },
      { term: "Fossil Fuel", definition: "Non-renewable energy source formed from ancient organisms (coal, petroleum, natural gas)." },
    ],
    didYouKnow: ["India is the 4th largest producer of coal and has massive solar energy potential due to its tropical location!"],
    revisionSummary: ["Metallic (iron, copper) vs Non-metallic (limestone, mica). Conventional (coal, oil) vs Renewable (solar, wind). India: coal dominant, increasing renewables."],
    practiceQuestions: [
      { type: "short", question: "Differentiate between metallic and non-metallic minerals with examples." },
      { type: "icse", question: "[ICSE Board Style] Why should India focus on developing non-conventional energy sources?" },
    ],
  },
  "geo-8": {
    chapterId: "geo-8",
    introduction: "India has diverse physical features — from the towering Himalayas to coastal plains and islands. Understanding India's geography is essential for ICSE.",
    sections: [
      { heading: "The Northern Mountains", content: "The Himalayas: youngest fold mountains, three ranges — Greater Himalayas (Himadri, highest — Mt Everest), Middle Himalayas (Himachal — hill stations), Outer Himalayas (Shiwaliks, lowest). Important passes: Khyber, Bolan, Nathu La. Source of major rivers: Ganga, Indus, Brahmaputra." },
      { heading: "The Northern Plains", content: "Formed by alluvial deposits of Indus, Ganga, Brahmaputra rivers. Most fertile land in India. Divided into: Punjab Plain, Ganga Plain, Brahmaputra Plain. Features: Bhabar (pebbles), Terai (marshy), Bangar (old alluvium), Khadar (new alluvium, most fertile)." },
      { heading: "The Peninsular Plateau", content: "Old, stable landmass. Divided into: Deccan Plateau (south of Narmada), Central Highlands (north of Narmada). Western Ghats (continuous, higher — Anaimudi 2695m) and Eastern Ghats (broken, lower). Rich in minerals." },
      { heading: "Coastal Plains and Islands", content: "Western Coastal Plain: Konkan, Malabar coast. Eastern Coastal Plain: Coromandel, Northern Circars. Lakshadweep: coral islands in Arabian Sea. Andaman & Nicobar: volcanic origin in Bay of Bengal." },
    ],
    keyDefinitions: [
      { term: "Himadri", definition: "The Greater Himalayas — the highest and most continuous range." },
      { term: "Alluvial Soil", definition: "Fertile soil deposited by rivers in the Northern Plains." },
      { term: "Deccan Plateau", definition: "The large plateau in peninsular India south of the Narmada River." },
    ],
    didYouKnow: ["The Himalayas are still growing about 1 cm per year due to the collision of Indian and Eurasian plates!"],
    revisionSummary: ["Himalayas: Himadri (highest), Himachal (middle), Shiwaliks (outer). Plains: alluvial, most fertile. Plateau: old, mineral-rich. Coasts: Western (Konkan, Malabar) and Eastern (Coromandel)."],
    practiceQuestions: [
      { type: "short", question: "Name the three ranges of the Himalayas." },
      { type: "long", question: "Describe the physical divisions of India." },
      { type: "icse", question: "[ICSE Board Style] Differentiate between the Western and Eastern Ghats." },
    ],
  },
  "geo-9": {
    chapterId: "geo-9",
    introduction: "Agriculture is the backbone of India's economy. Understanding farming types, major crops, and challenges is important.",
    sections: [
      { heading: "Types of Farming", content: "Subsistence: for family consumption, small farms, traditional methods. Commercial: for sale, large farms, modern techniques. Plantation: single cash crop, large scale (tea, coffee, rubber). Shifting/Jhum: slash and burn in NE India, forest area cleared temporarily." },
      { heading: "Major Crops", content: "Food crops: Rice (West Bengal, Punjab — needs standing water), Wheat (Punjab, Haryana — rabi crop), Maize, Millets. Cash crops: Tea (Assam, Darjeeling), Coffee (Karnataka), Cotton (Gujarat, Maharashtra), Sugarcane (UP, Maharashtra), Jute (West Bengal)." },
      { heading: "Green Revolution", content: "Introduced in the 1960s by Dr. M.S. Swaminathan. High-yielding variety (HYV) seeds, fertilizers, irrigation, pesticides. Dramatically increased wheat and rice production. Criticisms: regional inequality, soil degradation, excessive chemical use." },
    ],
    keyDefinitions: [
      { term: "Rabi Crop", definition: "Winter crop sown in October-November, harvested in March-April (wheat, mustard)." },
      { term: "Kharif Crop", definition: "Summer/monsoon crop sown in June-July, harvested in September-October (rice, maize)." },
      { term: "Green Revolution", definition: "Use of HYV seeds and modern techniques to increase food production in the 1960s." },
    ],
    didYouKnow: ["India is the world's largest producer of milk, second-largest of rice and wheat, and largest of spices!"],
    revisionSummary: ["Subsistence vs commercial farming. Rabi (winter) vs Kharif (monsoon) crops. Green Revolution: HYV seeds, increased production but some negative impacts."],
    practiceQuestions: [
      { type: "short", question: "Differentiate between Rabi and Kharif crops with examples." },
      { type: "icse", question: "[ICSE Board Style] Discuss the advantages and disadvantages of the Green Revolution." },
    ],
  },
  "geo-10": {
    chapterId: "geo-10",
    introduction: "Industries transform raw materials into finished products. India has a diverse industrial landscape from traditional to modern technology-based industries.",
    sections: [
      { heading: "Types of Industries", content: "Primary: extracting raw materials (mining, farming). Secondary/Manufacturing: converting raw materials (iron & steel, textiles). Tertiary/Service: providing services (banking, transport, IT). Also classified by size: large-scale, small-scale, cottage industries." },
      { heading: "Major Industries in India", content: "Iron & Steel: Jamshedpur (Tata), Bhilai, Rourkela — needs iron ore, coal, limestone. Cotton Textile: Mumbai, Ahmedabad. Jute: Kolkata. IT: Bengaluru, Hyderabad, Pune. Sugar: UP, Maharashtra. Cement: Rajasthan, Tamil Nadu." },
      { heading: "Industrial Pollution", content: "Air pollution from factories, water pollution from industrial waste, land pollution from solid waste. Solutions: effluent treatment plants, cleaner technologies, strict regulations, recycling." },
    ],
    keyDefinitions: [
      { term: "Manufacturing Industry", definition: "Industry that converts raw materials into finished products." },
      { term: "Agro-based Industry", definition: "Industry using agricultural products as raw materials (sugar, cotton textile)." },
    ],
    didYouKnow: ["Bengaluru is called the 'Silicon Valley of India' — it contributes about 40% of India's IT exports!"],
    revisionSummary: ["Primary (extraction), Secondary (manufacturing), Tertiary (services). Iron & Steel: Jamshedpur. IT: Bengaluru. Cotton: Mumbai/Ahmedabad."],
    practiceQuestions: [
      { type: "short", question: "Classify industries into primary, secondary, and tertiary with examples." },
      { type: "icse", question: "[ICSE Board Style] Why is the iron and steel industry located near coal and iron ore deposits?" },
    ],
  },

  // =============================================
  // ===== HISTORY & CIVICS =====
  // =============================================
  "hist-1": {
    chapterId: "hist-1",
    introduction: "The 15th to 18th centuries saw Europe transition from medieval to modern age through the Renaissance, Reformation, Industrial Revolution, and Imperialism.",
    sections: [
      { heading: "The Renaissance", content: "Renaissance ('rebirth') began in Italy, 14th century. Revival of Greek/Roman art and learning. Key figures: Da Vinci, Michelangelo, Shakespeare. Promoted humanism." },
      { heading: "The Reformation", content: "16th century religious movement. Martin Luther's 95 Theses (1517) against Catholic abuses. Rise of Protestantism. Counter-Reformation by Catholic Church." },
      { heading: "Industrial Revolution", content: "Began in England, mid-18th century. Reasons: coal, iron, colonial markets, stability. Inventions: Spinning Jenny, Steam Engine (Watt), Power Loom. Impacts: urbanisation, factory system, pollution, capitalism." },
      { heading: "Imperialism", content: "European powers colonised Asia, Africa, Americas for raw materials and markets. Impacts: economic exploitation, destruction of local industries, spread of Western education." },
    ],
    keyDefinitions: [
      { term: "Renaissance", definition: "Cultural revival of classical learning (14th-17th century)." },
      { term: "Industrial Revolution", definition: "Transition from hand to machine manufacturing, starting in England." },
      { term: "Imperialism", definition: "Policy of extending national authority over other territories." },
    ],
    didYouKnow: ["Da Vinci designed a helicopter 400 years before one was built!"],
    revisionSummary: ["Renaissance: rebirth of learning. Reformation: Protestantism. Industrial Rev: England, key inventions. Imperialism: colonisation."],
    practiceQuestions: [
      { type: "short", question: "Name three inventions of the Industrial Revolution." },
      { type: "long", question: "Explain causes and impacts of the Industrial Revolution." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: The Industrial Revolution began in England." },
    ],
  },
  "hist-2": {
    chapterId: "hist-2",
    introduction: "The growth of nationalism in Europe was marked by the French Revolution, American War of Independence, and American Civil War — events that shaped modern democratic ideals.",
    sections: [
      { heading: "The French Revolution (1789)", content: "Causes: absolute monarchy of Louis XVI, heavy taxes on the Third Estate (common people), influence of Enlightenment thinkers (Rousseau, Voltaire, Montesquieu), financial crisis due to wars. Outbreak: Storming of the Bastille (14 July 1789). Key events: Declaration of Rights of Man, abolition of feudalism, execution of Louis XVI. Impact: end of absolute monarchy, spread of ideas of liberty, equality, fraternity. Napoleon Bonaparte rose to power after the Revolution." },
      { heading: "American War of Independence (1775-1783)", content: "13 British colonies in North America. Causes: heavy taxation without representation ('No taxation without representation'), Stamp Act, Townshend Acts, Boston Tea Party (1773). Declaration of Independence (4 July 1776) — written by Thomas Jefferson. George Washington led the Continental Army. France helped the colonists. Treaty of Paris (1783) — Britain recognised American independence. Birth of the United States of America." },
      { heading: "American Civil War (1861-1865)", content: "Conflict between Northern states (Union, anti-slavery) and Southern states (Confederate, pro-slavery). Causes: slavery, states' rights, economic differences. Abraham Lincoln became President (1860), opposed slavery. Emancipation Proclamation (1863) freed slaves. Gettysburg Address — Lincoln's famous speech on democracy. Union won; slavery abolished (13th Amendment)." },
    ],
    keyDefinitions: [
      { term: "French Revolution", definition: "1789 uprising in France that overthrew the monarchy and established republican ideals." },
      { term: "Declaration of Independence", definition: "Document (1776) declaring American colonies independent from Britain." },
      { term: "Emancipation Proclamation", definition: "Lincoln's 1863 order freeing slaves in Confederate states." },
    ],
    didYouKnow: [
      "The French national motto 'Liberté, Égalité, Fraternité' (Liberty, Equality, Fraternity) comes from the Revolution!",
      "The 4th of July is celebrated as Independence Day in the USA — marking the Declaration of Independence in 1776.",
    ],
    revisionSummary: [
      "French Revolution: absolute monarchy → republic. Bastille, Rights of Man, Napoleon.",
      "American Independence: 13 colonies, no taxation without representation, Declaration 1776.",
      "Civil War: North vs South over slavery. Lincoln, Emancipation, 13th Amendment.",
    ],
    practiceQuestions: [
      { type: "short", question: "What were the main causes of the French Revolution?" },
      { type: "short", question: "What was the significance of the Boston Tea Party?" },
      { type: "long", question: "Describe the American War of Independence — causes, events, and results." },
      { type: "icse", question: "[ICSE Board Style] Explain the role of Abraham Lincoln in the American Civil War." },
    ],
  },
  "hist-3": {
    chapterId: "hist-3",
    introduction: "The 18th century saw the decline of the mighty Mughal Empire and the rise of independent regional kingdoms across India.",
    sections: [
      { heading: "Decline of the Mughal Empire", content: "After Aurangzeb's death (1707), the empire weakened. Causes: weak successors, costly wars in Deccan, Aurangzeb's religious intolerance alienated Hindus, Rajputs, and Sikhs, invasions by Nadir Shah (1739) and Ahmad Shah Abdali, rise of regional powers." },
      { heading: "Rise of Regional Kingdoms", content: "Hyderabad: Nizam-ul-Mulk (1724). Awadh: Saadat Khan, later Nawab Shuja-ud-Daulah. Bengal: Murshid Quli Khan — wealthy province. Marathas: Shivaji's successors, Peshwas, expanded across India. Sikhs: Ranjit Singh united Sikh kingdoms in Punjab. Mysore: Hyder Ali and Tipu Sultan resisted British." },
    ],
    keyDefinitions: [
      { term: "Mughal Empire", definition: "Muslim dynasty that ruled most of India from 1526 to the mid-18th century." },
      { term: "Regional Kingdom", definition: "Independent state that emerged as the Mughal Empire weakened." },
    ],
    didYouKnow: [
      "Nadir Shah's invasion of Delhi in 1739 was so devastating that he took the Kohinoor diamond and the Peacock Throne!",
      "Tipu Sultan was called the 'Tiger of Mysore' and was one of the first Indian rulers to use rockets in warfare.",
    ],
    revisionSummary: ["Mughal decline: weak successors, costly wars, religious intolerance, invasions. Regional powers: Hyderabad, Awadh, Bengal, Marathas, Sikhs, Mysore."],
    practiceQuestions: [
      { type: "short", question: "Name four causes for the decline of the Mughal Empire." },
      { type: "long", question: "Describe the rise of any three regional kingdoms in 18th century India." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Aurangzeb's policies contributed to the decline of the Mughal Empire." },
    ],
  },
  "hist-4": {
    chapterId: "hist-4",
    introduction: "European trading companies came to India for spices and trade, but the British East India Company gradually became the ruler of vast territories through wars and policies.",
    sections: [
      { heading: "Advent of the East India Company", content: "British East India Company established in 1600. Initially came for trade — spices, cotton, silk. Set up trading posts (factories) at Surat, Madras, Bombay, Calcutta. Gradually acquired political power through alliances and wars." },
      { heading: "Conquest of Bengal", content: "Battle of Plassey (1757): Robert Clive defeated Nawab Siraj-ud-Daulah with the help of traitor Mir Jafar. Company gained control of Bengal's revenue. Battle of Buxar (1764): Company defeated combined forces of Bengal, Awadh, and Mughal Emperor. Established British supremacy in India." },
      { heading: "Dual Government", content: "After Plassey, Mir Jafar was made puppet Nawab. Dual Government: Company had revenue rights (Diwani) but Nawab had administrative responsibility. Result: exploitation — Company collected revenue but didn't govern, leading to the Bengal Famine (1770) killing millions." },
      { heading: "British Expansion Policies", content: "Subsidiary Alliance: Indian rulers accepted British troops in exchange for 'protection' — lost sovereignty. Doctrine of Lapse: if a ruler died without a natural male heir, his kingdom was annexed (e.g., Satara, Jhansi). Annexation of Awadh: on pretext of 'misgovernment' (1856)." },
    ],
    keyDefinitions: [
      { term: "Battle of Plassey", definition: "1757 battle where the British defeated the Nawab of Bengal, marking British political control." },
      { term: "Subsidiary Alliance", definition: "System where Indian rulers accepted British military protection, losing sovereignty." },
      { term: "Doctrine of Lapse", definition: "British policy of annexing states whose rulers died without a natural heir." },
      { term: "Diwani", definition: "Right to collect revenue, granted to the East India Company after Buxar." },
    ],
    didYouKnow: [
      "The Bengal Famine of 1770 killed an estimated 10 million people — one-third of Bengal's population!",
      "The Battle of Plassey lasted less than a day and changed the course of Indian history.",
    ],
    revisionSummary: ["EIC: traders → rulers. Plassey (1757): Clive + Mir Jafar. Buxar (1764): British supremacy. Dual Government: exploitation. Expansion: Subsidiary Alliance, Doctrine of Lapse."],
    practiceQuestions: [
      { type: "short", question: "What was the Doctrine of Lapse? Give examples." },
      { type: "long", question: "Describe the events leading to the Battle of Plassey and its significance." },
      { type: "icse", question: "[ICSE Board Style] What was the Dual Government? What were its drawbacks?" },
    ],
  },
  "hist-5": {
    chapterId: "hist-5",
    introduction: "British economic policies in India exploited Indian resources and wealth, transforming India from a manufacturing economy to a supplier of raw materials.",
    sections: [
      { heading: "Land Revenue Systems", content: "Permanent Settlement (1793, Bengal): Revenue fixed permanently with zamindars. Farmers exploited. Mahalwari System (UP, Central India): Revenue collected from the village. Ryotwari System (Bombay, Madras): Revenue collected directly from peasants. All systems benefited the British at the expense of Indian farmers." },
      { heading: "Exploitation of Artisans", content: "British policies destroyed Indian handicrafts: heavy duties on Indian goods exported to Britain, free import of British machine-made goods into India. Indian weavers and artisans lost livelihoods. India became a market for British manufactured goods and supplier of raw materials." },
      { heading: "Drain of Wealth", content: "Dadabhai Naoroji's theory: wealth was drained from India to Britain through salaries, profits, and home charges with no equivalent return. India grew poorer while Britain prospered." },
      { heading: "Introduction of Modern Education", content: "Wood's Despatch (1854): recommended English education, universities, training schools. English became the medium of instruction. Positive: spread of modern ideas, rational thinking. Negative: neglect of Indian languages and traditional knowledge." },
    ],
    keyDefinitions: [
      { term: "Permanent Settlement", definition: "1793 revenue system fixing land revenue permanently with zamindars in Bengal." },
      { term: "Drain of Wealth", definition: "Dadabhai Naoroji's theory that British policies drained India's wealth to Britain." },
      { term: "Wood's Despatch", definition: "1854 plan for introducing English education in India." },
    ],
    didYouKnow: ["Dadabhai Naoroji, called the 'Grand Old Man of India', was the first Indian to be elected to the British Parliament (1892)!"],
    revisionSummary: ["Revenue: Permanent Settlement (zamindars), Mahalwari (village), Ryotwari (peasants). Artisans ruined by British goods. Drain of wealth theory (Naoroji). Wood's Despatch: English education."],
    practiceQuestions: [
      { type: "short", question: "What was the Permanent Settlement? Who introduced it?" },
      { type: "long", question: "Explain the 'Drain of Wealth' theory by Dadabhai Naoroji." },
      { type: "icse", question: "[ICSE Board Style] How did British economic policies destroy Indian handicrafts?" },
    ],
  },
  "hist-6": {
    chapterId: "hist-6",
    introduction: "The Great Uprising of 1857 was a major revolt against British rule that shook British power and led to significant changes in governance.",
    sections: [
      { heading: "Causes", content: "Political: Doctrine of Lapse, annexation of Awadh. Economic: exploitation, drain of wealth. Social/Religious: interference with customs. Military: greased cartridges. Immediate: Mangal Pandey (March 1857)." },
      { heading: "Spread and Leaders", content: "Started Meerut (10 May 1857). Spread to Delhi, Lucknow, Kanpur, Jhansi. Leaders: Bahadur Shah Zafar (Delhi), Rani Lakshmibai (Jhansi), Nana Sahib (Kanpur), Tantia Tope, Begum Hazrat Mahal (Lucknow)." },
      { heading: "Consequences", content: "Company rule ended; British Crown took direct control. Queen Victoria's Proclamation (1858). Army reorganised. Failed due to lack of unity and poor planning, but inspired future movements." },
    ],
    keyDefinitions: [
      { term: "Doctrine of Lapse", definition: "British policy annexing states without natural heirs." },
      { term: "Greased Cartridges", definition: "Cartridges greased with cow/pig fat, offending Hindu and Muslim soldiers." },
    ],
    didYouKnow: ["Rani Lakshmibai fought with her sword in one hand and adopted son tied to her back!"],
    revisionSummary: ["Causes: political, economic, social, military. Started Meerut 1857. Leaders: Rani Lakshmibai, Nana Sahib, etc. Result: Crown rule, Queen's Proclamation."],
    practiceQuestions: [
      { type: "short", question: "Name the immediate cause of the Revolt of 1857." },
      { type: "long", question: "Discuss political and military causes of the Uprising." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: The Revolt of 1857 is called the First War of Independence." },
    ],
  },
  "hist-7": {
    chapterId: "hist-7",
    introduction: "The 19th century saw a wave of socio-religious reform movements in India, led by visionary thinkers who challenged social evils and promoted education and equality.",
    sections: [
      { heading: "Raja Ram Mohan Roy (1772-1833)", content: "Founded Brahmo Samaj (1828). Fought against Sati (widow immolation) — abolished by Lord Bentinck (1829). Promoted women's education and widow remarriage. Championed press freedom and modern education. Known as the 'Father of the Indian Renaissance'." },
      { heading: "Ishwar Chand Vidyasagar (1820-1891)", content: "Champion of women's education. Got the Widow Remarriage Act passed (1856). Founded schools for girls. Simplified Bengali alphabet and writing." },
      { heading: "Swami Dayanand Saraswati (1824-1883)", content: "Founded Arya Samaj (1875). 'Back to the Vedas' — rejected idol worship and rituals. Promoted education (DAV schools), opposed caste discrimination. Encouraged Shuddhi (reconversion to Hinduism)." },
      { heading: "Swami Vivekananda (1863-1902)", content: "Disciple of Ramakrishna Paramahamsa. Founded Ramakrishna Mission (1897). Famous speech at Chicago Parliament of Religions (1893): 'Brothers and Sisters of America'. Promoted universal brotherhood and service to humanity." },
      { heading: "Other Reformers", content: "Jyotiba Phule: fought for lower caste and women's rights, founded Satyashodhak Samaj. Annie Besant: founded Central Hindu College, supported Home Rule. Sree Narayana Guru: opposed caste system in Kerala. Sir Syed Ahmad Khan: founded MAO College (later AMU), promoted Muslim education. Singh Sabha Movement: Sikh reform movement." },
    ],
    keyDefinitions: [
      { term: "Brahmo Samaj", definition: "Reform movement founded by Raja Ram Mohan Roy opposing idol worship and social evils." },
      { term: "Arya Samaj", definition: "Reform movement by Dayanand Saraswati promoting 'Back to the Vedas'." },
      { term: "Sati", definition: "Practice of a widow burning herself on her husband's funeral pyre (abolished 1829)." },
    ],
    didYouKnow: [
      "Swami Vivekananda's 1893 Chicago speech began with 'Sisters and Brothers of America' — the audience gave a standing ovation lasting two minutes!",
      "Raja Ram Mohan Roy is called the 'Maker of Modern India' for his wide-ranging reforms.",
    ],
    revisionSummary: ["Ram Mohan Roy: Brahmo Samaj, anti-Sati. Vidyasagar: widow remarriage. Dayanand: Arya Samaj, DAV schools. Vivekananda: Ramakrishna Mission, universal brotherhood. Phule: caste reform. Sir Syed: Muslim education."],
    practiceQuestions: [
      { type: "short", question: "Name the social reforms of Raja Ram Mohan Roy." },
      { type: "long", question: "Describe the contributions of Swami Vivekananda to Indian society." },
      { type: "icse", question: "[ICSE Board Style] Compare the reform movements of Brahmo Samaj and Arya Samaj." },
    ],
  },
  "hist-8": {
    chapterId: "hist-8",
    introduction: "India's struggle for freedom was a long journey from the formation of the Indian National Congress (1885) through various movements to independence in 1947.",
    sections: [
      { heading: "Early Nationalism and INC", content: "Indian National Congress founded in 1885 by A.O. Hume. Moderates (1885-1905): Dadabhai Naoroji, Gokhale, S.N. Banerjee. Methods: petitions, prayers, constitutional means. Extremists (1905-1919): Tilak, Bipin Chandra Pal, Lala Lajpat Rai (Lal-Bal-Pal). Methods: boycott, swadeshi, national education." },
      { heading: "Partition of Bengal and Swadeshi Movement", content: "Lord Curzon partitioned Bengal (1905) to divide Hindu-Muslim unity. Anti-Partition/Swadeshi Movement: boycott of British goods, promotion of Indian goods. Surat Split (1907): Congress split into Moderates and Extremists. Bengal reunited in 1911." },
      { heading: "Gandhian Era", content: "Mahatma Gandhi returned from South Africa (1915). Early movements: Champaran (indigo), Kheda (farmers), Ahmedabad (mill workers). Non-Cooperation Movement (1920-22): boycott of courts, schools, foreign goods. Withdrawn after Chauri Chaura violence. Civil Disobedience (1930): Salt March (Dandi March) — Gandhi walked 385 km to make salt. Quit India Movement (1942): 'Do or Die'. Subhas Chandra Bose: Forward Bloc, INA (Indian National Army) — 'Give me blood, I shall give you freedom'." },
      { heading: "Independence and Partition", content: "Cabinet Mission Plan (1946): proposed united India. Mountbatten Plan (1947): partition into India and Pakistan. Indian Independence Act (15 August 1947). Partition caused massive migration and communal violence." },
    ],
    keyDefinitions: [
      { term: "Swadeshi", definition: "Movement promoting Indian-made goods and boycotting British goods." },
      { term: "Non-Cooperation", definition: "Gandhi's 1920 movement of non-violent refusal to cooperate with British institutions." },
      { term: "Civil Disobedience", definition: "Movement involving deliberate breaking of unjust laws (Salt March, 1930)." },
      { term: "Quit India", definition: "1942 movement demanding immediate British withdrawal from India." },
    ],
    didYouKnow: [
      "Gandhi's Salt March covered 385 km in 24 days — thousands joined along the way!",
      "At midnight on 15 August 1947, Nehru delivered the famous 'Tryst with Destiny' speech.",
    ],
    revisionSummary: ["INC 1885. Moderates → Extremists → Gandhian era. Non-Cooperation (1920), Salt March (1930), Quit India (1942). Independence 15 Aug 1947. Partition: India + Pakistan."],
    practiceQuestions: [
      { type: "short", question: "What were the methods of the Moderates and Extremists?" },
      { type: "long", question: "Describe the Salt March and its significance." },
      { type: "icse", question: "[ICSE Board Style] Discuss the Quit India Movement — causes, events, and significance." },
    ],
  },
  "hist-9": {
    chapterId: "hist-9",
    introduction: "The Indian Parliament is the supreme legislative body. It consists of the President, Lok Sabha (House of the People), and Rajya Sabha (Council of States).",
    sections: [
      { heading: "Lok Sabha", content: "Lower house, directly elected by people. Maximum 552 members (530 states + 20 UTs + 2 Anglo-Indians). Term: 5 years. Speaker presides over sessions. Introduces money bills. More powerful than Rajya Sabha in financial matters." },
      { heading: "Rajya Sabha", content: "Upper house, indirectly elected by state legislatures. Maximum 250 members (238 elected + 12 nominated by President). Permanent body — 1/3 members retire every 2 years. Vice-President is ex-officio Chairman. Cannot be dissolved." },
      { heading: "Functions of Parliament", content: "Legislative: makes laws for the country. Financial: approves budget and taxation. Executive control: question hour, debates, no-confidence motion. Constituent: amends the Constitution. Electoral: elects President and Vice-President." },
    ],
    keyDefinitions: [
      { term: "Lok Sabha", definition: "Lower house of Parliament; members directly elected by the people." },
      { term: "Rajya Sabha", definition: "Upper house; members indirectly elected by state legislatures." },
      { term: "Speaker", definition: "Presiding officer of the Lok Sabha." },
    ],
    didYouKnow: ["The Indian Parliament building (Sansad Bhavan) was designed by British architects Edwin Lutyens and Herbert Baker!"],
    revisionSummary: ["Lok Sabha: directly elected, 552 max, 5-year term, Speaker, money bills. Rajya Sabha: indirect, 250 max, permanent, VP chairs. Functions: legislative, financial, executive control."],
    practiceQuestions: [
      { type: "short", question: "Differentiate between Lok Sabha and Rajya Sabha." },
      { type: "icse", question: "[ICSE Board Style] Explain the legislative process of passing a bill in Parliament." },
    ],
  },
  "hist-10": {
    chapterId: "hist-10",
    introduction: "The Union Executive consists of the President, Vice-President, Prime Minister, and Council of Ministers who run the government of India.",
    sections: [
      { heading: "The President", content: "Head of state, supreme commander of armed forces. Elected by Electoral College (MPs + MLAs). Term: 5 years. Powers: executive (appoints PM, governors), legislative (summons Parliament, ordinances), judicial (pardons), emergency powers. Acts on advice of Council of Ministers." },
      { heading: "The Vice-President", content: "Ex-officio Chairman of Rajya Sabha. Elected by MPs of both houses. Acts as President if office is vacant. Term: 5 years." },
      { heading: "Prime Minister and Council of Ministers", content: "PM is the head of government, leader of majority party in Lok Sabha. Advises President, chairs Cabinet meetings. Council of Ministers: Cabinet Ministers (senior), Ministers of State, Deputy Ministers. Collectively responsible to Lok Sabha." },
    ],
    keyDefinitions: [
      { term: "President", definition: "Head of state and supreme commander of India's armed forces." },
      { term: "Prime Minister", definition: "Head of government; leader of the majority party in Lok Sabha." },
      { term: "Electoral College", definition: "Body of elected representatives that elects the President." },
    ],
    didYouKnow: ["Dr. Rajendra Prasad was the first President of India, and Jawaharlal Nehru was the first Prime Minister!"],
    revisionSummary: ["President: head of state, Electoral College, executive/legislative/judicial/emergency powers. PM: head of government, leads Cabinet. Council responsible to Lok Sabha."],
    practiceQuestions: [
      { type: "short", question: "How is the President of India elected?" },
      { type: "icse", question: "[ICSE Board Style] Explain the powers and functions of the Prime Minister." },
    ],
  },
  "hist-11": {
    chapterId: "hist-11",
    introduction: "The Judiciary is the guardian of the Constitution and protector of fundamental rights. It is independent of the legislature and executive.",
    sections: [
      { heading: "Supreme Court", content: "Highest court in India. Chief Justice + other judges (currently 34). Appointed by the President. Jurisdiction: Original (disputes between states/Centre), Appellate (appeals from High Courts), Advisory (President seeks opinion). Judicial Review: power to declare laws unconstitutional. Court of Record: decisions are binding precedents. Can issue writs for fundamental rights." },
      { heading: "High Court", content: "Highest court in each state. Jurisdiction: original, appellate, supervisory over lower courts. Can also issue writs." },
      { heading: "Writs", content: "Habeas Corpus: produce arrested person before court. Mandamus: order a public official to perform duty. Prohibition: stop a lower court from exceeding jurisdiction. Certiorari: transfer case from lower to higher court. Quo Warranto: question a person's authority to hold public office." },
    ],
    keyDefinitions: [
      { term: "Judicial Review", definition: "Power of the court to examine and declare laws unconstitutional." },
      { term: "Writ", definition: "An order issued by a court to enforce fundamental rights." },
      { term: "Habeas Corpus", definition: "Writ ordering authorities to produce an arrested person before the court." },
    ],
    didYouKnow: ["India's Supreme Court is the most powerful judiciary in the world — it can even review Constitutional amendments!"],
    revisionSummary: ["Supreme Court: highest, judicial review, writs, court of record. High Court: state level, similar powers. 5 writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto."],
    practiceQuestions: [
      { type: "short", question: "What is Judicial Review?" },
      { type: "short", question: "Name the five writs and explain any two." },
      { type: "icse", question: "[ICSE Board Style] Explain the jurisdiction of the Supreme Court of India." },
    ],
  },
  "hist-12": {
    chapterId: "hist-12",
    introduction: "The United Nations was established in 1945 after World War II to maintain international peace and security and promote cooperation among nations.",
    sections: [
      { heading: "Aims and Principles", content: "Aims: maintain peace and security, develop friendly relations among nations, achieve international cooperation, be a centre for harmonizing actions. Principles: sovereign equality, peaceful settlement of disputes, non-interference in internal affairs." },
      { heading: "Main Organs", content: "General Assembly: all member nations (193), each has one vote, meets annually, discusses global issues. Security Council: 15 members (5 permanent — US, UK, France, Russia, China with veto power + 10 non-permanent). Primary responsibility for peace and security. International Court of Justice (ICJ): 15 judges, settles legal disputes between nations, located in The Hague." },
      { heading: "UN Agencies", content: "UNESCO: education, science, culture (HQ: Paris). UNICEF: children's welfare (HQ: New York). WHO: global health (HQ: Geneva). Others: FAO (food), ILO (labour), UNHCR (refugees)." },
    ],
    keyDefinitions: [
      { term: "United Nations", definition: "International organisation founded in 1945 to promote peace and cooperation." },
      { term: "General Assembly", definition: "Main deliberative body of the UN where all member nations have one vote." },
      { term: "Security Council", definition: "UN body with primary responsibility for international peace; 5 permanent members have veto power." },
      { term: "Veto Power", definition: "Power of the 5 permanent Security Council members to block any resolution." },
    ],
    didYouKnow: [
      "India was a founding member of the United Nations in 1945!",
      "The UN has helped negotiate over 170 peace settlements since 1945.",
    ],
    revisionSummary: ["UN founded 1945, 193 members. GA: all members, one vote each. SC: 5 permanent (veto) + 10 non-permanent. ICJ: 15 judges, The Hague. Agencies: UNESCO, UNICEF, WHO."],
    practiceQuestions: [
      { type: "short", question: "Name the five permanent members of the Security Council." },
      { type: "short", question: "What are the functions of UNESCO and UNICEF?" },
      { type: "long", question: "Explain the composition and functions of the Security Council." },
      { type: "icse", question: "[ICSE Board Style] Discuss the aims and principles of the United Nations." },
    ],
  },

  // =============================================
  // ===== COMPUTER STUDIES =====
  // =============================================
  "comp-1": {
    chapterId: "comp-1",
    introduction: "Number systems are the foundation of computing. Computers use the binary system (0 and 1), while humans commonly use the decimal system. Understanding conversions between systems is essential.",
    sections: [
      { heading: "Number Systems", content: "Decimal (Base 10): digits 0-9, used in daily life. Binary (Base 2): digits 0 and 1, used by computers. Octal (Base 8): digits 0-7, shorthand for binary. Hexadecimal (Base 16): digits 0-9 and A-F (A=10, B=11...F=15), used for memory addresses and colours." },
      { heading: "Conversions", content: "Decimal to Binary: divide by 2 repeatedly, read remainders bottom-up. Example: 13₁₀ = 1101₂. Binary to Decimal: multiply each digit by 2^position and sum. Example: 1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13₁₀. Decimal to Octal: divide by 8. Decimal to Hex: divide by 16. Binary to Octal: group binary digits in 3s from right. Binary to Hex: group in 4s from right." },
    ],
    keyDefinitions: [
      { term: "Binary", definition: "Base-2 number system using only 0 and 1; used by computers." },
      { term: "Hexadecimal", definition: "Base-16 number system using 0-9 and A-F." },
      { term: "Bit", definition: "Smallest unit of data in computing — a single binary digit (0 or 1)." },
      { term: "Byte", definition: "8 bits; can represent 256 different values (0-255)." },
    ],
    didYouKnow: [
      "All computer data — text, images, music, videos — is ultimately stored as 0s and 1s!",
      "The hexadecimal colour code #FF0000 represents pure red on screens.",
    ],
    revisionSummary: ["Decimal (base 10), Binary (base 2), Octal (base 8), Hex (base 16). Dec→Bin: divide by 2. Bin→Dec: multiply by 2^position. Group 3 bits=octal, 4 bits=hex."],
    practiceQuestions: [
      { type: "short", question: "Convert 45₁₀ to binary." },
      { type: "short", question: "Convert 11010110₂ to decimal." },
      { type: "long", question: "Explain the four number systems with examples." },
      { type: "icse", question: "[ICSE Board Style] Convert (i) 255₁₀ to binary and hexadecimal (ii) 1A3₁₆ to decimal." },
    ],
  },
  "comp-2": {
    chapterId: "comp-2",
    introduction: "HTML (HyperText Markup Language) is the standard language for creating web pages. It uses tags to structure content displayed in a web browser.",
    sections: [
      { heading: "HTML Basics", content: "HTML uses tags enclosed in angle brackets: <tagname>content</tagname>. Basic structure: <html><head><title>Page Title</title></head><body>Content here</body></html>. Tags can have attributes: <img src='photo.jpg' width='200'>." },
      { heading: "Common Tags", content: "Headings: <h1> to <h6>. Paragraph: <p>. Line break: <br>. Bold: <b> or <strong>. Italic: <i> or <em>. Links: <a href='url'>text</a>. Images: <img src='file' alt='description'>. Lists: <ul>/<ol> with <li>. Horizontal rule: <hr>." },
      { heading: "Tables", content: "<table> creates a table. <tr> = table row. <th> = table header. <td> = table data. Attributes: border, cellpadding, cellspacing, colspan, rowspan." },
      { heading: "Forms", content: "<form> creates an input form. <input type='text'> for text fields. <input type='password'> for passwords. <input type='submit'> for submit button. <textarea> for multi-line text. <select> with <option> for dropdowns." },
    ],
    keyDefinitions: [
      { term: "HTML", definition: "HyperText Markup Language — standard language for creating web pages." },
      { term: "Tag", definition: "HTML keyword enclosed in angle brackets that defines how content is displayed." },
      { term: "Attribute", definition: "Additional information about an HTML element (e.g., src, href, width)." },
    ],
    didYouKnow: [
      "The first website ever created is still online: info.cern.ch — created by Tim Berners-Lee in 1991!",
      "HTML5 can play audio and video directly in the browser without any plugins.",
    ],
    revisionSummary: ["HTML uses tags in < >. Basic: html, head, title, body. Text: h1-h6, p, b, i. Links: <a>. Images: <img>. Tables: table, tr, th, td. Forms: form, input, textarea, select."],
    practiceQuestions: [
      { type: "short", question: "Write HTML code to create a table with 3 rows and 2 columns." },
      { type: "short", question: "What is the difference between <ol> and <ul>?" },
      { type: "long", question: "Create an HTML page with a heading, paragraph, image, and a link." },
      { type: "icse", question: "[ICSE Board Style] Write HTML to create a form with name, email, and a submit button." },
    ],
  },
  "comp-3": {
    chapterId: "comp-3",
    introduction: "Python is a popular, easy-to-learn programming language used worldwide for web development, data science, AI, and more.",
    sections: [
      { heading: "Getting Started", content: "Interactive mode (IDLE shell) or script mode (.py files). Uses indentation for code blocks. Comments: # (single-line), ''' ''' (multi-line)." },
      { heading: "Variables and Data Types", content: "Dynamically typed. Types: int, float, str, bool. Example: name='Alice', age=13, height=5.2, is_student=True." },
      { heading: "Input and Output", content: "print('Hello'). name = input('Enter name: ') — returns string. Convert: int(), float(), str()." },
      { heading: "Operators", content: "Arithmetic: +, −, *, /, //, %, **. Comparison: ==, !=, <, >, <=, >=. Logical: and, or, not." },
    ],
    keyDefinitions: [
      { term: "Variable", definition: "Named storage location holding a value." },
      { term: "Data Type", definition: "Type of value: int, float, str, bool." },
    ],
    didYouKnow: ["Python was named after 'Monty Python's Flying Circus', not the snake!"],
    revisionSummary: ["Python: indentation, dynamic typing. Types: int, float, str, bool. input() returns string; print() outputs. Operators: +,-,*,/,//,%,**."],
    practiceQuestions: [
      { type: "short", question: "What is the output of: print(17 // 5, 17 % 5)?" },
      { type: "icse", question: "[ICSE Board Style] Write a program to convert Celsius to Fahrenheit." },
    ],
  },
  "comp-4": {
    chapterId: "comp-4",
    introduction: "Conditional statements allow a program to make decisions based on conditions. Python uses if, elif, and else for branching.",
    sections: [
      { heading: "if Statement", content: "Executes a block if the condition is True. Syntax: if condition: (indented block). Example: if age >= 18: print('Adult')." },
      { heading: "if-else Statement", content: "Provides an alternative when condition is False. if condition: (block) else: (block). Example: if marks >= 40: print('Pass') else: print('Fail')." },
      { heading: "elif Statement", content: "Checks multiple conditions. if condition1: ... elif condition2: ... elif condition3: ... else: ... Only the first True condition's block executes." },
      { heading: "Nested if", content: "An if inside another if. Used for multi-level decision making. Example: check if number is positive, then check if even or odd." },
      { heading: "Logical Operators", content: "and: both conditions must be True. or: at least one True. not: reverses True/False. Example: if age > 13 and age < 20: print('Teenager')." },
    ],
    keyDefinitions: [
      { term: "Conditional Statement", definition: "A statement that executes different code based on whether a condition is True or False." },
      { term: "Boolean", definition: "A data type with only two values: True or False." },
    ],
    didYouKnow: ["Python's simplicity makes it readable almost like English: 'if temperature > 100: print(\"Too hot!\")'"],
    revisionSummary: ["if: single condition. if-else: two branches. elif: multiple conditions. Nested if: if inside if. Logical: and, or, not."],
    practiceQuestions: [
      { type: "short", question: "Write a program to check if a number is positive, negative, or zero." },
      { type: "short", question: "Write a program to find the largest of three numbers." },
      { type: "icse", question: "[ICSE Board Style] Write a program to input marks and print the grade (A/B/C/D/Fail)." },
    ],
  },
  "comp-5": {
    chapterId: "comp-5",
    introduction: "Loops allow a program to repeat a block of code multiple times. Python provides for loops and while loops.",
    sections: [
      { heading: "for Loop", content: "Iterates over a sequence (list, string, range). Syntax: for variable in sequence: (block). range(n) generates 0 to n-1. range(start, stop, step) for custom ranges. Example: for i in range(1, 11): print(i) prints 1 to 10." },
      { heading: "while Loop", content: "Repeats while condition is True. Syntax: while condition: (block). Must update condition variable to avoid infinite loop. Example: i = 1; while i <= 10: print(i); i += 1." },
      { heading: "Loop Control", content: "break: exits the loop immediately. continue: skips current iteration, goes to next. Example: for i in range(10): if i == 5: break — stops at 5." },
      { heading: "Nested Loops", content: "A loop inside another loop. Outer loop runs once, inner loop runs completely. Used for patterns, tables. Example: multiplication table — for i in range(1,11): for j in range(1,11): print(i*j)." },
    ],
    keyDefinitions: [
      { term: "Loop", definition: "A programming construct that repeats a block of code." },
      { term: "Iteration", definition: "One complete execution of the loop body." },
      { term: "Infinite Loop", definition: "A loop that never ends because its condition is always True." },
    ],
    didYouKnow: ["The first computer bug was a real moth found in a computer relay at Harvard in 1947!"],
    revisionSummary: ["for: iterate over sequence/range. while: repeat until condition False. break: exit loop. continue: skip iteration. Nested: loop inside loop."],
    practiceQuestions: [
      { type: "short", question: "Write a program to print the sum of first 100 natural numbers using a for loop." },
      { type: "short", question: "Write a program to print all even numbers from 1 to 50." },
      { type: "long", question: "Differentiate between for and while loops with examples." },
      { type: "icse", question: "[ICSE Board Style] Write a program to check if a number is prime." },
    ],
  },
  "comp-6": {
    chapterId: "comp-6",
    introduction: "Lists in Python are ordered, mutable collections that can store multiple items of different types. They are one of the most versatile data structures.",
    sections: [
      { heading: "Creating and Accessing Lists", content: "Create: fruits = ['apple', 'banana', 'cherry']. Access by index: fruits[0] → 'apple'. Negative indexing: fruits[-1] → 'cherry' (last item). Length: len(fruits)." },
      { heading: "Slicing", content: "Extract a portion: fruits[1:3] → ['banana', 'cherry']. fruits[:2] → first two. fruits[1:] → from index 1 to end. fruits[::2] → every other element." },
      { heading: "List Methods", content: "append(item): add to end. insert(index, item): add at position. remove(item): remove first occurrence. pop(index): remove and return item. sort(): sort ascending. reverse(): reverse order. count(item): count occurrences. index(item): find position." },
      { heading: "List Operations", content: "Concatenation: [1,2] + [3,4] = [1,2,3,4]. Repetition: [0] * 5 = [0,0,0,0,0]. Membership: 3 in [1,2,3] → True. Iteration: for item in list: print(item)." },
    ],
    keyDefinitions: [
      { term: "List", definition: "An ordered, mutable collection of items in Python, created using square brackets." },
      { term: "Index", definition: "Position of an element in a list (starts from 0)." },
      { term: "Slicing", definition: "Extracting a portion of a list using start:stop:step notation." },
      { term: "Mutable", definition: "Can be changed after creation (items can be added, removed, or modified)." },
    ],
    didYouKnow: [
      "Python lists can contain different data types: [1, 'hello', 3.14, True] is a valid list!",
      "Lists in Python are implemented as dynamic arrays — they automatically resize as items are added.",
    ],
    revisionSummary: ["Lists: ordered, mutable, []. Index from 0. Slice: [start:stop:step]. Methods: append, insert, remove, pop, sort, reverse. Operations: +, *, in, for."],
    practiceQuestions: [
      { type: "short", question: "Create a list of 5 fruits and print the third element." },
      { type: "short", question: "What is the output of: a = [1,2,3,4,5]; print(a[1:4])?" },
      { type: "long", question: "Explain any five list methods with examples." },
      { type: "icse", question: "[ICSE Board Style] Write a program to input 5 numbers into a list and find the largest and smallest." },
    ],
  },
  "comp-7": {
    chapterId: "comp-7",
    introduction: "As we use the internet more, understanding cyber safety — protecting ourselves from online threats — becomes crucial. Digital citizenship includes being responsible and ethical online.",
    sections: [
      { heading: "Cyber Crimes", content: "Hacking: unauthorized access to computer systems. Phishing: fake emails/websites to steal personal information. Cyberbullying: using technology to harass or threaten. Identity theft: stealing personal information to commit fraud. Virus/Malware: malicious software that damages or steals data." },
      { heading: "Staying Safe Online", content: "Use strong, unique passwords (mix of letters, numbers, symbols). Enable two-factor authentication (2FA). Don't share personal information with strangers. Be careful clicking links in emails (could be phishing). Keep software and antivirus updated. Log out from public computers." },
      { heading: "Digital Footprint", content: "Every action online leaves a trace — your digital footprint. Permanent: once posted, it's hard to fully delete. Employers and colleges check digital footprints. Be mindful of what you post, comment, or share." },
      { heading: "Data Privacy and Netiquette", content: "Data privacy: right to control your personal information. Don't share passwords, Aadhaar numbers, or bank details online. Netiquette (internet etiquette): be polite, don't use ALL CAPS (considered shouting), respect others' opinions, give credit when sharing others' work, don't spread fake news." },
    ],
    keyDefinitions: [
      { term: "Cyber Crime", definition: "Criminal activities carried out using computers or the internet." },
      { term: "Phishing", definition: "Fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity." },
      { term: "Digital Footprint", definition: "The trail of data you leave behind when using the internet." },
      { term: "Netiquette", definition: "The set of social conventions and rules for polite behavior online." },
      { term: "Malware", definition: "Malicious software designed to damage, disrupt, or gain unauthorized access to systems." },
    ],
    didYouKnow: [
      "The most common password in the world is still '123456' — used by millions of people!",
      "India's IT Act 2000 was one of the first cyber laws in the world.",
      "About 3.5 billion people are affected by cyber crimes every year worldwide.",
    ],
    revisionSummary: ["Cyber crimes: hacking, phishing, cyberbullying, malware. Safety: strong passwords, 2FA, don't share info, update software. Digital footprint is permanent. Netiquette: be polite, respect privacy."],
    practiceQuestions: [
      { type: "short", question: "What is phishing? How can you protect yourself from it?" },
      { type: "short", question: "What is a digital footprint? Why should you be careful about it?" },
      { type: "long", question: "Explain five types of cyber crimes with examples." },
      { type: "icse", question: "[ICSE Board Style] List five rules of netiquette that every internet user should follow." },
    ],
  },
  "comp-8": {
    chapterId: "comp-8",
    introduction: "Artificial Intelligence (AI) is the simulation of human intelligence by machines. AI systems can learn, reason, and make decisions.",
    sections: [
      { heading: "What is AI?", content: "AI creates machines that perform tasks requiring human intelligence: perception, reasoning, learning, decision-making. Types: Narrow AI (specific tasks — Siri, chess), General AI (human-level — not yet achieved), Super AI (beyond human — theoretical)." },
      { heading: "Machine Learning", content: "ML: machines learn from data without explicit programming. Supervised (labelled data), Unsupervised (patterns in unlabelled data), Reinforcement (trial and error with rewards)." },
      { heading: "AI in Daily Life", content: "Virtual assistants, recommendation systems, spam filters, navigation, self-driving cars, medical diagnosis, face recognition, chatbots." },
      { heading: "Ethics of AI", content: "Privacy concerns, job displacement, algorithmic bias, deepfakes, accountability. Responsible AI: transparent, fair, respects human rights." },
    ],
    keyDefinitions: [
      { term: "Artificial Intelligence", definition: "Simulation of human intelligence by computer systems." },
      { term: "Machine Learning", definition: "Subset of AI where machines learn patterns from data." },
      { term: "Neural Network", definition: "Computing system inspired by the human brain's neuron network." },
    ],
    didYouKnow: ["The term 'AI' was coined by John McCarthy in 1956.", "AI beat world champions in chess (Deep Blue), Go (AlphaGo), and Jeopardy (Watson)!"],
    revisionSummary: ["AI: machines simulating intelligence. Narrow (current) vs General vs Super. ML: supervised, unsupervised, reinforcement. Ethics: privacy, bias, jobs."],
    practiceQuestions: [
      { type: "short", question: "What is AI? Give two examples." },
      { type: "long", question: "Explain three types of machine learning." },
      { type: "icse", question: "[ICSE Board Style] Discuss ethical concerns of Artificial Intelligence." },
    ],
  },
};

export function getChapterContent(chapterId: string): ChapterContent | undefined {
  return chapterContents[chapterId];
}
