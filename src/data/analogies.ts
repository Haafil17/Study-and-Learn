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
  {
    id: "a1", chapterId: "bio-3", concept: "Heart", analogyType: "car",
    title: "The Heart is Like a Car Engine",
    explanation: "Just as a car engine pumps fuel to all parts of the car to keep it running, your heart pumps blood to every part of your body to keep you alive and active.",
    conceptSide: "The heart has 4 chambers that pump oxygenated and deoxygenated blood through separate circuits.",
    analogySide: "A car engine has cylinders that pump fuel and air in a cycle — intake, compression, power, exhaust — to keep the car moving."
  },
  {
    id: "a2", chapterId: "bio-3", concept: "Blood Vessels", analogyType: "car",
    title: "Blood Vessels are Like Fuel Pipes",
    explanation: "Arteries, veins, and capillaries carry blood just like pipes carry fuel, coolant, and oil through a car's systems.",
    conceptSide: "Arteries carry oxygen-rich blood away from the heart; veins bring oxygen-poor blood back.",
    analogySide: "Fuel lines carry petrol from the tank to the engine; return lines bring unused fuel back."
  },
  {
    id: "a3", chapterId: "bio-5", concept: "Nervous System", analogyType: "car",
    title: "The Nervous System is Like Car Wiring",
    explanation: "Your nervous system sends electrical signals through nerves, just like a car's wiring system sends electrical signals to headlights, dashboard, and engine.",
    conceptSide: "The brain sends signals through the spinal cord and nerves to muscles and organs.",
    analogySide: "The car's ECU (computer) sends signals through wires to control ignition, lights, and sensors."
  },
  {
    id: "a4", chapterId: "phy-1", concept: "Force and Pressure", analogyType: "airplane",
    title: "Lift Force — How Airplanes Fly",
    explanation: "An airplane flies because of lift — air moves faster over the curved top of the wing, creating lower pressure above and higher pressure below, pushing the plane up.",
    conceptSide: "Pressure = Force / Area. A larger area with the same force means less pressure.",
    analogySide: "Airplane wings are shaped (airfoil) so air travels faster on top, creating low pressure — this difference in pressure creates lift."
  },
  {
    id: "a5", chapterId: "phy-8", concept: "Energy Conversion", analogyType: "car",
    title: "Energy Conversion in a Car",
    explanation: "A car converts chemical energy (petrol) → heat energy (combustion) → kinetic energy (movement). Energy is never lost, just transformed!",
    conceptSide: "The Law of Conservation of Energy states energy cannot be created or destroyed, only transformed.",
    analogySide: "In a car: Chemical energy in fuel → thermal energy from burning → mechanical energy turning wheels → kinetic energy of motion."
  },
  {
    id: "a6", chapterId: "phy-2", concept: "Friction", analogyType: "car",
    title: "Friction — Why Cars Need Brakes and Tyres",
    explanation: "Friction between tyres and the road helps a car grip and stop. Without friction, a car would slide like on ice!",
    conceptSide: "Friction is a force that opposes motion between two surfaces in contact.",
    analogySide: "Car tyres have treads (grooves) to increase friction with the road. Brakes use friction pads to slow the wheels."
  },
  {
    id: "a7", chapterId: "phy-3", concept: "Sound Waves", analogyType: "airplane",
    title: "Breaking the Sound Barrier",
    explanation: "When a jet flies faster than sound (Mach 1), it creates a sonic boom — a loud shockwave caused by compressed sound waves piling up.",
    conceptSide: "Sound travels as longitudinal waves through a medium. Its speed in air is about 343 m/s.",
    analogySide: "A fighter jet pushing past 1,235 km/h outruns its own sound waves, creating a cone-shaped shockwave heard as a 'boom' on the ground."
  },
  {
    id: "a8", chapterId: "phy-6", concept: "Electric Circuits", analogyType: "car",
    title: "Electric Circuits are Like a Car's Fuel System",
    explanation: "Just as fuel flows from the tank through pipes to the engine and back, electric current flows from the battery through wires to devices and back.",
    conceptSide: "A circuit needs a source (battery), conductor (wire), load (bulb), and switch to work.",
    analogySide: "A car's fuel system needs a tank (source), fuel lines (conductor), engine (load), and ignition key (switch)."
  },
  {
    id: "a9", chapterId: "bio-4", concept: "Breathing", analogyType: "car",
    title: "Lungs Work Like a Car's Air Intake",
    explanation: "Your lungs take in oxygen and expel CO₂, just like a car engine takes in air for combustion and expels exhaust gases.",
    conceptSide: "During inhalation, the diaphragm contracts pulling air in. During exhalation, it relaxes pushing air out.",
    analogySide: "A car's air intake draws in fresh air, mixes it with fuel, and after combustion, the exhaust system pushes out waste gases."
  },
  {
    id: "a10", chapterId: "phy-5", concept: "Heat Transfer", analogyType: "car",
    title: "Car Radiator — Heat Transfer in Action",
    explanation: "A car radiator uses all three types of heat transfer to keep the engine cool — conduction, convection, and radiation.",
    conceptSide: "Heat transfers via conduction (direct contact), convection (fluid movement), and radiation (electromagnetic waves).",
    analogySide: "Engine heat conducts to coolant fluid, which convects through the radiator, and the radiator radiates heat into the surrounding air."
  },
];

export function getAnalogiesForChapter(chapterId: string) {
  return analogies.filter((a) => a.chapterId === chapterId);
}
