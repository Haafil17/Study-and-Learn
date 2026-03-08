export interface QuizQuestion {
  id: string;
  chapterId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Biology - Circulatory System
  { id: "q1", chapterId: "bio-3", question: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], correctIndex: 2, explanation: "The human heart has 4 chambers: 2 atria (upper) and 2 ventricles (lower)." },
  { id: "q2", chapterId: "bio-3", question: "Which blood vessels carry blood away from the heart?", options: ["Veins", "Arteries", "Capillaries", "Venules"], correctIndex: 1, explanation: "Arteries carry oxygenated blood away from the heart to the body (except pulmonary artery)." },
  { id: "q3", chapterId: "bio-3", question: "What is the largest artery in the human body?", options: ["Pulmonary Artery", "Carotid Artery", "Aorta", "Femoral Artery"], correctIndex: 2, explanation: "The aorta is the largest artery, carrying oxygenated blood from the left ventricle to the entire body." },
  // Biology - Nervous System
  { id: "q4", chapterId: "bio-5", question: "What is the basic unit of the nervous system?", options: ["Nephron", "Neuron", "Nucleotide", "Neutrophil"], correctIndex: 1, explanation: "A neuron (nerve cell) is the basic structural and functional unit of the nervous system." },
  { id: "q5", chapterId: "bio-5", question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], correctIndex: 1, explanation: "The cerebellum coordinates voluntary movements, balance, and posture." },
  // Physics - Force
  { id: "q6", chapterId: "phy-1", question: "Pressure is defined as:", options: ["Force × Area", "Force / Area", "Force + Area", "Force - Area"], correctIndex: 1, explanation: "Pressure = Force / Area. More force on a smaller area means greater pressure." },
  { id: "q7", chapterId: "phy-1", question: "Which law states that pressure applied to a fluid is transmitted equally?", options: ["Newton's Law", "Pascal's Law", "Boyle's Law", "Archimedes' Principle"], correctIndex: 1, explanation: "Pascal's Law states that pressure applied to an enclosed fluid is transmitted equally in all directions." },
  // Physics - Friction
  { id: "q8", chapterId: "phy-2", question: "Which type of friction is the greatest?", options: ["Rolling", "Sliding", "Static", "Fluid"], correctIndex: 2, explanation: "Static friction (between stationary surfaces) is greater than sliding or rolling friction." },
  // Physics - Electricity
  { id: "q9", chapterId: "phy-6", question: "Ohm's Law states that V equals:", options: ["I × R", "I / R", "I + R", "R / I"], correctIndex: 0, explanation: "Ohm's Law: V = I × R, where V is voltage, I is current, and R is resistance." },
  // Chemistry - Atoms
  { id: "q10", chapterId: "chem-2", question: "Who proposed the nuclear model of the atom?", options: ["Dalton", "Thomson", "Rutherford", "Bohr"], correctIndex: 2, explanation: "Ernest Rutherford's gold foil experiment led to the nuclear model with a dense positive nucleus." },
  { id: "q11", chapterId: "chem-2", question: "Electrons have what charge?", options: ["Positive", "Negative", "Neutral", "Variable"], correctIndex: 1, explanation: "Electrons carry a negative charge and orbit the nucleus." },
  // Chemistry - Reactions
  { id: "q12", chapterId: "chem-5", question: "A reaction where two substances combine to form one product is called:", options: ["Decomposition", "Combination", "Displacement", "Redox"], correctIndex: 1, explanation: "A combination (synthesis) reaction: A + B → AB." },
  // Math - Rational Numbers
  { id: "q13", chapterId: "math-1", question: "A rational number is a number that can be expressed as:", options: ["p/q where q ≠ 0", "p × q", "p + q", "√p"], correctIndex: 0, explanation: "A rational number is any number expressed as p/q where p and q are integers and q ≠ 0." },
  // Math - Exponents
  { id: "q14", chapterId: "math-2", question: "What is 2⁰ equal to?", options: ["0", "1", "2", "Undefined"], correctIndex: 1, explanation: "Any non-zero number raised to the power of 0 equals 1." },
  // Geography
  { id: "q15", chapterId: "geo-1", question: "Which of the following is a non-renewable resource?", options: ["Solar Energy", "Wind", "Coal", "Biomass"], correctIndex: 2, explanation: "Coal is a fossil fuel formed over millions of years and is non-renewable." },
  // Computer
  { id: "q16", chapterId: "comp-3", question: "What keyword is used to display output in Python?", options: ["echo", "printf", "print", "display"], correctIndex: 2, explanation: "The print() function is used to display output in Python." },
  { id: "q17", chapterId: "comp-7", question: "What does AI stand for?", options: ["Auto Intelligence", "Artificial Intelligence", "Automated Information", "Applied Intelligence"], correctIndex: 1, explanation: "AI stands for Artificial Intelligence — the simulation of human intelligence by machines." },
  // History
  { id: "q18", chapterId: "hist-2", question: "The Revolt of 1857 is also known as:", options: ["Quit India Movement", "First War of Independence", "Salt Satyagraha", "Swadeshi Movement"], correctIndex: 1, explanation: "The Revolt of 1857 is often called the First War of Indian Independence." },
];

export function getQuestionsForChapter(chapterId: string) {
  return quizQuestions.filter((q) => q.chapterId === chapterId);
}
