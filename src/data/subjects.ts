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
    book: "A Textbook of Biology for ICSE",
    publisher: "Brothers Education",
    icon: Leaf,
    colorClass: "text-biology",
    badgeClass: "subject-biology",
    description: "Explore the living world — from plant transport to human body systems.",
    chapters: [
      { id: "bio-1", number: 1, title: "Transport of Nutrients in Plants", description: "Diffusion, osmosis, transpiration, xylem and phloem transport, and mineral nutrition.", keyTopics: ["Diffusion", "Osmosis", "Transpiration", "Xylem & Phloem", "Macro & Micro-nutrients"], estimatedTime: "50 min" },
      { id: "bio-2", number: 2, title: "Reproduction in Plants and Animals", description: "Asexual & sexual reproduction in plants, pollination, fertilization, and human reproductive system.", keyTopics: ["Binary Fission", "Budding", "Pollination", "Fertilization", "Human Reproduction"], estimatedTime: "55 min" },
      { id: "bio-3", number: 3, title: "Our Ecosystem", description: "Ecosystem components, food chains, food webs, energy flow, and ecological balance.", keyTopics: ["Biotic & Abiotic Factors", "Food Chains", "Food Webs", "Energy Flow", "Ecological Balance"], estimatedTime: "45 min" },
      { id: "bio-4", number: 4, title: "The Endocrine System", description: "Endocrine glands, hormones, and their role in growth, metabolism, and regulation.", keyTopics: ["Pituitary Gland", "Thyroid Gland", "Adrenal Glands", "Pancreas & Insulin", "Hormonal Disorders"], estimatedTime: "45 min" },
      { id: "bio-5", number: 5, title: "The Circulatory System", description: "Heart structure, blood vessels, blood composition, double circulation, and lymphatic system.", keyTopics: ["Heart Chambers", "Arteries & Veins", "Blood Groups", "Double Circulation", "Lymphatic System"], estimatedTime: "55 min" },
      { id: "bio-6", number: 6, title: "The Nervous System", description: "Neurons, brain structure, spinal cord, reflex actions, and sense organs.", keyTopics: ["Neuron Structure", "Brain Parts", "Reflex Arc", "Spinal Cord", "Sense Organs"], estimatedTime: "50 min" },
      { id: "bio-7", number: 7, title: "Health and Hygiene", description: "Communicable and non-communicable diseases, immunity, vaccination, and personal hygiene.", keyTopics: ["Communicable Diseases", "Immunity", "Vaccination", "Personal Hygiene", "First Aid"], estimatedTime: "40 min" },
      { id: "bio-8", number: 8, title: "Food Production", description: "Agriculture practices, animal husbandry, crop improvement, and food preservation.", keyTopics: ["Crop Improvement", "Animal Husbandry", "Irrigation", "Food Preservation", "Organic Farming"], estimatedTime: "40 min" },
    ],
  },
  {
    key: "chemistry",
    name: "Chemistry",
    book: "A Textbook of Chemistry for ICSE",
    publisher: "Brothers Education",
    icon: FlaskConical,
    colorClass: "text-chemistry",
    badgeClass: "subject-chemistry",
    description: "Understand matter, atoms, reactions, and the building blocks of the universe.",
    chapters: [
      { id: "chem-1", number: 1, title: "Kinetic Molecular Theory of Matter", description: "States of matter, kinetic theory, interconversion, and properties of solids, liquids, and gases.", keyTopics: ["Kinetic Theory", "States of Matter", "Interconversion", "Diffusion", "Brownian Motion"], estimatedTime: "45 min" },
      { id: "chem-2", number: 2, title: "Physical and Chemical Changes", description: "Differences between physical and chemical changes, types of reactions, and examples.", keyTopics: ["Physical Changes", "Chemical Changes", "Reversible Changes", "Energy Changes", "Examples"], estimatedTime: "40 min" },
      { id: "chem-3", number: 3, title: "Elements, Compounds and Mixtures", description: "Classification of matter, elements, compounds, mixtures, and separation techniques.", keyTopics: ["Elements", "Compounds", "Homogeneous Mixtures", "Heterogeneous Mixtures", "Separation Techniques"], estimatedTime: "45 min" },
      { id: "chem-4", number: 4, title: "Atomic Structure", description: "Atomic models, subatomic particles, electronic configuration, atomic number, and mass number.", keyTopics: ["Dalton's Model", "Thomson's Model", "Rutherford's Model", "Bohr's Model", "Electronic Configuration"], estimatedTime: "50 min" },
      { id: "chem-5", number: 5, title: "Language of Chemistry", description: "Chemical symbols, formulae, valency, and writing balanced chemical equations.", keyTopics: ["Chemical Symbols", "Valency", "Chemical Formulae", "Molecular Formulae", "Balanced Equations"], estimatedTime: "45 min" },
      { id: "chem-6", number: 6, title: "Chemical Reactions", description: "Types of chemical reactions — combination, decomposition, displacement, and double displacement.", keyTopics: ["Combination", "Decomposition", "Single Displacement", "Double Displacement", "Redox Reactions"], estimatedTime: "50 min" },
      { id: "chem-7", number: 7, title: "Hydrogen", description: "Preparation, properties, and uses of hydrogen. Isotopes of hydrogen.", keyTopics: ["Preparation of Hydrogen", "Properties", "Uses of Hydrogen", "Isotopes", "Water Gas"], estimatedTime: "40 min" },
      { id: "chem-8", number: 8, title: "Water", description: "Composition of water, hard and soft water, water treatment, and water pollution.", keyTopics: ["Composition", "Hard & Soft Water", "Water Treatment", "Water Pollution", "Water Cycle"], estimatedTime: "40 min" },
      { id: "chem-9", number: 9, title: "Carbon and Its Compounds", description: "Allotropes of carbon, properties, hydrocarbons, and importance of carbon compounds.", keyTopics: ["Diamond", "Graphite", "Fullerenes", "Hydrocarbons", "Carbon Compounds"], estimatedTime: "50 min" },
    ],
  },
  {
    key: "physics",
    name: "Physics",
    book: "A Textbook of Physics for ICSE",
    publisher: "Brothers Education",
    icon: Atom,
    colorClass: "text-physics",
    badgeClass: "subject-physics",
    description: "Discover the laws governing force, energy, light, sound, and electricity.",
    chapters: [
      { id: "phy-1", number: 1, title: "Kinetic Molecular Theory of Matter", description: "Molecular arrangement in solids, liquids, and gases, and the kinetic theory.", keyTopics: ["Molecular Motion", "States of Matter", "Kinetic Energy", "Temperature", "Gas Laws"], estimatedTime: "40 min" },
      { id: "phy-2", number: 2, title: "Measurement of Volume and Density", description: "Measuring volume of regular and irregular objects, density, and relative density.", keyTopics: ["Volume", "Density", "Relative Density", "Measuring Cylinder", "Archimedes' Principle"], estimatedTime: "40 min" },
      { id: "phy-3", number: 3, title: "Force and Pressure", description: "Types of forces, pressure in solids and fluids, atmospheric pressure, and Pascal's law.", keyTopics: ["Contact Forces", "Non-Contact Forces", "Pressure", "Pascal's Law", "Atmospheric Pressure"], estimatedTime: "50 min" },
      { id: "phy-4", number: 4, title: "Work, Energy, Power", description: "Work done by a force, forms of energy, conservation of energy, and power.", keyTopics: ["Work", "Kinetic Energy", "Potential Energy", "Conservation of Energy", "Power"], estimatedTime: "50 min" },
      { id: "phy-5", number: 5, title: "Light", description: "Reflection, refraction, lenses, dispersion, and the human eye.", keyTopics: ["Reflection", "Refraction", "Lenses", "Dispersion", "Human Eye"], estimatedTime: "55 min" },
      { id: "phy-6", number: 6, title: "Heat Transfer and Thermal Expansion", description: "Conduction, convection, radiation, thermal expansion of solids, liquids, and gases.", keyTopics: ["Conduction", "Convection", "Radiation", "Linear Expansion", "Anomalous Expansion of Water"], estimatedTime: "50 min" },
      { id: "phy-7", number: 7, title: "Sound", description: "Production, propagation, characteristics of sound, echo, and noise pollution.", keyTopics: ["Vibrations", "Frequency", "Amplitude", "Echo", "Noise Pollution"], estimatedTime: "45 min" },
      { id: "phy-8", number: 8, title: "Static Electricity", description: "Electric charges, methods of charging, electroscope, and lightning.", keyTopics: ["Electric Charges", "Charging Methods", "Electroscope", "Lightning", "Conductors & Insulators"], estimatedTime: "45 min" },
      { id: "phy-9", number: 9, title: "Current Electricity", description: "Electric current, circuits, Ohm's law, series and parallel circuits, and electrical safety.", keyTopics: ["Current", "Voltage", "Resistance", "Ohm's Law", "Series & Parallel Circuits"], estimatedTime: "55 min" },
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
    description: "Master numbers, algebra, geometry, mensuration, and data handling.",
    chapters: [
      { id: "math-1", number: 1, title: "Rational Numbers", description: "Properties of rational numbers, operations, representation on number line, and word problems.", keyTopics: ["Closure", "Commutativity", "Associativity", "Distributive Property", "Number Line"], estimatedTime: "45 min" },
      { id: "math-2", number: 2, title: "Exponents and Powers", description: "Laws of exponents, negative exponents, standard form, and very large/small numbers.", keyTopics: ["Laws of Exponents", "Negative Exponents", "Standard Form", "Comparison"], estimatedTime: "40 min" },
      { id: "math-3", number: 3, title: "Squares and Square Roots", description: "Perfect squares, properties, finding square roots by prime factorization and long division.", keyTopics: ["Perfect Squares", "Prime Factorization", "Long Division Method", "Estimation"], estimatedTime: "45 min" },
      { id: "math-4", number: 4, title: "Cubes and Cube Roots", description: "Perfect cubes, cube roots by prime factorization, and applications.", keyTopics: ["Perfect Cubes", "Prime Factorization", "Cube Root", "Hardy-Ramanujan Numbers"], estimatedTime: "35 min" },
      { id: "math-5", number: 5, title: "Playing with Numbers", description: "Generalized form of numbers, divisibility tests, and number puzzles.", keyTopics: ["Generalized Form", "Divisibility Rules", "Number Puzzles", "Cryptarithmetic"], estimatedTime: "35 min" },
      { id: "math-6", number: 6, title: "Sets", description: "Union, intersection, complement of sets, disjoint sets, and Venn diagrams.", keyTopics: ["Union", "Intersection", "Complement", "Disjoint Sets", "Venn Diagrams"], estimatedTime: "40 min" },
      { id: "math-7", number: 7, title: "Percentage, Profit and Loss", description: "Applications of percentages, profit & loss, discount, tax, and overhead expenses.", keyTopics: ["Percentage", "Profit & Loss", "Discount", "Tax", "Overhead Expenses"], estimatedTime: "45 min" },
      { id: "math-8", number: 8, title: "Compound Interest", description: "Simple vs compound interest, formula, half-yearly compounding, and applications.", keyTopics: ["Simple Interest", "Compound Interest", "Formula", "Half-Yearly", "Applications"], estimatedTime: "45 min" },
      { id: "math-9", number: 9, title: "Direct and Inverse Variations", description: "Direct proportion, inverse proportion, and word problems.", keyTopics: ["Direct Variation", "Inverse Variation", "Unitary Method", "Word Problems"], estimatedTime: "35 min" },
      { id: "math-10", number: 10, title: "Time and Work", description: "Time and work problems, pipes and cisterns, and work efficiency.", keyTopics: ["Time & Work", "Pipes & Cisterns", "Combined Work", "Efficiency"], estimatedTime: "40 min" },
      { id: "math-11", number: 11, title: "Algebraic Expressions and Identities", description: "Multiplication and division of algebraic expressions, standard identities.", keyTopics: ["Monomials", "Polynomials", "Identities", "(a+b)²", "(a-b)²", "a²-b²"], estimatedTime: "50 min" },
      { id: "math-12", number: 12, title: "Factorization", description: "Common factors, regrouping, identities-based factorization, and division.", keyTopics: ["Common Factors", "Regrouping", "Using Identities", "Division of Polynomials"], estimatedTime: "45 min" },
      { id: "math-13", number: 13, title: "Linear Equations in One Variable", description: "Solving linear equations, transposing, cross multiplication, and word problems.", keyTopics: ["Solving Equations", "Transposing", "Cross Multiplication", "Word Problems"], estimatedTime: "45 min" },
      { id: "math-14", number: 14, title: "Inequalities", description: "Properties of inequalities, solving linear inequalities, and graphical representation.", keyTopics: ["Properties", "Solving Inequalities", "Number Line", "Graphical Representation"], estimatedTime: "35 min" },
      { id: "math-15", number: 15, title: "Understanding Quadrilaterals", description: "Properties of quadrilaterals, angle sum property, parallelogram, rhombus, rectangle.", keyTopics: ["Angle Sum Property", "Parallelogram", "Rhombus", "Rectangle", "Trapezium"], estimatedTime: "50 min" },
      { id: "math-16", number: 16, title: "Representing 3-D in 2-D", description: "Drawing 3-D shapes in 2-D, Euler's relation, faces, edges, and vertices.", keyTopics: ["3-D Shapes", "Euler's Formula", "Nets", "Views", "Cross Sections"], estimatedTime: "35 min" },
      { id: "math-17", number: 17, title: "Construction of Quadrilaterals", description: "Constructing quadrilaterals with given measurements — sides, diagonals, and angles.", keyTopics: ["Four Sides One Diagonal", "Three Sides Two Diagonals", "Three Sides Two Angles", "Special Cases"], estimatedTime: "45 min" },
      { id: "math-18", number: 18, title: "Circle", description: "Circle, arc, chord, sector, segment, and properties.", keyTopics: ["Radius & Diameter", "Arc", "Chord", "Sector", "Segment"], estimatedTime: "35 min" },
      { id: "math-19", number: 19, title: "Mensuration", description: "Area of trapezium, polygon, semicircle. Surface area and volume of cube, cuboid, cylinder.", keyTopics: ["Area of Trapezium", "Surface Area", "Volume", "Cylinder", "Cuboid"], estimatedTime: "55 min" },
      { id: "math-20", number: 20, title: "Data Handling", description: "Organising data, bar graphs, pie charts, histogram, and probability.", keyTopics: ["Grouped Data", "Bar Graphs", "Pie Charts", "Histogram", "Probability"], estimatedTime: "45 min" },
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
    description: "Journey through modern history and understand India's governance.",
    chapters: [
      { id: "hist-1", number: 1, title: "A Period of Transition", description: "Renaissance, Reformation, voyages of discovery, the Industrial Revolution, and Imperialism.", keyTopics: ["Renaissance", "Reformation", "Industrial Revolution", "Imperialism", "Major Inventions"], estimatedTime: "50 min" },
      { id: "hist-2", number: 2, title: "The Growth of Nationalism", description: "The French Revolution, American War of Independence, and American Civil War.", keyTopics: ["French Revolution", "American Independence", "American Civil War", "Abraham Lincoln", "Nationalism"], estimatedTime: "55 min" },
      { id: "hist-3", number: 3, title: "India in the 18th Century", description: "Decline of the Mughal Empire and the rise of regional kingdoms.", keyTopics: ["Mughal Decline", "Hyderabad", "Awadh", "Bengal", "Marathas", "Sikhs", "Mysore"], estimatedTime: "45 min" },
      { id: "hist-4", number: 4, title: "Traders to Rulers", description: "The English East India Company, Battle of Plassey, Buxar, Dual Government, and British expansion.", keyTopics: ["East India Company", "Battle of Plassey", "Battle of Buxar", "Dual Government", "Doctrine of Lapse"], estimatedTime: "50 min" },
      { id: "hist-5", number: 5, title: "British Policies and Impacts", description: "Land revenue systems, exploitation of artisans, drain of wealth, and modern education.", keyTopics: ["Permanent Settlement", "Mahalwari", "Ryotwari", "Drain of Wealth", "Wood's Despatch"], estimatedTime: "45 min" },
      { id: "hist-6", number: 6, title: "The Great Uprising of 1857", description: "Causes, leaders, centres of revolt, consequences, and the nature of the uprising.", keyTopics: ["Political Causes", "Military Causes", "Mangal Pandey", "Rani Lakshmibai", "Consequences"], estimatedTime: "50 min" },
      { id: "hist-7", number: 7, title: "Socio-Religious Reforms", description: "Social reformers — Raja Ram Mohan Roy, Ishwar Chand Vidyasagar, Dayanand Saraswati, and more.", keyTopics: ["Raja Ram Mohan Roy", "Vidyasagar", "Dayanand Saraswati", "Vivekananda", "Jyotiba Phule"], estimatedTime: "45 min" },
      { id: "hist-8", number: 8, title: "India's Struggle for Freedom", description: "Rise of nationalism, INC, Moderates, Extremists, Gandhian era, and independence.", keyTopics: ["Indian National Congress", "Moderates & Extremists", "Non-Cooperation", "Civil Disobedience", "Quit India"], estimatedTime: "60 min" },
      { id: "hist-9", number: 9, title: "The Union Legislature", description: "Parliament — Lok Sabha and Rajya Sabha: composition, powers, and functions.", keyTopics: ["Lok Sabha", "Rajya Sabha", "Speaker", "Law Making", "Sessions"], estimatedTime: "45 min" },
      { id: "hist-10", number: 10, title: "The Union Executive", description: "The President, Vice-President, Prime Minister, and Council of Ministers.", keyTopics: ["President", "Vice-President", "Prime Minister", "Council of Ministers", "Election"], estimatedTime: "45 min" },
      { id: "hist-11", number: 11, title: "The Judiciary", description: "Supreme Court, High Court — composition, jurisdiction, judicial review, and writs.", keyTopics: ["Supreme Court", "High Court", "Judicial Review", "Writs", "Independence of Judiciary"], estimatedTime: "45 min" },
      { id: "hist-12", number: 12, title: "The United Nations", description: "Aims, principles, General Assembly, Security Council, ICJ, and UN agencies.", keyTopics: ["General Assembly", "Security Council", "ICJ", "UNESCO", "UNICEF", "WHO"], estimatedTime: "40 min" },
    ],
  },
  {
    key: "geography",
    name: "Geography",
    book: "A Textbook of Geography",
    publisher: "Goyal Brothers Prakashan",
    icon: Globe2,
    colorClass: "text-geography",
    badgeClass: "subject-geography",
    description: "Explore map reading, climate, resources, and India's geography.",
    chapters: [
      { id: "geo-1", number: 1, title: "Representation of Geographical Features", description: "Contour maps, colours and symbols on maps, and cross-sections.", keyTopics: ["Contour Lines", "Contour Interval", "Map Symbols", "Cross Sections", "Relief Features"], estimatedTime: "45 min" },
      { id: "geo-2", number: 2, title: "Maps and Map Reading", description: "Types of maps, scale, direction, grid references, and conventional signs.", keyTopics: ["Types of Maps", "Scale", "Direction", "Grid References", "Conventional Signs"], estimatedTime: "40 min" },
      { id: "geo-3", number: 3, title: "Weather and Climate", description: "Atmosphere, elements of weather, temperature, pressure, winds, rainfall, and climate zones.", keyTopics: ["Atmosphere Layers", "Temperature", "Pressure Belts", "Wind Systems", "Rainfall Types"], estimatedTime: "50 min" },
      { id: "geo-4", number: 4, title: "Soils", description: "Soil formation, soil profile, types of soil in India, and soil conservation.", keyTopics: ["Soil Formation", "Soil Profile", "Alluvial Soil", "Black Soil", "Soil Erosion"], estimatedTime: "40 min" },
      { id: "geo-5", number: 5, title: "Natural Vegetation", description: "Types of forests in India, importance of forests, and conservation.", keyTopics: ["Tropical Evergreen", "Deciduous Forests", "Tidal Forests", "Mountain Forests", "Conservation"], estimatedTime: "40 min" },
      { id: "geo-6", number: 6, title: "Water Resources", description: "Sources of water, water cycle, irrigation methods, and water conservation.", keyTopics: ["Water Cycle", "Ground Water", "Irrigation", "Dams", "Water Conservation"], estimatedTime: "40 min" },
      { id: "geo-7", number: 7, title: "Mineral and Energy Resources", description: "Types of minerals, distribution in India, conventional and non-conventional energy sources.", keyTopics: ["Metallic Minerals", "Non-Metallic Minerals", "Coal", "Petroleum", "Renewable Energy"], estimatedTime: "45 min" },
      { id: "geo-8", number: 8, title: "India: Geographical Features", description: "Physical divisions of India — Northern Mountains, Plains, Plateaus, Coastal Plains, Islands.", keyTopics: ["Himalayas", "Northern Plains", "Peninsular Plateau", "Coastal Plains", "Islands"], estimatedTime: "50 min" },
      { id: "geo-9", number: 9, title: "Agriculture in India", description: "Types of farming, major food and cash crops, and agricultural challenges.", keyTopics: ["Subsistence Farming", "Commercial Farming", "Rice & Wheat", "Tea & Cotton", "Green Revolution"], estimatedTime: "45 min" },
      { id: "geo-10", number: 10, title: "Industries in India", description: "Types of industries, major industries of India, and industrial development.", keyTopics: ["Iron & Steel", "Cotton Textile", "IT Industry", "Industrial Regions", "Industrial Pollution"], estimatedTime: "45 min" },
    ],
  },
  {
    key: "computer",
    name: "Computer Studies",
    book: "Cambridge Connection Computer Studies",
    publisher: "Vaishali Sharma",
    icon: Monitor,
    colorClass: "text-computer",
    badgeClass: "subject-computer",
    description: "Learn programming, web development, AI, and cyber safety.",
    chapters: [
      { id: "comp-1", number: 1, title: "Number Systems", description: "Binary, decimal, octal, hexadecimal number systems and interconversions.", keyTopics: ["Binary", "Decimal", "Octal", "Hexadecimal", "Conversion Methods"], estimatedTime: "45 min" },
      { id: "comp-2", number: 2, title: "HTML and Web Development", description: "HTML tags, web page structure, tables, forms, and basic CSS styling.", keyTopics: ["HTML Tags", "Attributes", "Tables", "Forms", "CSS Basics"], estimatedTime: "50 min" },
      { id: "comp-3", number: 3, title: "Introduction to Python", description: "Python basics, variables, data types, input/output, and operators.", keyTopics: ["Variables", "Data Types", "Input/Output", "Operators", "Comments"], estimatedTime: "50 min" },
      { id: "comp-4", number: 4, title: "Conditional Statements in Python", description: "if, if-else, elif, nested conditions, and logical operators.", keyTopics: ["if Statement", "if-else", "elif", "Logical Operators", "Nested Conditions"], estimatedTime: "45 min" },
      { id: "comp-5", number: 5, title: "Loops in Python", description: "for loops, while loops, range function, break, continue, and nested loops.", keyTopics: ["for Loop", "while Loop", "range()", "break & continue", "Nested Loops"], estimatedTime: "50 min" },
      { id: "comp-6", number: 6, title: "Lists in Python", description: "Creating lists, list operations, slicing, list methods, and applications.", keyTopics: ["Creating Lists", "Indexing", "Slicing", "List Methods", "List Comprehension"], estimatedTime: "45 min" },
      { id: "comp-7", number: 7, title: "Cyber Safety and Ethics", description: "Internet safety, cyber crimes, digital footprint, data privacy, and netiquette.", keyTopics: ["Cyber Crimes", "Phishing", "Digital Footprint", "Data Privacy", "Netiquette"], estimatedTime: "35 min" },
      { id: "comp-8", number: 8, title: "Artificial Intelligence Basics", description: "Introduction to AI, machine learning concepts, neural networks, and AI applications.", keyTopics: ["What is AI?", "Machine Learning", "Neural Networks", "AI in Daily Life", "Ethics of AI"], estimatedTime: "40 min" },
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
