import {
  Leaf, FlaskConical, Atom, Calculator, Landmark, Globe2, Monitor,
} from "lucide-react";

export type SubjectKey = "biology" | "chemistry" | "physics" | "mathematics" | "history" | "geography" | "computer";

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  keyTopics: string[];
  estimatedTime: string;
}

export interface Subject {
  key: SubjectKey;
  name: string;
  book: string;
  publisher: string;
  icon: typeof Leaf;
  colorClass: string;
  badgeClass: string;
  chapters: Chapter[];
  description: string;
}

export const subjects: Subject[] = [
  {
    key: "biology",
    name: "Biology",
    book: "NEP 2020 Policy",
    publisher: "Brothers Education",
    icon: Leaf,
    colorClass: "text-biology",
    badgeClass: "subject-biology",
    description: "Explore the living world — from cells to ecosystems.",
    chapters: [
      { id: "bio-1", number: 1, title: "Cell — The Unit of Life", description: "Structure and functions of plant and animal cells, cell organelles, and cell division.", keyTopics: ["Cell membrane", "Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Cell Division"], estimatedTime: "45 min" },
      { id: "bio-2", number: 2, title: "Tissues, Organs and Organ Systems", description: "Types of tissues, organ systems and their coordination in the human body.", keyTopics: ["Epithelial Tissue", "Connective Tissue", "Muscular Tissue", "Nervous Tissue"], estimatedTime: "40 min" },
      { id: "bio-3", number: 3, title: "The Circulatory System", description: "Heart structure, blood vessels, blood composition and circulation.", keyTopics: ["Heart Chambers", "Arteries & Veins", "Blood Groups", "Lymphatic System"], estimatedTime: "50 min" },
      { id: "bio-4", number: 4, title: "The Respiratory System", description: "Mechanism of breathing, gaseous exchange and respiratory disorders.", keyTopics: ["Lungs", "Alveoli", "Diaphragm", "Gas Exchange"], estimatedTime: "40 min" },
      { id: "bio-5", number: 5, title: "The Nervous System", description: "Structure of neurons, brain, spinal cord, and reflex actions.", keyTopics: ["Neurons", "Brain Structure", "Reflex Arc", "Sense Organs"], estimatedTime: "50 min" },
      { id: "bio-6", number: 6, title: "The Endocrine System", description: "Hormones, endocrine glands, and their role in body regulation.", keyTopics: ["Pituitary Gland", "Thyroid", "Adrenal Glands", "Insulin"], estimatedTime: "35 min" },
      { id: "bio-7", number: 7, title: "The Reproductive System", description: "Human reproductive organs, puberty and basic genetics.", keyTopics: ["Male Reproductive System", "Female Reproductive System", "Fertilization", "Adolescence"], estimatedTime: "45 min" },
      { id: "bio-8", number: 8, title: "Ecosystems", description: "Food chains, food webs, ecological balance and biodiversity.", keyTopics: ["Producers", "Consumers", "Decomposers", "Food Web", "Biodiversity"], estimatedTime: "40 min" },
      { id: "bio-9", number: 9, title: "Pollution and Conservation", description: "Types of pollution, their effects and conservation methods.", keyTopics: ["Air Pollution", "Water Pollution", "Deforestation", "Conservation"], estimatedTime: "35 min" },
      { id: "bio-10", number: 10, title: "Health and Hygiene", description: "Diseases, immunity, vaccines and healthy living.", keyTopics: ["Communicable Diseases", "Immunity", "Vaccination", "First Aid"], estimatedTime: "40 min" },
    ],
  },
  {
    key: "chemistry",
    name: "Chemistry",
    book: "NEP 2020 Policy",
    publisher: "Brothers Education",
    icon: FlaskConical,
    colorClass: "text-chemistry",
    badgeClass: "subject-chemistry",
    description: "Understand matter, reactions, and the building blocks of the universe.",
    chapters: [
      { id: "chem-1", number: 1, title: "Matter and Its Composition", description: "States of matter, atoms, molecules, and elements.", keyTopics: ["States of Matter", "Atoms", "Molecules", "Elements & Compounds"], estimatedTime: "40 min" },
      { id: "chem-2", number: 2, title: "Structure of the Atom", description: "Atomic models, subatomic particles, electronic configuration.", keyTopics: ["Protons", "Neutrons", "Electrons", "Bohr Model", "Valency"], estimatedTime: "45 min" },
      { id: "chem-3", number: 3, title: "The Periodic Table", description: "History, modern periodic table, groups and periods.", keyTopics: ["Mendeleev's Table", "Modern Periodic Law", "Groups", "Periods", "Trends"], estimatedTime: "40 min" },
      { id: "chem-4", number: 4, title: "Chemical Bonding", description: "Ionic, covalent, and metallic bonding.", keyTopics: ["Ionic Bonds", "Covalent Bonds", "Metallic Bonds", "Electronegativity"], estimatedTime: "45 min" },
      { id: "chem-5", number: 5, title: "Chemical Reactions", description: "Types of reactions, balancing equations, and reaction conditions.", keyTopics: ["Combination", "Decomposition", "Displacement", "Balancing Equations"], estimatedTime: "50 min" },
      { id: "chem-6", number: 6, title: "Acids, Bases and Salts", description: "Properties, pH scale, neutralization, and common examples.", keyTopics: ["pH Scale", "Indicators", "Neutralization", "Common Salts"], estimatedTime: "45 min" },
      { id: "chem-7", number: 7, title: "Metals and Non-Metals", description: "Physical and chemical properties, reactivity series.", keyTopics: ["Properties of Metals", "Reactivity Series", "Corrosion", "Alloys"], estimatedTime: "40 min" },
      { id: "chem-8", number: 8, title: "Carbon and Its Compounds", description: "Allotropes of carbon, hydrocarbons, and organic chemistry basics.", keyTopics: ["Diamond", "Graphite", "Hydrocarbons", "Functional Groups"], estimatedTime: "50 min" },
    ],
  },
  {
    key: "physics",
    name: "Physics",
    book: "NEP 2020 Policy",
    publisher: "Brothers Education",
    icon: Atom,
    colorClass: "text-physics",
    badgeClass: "subject-physics",
    description: "Discover the laws that govern force, energy, light, and sound.",
    chapters: [
      { id: "phy-1", number: 1, title: "Force and Pressure", description: "Types of forces, pressure in fluids, atmospheric pressure.", keyTopics: ["Contact Forces", "Non-Contact Forces", "Pressure", "Pascal's Law"], estimatedTime: "45 min" },
      { id: "phy-2", number: 2, title: "Friction", description: "Types of friction, factors affecting friction, advantages and disadvantages.", keyTopics: ["Static Friction", "Sliding Friction", "Rolling Friction", "Lubrication"], estimatedTime: "35 min" },
      { id: "phy-3", number: 3, title: "Sound", description: "Production, propagation, characteristics, and applications of sound.", keyTopics: ["Vibrations", "Frequency", "Amplitude", "Echo", "Noise Pollution"], estimatedTime: "45 min" },
      { id: "phy-4", number: 4, title: "Light", description: "Reflection, refraction, dispersion, and the human eye.", keyTopics: ["Reflection", "Refraction", "Dispersion", "Lenses", "Human Eye"], estimatedTime: "50 min" },
      { id: "phy-5", number: 5, title: "Heat and Temperature", description: "Heat transfer, thermal expansion, and specific heat capacity.", keyTopics: ["Conduction", "Convection", "Radiation", "Thermal Expansion"], estimatedTime: "45 min" },
      { id: "phy-6", number: 6, title: "Electricity", description: "Electric current, circuits, Ohm's law, and electrical safety.", keyTopics: ["Current", "Voltage", "Resistance", "Ohm's Law", "Series & Parallel"], estimatedTime: "55 min" },
      { id: "phy-7", number: 7, title: "Magnetism", description: "Magnets, magnetic field, electromagnetism.", keyTopics: ["Properties of Magnets", "Magnetic Field Lines", "Electromagnets", "Applications"], estimatedTime: "40 min" },
      { id: "phy-8", number: 8, title: "Energy and Its Forms", description: "Types of energy, conservation, renewable and non-renewable sources.", keyTopics: ["Kinetic Energy", "Potential Energy", "Conservation of Energy", "Renewable Sources"], estimatedTime: "45 min" },
    ],
  },
  {
    key: "mathematics",
    name: "Mathematics",
    book: "Candid Mathematics",
    publisher: "Candid",
    icon: Calculator,
    colorClass: "text-mathematics",
    badgeClass: "subject-mathematics",
    description: "Master numbers, algebra, geometry, and problem-solving.",
    chapters: [
      { id: "math-1", number: 1, title: "Rational Numbers", description: "Properties of rational numbers, operations, and number line representation.", keyTopics: ["Closure Property", "Associative", "Distributive", "Number Line"], estimatedTime: "40 min" },
      { id: "math-2", number: 2, title: "Exponents and Powers", description: "Laws of exponents, standard form, and large number representation.", keyTopics: ["Laws of Exponents", "Negative Exponents", "Standard Form"], estimatedTime: "35 min" },
      { id: "math-3", number: 3, title: "Squares and Square Roots", description: "Perfect squares, finding square roots, estimation methods.", keyTopics: ["Perfect Squares", "Square Root Methods", "Estimation"], estimatedTime: "40 min" },
      { id: "math-4", number: 4, title: "Cubes and Cube Roots", description: "Perfect cubes, cube root methods, and applications.", keyTopics: ["Perfect Cubes", "Prime Factorization", "Cube Roots"], estimatedTime: "35 min" },
      { id: "math-5", number: 5, title: "Algebraic Expressions", description: "Terms, coefficients, like terms, operations on expressions.", keyTopics: ["Monomials", "Polynomials", "Addition", "Multiplication"], estimatedTime: "45 min" },
      { id: "math-6", number: 6, title: "Factorization", description: "Common factors, regrouping, identities-based factorization.", keyTopics: ["Common Factors", "Identities", "Division of Expressions"], estimatedTime: "45 min" },
      { id: "math-7", number: 7, title: "Linear Equations in One Variable", description: "Solving equations, word problems, applications.", keyTopics: ["Solving Equations", "Transposing", "Word Problems"], estimatedTime: "40 min" },
      { id: "math-8", number: 8, title: "Mensuration", description: "Area and perimeter of combined shapes, surface area and volume.", keyTopics: ["Trapezium", "Polygon Areas", "Surface Area", "Volume"], estimatedTime: "50 min" },
      { id: "math-9", number: 9, title: "Data Handling", description: "Organizing data, bar graphs, pie charts, probability.", keyTopics: ["Frequency Distribution", "Bar Graphs", "Pie Charts", "Probability"], estimatedTime: "40 min" },
      { id: "math-10", number: 10, title: "Geometry — Understanding Quadrilaterals", description: "Properties of quadrilaterals, angle sum property, special quadrilaterals.", keyTopics: ["Parallelogram", "Rhombus", "Rectangle", "Trapezium"], estimatedTime: "45 min" },
    ],
  },
  {
    key: "history",
    name: "History & Civics",
    book: "Candid History & Civics",
    publisher: "Candid",
    icon: Landmark,
    colorClass: "text-history",
    badgeClass: "subject-history",
    description: "Journey through time and understand governance.",
    chapters: [
      { id: "hist-1", number: 1, title: "The Modern Period in India", description: "Establishment of European trading companies and British rule in India.", keyTopics: ["East India Company", "Battle of Plassey", "British Expansion"], estimatedTime: "45 min" },
      { id: "hist-2", number: 2, title: "The Revolt of 1857", description: "Causes, events, leaders, and significance of the first war of independence.", keyTopics: ["Causes", "Leaders", "Centers of Revolt", "Aftermath"], estimatedTime: "40 min" },
      { id: "hist-3", number: 3, title: "Nationalist Movement (1885–1919)", description: "Formation of INC, moderates, extremists, and early nationalist activities.", keyTopics: ["Indian National Congress", "Moderates", "Extremists", "Partition of Bengal"], estimatedTime: "45 min" },
      { id: "hist-4", number: 4, title: "Mahatma Gandhi and the National Movement", description: "Gandhi's methods, major movements, and path to independence.", keyTopics: ["Non-Cooperation", "Civil Disobedience", "Quit India", "Salt March"], estimatedTime: "50 min" },
      { id: "hist-5", number: 5, title: "The Indian Constitution", description: "Making of the Constitution, Preamble, Fundamental Rights and Duties.", keyTopics: ["Preamble", "Fundamental Rights", "Directive Principles", "Amendments"], estimatedTime: "45 min" },
      { id: "hist-6", number: 6, title: "The Union Government", description: "Parliament, President, Prime Minister, and legislative process.", keyTopics: ["Lok Sabha", "Rajya Sabha", "President", "Prime Minister"], estimatedTime: "40 min" },
    ],
  },
  {
    key: "geography",
    name: "Geography",
    book: "Geography",
    publisher: "Goyal Brothers Prakashan",
    icon: Globe2,
    colorClass: "text-geography",
    badgeClass: "subject-geography",
    description: "Explore Earth's landscapes, climate, and resources.",
    chapters: [
      { id: "geo-1", number: 1, title: "Resources", description: "Types of resources — natural, human-made, and human resources.", keyTopics: ["Natural Resources", "Conservation", "Sustainable Development"], estimatedTime: "40 min" },
      { id: "geo-2", number: 2, title: "Land, Soil, Water, and Natural Vegetation", description: "Land use, soil types, water resources, and forests.", keyTopics: ["Soil Profile", "Water Cycle", "Forest Types", "Conservation"], estimatedTime: "45 min" },
      { id: "geo-3", number: 3, title: "Agriculture", description: "Types of farming, major crops, and agricultural development.", keyTopics: ["Subsistence Farming", "Commercial Farming", "Food Crops", "Cash Crops"], estimatedTime: "40 min" },
      { id: "geo-4", number: 4, title: "Industries", description: "Types of industries, industrial regions, and development.", keyTopics: ["Primary Industries", "Secondary Industries", "Industrial Regions"], estimatedTime: "40 min" },
      { id: "geo-5", number: 5, title: "Human Resources", description: "Population distribution, density, growth, and composition.", keyTopics: ["Population Density", "Population Growth", "Migration", "Demographics"], estimatedTime: "35 min" },
      { id: "geo-6", number: 6, title: "Climate and Weather", description: "Atmosphere, weather elements, climate zones, and seasons.", keyTopics: ["Temperature", "Pressure", "Winds", "Rainfall", "Climate Zones"], estimatedTime: "45 min" },
    ],
  },
  {
    key: "computer",
    name: "Computer Studies",
    book: "Cambridge Connect",
    publisher: "Sharma",
    icon: Monitor,
    colorClass: "text-computer",
    badgeClass: "subject-computer",
    description: "Learn programming, networking, and digital literacy.",
    chapters: [
      { id: "comp-1", number: 1, title: "Introduction to Programming", description: "Basics of programming, algorithms, and flowcharts.", keyTopics: ["Algorithms", "Flowcharts", "Pseudocode", "Programming Languages"], estimatedTime: "45 min" },
      { id: "comp-2", number: 2, title: "HTML and Web Development", description: "HTML tags, web page structure, and basic styling.", keyTopics: ["HTML Tags", "Attributes", "Links", "Images", "Tables"], estimatedTime: "50 min" },
      { id: "comp-3", number: 3, title: "Introduction to Python", description: "Python basics, variables, data types, and simple programs.", keyTopics: ["Variables", "Data Types", "Input/Output", "Operators"], estimatedTime: "50 min" },
      { id: "comp-4", number: 4, title: "Conditional Statements", description: "If-else statements, nested conditions, and logical operators.", keyTopics: ["if Statement", "if-else", "elif", "Logical Operators"], estimatedTime: "45 min" },
      { id: "comp-5", number: 5, title: "Loops in Python", description: "For loops, while loops, and loop control statements.", keyTopics: ["for Loop", "while Loop", "break", "continue", "Nested Loops"], estimatedTime: "45 min" },
      { id: "comp-6", number: 6, title: "Cyber Safety and Ethics", description: "Internet safety, cyber crimes, digital etiquette, and data protection.", keyTopics: ["Cyber Crimes", "Phishing", "Digital Footprint", "Data Privacy"], estimatedTime: "35 min" },
      { id: "comp-7", number: 7, title: "Artificial Intelligence Basics", description: "Introduction to AI, machine learning concepts, and AI applications.", keyTopics: ["What is AI?", "Machine Learning", "Neural Networks", "AI Applications"], estimatedTime: "40 min" },
    ],
  },
];

export function getSubject(key: string): Subject | undefined {
  return subjects.find((s) => s.key === key);
}

export function getChapter(subjectKey: string, chapterId: string) {
  const subject = getSubject(subjectKey);
  return subject?.chapters.find((c) => c.id === chapterId);
}
