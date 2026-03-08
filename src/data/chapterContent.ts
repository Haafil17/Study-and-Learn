export interface ChapterContent {
  chapterId: string;
  introduction: string;
  sections: { heading: string; content: string }[];
  keyDefinitions: { term: string; definition: string }[];
  didYouKnow: string[];
  revisionSummary: string[];
  practiceQuestions: { type: "short" | "long" | "icse"; question: string }[];
}

export const chapterContents: Record<string, ChapterContent> = {
  // ===== BIOLOGY =====
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
      { heading: "Food Chains and Food Webs", content: "A food chain shows the transfer of energy from one organism to another: Grass → Grasshopper → Frog → Snake → Eagle. Each level is called a trophic level. A food web is an interconnection of many food chains in an ecosystem. Food webs show how organisms are linked by multiple feeding relationships." },
      { heading: "Energy Flow", content: "Energy flows in one direction in an ecosystem — from the sun to producers to consumers. At each trophic level, about 10% of energy is transferred to the next level (10% law). The rest is lost as heat. This is why food chains rarely have more than 4-5 trophic levels." },
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
  "bio-5": {
    chapterId: "bio-5",
    introduction: "The circulatory system is your body's transport network. It delivers oxygen, nutrients, and hormones to every cell and carries away waste products like carbon dioxide. The heart, blood vessels, and blood work together as a remarkable delivery system that never stops.",
    sections: [
      { heading: "Structure of the Heart", content: "The human heart is a muscular organ about the size of your fist, located slightly to the left in your chest. It has four chambers: two upper chambers called atria (singular: atrium) and two lower chambers called ventricles. The right side pumps deoxygenated blood to the lungs (pulmonary circulation), while the left side pumps oxygenated blood to the entire body (systemic circulation). The septum separates the left and right sides, preventing mixing of blood." },
      { heading: "Blood Vessels", content: "Three types: Arteries carry oxygenated blood away from the heart (except pulmonary artery) — thick, elastic walls for high pressure. Veins carry deoxygenated blood back to the heart (except pulmonary vein) — thinner walls with valves to prevent backflow. Capillaries are tiny, thin-walled vessels where exchange of O₂, nutrients, and CO₂ occurs." },
      { heading: "Double Circulation", content: "Human blood circulates through the heart twice in one complete cycle — this is called double circulation. Pulmonary circulation: Right ventricle → Pulmonary artery → Lungs → Pulmonary vein → Left atrium. Systemic circulation: Left ventricle → Aorta → Body organs → Vena cava → Right atrium." },
      { heading: "Composition of Blood", content: "Blood consists of: Plasma (55%) — liquid carrying nutrients, hormones, waste. Red Blood Cells (RBCs) — contain haemoglobin for oxygen transport. White Blood Cells (WBCs) — fight infections. Platelets — help in blood clotting." },
      { heading: "Blood Groups", content: "Human blood is classified into four groups: A, B, AB, and O, based on antigens on RBCs. Group O is the universal donor; Group AB is the universal recipient. The Rh factor (+/-) further classifies blood." },
      { heading: "The Lymphatic System", content: "Lymph is a colourless fluid that drains from tissues and returns to the bloodstream via lymph vessels. Lymph nodes filter harmful substances and contain immune cells. The lymphatic system plays a crucial role in immunity and fluid balance." },
    ],
    keyDefinitions: [
      { term: "Artery", definition: "A blood vessel that carries blood away from the heart, usually oxygenated." },
      { term: "Vein", definition: "A blood vessel that carries blood toward the heart, usually deoxygenated." },
      { term: "Capillary", definition: "The smallest blood vessel where exchange of materials between blood and tissues occurs." },
      { term: "Haemoglobin", definition: "A protein in red blood cells that binds to oxygen and gives blood its red colour." },
      { term: "Double Circulation", definition: "Blood passes through the heart twice in one complete circulation — pulmonary and systemic." },
      { term: "Septum", definition: "The muscular wall that separates the left and right sides of the heart." },
      { term: "Plasma", definition: "The liquid component of blood carrying cells, nutrients, and waste." },
    ],
    didYouKnow: [
      "Your heart beats about 100,000 times a day — over 36 million beats per year!",
      "If you laid out all your blood vessels end to end, they'd stretch over 96,000 km — enough to circle the Earth more than twice!",
      "RBCs live for about 120 days. Your body produces about 2 million new RBCs every second!",
    ],
    revisionSummary: [
      "Heart: 4 chambers — 2 atria, 2 ventricles; right side = deoxygenated, left = oxygenated.",
      "Double circulation: pulmonary (heart → lungs → heart) + systemic (heart → body → heart).",
      "Arteries (away, thick walls), Veins (toward, valves), Capillaries (exchange).",
      "Blood = Plasma + RBCs + WBCs + Platelets.",
      "Blood groups: A, B, AB (universal recipient), O (universal donor); Rh +/-.",
      "Lymphatic system: immunity + fluid balance.",
    ],
    practiceQuestions: [
      { type: "short", question: "Name the four chambers of the human heart." },
      { type: "short", question: "What is the function of haemoglobin?" },
      { type: "short", question: "Differentiate between arteries and veins (any 3 points)." },
      { type: "long", question: "Describe double circulation in the human body with a diagram." },
      { type: "long", question: "Explain the composition of blood and the function of each component." },
      { type: "icse", question: "[ICSE Board Style] Why is the left ventricle wall thicker than the right ventricle wall?" },
      { type: "icse", question: "[ICSE Board Style] Draw a labelled diagram of the human heart showing the flow of blood." },
    ],
  },
  "bio-6": {
    chapterId: "bio-6",
    introduction: "The nervous system is your body's communication network — a complex system of nerves and cells that transmit signals between different parts of the body. It coordinates both voluntary and involuntary actions.",
    sections: [
      { heading: "The Neuron", content: "A neuron is the basic unit of the nervous system. It has: Cell body (with nucleus), Dendrites (short branches receiving signals), Axon (long fibre transmitting signals). The axon is covered by a myelin sheath that insulates and speeds up signal transmission. The gap between two neurons is called a synapse, where chemical signals (neurotransmitters) are released." },
      { heading: "The Brain", content: "The brain is the control centre, protected by the skull and three membranes (meninges). Three main parts: Cerebrum (largest — thinking, memory, speech, voluntary actions), Cerebellum (balance and coordination), Medulla Oblongata (involuntary actions — breathing, heartbeat, blood pressure)." },
      { heading: "The Spinal Cord", content: "The spinal cord runs inside the vertebral column from the brain to the lower back. It acts as a relay centre between the brain and the body. It also controls reflex actions independently." },
      { heading: "Reflex Actions", content: "A reflex action is a quick, automatic response to a stimulus without conscious thought. Example: pulling hand from a hot object. Reflex arc: Stimulus → Receptor → Sensory nerve → Spinal cord → Motor nerve → Effector (muscle)." },
    ],
    keyDefinitions: [
      { term: "Neuron", definition: "The basic structural and functional unit of the nervous system." },
      { term: "Synapse", definition: "The tiny gap between two neurons where nerve impulses are transmitted via neurotransmitters." },
      { term: "Reflex Arc", definition: "The pathway followed by nerve impulses during a reflex action." },
      { term: "Cerebrum", definition: "The largest part of the brain responsible for thinking, memory, and voluntary actions." },
      { term: "Myelin Sheath", definition: "A fatty covering on the axon that insulates and speeds up nerve impulse transmission." },
    ],
    didYouKnow: [
      "The human brain contains about 86 billion neurons!",
      "Nerve signals can travel at speeds up to 120 metres per second.",
      "Your brain uses about 20% of your body's total energy despite being only 2% of your body weight.",
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
      { type: "long", question: "Explain the reflex arc with the help of a diagram." },
      { type: "icse", question: "[ICSE Board Style] Differentiate between voluntary and involuntary actions." },
      { type: "icse", question: "[ICSE Board Style] Why are reflex actions important? Explain with an example." },
    ],
  },
  "bio-4": {
    chapterId: "bio-4",
    introduction: "The endocrine system is a network of glands that produce hormones — chemical messengers that regulate growth, metabolism, reproduction, and other body functions. Unlike the nervous system, it works slowly but has long-lasting effects.",
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
      "Adrenaline can give you 'superhuman' strength in emergencies — it's the reason people can lift heavy objects to save someone.",
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
  // ===== CHEMISTRY =====
  "chem-1": {
    chapterId: "chem-1",
    introduction: "The Kinetic Molecular Theory explains the behaviour of matter in its three states — solid, liquid, and gas — based on the motion and arrangement of molecules.",
    sections: [
      { heading: "States of Matter", content: "Solids have fixed shape and volume; molecules are closely packed with strong intermolecular forces and vibrate in fixed positions. Liquids have fixed volume but take the shape of their container; molecules are less closely packed and can slide over each other. Gases have neither fixed shape nor volume; molecules are far apart, move freely and rapidly." },
      { heading: "Kinetic Theory", content: "All matter is made up of tiny particles (atoms/molecules) that are in constant motion. The kinetic energy of particles increases with temperature. In solids, particles vibrate; in liquids, they slide; in gases, they move randomly at high speeds." },
      { heading: "Interconversion of States", content: "Melting: Solid → Liquid (absorbs heat). Boiling/Evaporation: Liquid → Gas (absorbs heat). Condensation: Gas → Liquid (releases heat). Freezing: Liquid → Solid (releases heat). Sublimation: Solid → Gas directly (e.g., dry ice, camphor)." },
      { heading: "Diffusion and Brownian Motion", content: "Diffusion: spreading of particles from high concentration to low concentration. Gases diffuse fastest, then liquids, then solids. Brownian Motion: random zigzag movement of particles suspended in a fluid, caused by collisions with fast-moving molecules. Observed by Robert Brown in pollen grains." },
    ],
    keyDefinitions: [
      { term: "Kinetic Energy", definition: "Energy possessed by an object due to its motion." },
      { term: "Diffusion", definition: "Movement of particles from a region of higher concentration to lower concentration." },
      { term: "Sublimation", definition: "Direct conversion of a solid to a gas without passing through the liquid state." },
      { term: "Brownian Motion", definition: "Random zigzag movement of particles suspended in a fluid." },
    ],
    didYouKnow: [
      "At absolute zero (−273.15°C), all molecular motion theoretically stops!",
      "Dry ice (solid CO₂) sublimes directly into gas — that's why it produces a foggy effect without leaving any liquid.",
    ],
    revisionSummary: [
      "Solids: fixed shape/volume, tightly packed. Liquids: fixed volume, flow. Gases: no fixed shape/volume.",
      "Kinetic energy increases with temperature.",
      "Interconversion: melting, boiling, condensation, freezing, sublimation.",
      "Diffusion is fastest in gases; Brownian motion proves particle movement.",
    ],
    practiceQuestions: [
      { type: "short", question: "Define sublimation with an example." },
      { type: "short", question: "Why do gases diffuse faster than liquids?" },
      { type: "long", question: "Explain the kinetic molecular theory for the three states of matter." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: A gas fills the entire container in which it is kept." },
    ],
  },
  "chem-4": {
    chapterId: "chem-4",
    introduction: "The atom is the smallest unit of an element that retains its chemical properties. Over centuries, scientists developed different models to explain the structure of the atom.",
    sections: [
      { heading: "Dalton's Atomic Theory", content: "John Dalton (1808) proposed: All matter is made of indivisible atoms. Atoms of the same element are identical. Atoms combine in fixed ratios to form compounds. Atoms cannot be created or destroyed. Limitations: atoms are divisible (subatomic particles exist), and isotopes show atoms of the same element can have different masses." },
      { heading: "Thomson's Model", content: "J.J. Thomson (1897) discovered the electron and proposed the 'plum pudding model' — atom is a sphere of positive charge with electrons embedded in it like plums in a pudding. This showed atoms are not indivisible." },
      { heading: "Rutherford's Model", content: "Rutherford's gold foil experiment (1911): Most alpha particles passed straight through, some deflected, very few bounced back. Conclusion: Atom has a tiny, dense, positively charged nucleus at the centre. Electrons revolve around the nucleus. Most of the atom is empty space." },
      { heading: "Bohr's Model", content: "Niels Bohr (1913) improved Rutherford's model: Electrons revolve in fixed circular orbits (shells) around the nucleus — K, L, M, N shells. Each shell has a fixed energy level. Electrons do not lose energy while in a shell. Maximum electrons in a shell = 2n² (K=2, L=8, M=18, N=32)." },
      { heading: "Electronic Configuration", content: "Electrons fill shells in order: K first, then L, then M. The outermost shell electrons are called valence electrons and determine the chemical properties and valency of the element. Example: Sodium (11) = 2, 8, 1 → valency = 1. Chlorine (17) = 2, 8, 7 → valency = 1." },
    ],
    keyDefinitions: [
      { term: "Atom", definition: "The smallest unit of an element that takes part in a chemical reaction." },
      { term: "Nucleus", definition: "The dense, positively charged centre of an atom containing protons and neutrons." },
      { term: "Electron", definition: "A negatively charged subatomic particle orbiting the nucleus." },
      { term: "Proton", definition: "A positively charged subatomic particle found in the nucleus." },
      { term: "Neutron", definition: "A neutral subatomic particle found in the nucleus." },
      { term: "Atomic Number", definition: "The number of protons in the nucleus of an atom (Z)." },
      { term: "Mass Number", definition: "The total number of protons and neutrons in the nucleus (A)." },
      { term: "Valency", definition: "The combining capacity of an atom, determined by valence electrons." },
    ],
    didYouKnow: [
      "If an atom were the size of a football stadium, the nucleus would be the size of a marble at the centre!",
      "Rutherford expected alpha particles to pass through gold foil easily — he was shocked when some bounced back, calling it 'as if you fired a cannon at tissue paper and it came back'!",
    ],
    revisionSummary: [
      "Dalton: atoms are indivisible (disproven). Thomson: plum pudding model.",
      "Rutherford: nucleus discovered via gold foil experiment. Most atom = empty space.",
      "Bohr: electrons in fixed shells (K, L, M, N). Max electrons = 2n².",
      "Valency = combining capacity based on outermost shell electrons.",
    ],
    practiceQuestions: [
      { type: "short", question: "Write the electronic configuration of Calcium (atomic number 20)." },
      { type: "short", question: "What was the conclusion of Rutherford's gold foil experiment?" },
      { type: "long", question: "Compare Thomson's and Rutherford's atomic models." },
      { type: "long", question: "Explain Bohr's atomic model with a diagram." },
      { type: "icse", question: "[ICSE Board Style] Define: (i) Atomic number (ii) Mass number (iii) Valency" },
    ],
  },
  "chem-6": {
    chapterId: "chem-6",
    introduction: "A chemical reaction is a process in which one or more substances (reactants) are converted into new substances (products) with different properties. Understanding types of reactions is fundamental to chemistry.",
    sections: [
      { heading: "Types of Chemical Reactions", content: "Combination: A + B → AB (e.g., 2Mg + O₂ → 2MgO). Decomposition: AB → A + B (e.g., 2H₂O → 2H₂ + O₂). Single Displacement: A + BC → AC + B (e.g., Zn + CuSO₄ → ZnSO₄ + Cu). Double Displacement: AB + CD → AD + CB (e.g., NaCl + AgNO₃ → AgCl + NaNO₃). Neutralization: Acid + Base → Salt + Water." },
      { heading: "Balancing Chemical Equations", content: "A balanced equation has equal numbers of atoms of each element on both sides. Steps: Write the unbalanced equation. Count atoms on each side. Adjust coefficients (not subscripts) to balance. Example: H₂ + O₂ → H₂O becomes 2H₂ + O₂ → 2H₂O." },
      { heading: "Redox Reactions", content: "Oxidation: loss of electrons or gain of oxygen. Reduction: gain of electrons or loss of oxygen. In a redox reaction, oxidation and reduction occur simultaneously. Example: CuO + H₂ → Cu + H₂O (CuO is reduced, H₂ is oxidised)." },
    ],
    keyDefinitions: [
      { term: "Chemical Reaction", definition: "A process where reactants are converted into products with different properties." },
      { term: "Combination Reaction", definition: "Two or more substances combine to form a single product." },
      { term: "Decomposition", definition: "A single compound breaks down into two or more simpler substances." },
      { term: "Oxidation", definition: "Loss of electrons or gain of oxygen by a substance." },
      { term: "Reduction", definition: "Gain of electrons or loss of oxygen by a substance." },
    ],
    didYouKnow: [
      "Rusting of iron is actually a slow chemical reaction — iron reacts with oxygen and moisture to form iron oxide!",
      "The combustion of a single match involves several chemical reactions happening in milliseconds.",
    ],
    revisionSummary: [
      "5 types: Combination, Decomposition, Single Displacement, Double Displacement, Neutralization.",
      "Balanced equation: equal atoms on both sides.",
      "Oxidation = loss of electrons; Reduction = gain of electrons.",
      "Redox reactions: oxidation and reduction happen together.",
    ],
    practiceQuestions: [
      { type: "short", question: "Balance the equation: Fe + O₂ → Fe₂O₃" },
      { type: "short", question: "What is a decomposition reaction? Give an example." },
      { type: "long", question: "Explain the different types of chemical reactions with examples." },
      { type: "icse", question: "[ICSE Board Style] Identify the type of reaction: Zn + H₂SO₄ → ZnSO₄ + H₂. Justify your answer." },
    ],
  },
  // ===== PHYSICS =====
  "phy-3": {
    chapterId: "phy-3",
    introduction: "Force is a push or pull that can change the state of motion, shape, or direction of an object. Pressure is the force applied per unit area. Understanding these concepts explains everything from how nails penetrate wood to how airplanes fly.",
    sections: [
      { heading: "Types of Forces", content: "Contact forces require physical touch: friction, muscular force, normal force, tension. Non-contact forces act at a distance: gravitational, magnetic, electrostatic. A force can change speed, direction, or shape of an object." },
      { heading: "Pressure", content: "Pressure = Force / Area (P = F/A). SI unit: Pascal (Pa). 1 Pa = 1 N/m². A sharp knife cuts better than a blunt one because the force is applied on a smaller area → more pressure. Snowshoes spread weight over a larger area → less pressure → you don't sink." },
      { heading: "Pressure in Fluids", content: "Fluids (liquids and gases) exert pressure in all directions. Pressure increases with depth. Pascal's Law: Pressure applied to a confined fluid is transmitted equally in all directions (used in hydraulic machines). Atmospheric pressure is about 101,325 Pa at sea level and decreases with altitude." },
    ],
    keyDefinitions: [
      { term: "Force", definition: "A push or pull acting on an object that can change its motion or shape. SI unit: Newton (N)." },
      { term: "Pressure", definition: "Force applied per unit area (P = F/A). SI unit: Pascal (Pa)." },
      { term: "Pascal's Law", definition: "Pressure applied to a confined fluid is transmitted equally in all directions." },
      { term: "Atmospheric Pressure", definition: "The pressure exerted by the weight of the atmosphere on the Earth's surface." },
    ],
    didYouKnow: [
      "A karate expert breaks bricks by applying large force on a very small area — creating enormous pressure!",
      "Atmospheric pressure at sea level equals about 1 kg pressing on every cm² of your body — we don't feel it because our body pushes back equally.",
    ],
    revisionSummary: [
      "Force = push or pull; measured in Newtons (N).",
      "Pressure = Force / Area; measured in Pascals (Pa).",
      "Contact forces need touch; non-contact forces act at a distance.",
      "Fluid pressure acts equally in all directions (Pascal's Law).",
      "Atmospheric pressure decreases with altitude.",
    ],
    practiceQuestions: [
      { type: "short", question: "Define pressure and state its SI unit." },
      { type: "short", question: "Why does a sharp knife cut better than a blunt one?" },
      { type: "long", question: "Explain Pascal's Law with examples from daily life." },
      { type: "icse", question: "[ICSE Board Style] Calculate the pressure exerted by a force of 500 N on an area of 2 m²." },
    ],
  },
  "phy-4": {
    chapterId: "phy-4",
    introduction: "Work, energy, and power are fundamental concepts in physics. Work is done when a force causes displacement. Energy is the ability to do work. Power is the rate of doing work.",
    sections: [
      { heading: "Work", content: "Work is done when a force acts on an object and the object moves in the direction of the force. W = F × d × cos θ. SI unit: Joule (J). 1 J = 1 N × 1 m. No work is done if: force is zero, displacement is zero, or force is perpendicular to displacement (e.g., carrying a bag horizontally — gravity acts downward)." },
      { heading: "Energy", content: "Energy is the capacity to do work. Types: Kinetic energy (KE = ½mv²) — energy due to motion. Potential energy (PE = mgh) — energy due to position/height. Other forms: heat, light, sound, chemical, electrical, nuclear." },
      { heading: "Conservation of Energy", content: "The Law of Conservation of Energy states: Energy can neither be created nor destroyed; it can only be transformed from one form to another. The total energy of an isolated system remains constant. Example: A falling ball — PE converts to KE. At the top: max PE, zero KE. At the bottom: zero PE, max KE." },
      { heading: "Power", content: "Power is the rate of doing work. P = W/t. SI unit: Watt (W). 1 W = 1 J/s. 1 kilowatt (kW) = 1000 W. 1 horsepower (HP) ≈ 746 W." },
    ],
    keyDefinitions: [
      { term: "Work", definition: "Product of force and displacement in the direction of force. W = F × d. SI unit: Joule." },
      { term: "Kinetic Energy", definition: "Energy possessed by an object due to its motion. KE = ½mv²." },
      { term: "Potential Energy", definition: "Energy possessed by an object due to its position or height. PE = mgh." },
      { term: "Power", definition: "Rate of doing work. P = W/t. SI unit: Watt." },
    ],
    didYouKnow: [
      "A car travelling at 100 km/h has 4 times the kinetic energy of a car at 50 km/h (KE doubles when speed doubles)!",
      "The Sun converts about 4 million tonnes of matter into energy every second through nuclear fusion!",
    ],
    revisionSummary: [
      "Work = Force × Displacement (in direction of force). Unit: Joule.",
      "KE = ½mv²; PE = mgh.",
      "Law of Conservation: energy transforms but total remains constant.",
      "Power = Work / Time. Unit: Watt.",
    ],
    practiceQuestions: [
      { type: "short", question: "Define work. When is work said to be done?" },
      { type: "short", question: "A body of mass 5 kg is at a height of 10 m. Calculate its potential energy. (g = 10 m/s²)" },
      { type: "long", question: "State and explain the Law of Conservation of Energy with an example." },
      { type: "icse", question: "[ICSE Board Style] A machine does 5000 J of work in 20 seconds. Calculate its power." },
    ],
  },
  "phy-9": {
    chapterId: "phy-9",
    introduction: "Electric current is the flow of electric charges through a conductor. Understanding circuits, Ohm's law, and series/parallel connections is essential for both exams and real-life applications.",
    sections: [
      { heading: "Electric Current", content: "Electric current is the rate of flow of electric charge. I = Q/t. SI unit: Ampere (A). Conventional current flows from positive to negative terminal; electron flow is opposite. An ammeter measures current and is connected in series." },
      { heading: "Potential Difference (Voltage)", content: "Potential difference is the work done to move a unit charge between two points. V = W/Q. SI unit: Volt (V). A voltmeter measures voltage and is connected in parallel. A battery provides the potential difference that drives current." },
      { heading: "Ohm's Law", content: "Ohm's Law: V = I × R (at constant temperature). V = voltage (Volts), I = current (Amperes), R = resistance (Ohms, Ω). Resistance depends on: length (longer = more R), cross-section (thinner = more R), material, and temperature." },
      { heading: "Series and Parallel Circuits", content: "Series: Components connected end to end. Same current flows through all. Total R = R₁ + R₂ + R₃. Voltage divides. If one component fails, circuit breaks. Parallel: Components connected across same two points. Same voltage across all. 1/R = 1/R₁ + 1/R₂ + 1/R₃. Current divides. If one component fails, others work." },
    ],
    keyDefinitions: [
      { term: "Electric Current", definition: "Rate of flow of electric charge. I = Q/t. SI unit: Ampere." },
      { term: "Potential Difference", definition: "Work done to move a unit charge between two points. V = W/Q. SI unit: Volt." },
      { term: "Resistance", definition: "Opposition to the flow of current. SI unit: Ohm (Ω)." },
      { term: "Ohm's Law", definition: "V = IR; the current through a conductor is directly proportional to the voltage across it, at constant temperature." },
    ],
    didYouKnow: [
      "A lightning bolt can carry a current of about 30,000 Amperes!",
      "The electric eel can generate up to 860 volts — enough to stun a horse!",
    ],
    revisionSummary: [
      "Current I = Q/t (Ampere). Voltage V = W/Q (Volt). Resistance R (Ohm).",
      "Ohm's Law: V = IR.",
      "Series: same current, R adds up, voltage divides.",
      "Parallel: same voltage, 1/R adds up, current divides.",
    ],
    practiceQuestions: [
      { type: "short", question: "State Ohm's Law. Write its mathematical formula." },
      { type: "short", question: "Calculate the current when V = 12V and R = 4Ω." },
      { type: "long", question: "Compare series and parallel circuits with diagrams." },
      { type: "icse", question: "[ICSE Board Style] Three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel. Find the equivalent resistance." },
    ],
  },
  // ===== MATHEMATICS =====
  "math-1": {
    chapterId: "math-1",
    introduction: "Rational numbers are numbers that can be expressed in the form p/q, where p and q are integers and q ≠ 0. They include integers, fractions, and decimals that are terminating or repeating.",
    sections: [
      { heading: "Properties of Rational Numbers", content: "Closure: Rational numbers are closed under addition, subtraction, and multiplication (result is always rational). Not closed under division (division by zero undefined). Commutativity: a + b = b + a and a × b = b × a (holds for addition and multiplication). Associativity: (a + b) + c = a + (b + c). Distributive: a × (b + c) = a × b + a × c." },
      { heading: "Additive and Multiplicative Identity and Inverse", content: "Additive identity: 0 (a + 0 = a). Multiplicative identity: 1 (a × 1 = a). Additive inverse of a is −a. Multiplicative inverse (reciprocal) of a/b is b/a (a ≠ 0)." },
      { heading: "Representation on Number Line", content: "Every rational number can be represented on a number line. Between any two rational numbers, there are infinitely many rational numbers. To find rational numbers between a/b and c/d, find common denominator or use the mean." },
    ],
    keyDefinitions: [
      { term: "Rational Number", definition: "A number that can be expressed as p/q where p, q are integers and q ≠ 0." },
      { term: "Closure Property", definition: "An operation on a set produces a result within the same set." },
      { term: "Additive Inverse", definition: "The number which when added to a given number gives zero." },
      { term: "Multiplicative Inverse", definition: "The reciprocal of a number; their product equals 1." },
    ],
    didYouKnow: [
      "There are infinitely many rational numbers between any two rational numbers — you can never list them all!",
      "The decimal 0.999... (repeating) is actually equal to 1. Mathematicians have proven this rigorously!",
    ],
    revisionSummary: [
      "Rational number = p/q (q ≠ 0).",
      "Closed under +, −, ×. Not closed under ÷ (can't divide by 0).",
      "Commutative for + and ×. Associative for + and ×.",
      "Additive identity = 0. Multiplicative identity = 1.",
      "Infinitely many rationals between any two rationals.",
    ],
    practiceQuestions: [
      { type: "short", question: "Find three rational numbers between 1/4 and 1/2." },
      { type: "short", question: "Verify the distributive property for 2/3, 4/5, and 1/6." },
      { type: "long", question: "Explain the properties of rational numbers with examples." },
      { type: "icse", question: "[ICSE Board Style] Represent −3/5 and 7/5 on a number line." },
    ],
  },
  "math-11": {
    chapterId: "math-11",
    introduction: "Algebraic expressions use variables, constants, and operations. Identities are equations that are true for all values of the variables. Mastering these is crucial for factorization and solving equations.",
    sections: [
      { heading: "Types of Expressions", content: "Monomial: one term (e.g., 3x²). Binomial: two terms (e.g., 2x + 5). Trinomial: three terms (e.g., x² + 3x + 2). Polynomial: one or more terms." },
      { heading: "Multiplication of Expressions", content: "Monomial × Monomial: multiply coefficients and add exponents. Monomial × Polynomial: distribute. Polynomial × Polynomial: multiply each term of one with every term of the other." },
      { heading: "Standard Identities", content: "(a + b)² = a² + 2ab + b². (a − b)² = a² − 2ab + b². (a + b)(a − b) = a² − b². (x + a)(x + b) = x² + (a+b)x + ab. These identities help in quick multiplication and factorization." },
    ],
    keyDefinitions: [
      { term: "Algebraic Expression", definition: "A combination of variables, constants, and operations (+, −, ×, ÷)." },
      { term: "Identity", definition: "An equation that is true for all values of the variables." },
      { term: "Coefficient", definition: "The numerical factor of a term in an algebraic expression." },
    ],
    didYouKnow: [
      "The word 'algebra' comes from the Arabic word 'al-jabr', from a book by the mathematician Al-Khwarizmi in 820 AD!",
    ],
    revisionSummary: [
      "Monomial (1 term), Binomial (2), Trinomial (3), Polynomial (many).",
      "(a+b)² = a² + 2ab + b²; (a−b)² = a² − 2ab + b²; a² − b² = (a+b)(a−b).",
      "Multiply: distribute each term; combine like terms.",
    ],
    practiceQuestions: [
      { type: "short", question: "Expand: (3x + 4)²" },
      { type: "short", question: "Find the product: (2a + 5)(2a − 5)" },
      { type: "long", question: "Prove the identity (a + b)² = a² + 2ab + b² geometrically." },
      { type: "icse", question: "[ICSE Board Style] Evaluate 105² using a suitable identity." },
    ],
  },
  // ===== HISTORY =====
  "hist-1": {
    chapterId: "hist-1",
    introduction: "The period from the 15th to the 18th century saw Europe transition from the medieval to the modern age. The Renaissance, Reformation, voyages of discovery, and the Industrial Revolution transformed society, economy, and thought.",
    sections: [
      { heading: "The Renaissance", content: "Renaissance (meaning 'rebirth') began in Italy in the 14th century and spread across Europe. It was a revival of interest in Greek and Roman art, literature, and learning. Key figures: Leonardo da Vinci, Michelangelo, Shakespeare. It promoted humanism — focus on human potential and achievements rather than only religious teachings." },
      { heading: "The Reformation", content: "The Reformation was a religious movement in the 16th century challenging the practices of the Roman Catholic Church. Martin Luther's 95 Theses (1517) criticised the sale of indulgences. This led to the rise of Protestantism. The Counter-Reformation was the Catholic Church's response to reform itself." },
      { heading: "The Industrial Revolution", content: "The Industrial Revolution began in England in the mid-18th century. Reasons: availability of coal and iron, colonial markets, scientific temperament, political stability. Key inventions: Spinning Jenny (Hargreaves), Water Frame (Arkwright), Steam Engine (James Watt), Power Loom (Cartwright). Impacts: urbanisation, factory system, pollution, exploitation of workers, rise of capitalism." },
      { heading: "Imperialism", content: "Imperialism is the policy of extending a country's power through colonisation or military force. European powers colonised Asia, Africa, and the Americas for raw materials, markets, and strategic control. Impacts on colonised nations: economic exploitation, destruction of local industries, spread of Western education and ideas." },
    ],
    keyDefinitions: [
      { term: "Renaissance", definition: "A cultural movement (14th–17th century) reviving interest in classical Greek and Roman learning." },
      { term: "Reformation", definition: "A 16th-century religious movement challenging Catholic Church practices, leading to Protestantism." },
      { term: "Industrial Revolution", definition: "The transition from hand production to machine manufacturing, beginning in England in the mid-18th century." },
      { term: "Imperialism", definition: "Policy of extending a nation's authority over other territories through colonisation or military force." },
    ],
    didYouKnow: [
      "Leonardo da Vinci designed a helicopter, tank, and solar concentrator — over 400 years before they were actually built!",
      "The Industrial Revolution began in the textile industry — the first factories were cotton mills.",
    ],
    revisionSummary: [
      "Renaissance: rebirth of classical learning; humanism; Da Vinci, Michelangelo.",
      "Reformation: Martin Luther; Protestantism; Counter-Reformation.",
      "Industrial Revolution: began in England; key inventions; urbanisation.",
      "Imperialism: European colonisation for resources and markets.",
    ],
    practiceQuestions: [
      { type: "short", question: "What is meant by the Renaissance? Where did it begin?" },
      { type: "short", question: "Name three key inventions of the Industrial Revolution." },
      { type: "long", question: "Explain the causes and impacts of the Industrial Revolution." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: The Industrial Revolution began in England." },
    ],
  },
  "hist-6": {
    chapterId: "hist-6",
    introduction: "The Great Uprising of 1857 (also called the First War of Indian Independence) was a major revolt against British rule. It shook the foundations of British power in India and led to significant changes in governance.",
    sections: [
      { heading: "Causes of the Uprising", content: "Political: Doctrine of Lapse, annexation of Awadh. Economic: exploitation of artisans and farmers, drain of wealth. Social/Religious: interference with customs, fear of forced conversions. Military: discrimination against Indian soldiers, greased cartridges (animal fat — offended Hindu and Muslim soldiers). Immediate cause: Mangal Pandey's revolt at Barrackpore (March 1857)." },
      { heading: "Spread and Leaders", content: "The revolt began at Meerut (10 May 1857) and spread to Delhi, Lucknow, Kanpur, Jhansi, and other centres. Key leaders: Bahadur Shah Zafar (Delhi), Rani Lakshmibai (Jhansi), Nana Sahib (Kanpur), Tantia Tope (military leader), Begum Hazrat Mahal (Lucknow), Kunwar Singh (Bihar)." },
      { heading: "Consequences", content: "The East India Company's rule ended; British Crown took direct control (Government of India Act 1858). Queen Victoria's Proclamation (1858) promised religious tolerance and no further annexations. The Indian Army was reorganised. The revolt failed due to lack of unity, poor planning, and British military superiority, but it inspired future nationalist movements." },
    ],
    keyDefinitions: [
      { term: "Doctrine of Lapse", definition: "British policy of annexing princely states if the ruler died without a natural heir." },
      { term: "Subsidiary Alliance", definition: "An alliance where Indian rulers accepted British military protection in exchange for loss of sovereignty." },
      { term: "Greased Cartridges", definition: "Rifle cartridges rumoured to be greased with cow and pig fat, offending Hindu and Muslim soldiers." },
    ],
    didYouKnow: [
      "Rani Lakshmibai of Jhansi fought with her sword in one hand and her adopted son tied to her back — she is remembered as one of India's bravest freedom fighters.",
      "The revolt of 1857 led to the end of the Mughal Empire — Bahadur Shah Zafar was the last Mughal emperor.",
    ],
    revisionSummary: [
      "Causes: political (Doctrine of Lapse), economic (drain of wealth), social/religious, military (greased cartridges).",
      "Started at Meerut (10 May 1857); spread to Delhi, Lucknow, Kanpur, Jhansi.",
      "Leaders: Bahadur Shah Zafar, Rani Lakshmibai, Nana Sahib, Tantia Tope.",
      "Result: Company rule ended; British Crown took over; Queen's Proclamation.",
    ],
    practiceQuestions: [
      { type: "short", question: "Name the immediate cause of the Revolt of 1857." },
      { type: "short", question: "Who were the main leaders of the revolt and their centres?" },
      { type: "long", question: "Discuss the political and military causes of the Great Uprising of 1857." },
      { type: "long", question: "What were the consequences of the Revolt of 1857?" },
      { type: "icse", question: "[ICSE Board Style] Give reasons: The Revolt of 1857 is called the First War of Indian Independence." },
    ],
  },
  // ===== GEOGRAPHY =====
  "geo-3": {
    chapterId: "geo-3",
    introduction: "Weather refers to the atmospheric conditions of a place at a given time, while climate is the average weather of a place over a long period (usually 30+ years). Understanding weather and climate helps us predict natural events and plan human activities.",
    sections: [
      { heading: "The Atmosphere", content: "The atmosphere is a blanket of air surrounding the Earth. Layers: Troposphere (weather occurs here, 0–12 km), Stratosphere (ozone layer, 12–50 km), Mesosphere (50–80 km), Thermosphere (80–700 km), Exosphere (700+ km). Composition: Nitrogen (78%), Oxygen (21%), other gases (1%)." },
      { heading: "Temperature", content: "Temperature decreases with altitude (6.5°C per 1000 m — normal lapse rate). Factors affecting temperature: latitude, altitude, distance from sea, ocean currents, prevailing winds. Isotherms are lines joining places with equal temperature." },
      { heading: "Pressure and Winds", content: "Atmospheric pressure decreases with altitude. Isobars are lines joining places with equal pressure. Wind blows from high pressure to low pressure. Types: permanent winds (trade winds, westerlies, polar easterlies), seasonal winds (monsoons), local winds (land/sea breezes)." },
      { heading: "Rainfall", content: "Types: Convectional rainfall (equatorial regions — hot air rises, cools, condenses), Orographic/Relief rainfall (moist air forced up a mountain), Cyclonic/Frontal rainfall (warm and cold air masses meet). Rain shadow area receives less rainfall on the leeward side of mountains." },
    ],
    keyDefinitions: [
      { term: "Weather", definition: "Atmospheric conditions of a place at a particular time." },
      { term: "Climate", definition: "Average weather conditions of a place over a long period (30+ years)." },
      { term: "Isotherm", definition: "A line on a map joining places with the same temperature." },
      { term: "Isobar", definition: "A line on a map joining places with equal atmospheric pressure." },
    ],
    didYouKnow: [
      "Mawsynram in Meghalaya, India, is the wettest place on Earth with an average annual rainfall of about 11,871 mm!",
      "The ozone layer in the stratosphere absorbs 97-99% of the Sun's harmful UV radiation.",
    ],
    revisionSummary: [
      "Weather = short-term conditions; Climate = long-term average.",
      "Atmosphere layers: Troposphere (weather), Stratosphere (ozone), Mesosphere, Thermosphere, Exosphere.",
      "Temperature decreases with altitude (6.5°C/1000 m).",
      "Wind: high pressure → low pressure. Types: permanent, seasonal, local.",
      "Rainfall types: convectional, orographic, cyclonic.",
    ],
    practiceQuestions: [
      { type: "short", question: "Differentiate between weather and climate." },
      { type: "short", question: "What are isotherms and isobars?" },
      { type: "long", question: "Explain the three types of rainfall with diagrams." },
      { type: "icse", question: "[ICSE Board Style] Give reasons: Places near the sea have a moderate climate." },
    ],
  },
  // ===== COMPUTER =====
  "comp-3": {
    chapterId: "comp-3",
    introduction: "Python is a popular, easy-to-learn programming language used worldwide. It's great for beginners due to its simple syntax and readability.",
    sections: [
      { heading: "Getting Started with Python", content: "Python can be run in interactive mode (IDLE shell) or script mode (.py files). Python uses indentation instead of braces to define code blocks. Comments start with # (single-line) or ''' ''' (multi-line)." },
      { heading: "Variables and Data Types", content: "A variable stores data. No need to declare types — Python is dynamically typed. Data types: int (whole numbers), float (decimals), str (text in quotes), bool (True/False). Example: name = 'Alice', age = 13, height = 5.2, is_student = True." },
      { heading: "Input and Output", content: "Output: print('Hello, World!'). Input: name = input('Enter your name: ') — input() always returns a string. Type conversion: int(), float(), str(). Example: age = int(input('Enter age: '))" },
      { heading: "Operators", content: "Arithmetic: +, −, *, /, // (floor division), % (modulus), ** (power). Comparison: ==, !=, <, >, <=, >=. Logical: and, or, not. Assignment: =, +=, −=, *=, /=." },
    ],
    keyDefinitions: [
      { term: "Variable", definition: "A named storage location in memory that holds a value." },
      { term: "Data Type", definition: "The type of value a variable can hold — int, float, str, bool." },
      { term: "Syntax", definition: "The set of rules that defines the structure of a programming language." },
    ],
    didYouKnow: [
      "Python was named after the British comedy show 'Monty Python's Flying Circus', not the snake!",
      "Python is used by Google, NASA, Netflix, Instagram, and Spotify.",
      "Python is the most popular language for AI and Machine Learning projects.",
    ],
    revisionSummary: [
      "Python: easy syntax, uses indentation, dynamically typed.",
      "Data types: int, float, str, bool.",
      "input() reads user input (returns string); print() displays output.",
      "Operators: arithmetic (+, −, *, /, //, %, **), comparison, logical, assignment.",
    ],
    practiceQuestions: [
      { type: "short", question: "What is the output of: print(17 // 5, 17 % 5)?" },
      { type: "short", question: "Write a Python program to find the area of a rectangle given length and breadth." },
      { type: "long", question: "Explain the different data types in Python with examples." },
      { type: "icse", question: "[ICSE Board Style] Write a Python program to input a temperature in Celsius and convert it to Fahrenheit." },
    ],
  },
  "comp-8": {
    chapterId: "comp-8",
    introduction: "Artificial Intelligence (AI) is the simulation of human intelligence by machines. AI systems can learn, reason, and make decisions, transforming how we live, work, and interact with technology.",
    sections: [
      { heading: "What is AI?", content: "AI is a branch of computer science that aims to create intelligent machines that can perform tasks requiring human intelligence — such as visual perception, speech recognition, decision-making, and language translation. Types: Narrow AI (specific tasks, e.g., Siri), General AI (human-level intelligence — not yet achieved), Super AI (beyond human intelligence — theoretical)." },
      { heading: "Machine Learning", content: "Machine Learning (ML) is a subset of AI where machines learn from data without being explicitly programmed. Types: Supervised learning (learns from labelled data), Unsupervised learning (finds patterns in unlabelled data), Reinforcement learning (learns by trial and error with rewards)." },
      { heading: "AI in Daily Life", content: "Virtual assistants (Siri, Alexa), recommendation systems (Netflix, YouTube), spam filters, navigation (Google Maps), self-driving cars, medical diagnosis, language translation, face recognition, and chatbots." },
      { heading: "Ethics of AI", content: "Ethical concerns: privacy, job displacement, bias in algorithms, misuse of deepfakes, lack of accountability. Responsible AI should be transparent, fair, and respect human rights." },
    ],
    keyDefinitions: [
      { term: "Artificial Intelligence", definition: "The simulation of human intelligence by computer systems." },
      { term: "Machine Learning", definition: "A subset of AI where machines learn patterns from data." },
      { term: "Neural Network", definition: "A computing system inspired by the human brain's network of neurons." },
    ],
    didYouKnow: [
      "The term 'Artificial Intelligence' was coined by John McCarthy in 1956.",
      "AI can now beat world champions in chess (Deep Blue), Go (AlphaGo), and even Jeopardy (Watson)!",
      "ChatGPT, an AI language model, was trained on billions of words from the internet.",
    ],
    revisionSummary: [
      "AI = machines simulating human intelligence.",
      "Types: Narrow AI, General AI (not achieved), Super AI (theoretical).",
      "ML: machines learn from data (supervised, unsupervised, reinforcement).",
      "AI applications: virtual assistants, self-driving cars, medical diagnosis.",
      "Ethics: privacy, bias, job displacement, responsible AI.",
    ],
    practiceQuestions: [
      { type: "short", question: "What is Artificial Intelligence? Give two examples of AI in daily life." },
      { type: "short", question: "Differentiate between supervised and unsupervised learning." },
      { type: "long", question: "Explain three types of machine learning with examples." },
      { type: "icse", question: "[ICSE Board Style] Discuss the ethical concerns of Artificial Intelligence." },
    ],
  },
};

export function getChapterContent(chapterId: string): ChapterContent | undefined {
  return chapterContents[chapterId];
}
