export interface QuizQuestion {
  id: string;
  chapterId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // ===== BIOLOGY =====
  // Bio-1: Transport of Nutrients in Plants
  { id: "q1", chapterId: "bio-1", question: "Osmosis is the movement of water through a:", options: ["Permeable membrane", "Semipermeable membrane", "Impermeable membrane", "Selectively permeable membrane"], correctIndex: 1, explanation: "Osmosis is the movement of water from a dilute to a concentrated solution through a semipermeable membrane." },
  { id: "q2", chapterId: "bio-1", question: "Which tissue transports water from roots to leaves?", options: ["Phloem", "Xylem", "Cambium", "Epidermis"], correctIndex: 1, explanation: "Xylem transports water and dissolved minerals upward from roots to leaves." },
  { id: "q3", chapterId: "bio-1", question: "Transpiration mainly occurs through:", options: ["Roots", "Stem", "Stomata on leaves", "Bark"], correctIndex: 2, explanation: "Transpiration is the loss of water vapour mainly through stomata on the leaves." },

  // Bio-2: Reproduction
  { id: "q4", chapterId: "bio-2", question: "Binary fission is seen in:", options: ["Rose", "Amoeba", "Hydra", "Fern"], correctIndex: 1, explanation: "Amoeba reproduces asexually by binary fission — splitting into two equal halves." },
  { id: "q5", chapterId: "bio-2", question: "The male part of a flower is called:", options: ["Pistil", "Sepal", "Stamen", "Petal"], correctIndex: 2, explanation: "The stamen (androecium) is the male reproductive part, consisting of anther and filament." },

  // Bio-3: Ecosystem
  { id: "q6", chapterId: "bio-3", question: "In a food chain, the 10% law means:", options: ["10% of organisms survive", "10% of energy transfers to next level", "10% of food is wasted", "10% of light is absorbed"], correctIndex: 1, explanation: "Only about 10% of energy at one trophic level is transferred to the next level." },

