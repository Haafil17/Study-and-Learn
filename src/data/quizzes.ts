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
  { id: "q1", chapterId: "bio-1", question: "Osmosis is the movement of water through a:", options: ["Permeable membrane", "Semipermeable membrane", "Impermeable membrane", "Cell wall only"], correctIndex: 1, explanation: "Osmosis is water movement through a semipermeable membrane from dilute to concentrated solution." },
  { id: "q2", chapterId: "bio-1", question: "Which tissue transports water from roots to leaves?", options: ["Phloem", "Xylem", "Cambium", "Epidermis"], correctIndex: 1, explanation: "Xylem transports water and minerals upward from roots to leaves." },
  { id: "q3", chapterId: "bio-1", question: "Transpiration mainly occurs through:", options: ["Roots", "Stem", "Stomata on leaves", "Bark"], correctIndex: 2, explanation: "Transpiration is loss of water vapour mainly through stomata on leaves." },
  { id: "q4", chapterId: "bio-2", question: "Binary fission is seen in:", options: ["Rose", "Amoeba", "Hydra", "Fern"], correctIndex: 1, explanation: "Amoeba reproduces by binary fission — splitting into two equal halves." },
  { id: "q5", chapterId: "bio-2", question: "The male part of a flower is called:", options: ["Pistil", "Sepal", "Stamen", "Petal"], correctIndex: 2, explanation: "The stamen (androecium) is the male reproductive part." },
  { id: "q6", chapterId: "bio-2", question: "Transfer of pollen from anther to stigma is:", options: ["Fertilization", "Pollination", "Germination", "Transpiration"], correctIndex: 1, explanation: "Pollination is the transfer of pollen grains from anther to stigma." },
  { id: "q7", chapterId: "bio-3", question: "The 10% law of energy transfer means:", options: ["10% organisms survive", "10% energy transfers to next level", "10% food is wasted", "10% light absorbed"], correctIndex: 1, explanation: "Only about 10% of energy at one trophic level transfers to the next." },
  { id: "q8", chapterId: "bio-3", question: "Organisms that break down dead matter are:", options: ["Producers", "Consumers", "Decomposers", "Parasites"], correctIndex: 2, explanation: "Decomposers (bacteria, fungi) break down dead organic matter and recycle nutrients." },
  { id: "q9", chapterId: "bio-4", question: "Which gland is called the 'master gland'?", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], correctIndex: 2, explanation: "The pituitary gland controls other endocrine glands." },
  { id: "q10", chapterId: "bio-4", question: "Insulin is produced by the:", options: ["Liver", "Pancreas", "Thyroid", "Adrenal"], correctIndex: 1, explanation: "Insulin is produced by the pancreas to regulate blood sugar." },
  { id: "q11", chapterId: "bio-4", question: "Iodine deficiency causes:", options: ["Diabetes", "Goitre", "Dwarfism", "Gigantism"], correctIndex: 1, explanation: "Iodine deficiency leads to goitre — enlarged thyroid gland." },
  { id: "q12", chapterId: "bio-5", question: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], correctIndex: 2, explanation: "The heart has 4 chambers: 2 atria and 2 ventricles." },
  { id: "q13", chapterId: "bio-5", question: "Which blood vessels carry blood away from the heart?", options: ["Veins", "Arteries", "Capillaries", "Venules"], correctIndex: 1, explanation: "Arteries carry blood away from the heart." },
  { id: "q14", chapterId: "bio-5", question: "The universal blood donor group is:", options: ["A", "B", "AB", "O"], correctIndex: 3, explanation: "Group O is the universal donor — no A or B antigens." },
  { id: "q15", chapterId: "bio-6", question: "The basic unit of the nervous system is:", options: ["Nephron", "Neuron", "Nucleotide", "Neutrophil"], correctIndex: 1, explanation: "A neuron is the basic structural and functional unit." },
  { id: "q16", chapterId: "bio-6", question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], correctIndex: 1, explanation: "The cerebellum coordinates balance and posture." },
  { id: "q17", chapterId: "bio-6", question: "Reflex actions are controlled by:", options: ["Cerebrum", "Cerebellum", "Spinal Cord", "Medulla"], correctIndex: 2, explanation: "Reflex actions are controlled by the spinal cord." },
  { id: "q18", chapterId: "bio-7", question: "Which of the following is a communicable disease?", options: ["Diabetes", "Cancer", "Tuberculosis", "Heart disease"], correctIndex: 2, explanation: "TB is caused by bacteria and can spread from person to person." },
  { id: "q19", chapterId: "bio-7", question: "Malaria is spread by:", options: ["Housefly", "Mosquito", "Cockroach", "Rat"], correctIndex: 1, explanation: "Malaria is a vector-borne disease spread by Anopheles mosquitoes." },
  { id: "q20", chapterId: "bio-8", question: "Crossing two varieties for desired traits is:", options: ["Cloning", "Hybridization", "Grafting", "Layering"], correctIndex: 1, explanation: "Hybridization combines desirable traits from two different varieties." },
  { id: "q21", chapterId: "bio-8", question: "Pasteurization was developed by:", options: ["Edward Jenner", "Louis Pasteur", "Robert Koch", "Alexander Fleming"], correctIndex: 1, explanation: "Louis Pasteur developed pasteurization to kill bacteria in milk." },

  // ===== CHEMISTRY =====
  { id: "q22", chapterId: "chem-1", question: "In which state do molecules move most freely?", options: ["Solid", "Liquid", "Gas", "Plasma"], correctIndex: 2, explanation: "Gas molecules have the most kinetic energy and move freely." },
  { id: "q23", chapterId: "chem-1", question: "Direct solid to gas conversion is:", options: ["Evaporation", "Condensation", "Sublimation", "Melting"], correctIndex: 2, explanation: "Sublimation is direct solid to gas (e.g., dry ice, camphor)." },
  { id: "q24", chapterId: "chem-2", question: "Rusting of iron is a:", options: ["Physical change", "Chemical change", "Reversible change", "Temporary change"], correctIndex: 1, explanation: "Rusting produces new substance (iron oxide) — a chemical change." },
  { id: "q25", chapterId: "chem-2", question: "Which is NOT a sign of a chemical change?", options: ["Colour change", "Gas evolution", "Change in shape", "Change in temperature"], correctIndex: 2, explanation: "Change in shape is a physical change, not a chemical change." },
  { id: "q26", chapterId: "chem-3", question: "A mixture with uniform composition is:", options: ["Heterogeneous", "Homogeneous", "Compound", "Element"], correctIndex: 1, explanation: "Homogeneous mixtures have uniform composition throughout (e.g., salt water)." },
  { id: "q27", chapterId: "chem-3", question: "Separating salt from water uses:", options: ["Filtration", "Evaporation", "Distillation", "Chromatography"], correctIndex: 1, explanation: "Evaporation removes water, leaving the dissolved salt behind." },
  { id: "q28", chapterId: "chem-4", question: "Who proposed the nuclear model of the atom?", options: ["Dalton", "Thomson", "Rutherford", "Bohr"], correctIndex: 2, explanation: "Rutherford's gold foil experiment led to the nuclear model." },
  { id: "q29", chapterId: "chem-4", question: "Maximum electrons in M shell (n=3):", options: ["2", "8", "18", "32"], correctIndex: 2, explanation: "Using 2n²: M shell (n=3) = 2(9) = 18 electrons." },
  { id: "q30", chapterId: "chem-4", question: "Electronic configuration of Na (Z=11):", options: ["2, 8, 1", "2, 1, 8", "2, 8, 2", "2, 9"], correctIndex: 0, explanation: "Sodium: K=2, L=8, M=1. Valency = 1." },
  { id: "q31", chapterId: "chem-5", question: "The valency of carbon is:", options: ["1", "2", "3", "4"], correctIndex: 3, explanation: "Carbon has 4 valence electrons, so its valency is 4 (tetravalent)." },
  { id: "q32", chapterId: "chem-5", question: "The symbol 'Na' comes from:", options: ["English", "Latin", "Greek", "Arabic"], correctIndex: 1, explanation: "Na comes from the Latin word 'Natrium' for sodium." },
  { id: "q33", chapterId: "chem-6", question: "A + B → AB is:", options: ["Decomposition", "Combination", "Displacement", "Neutralization"], correctIndex: 1, explanation: "Two substances combining to form a single product is a combination reaction." },
  { id: "q34", chapterId: "chem-6", question: "Oxidation involves:", options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"], correctIndex: 1, explanation: "Oxidation is the loss of electrons (or gain of oxygen)." },
  { id: "q35", chapterId: "chem-7", question: "Hydrogen burns with a:", options: ["Blue flame", "Pop sound", "Bright flash", "No sound"], correctIndex: 1, explanation: "Hydrogen burns with a characteristic 'pop' sound." },
  { id: "q36", chapterId: "chem-7", question: "The most common isotope of hydrogen is:", options: ["Deuterium", "Tritium", "Protium", "Heavy hydrogen"], correctIndex: 2, explanation: "Protium (1 proton, 0 neutrons) makes up 99.98% of natural hydrogen." },
  { id: "q37", chapterId: "chem-8", question: "Water has maximum density at:", options: ["0°C", "4°C", "25°C", "100°C"], correctIndex: 1, explanation: "Water has maximum density at 4°C due to anomalous expansion." },
  { id: "q38", chapterId: "chem-8", question: "Temporary hardness of water is caused by:", options: ["Sulphates", "Chlorides", "Bicarbonates", "Nitrates"], correctIndex: 2, explanation: "Temporary hardness is caused by bicarbonates of Ca and Mg, removed by boiling." },
  { id: "q39", chapterId: "chem-9", question: "The hardest natural substance is:", options: ["Graphite", "Diamond", "Quartz", "Iron"], correctIndex: 1, explanation: "Diamond is the hardest natural substance — each carbon bonded to 4 others." },
  { id: "q40", chapterId: "chem-9", question: "Carbon's ability to form chains is called:", options: ["Isomerism", "Catenation", "Polymerization", "Allotropy"], correctIndex: 1, explanation: "Catenation is carbon's ability to form bonds with other carbon atoms in chains and rings." },

  // ===== PHYSICS =====
  { id: "q41", chapterId: "phy-1", question: "In which state are intermolecular forces strongest?", options: ["Solid", "Liquid", "Gas", "All equal"], correctIndex: 0, explanation: "Solids have the strongest intermolecular forces, holding molecules in fixed positions." },
  { id: "q42", chapterId: "phy-2", question: "Density is calculated as:", options: ["Mass × Volume", "Mass / Volume", "Volume / Mass", "Mass + Volume"], correctIndex: 1, explanation: "Density = Mass / Volume (ρ = m/V)." },
  { id: "q43", chapterId: "phy-2", question: "An object floats in water if its density is:", options: ["Greater than water", "Less than water", "Equal to water", "Zero"], correctIndex: 1, explanation: "Objects with density less than water (< 1 g/cm³) float." },
  { id: "q44", chapterId: "phy-3", question: "Pressure is defined as:", options: ["Force × Area", "Force / Area", "Force + Area", "Force − Area"], correctIndex: 1, explanation: "Pressure = Force / Area (P = F/A)." },
  { id: "q45", chapterId: "phy-3", question: "Pascal's Law applies to:", options: ["Solids only", "Liquids only", "Confined fluids", "Gases only"], correctIndex: 2, explanation: "Pascal's Law: pressure in a confined fluid is transmitted equally." },
  { id: "q46", chapterId: "phy-4", question: "The SI unit of work is:", options: ["Newton", "Joule", "Watt", "Pascal"], correctIndex: 1, explanation: "Work is measured in Joules (J). 1 J = 1 N × 1 m." },
  { id: "q47", chapterId: "phy-4", question: "If speed doubles, KE becomes:", options: ["Double", "Triple", "Four times", "Half"], correctIndex: 2, explanation: "KE ∝ v². Speed doubles → KE = 4 times." },
  { id: "q48", chapterId: "phy-5", question: "Angle of incidence equals angle of:", options: ["Refraction", "Reflection", "Dispersion", "Diffraction"], correctIndex: 1, explanation: "First law of reflection: angle of incidence = angle of reflection." },
  { id: "q49", chapterId: "phy-5", question: "Splitting white light into colours is:", options: ["Reflection", "Refraction", "Dispersion", "Diffraction"], correctIndex: 2, explanation: "Dispersion splits white light into VIBGYOR through a prism." },
  { id: "q50", chapterId: "phy-5", question: "Myopia is corrected by:", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], correctIndex: 1, explanation: "Myopia (short-sightedness) is corrected using a concave (diverging) lens." },
  { id: "q51", chapterId: "phy-6", question: "Heat transfer through direct contact is:", options: ["Convection", "Conduction", "Radiation", "Evaporation"], correctIndex: 1, explanation: "Conduction is heat transfer through a substance by direct contact." },
  { id: "q52", chapterId: "phy-6", question: "Water has maximum density at:", options: ["0°C", "4°C", "100°C", "−4°C"], correctIndex: 1, explanation: "Water shows anomalous expansion — max density at 4°C." },
  { id: "q53", chapterId: "phy-7", question: "Sound cannot travel through:", options: ["Solids", "Liquids", "Gases", "Vacuum"], correctIndex: 3, explanation: "Sound needs a medium — it cannot travel through a vacuum." },
  { id: "q54", chapterId: "phy-7", question: "Sound travels fastest in:", options: ["Air", "Water", "Steel", "Vacuum"], correctIndex: 2, explanation: "Sound travels fastest in solids (~5000 m/s in steel)." },
  { id: "q55", chapterId: "phy-8", question: "Like charges:", options: ["Attract", "Repel", "Have no effect", "Cancel out"], correctIndex: 1, explanation: "Like charges repel each other; unlike charges attract." },
  { id: "q56", chapterId: "phy-8", question: "A gold-leaf electroscope detects:", options: ["Current", "Voltage", "Electric charge", "Resistance"], correctIndex: 2, explanation: "An electroscope detects the presence of electric charge." },
  { id: "q57", chapterId: "phy-9", question: "Ohm's Law states V =", options: ["I × R", "I / R", "I + R", "R / I"], correctIndex: 0, explanation: "Ohm's Law: V = IR." },
  { id: "q58", chapterId: "phy-9", question: "In series circuit, total resistance is:", options: ["Sum of all", "Less than smallest", "Product of all", "Average"], correctIndex: 0, explanation: "Series: R_total = R₁ + R₂ + R₃." },

  // ===== MATHEMATICS =====
  { id: "q59", chapterId: "math-1", question: "A rational number is expressed as:", options: ["p/q where q ≠ 0", "p × q", "p + q", "√p"], correctIndex: 0, explanation: "Rational number = p/q where p, q are integers and q ≠ 0." },
  { id: "q60", chapterId: "math-2", question: "2⁰ equals:", options: ["0", "1", "2", "Undefined"], correctIndex: 1, explanation: "Any non-zero number to the power 0 equals 1." },
  { id: "q61", chapterId: "math-2", question: "a⁻² equals:", options: ["−a²", "1/a²", "a/2", "2a"], correctIndex: 1, explanation: "Negative exponent: a⁻ⁿ = 1/aⁿ. So a⁻² = 1/a²." },
  { id: "q62", chapterId: "math-3", question: "√144 equals:", options: ["11", "12", "13", "14"], correctIndex: 1, explanation: "12 × 12 = 144, so √144 = 12." },
  { id: "q63", chapterId: "math-4", question: "∛729 equals:", options: ["7", "8", "9", "27"], correctIndex: 2, explanation: "9 × 9 × 9 = 729, so ∛729 = 9." },
  { id: "q64", chapterId: "math-6", question: "If A={1,2,3} and B={2,3,4}, then A∩B =", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1}"], correctIndex: 1, explanation: "Intersection (A∩B) = elements common to both = {2,3}." },
  { id: "q65", chapterId: "math-7", question: "If CP=₹500 and SP=₹600, profit% is:", options: ["10%", "15%", "20%", "25%"], correctIndex: 2, explanation: "Profit = 100. Profit% = (100/500)×100 = 20%." },
  { id: "q66", chapterId: "math-8", question: "CI formula: A =", options: ["P(1+R/100)ⁿ", "PRT/100", "P+R+T", "P×R×T"], correctIndex: 0, explanation: "Compound Interest: Amount A = P(1 + R/100)ⁿ." },
  { id: "q67", chapterId: "math-11", question: "(a + b)² equals:", options: ["a² + b²", "a² + 2ab + b²", "a² − 2ab + b²", "2a² + 2b²"], correctIndex: 1, explanation: "(a + b)² = a² + 2ab + b²." },
  { id: "q68", chapterId: "math-12", question: "x² − 25 factorizes to:", options: ["(x+5)²", "(x−5)²", "(x+5)(x−5)", "x(x−25)"], correctIndex: 2, explanation: "Using a²−b² = (a+b)(a−b): x²−25 = (x+5)(x−5)." },
  { id: "q69", chapterId: "math-15", question: "Sum of angles in a quadrilateral:", options: ["180°", "270°", "360°", "540°"], correctIndex: 2, explanation: "The angle sum property: sum of interior angles = 360°." },
  { id: "q70", chapterId: "math-16", question: "Euler's formula: F + V − E =", options: ["0", "1", "2", "3"], correctIndex: 2, explanation: "Euler's formula for polyhedra: Faces + Vertices − Edges = 2." },
  { id: "q71", chapterId: "math-19", question: "Area of trapezium with parallel sides a,b and height h:", options: ["(a+b)h", "½(a+b)h", "a×b×h", "½abh"], correctIndex: 1, explanation: "Area of trapezium = ½(a+b) × h." },
  { id: "q72", chapterId: "math-20", question: "Probability of getting a 6 on a fair die:", options: ["1/2", "1/3", "1/6", "1/4"], correctIndex: 2, explanation: "P(6) = 1 favourable outcome / 6 total outcomes = 1/6." },

  // ===== GEOGRAPHY =====
  { id: "q73", chapterId: "geo-1", question: "Closely spaced contours indicate:", options: ["Gentle slope", "Steep slope", "Flat land", "Valley"], correctIndex: 1, explanation: "Close contour lines = steep slope. Wide = gentle slope." },
  { id: "q74", chapterId: "geo-2", question: "In a grid reference, you read first:", options: ["Northings", "Eastings", "Altitude", "Latitude"], correctIndex: 1, explanation: "Read Eastings first (horizontal), then Northings (vertical)." },
  { id: "q75", chapterId: "geo-3", question: "Weather occurs in the:", options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"], correctIndex: 1, explanation: "The troposphere (0-12 km) is where all weather occurs." },
  { id: "q76", chapterId: "geo-3", question: "Lines of equal temperature are:", options: ["Isobars", "Isotherms", "Contours", "Isohyets"], correctIndex: 1, explanation: "Isotherms join places with the same temperature." },
  { id: "q77", chapterId: "geo-4", question: "The most fertile soil in India is:", options: ["Red soil", "Laterite soil", "Alluvial soil", "Black soil"], correctIndex: 2, explanation: "Alluvial soil is the most widespread and fertile, found in river plains." },
  { id: "q78", chapterId: "geo-5", question: "Forests that shed leaves seasonally are:", options: ["Evergreen", "Deciduous", "Mangrove", "Alpine"], correctIndex: 1, explanation: "Deciduous (monsoon) forests shed leaves during the dry season." },
  { id: "q79", chapterId: "geo-7", question: "Which is a non-renewable resource?", options: ["Solar energy", "Wind", "Coal", "Biomass"], correctIndex: 2, explanation: "Coal is a fossil fuel formed over millions of years — non-renewable." },
  { id: "q80", chapterId: "geo-8", question: "The highest Himalayan range is:", options: ["Shiwaliks", "Himachal", "Himadri", "Trans-Himalayas"], correctIndex: 2, explanation: "Himadri (Greater Himalayas) is the highest and most continuous range." },
  { id: "q81", chapterId: "geo-9", question: "Rice is a:", options: ["Rabi crop", "Kharif crop", "Zaid crop", "Cash crop"], correctIndex: 1, explanation: "Rice is a Kharif (monsoon) crop, sown in June-July." },
  { id: "q82", chapterId: "geo-10", question: "The 'Silicon Valley of India' is:", options: ["Mumbai", "Delhi", "Bengaluru", "Chennai"], correctIndex: 2, explanation: "Bengaluru is India's IT hub, contributing ~40% of IT exports." },

  // ===== HISTORY =====
  { id: "q83", chapterId: "hist-1", question: "The Industrial Revolution began in:", options: ["France", "Germany", "England", "America"], correctIndex: 2, explanation: "The Industrial Revolution began in England in the mid-18th century." },
  { id: "q84", chapterId: "hist-2", question: "The French Revolution began in:", options: ["1776", "1789", "1804", "1857"], correctIndex: 1, explanation: "The French Revolution began in 1789 with the storming of the Bastille." },
  { id: "q85", chapterId: "hist-2", question: "American Declaration of Independence was in:", options: ["1776", "1789", "1861", "1947"], correctIndex: 0, explanation: "The Declaration of Independence was on 4 July 1776." },
  { id: "q86", chapterId: "hist-4", question: "The Battle of Plassey was fought in:", options: ["1757", "1764", "1857", "1947"], correctIndex: 0, explanation: "Battle of Plassey (1757): Clive defeated Siraj-ud-Daulah." },
  { id: "q87", chapterId: "hist-5", question: "The 'Drain of Wealth' theory was given by:", options: ["Gandhi", "Nehru", "Dadabhai Naoroji", "Tilak"], correctIndex: 2, explanation: "Dadabhai Naoroji proposed that British policies drained India's wealth." },
  { id: "q88", chapterId: "hist-6", question: "The Revolt of 1857 is also called:", options: ["Quit India", "First War of Independence", "Salt March", "Swadeshi Movement"], correctIndex: 1, explanation: "The 1857 revolt is often called the First War of Indian Independence." },
  { id: "q89", chapterId: "hist-7", question: "Brahmo Samaj was founded by:", options: ["Vivekananda", "Dayanand Saraswati", "Raja Ram Mohan Roy", "Jyotiba Phule"], correctIndex: 2, explanation: "Raja Ram Mohan Roy founded Brahmo Samaj in 1828." },
  { id: "q90", chapterId: "hist-8", question: "The Salt March was in:", options: ["1920", "1930", "1942", "1947"], correctIndex: 1, explanation: "Gandhi's Salt March (Dandi March) took place in 1930." },
  { id: "q91", chapterId: "hist-9", question: "Who presides over Lok Sabha?", options: ["President", "Vice-President", "Speaker", "Prime Minister"], correctIndex: 2, explanation: "The Speaker is the presiding officer of the Lok Sabha." },
  { id: "q92", chapterId: "hist-10", question: "The President is elected by:", options: ["People directly", "Lok Sabha only", "Electoral College", "Rajya Sabha only"], correctIndex: 2, explanation: "The President is elected by an Electoral College of MPs and MLAs." },
  { id: "q93", chapterId: "hist-11", question: "The power to declare laws unconstitutional is:", options: ["Executive Review", "Judicial Review", "Legislative Review", "Presidential Review"], correctIndex: 1, explanation: "Judicial Review is the court's power to examine constitutionality of laws." },
  { id: "q94", chapterId: "hist-12", question: "How many permanent Security Council members?", options: ["3", "5", "10", "15"], correctIndex: 1, explanation: "5 permanent members: US, UK, France, Russia, China — each has veto power." },

  // ===== COMPUTER =====
  { id: "q95", chapterId: "comp-1", question: "Binary number system has base:", options: ["2", "8", "10", "16"], correctIndex: 0, explanation: "Binary is base-2, using only digits 0 and 1." },
  { id: "q96", chapterId: "comp-1", question: "13 in binary is:", options: ["1101", "1011", "1110", "1001"], correctIndex: 0, explanation: "13 = 8+4+1 = 1101 in binary." },
  { id: "q97", chapterId: "comp-2", question: "HTML stands for:", options: ["Hyper Text Makeup Language", "HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], correctIndex: 1, explanation: "HTML = HyperText Markup Language." },
  { id: "q98", chapterId: "comp-3", question: "print() in Python is used to:", options: ["Input data", "Display output", "Store data", "Delete data"], correctIndex: 1, explanation: "print() displays output on the screen." },
  { id: "q99", chapterId: "comp-3", question: "Which stores decimal numbers?", options: ["int", "str", "float", "bool"], correctIndex: 2, explanation: "float stores decimal (floating-point) numbers." },
  { id: "q100", chapterId: "comp-4", question: "Which checks multiple conditions in Python?", options: ["if-else", "elif", "for", "while"], correctIndex: 1, explanation: "elif (else if) checks multiple conditions in sequence." },
  { id: "q101", chapterId: "comp-5", question: "range(1, 10, 2) generates:", options: ["1,2,3...10", "1,3,5,7,9", "2,4,6,8,10", "1,10,2"], correctIndex: 1, explanation: "range(1,10,2) generates 1, 3, 5, 7, 9 (start=1, stop=10, step=2)." },
  { id: "q102", chapterId: "comp-5", question: "'break' in a loop:", options: ["Pauses loop", "Exits loop", "Skips iteration", "Restarts loop"], correctIndex: 1, explanation: "break exits the loop immediately." },
  { id: "q103", chapterId: "comp-6", question: "fruits = ['a','b','c']; fruits[-1] gives:", options: ["'a'", "'b'", "'c'", "Error"], correctIndex: 2, explanation: "Negative indexing: -1 refers to the last element." },
  { id: "q104", chapterId: "comp-7", question: "Phishing is:", options: ["A computer virus", "Fraudulent info stealing", "A programming language", "A search engine"], correctIndex: 1, explanation: "Phishing uses fake emails/websites to steal personal information." },
  { id: "q105", chapterId: "comp-8", question: "AI stands for:", options: ["Auto Intelligence", "Artificial Intelligence", "Automated Information", "Applied Intelligence"], correctIndex: 1, explanation: "AI = Artificial Intelligence — machines simulating human intelligence." },
  { id: "q106", chapterId: "comp-8", question: "Supervised learning uses:", options: ["Unlabelled data", "Labelled data", "No data", "Random data"], correctIndex: 1, explanation: "Supervised learning uses labelled training data." },
];

export function getQuestionsForChapter(chapterId: string) {
  return quizQuestions.filter((q) => q.chapterId === chapterId);
}
