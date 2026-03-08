export interface ChapterContent {
  chapterId: string;
  introduction: string;
  sections: { heading: string; content: string }[];
  keyDefinitions: { term: string; definition: string }[];
  didYouKnow: string[];
  revisionSummary: string[];
  practiceQuestions: { type: "short" | "long"; question: string }[];
}

export const chapterContents: Record<string, ChapterContent> = {
  "bio-3": {
    chapterId: "bio-3",
    introduction: "The circulatory system is your body's transport network. It delivers oxygen, nutrients, and hormones to every cell and carries away waste products like carbon dioxide. The heart, blood vessels, and blood work together as a remarkable delivery system that never stops.",
    sections: [
      { heading: "Structure of the Heart", content: "The human heart is a muscular organ about the size of your fist, located slightly to the left in your chest. It has four chambers: two upper chambers called atria (singular: atrium) and two lower chambers called ventricles. The right side pumps deoxygenated blood to the lungs (pulmonary circulation), while the left side pumps oxygenated blood to the entire body (systemic circulation). The septum is a thick wall that separates the left and right sides, preventing mixing of oxygenated and deoxygenated blood." },
      { heading: "Blood Vessels", content: "There are three types of blood vessels: Arteries carry oxygenated blood away from the heart (except the pulmonary artery). They have thick, elastic walls to handle high pressure. Veins carry deoxygenated blood back to the heart (except the pulmonary vein). They have thinner walls and valves to prevent backflow. Capillaries are tiny, thin-walled vessels where the actual exchange of oxygen, nutrients, and waste occurs between blood and body cells." },
      { heading: "Composition of Blood", content: "Blood consists of: Plasma (55%) — the liquid part carrying dissolved nutrients, hormones, and waste. Red Blood Cells (RBCs) — contain hemoglobin that binds oxygen, giving blood its red color. White Blood Cells (WBCs) — fight infections and diseases as part of the immune system. Platelets — help in blood clotting to seal wounds." },
      { heading: "Blood Groups", content: "Human blood is classified into four main groups: A, B, AB, and O, based on antigens on the surface of red blood cells. Group O is the universal donor (can give to all), and Group AB is the universal recipient (can receive from all). The Rh factor (positive or negative) further classifies blood types." },
      { heading: "The Lymphatic System", content: "The lymphatic system works alongside the circulatory system. Lymph is a colorless fluid that drains from tissues and returns to the bloodstream. Lymph nodes filter harmful substances and contain immune cells. The system plays a crucial role in immunity and fluid balance." },
    ],
    keyDefinitions: [
      { term: "Artery", definition: "A blood vessel that carries blood away from the heart, usually oxygenated." },
      { term: "Vein", definition: "A blood vessel that carries blood toward the heart, usually deoxygenated." },
      { term: "Capillary", definition: "The smallest blood vessel where exchange of materials between blood and tissues occurs." },
      { term: "Hemoglobin", definition: "A protein in red blood cells that binds to oxygen and gives blood its red color." },
      { term: "Septum", definition: "The muscular wall that separates the left and right sides of the heart." },
      { term: "Plasma", definition: "The liquid component of blood that carries cells, nutrients, and waste products." },
      { term: "Platelet", definition: "A cell fragment in blood that helps in clotting and wound healing." },
    ],
    didYouKnow: [
      "Your heart beats about 100,000 times a day — that's over 36 million beats per year!",
      "If you laid out all your blood vessels end to end, they would stretch over 96,000 kilometers — enough to circle the Earth more than twice!",
      "Red blood cells live for about 120 days. Your body produces about 2 million new red blood cells every second!",
      "The blue whale has the largest heart of any animal — it's about the size of a small car!",
    ],
    revisionSummary: [
      "The heart is a 4-chambered muscular organ that pumps blood.",
      "Right side handles deoxygenated blood; left side handles oxygenated blood.",
      "Arteries (away from heart), Veins (toward heart), Capillaries (exchange).",
      "Blood = Plasma + RBCs + WBCs + Platelets.",
      "Blood groups: A, B, AB, O with Rh factor (+/-).",
      "The lymphatic system supports immunity and fluid balance.",
    ],
    practiceQuestions: [
      { type: "short", question: "Name the four chambers of the human heart." },
      { type: "short", question: "What is the function of hemoglobin?" },
      { type: "short", question: "Differentiate between arteries and veins." },
      { type: "long", question: "Describe the double circulation of blood in the human body with a diagram." },
      { type: "long", question: "Explain the composition of blood and the function of each component." },
      { type: "short", question: "Why do arteries have thicker walls than veins?" },
      { type: "long", question: "What is the lymphatic system? Explain its role in the human body." },
    ],
  },
  "bio-5": {
    chapterId: "bio-5",
    introduction: "The nervous system is your body's communication network — a complex system of nerves and cells that transmit signals between different parts of the body. It coordinates actions both voluntary and involuntary.",
    sections: [
      { heading: "The Neuron", content: "A neuron is the basic unit of the nervous system. It consists of a cell body (containing the nucleus), dendrites (short branches that receive signals), and an axon (a long fiber that transmits signals). The axon is covered by a myelin sheath that insulates it and speeds up signal transmission. The gap between two neurons is called a synapse." },
      { heading: "The Brain", content: "The brain is the control center of the nervous system, protected by the skull. It has three main parts: Cerebrum (largest part — controls thinking, memory, speech, and voluntary actions), Cerebellum (controls balance and coordination), and Medulla Oblongata (controls involuntary actions like breathing and heartbeat)." },
      { heading: "Reflex Actions", content: "A reflex action is a quick, automatic response to a stimulus that does not involve thinking. Example: pulling your hand away from a hot object. The pathway is: Stimulus → Receptor → Sensory Nerve → Spinal Cord → Motor Nerve → Effector (muscle). This is called the reflex arc." },
    ],
    keyDefinitions: [
      { term: "Neuron", definition: "The basic structural and functional unit of the nervous system." },
      { term: "Synapse", definition: "The tiny gap between two neurons where nerve impulses are transmitted." },
      { term: "Reflex Arc", definition: "The pathway followed by nerve impulses during a reflex action." },
      { term: "Cerebrum", definition: "The largest part of the brain responsible for thinking and voluntary actions." },
    ],
    didYouKnow: [
      "The human brain contains about 86 billion neurons!",
      "Nerve signals can travel at speeds up to 120 meters per second.",
      "Your brain uses about 20% of your body's total energy despite being only 2% of your body weight.",
    ],
    revisionSummary: [
      "Neuron = cell body + dendrites + axon.",
      "Brain: Cerebrum (thinking), Cerebellum (balance), Medulla (involuntary).",
      "Reflex actions are automatic responses via the spinal cord.",
      "Synapse is the gap where chemical signals pass between neurons.",
    ],
    practiceQuestions: [
      { type: "short", question: "Draw and label the structure of a neuron." },
      { type: "short", question: "What is a reflex action? Give two examples." },
      { type: "long", question: "Describe the three main parts of the brain and their functions." },
      { type: "long", question: "Explain the reflex arc with the help of a diagram." },
    ],
  },
  "phy-1": {
    chapterId: "phy-1",
    introduction: "Force is a push or pull that can change the state of motion, shape, or direction of an object. Pressure is the force applied per unit area. Understanding these concepts helps us explain everything from why a nail goes into wood to how airplanes fly.",
    sections: [
      { heading: "Types of Forces", content: "Forces can be classified as contact forces (friction, muscular force, normal force) and non-contact forces (gravitational, magnetic, electrostatic). Contact forces require physical touch, while non-contact forces act at a distance." },
      { heading: "Pressure", content: "Pressure = Force / Area. This explains why a sharp knife cuts better (small area = more pressure) and why snowshoes prevent sinking (large area = less pressure). The SI unit of pressure is Pascal (Pa)." },
      { heading: "Pressure in Fluids", content: "Fluids (liquids and gases) exert pressure equally in all directions. This is Pascal's Law. Atmospheric pressure is the pressure exerted by air — about 101,325 Pa at sea level. It decreases with altitude." },
    ],
    keyDefinitions: [
      { term: "Force", definition: "A push or pull acting on an object that can change its motion or shape." },
      { term: "Pressure", definition: "Force applied per unit area (P = F/A), measured in Pascals." },
      { term: "Pascal's Law", definition: "Pressure applied to a confined fluid is transmitted equally in all directions." },
    ],
    didYouKnow: [
      "A karate expert can break a brick because they apply a large force on a very small area — creating enormous pressure!",
      "Atmospheric pressure at sea level is equivalent to about 1 kg pressing on every square centimeter of your body.",
    ],
    revisionSummary: [
      "Force = push or pull; measured in Newtons.",
      "Pressure = Force / Area; measured in Pascals.",
      "Contact forces require touch; non-contact forces act at a distance.",
      "Fluid pressure acts equally in all directions (Pascal's Law).",
    ],
    practiceQuestions: [
      { type: "short", question: "Define pressure and state its SI unit." },
      { type: "short", question: "Why does a sharp knife cut better than a blunt one?" },
      { type: "long", question: "Explain Pascal's Law with examples from daily life." },
    ],
  },
};

export function getChapterContent(chapterId: string): ChapterContent | undefined {
  return chapterContents[chapterId];
}