  // Bio-5: Circulatory System
  { id: "q7", chapterId: "bio-5", question: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], correctIndex: 2, explanation: "The human heart has 4 chambers: 2 atria (upper) and 2 ventricles (lower)." },
  { id: "q8", chapterId: "bio-5", question: "Which blood vessels carry blood away from the heart?", options: ["Veins", "Arteries", "Capillaries", "Venules"], correctIndex: 1, explanation: "Arteries carry blood away from the heart (usually oxygenated, except pulmonary artery)." },
  { id: "q9", chapterId: "bio-5", question: "The universal blood donor group is:", options: ["A", "B", "AB", "O"], correctIndex: 3, explanation: "Blood group O is the universal donor as it has no A or B antigens on its RBCs." },

  // Bio-6: Nervous System
  { id: "q10", chapterId: "bio-6", question: "The basic unit of the nervous system is:", options: ["Nephron", "Neuron", "Nucleotide", "Neutrophil"], correctIndex: 1, explanation: "A neuron (nerve cell) is the basic structural and functional unit of the nervous system." },
  { id: "q11", chapterId: "bio-6", question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"], correctIndex: 1, explanation: "The cerebellum coordinates voluntary movements, balance, and posture." },
  { id: "q12", chapterId: "bio-6", question: "Reflex actions are controlled by the:", options: ["Cerebrum", "Cerebellum", "Spinal Cord", "Medulla"], correctIndex: 2, explanation: "Reflex actions are quick automatic responses controlled by the spinal cord without involving the brain." },

  // Bio-4: Endocrine System
  { id: "q13", chapterId: "bio-4", question: "Which gland is called the 'master gland'?", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], correctIndex: 2, explanation: "The pituitary gland is called the master gland because it controls the secretion of other endocrine glands." },
  { id: "q14", chapterId: "bio-4", question: "Insulin is produced by the:", options: ["Liver", "Pancreas", "Thyroid", "Adrenal gland"], correctIndex: 1, explanation: "Insulin is produced by the Islets of Langerhans in the pancreas and regulates blood sugar." },

  // ===== CHEMISTRY =====
  // Chem-1: Kinetic Molecular Theory
  { id: "q15", chapterId: "chem-1", question: "In which state of matter do molecules move most freely?", options: ["Solid", "Liquid", "Gas", "Plasma"], correctIndex: 2, explanation: "Gas molecules have the most kinetic energy and move freely in all directions." },
  { id: "q16", chapterId: "chem-1", question: "Direct conversion of solid to gas is called:", options: ["Evaporation", "Condensation", "Sublimation", "Melting"], correctIndex: 2, explanation: "Sublimation is the direct change of a solid to gas without passing through the liquid state (e.g., dry ice)." },

  // Chem-4: Atomic Structure
  { id: "q17", chapterId: "chem-4", question: "Who proposed the nuclear model of the atom?", options: ["Dalton", "Thomson", "Rutherford", "Bohr"], correctIndex: 2, explanation: "Rutherford's gold foil experiment led to the nuclear model with a dense, positively charged nucleus." },
  { id: "q18", chapterId: "chem-4", question: "Maximum electrons in the M shell (n=3) is:", options: ["2", "8", "18", "32"], correctIndex: 2, explanation: "Using the formula 2n², the M shell (n=3) can hold 2(3²) = 18 electrons." },
  { id: "q19", chapterId: "chem-4", question: "The electronic configuration of Sodium (Z=11) is:", options: ["2, 8, 1", "2, 1, 8", "2, 8, 2", "2, 9"], correctIndex: 0, explanation: "Sodium has 11 electrons: K=2, L=8, M=1. Its valency is 1." },

  // Chem-6: Chemical Reactions
  { id: "q20", chapterId: "chem-6", question: "A + B → AB is an example of:", options: ["Decomposition", "Combination", "Displacement", "Neutralization"], correctIndex: 1, explanation: "A combination (synthesis) reaction is when two or more substances combine to form a single product." },
  { id: "q21", chapterId: "chem-6", question: "In a redox reaction, oxidation involves:", options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of protons"], correctIndex: 1, explanation: "Oxidation is the loss of electrons (or gain of oxygen) by a substance." },

  // ===== PHYSICS =====
  // Phy-3: Force and Pressure
  { id: "q22", chapterId: "phy-3", question: "Pressure is defined as:", options: ["Force × Area", "Force / Area", "Force + Area", "Force − Area"], correctIndex: 1, explanation: "Pressure = Force / Area. More force on a smaller area means greater pressure." },
  { id: "q23", chapterId: "phy-3", question: "Pascal's Law applies to:", options: ["Solids only", "Liquids only", "Confined fluids", "Gases only"], correctIndex: 2, explanation: "Pascal's Law states that pressure applied to a confined fluid is transmitted equally in all directions." },

  // Phy-4: Work, Energy, Power
  { id: "q24", chapterId: "phy-4", question: "The SI unit of work is:", options: ["Newton", "Joule", "Watt", "Pascal"], correctIndex: 1, explanation: "Work is measured in Joules (J). 1 Joule = 1 Newton × 1 metre." },
  { id: "q25", chapterId: "phy-4", question: "KE = ½mv². If speed doubles, KE becomes:", options: ["Double", "Triple", "Four times", "Half"], correctIndex: 2, explanation: "KE is proportional to v². If speed doubles (2v), KE = ½m(2v)² = 4 × ½mv² = four times." },

  // Phy-9: Current Electricity
  { id: "q26", chapterId: "phy-9", question: "Ohm's Law states that V equals:", options: ["I × R", "I / R", "I + R", "R / I"], correctIndex: 0, explanation: "Ohm's Law: V = I × R, where V is voltage, I is current, and R is resistance." },
  { id: "q27", chapterId: "phy-9", question: "In a series circuit, the total resistance is:", options: ["Sum of all resistances", "Less than the smallest", "Product of all", "Average of all"], correctIndex: 0, explanation: "In series: R_total = R₁ + R₂ + R₃. The total resistance increases." },

  // ===== MATHEMATICS =====
  // Math-1: Rational Numbers
  { id: "q28", chapterId: "math-1", question: "A rational number is expressed as:", options: ["p/q where q ≠ 0", "p × q", "p + q", "√p"], correctIndex: 0, explanation: "A rational number is any number expressed as p/q where p and q are integers and q ≠ 0." },
  { id: "q29", chapterId: "math-1", question: "The additive identity for rational numbers is:", options: ["1", "0", "−1", "½"], correctIndex: 1, explanation: "The additive identity is 0 because a + 0 = a for any rational number a." },

  // Math-11: Algebraic Expressions
  { id: "q30", chapterId: "math-11", question: "(a + b)² equals:", options: ["a² + b²", "a² + 2ab + b²", "a² − 2ab + b²", "2a² + 2b²"], correctIndex: 1, explanation: "The identity: (a + b)² = a² + 2ab + b²." },
  { id: "q31", chapterId: "math-11", question: "What is 2⁰ equal to?", options: ["0", "1", "2", "Undefined"], correctIndex: 1, explanation: "Any non-zero number raised to the power of 0 equals 1." },

  // ===== GEOGRAPHY =====
  // Geo-3: Weather and Climate
  { id: "q32", chapterId: "geo-3", question: "The layer of the atmosphere where weather occurs is:", options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"], correctIndex: 1, explanation: "The troposphere (0–12 km) is where all weather phenomena occur." },
  { id: "q33", chapterId: "geo-3", question: "Lines joining places with equal temperature are:", options: ["Isobars", "Isotherms", "Contours", "Isohyets"], correctIndex: 1, explanation: "Isotherms are lines on a map joining places with the same temperature." },

  // ===== HISTORY =====
  // Hist-6: Uprising of 1857
  { id: "q34", chapterId: "hist-6", question: "The Revolt of 1857 is also known as:", options: ["Quit India Movement", "First War of Independence", "Salt Satyagraha", "Swadeshi Movement"], correctIndex: 1, explanation: "The Revolt of 1857 is often called the First War of Indian Independence." },
  { id: "q35", chapterId: "hist-6", question: "The immediate cause of the 1857 revolt was:", options: ["High taxes", "Doctrine of Lapse", "Greased cartridges", "Partition of Bengal"], correctIndex: 2, explanation: "The immediate cause was the introduction of greased cartridges (with cow and pig fat) which offended Hindu and Muslim soldiers." },

  // Hist-1: Period of Transition
  { id: "q36", chapterId: "hist-1", question: "The Industrial Revolution began in:", options: ["France", "Germany", "England", "America"], correctIndex: 2, explanation: "The Industrial Revolution began in England in the mid-18th century due to coal, iron, colonial markets, and political stability." },

  // ===== COMPUTER =====
  // Comp-3: Python
  { id: "q37", chapterId: "comp-3", question: "What keyword displays output in Python?", options: ["echo", "printf", "print", "display"], correctIndex: 2, explanation: "The print() function is used to display output in Python." },
  { id: "q38", chapterId: "comp-3", question: "Which data type stores decimal numbers in Python?", options: ["int", "str", "float", "bool"], correctIndex: 2, explanation: "The float data type stores decimal (floating-point) numbers in Python." },

  // Comp-8: AI
  { id: "q39", chapterId: "comp-8", question: "AI stands for:", options: ["Auto Intelligence", "Artificial Intelligence", "Automated Information", "Applied Intelligence"], correctIndex: 1, explanation: "AI stands for Artificial Intelligence — the simulation of human intelligence by machines." },
  { id: "q40", chapterId: "comp-8", question: "Which type of ML uses labelled data?", options: ["Unsupervised", "Supervised", "Reinforcement", "Semi-supervised"], correctIndex: 1, explanation: "Supervised learning uses labelled training data to learn and make predictions." },
];

export function getQuestionsForChapter(chapterId: string) {
  return quizQuestions.filter((q) => q.chapterId === chapterId);
}
