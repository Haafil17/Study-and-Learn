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
    id: "a1", chapterId: "bio-5", concept: "Heart", analogyType: "car",
    title: "The Heart is Like a Car Engine",
    explanation: "Just as a car engine pumps fuel to all parts of the car to keep it running, your heart pumps blood to every part of your body to keep you alive and active.",
    conceptSide: "The heart has 4 chambers that pump oxygenated and deoxygenated blood through separate circuits (double circulation).",
    analogySide: "A car engine has cylinders that pump fuel and air in a cycle — intake, compression, power, exhaust — to keep the car moving."
  },
  {
    id: "a2", chapterId: "bio-5", concept: "Blood Vessels", analogyType: "car",
    title: "Blood Vessels are Like Fuel Pipes",
    explanation: "Arteries, veins, and capillaries carry blood just like pipes carry fuel, coolant, and oil through a car's systems.",
    conceptSide: "Arteries carry oxygen-rich blood away from the heart; veins bring oxygen-poor blood back.",
    analogySide: "Fuel lines carry petrol from the tank to the engine; return lines bring unused fuel back."
  },
  {
    id: "a3", chapterId: "bio-6", concept: "Nervous System", analogyType: "car",
    title: "The Nervous System is Like Car Wiring",
    explanation: "Your nervous system sends electrical signals through nerves, just like a car's wiring system sends electrical signals to headlights, dashboard, and engine.",
    conceptSide: "The brain sends signals through the spinal cord and nerves to muscles and organs.",
    analogySide: "The car's ECU (computer) sends signals through wires to control ignition, lights, and sensors."
  },
  {
    id: "a4", chapterId: "phy-3", concept: "Force and Pressure", analogyType: "airplane",
    title: "Lift Force — How Airplanes Fly",
    explanation: "An airplane flies because of lift — air moves faster over the curved top of the wing, creating lower pressure above and higher pressure below, pushing the plane up.",
    conceptSide: "Pressure = Force / Area. A larger area with the same force means less pressure.",
    analogySide: "Airplane wings are shaped (airfoil) so air travels faster on top, creating low pressure — this difference in pressure creates lift."
  },
  {
    id: "a5", chapterId: "phy-4", concept: "Energy Conversion", analogyType: "car",
    title: "Energy Conversion in a Car",
    explanation: "A car converts chemical energy (petrol) → heat energy (combustion) → kinetic energy (movement). Energy is never lost, just transformed!",
    conceptSide: "The Law of Conservation of Energy states energy cannot be created or destroyed, only transformed from one form to another.",
    analogySide: "In a car: Chemical energy in fuel → thermal energy from burning → mechanical energy turning wheels → kinetic energy of motion."
  },
  {
    id: "a6", chapterId: "bio-1", concept: "Xylem Transport", analogyType: "car",
    title: "Xylem is Like a Car's Fuel Pump System",
    explanation: "Just as a car's fuel pump draws fuel from the tank and delivers it to the engine, xylem draws water from the roots and delivers it to the leaves using transpiration pull.",
    conceptSide: "Xylem transports water and minerals upward from roots to leaves through dead, hollow vessels using root pressure and transpiration pull.",
    analogySide: "A car's fuel pump creates suction to draw fuel from the tank through fuel lines to the engine — similar to transpiration pull in plants."
  },
  {
    id: "a7", chapterId: "phy-7", concept: "Sound Waves", analogyType: "airplane",
    title: "Breaking the Sound Barrier",
    explanation: "When a jet flies faster than sound (Mach 1), it creates a sonic boom — a loud shockwave caused by compressed sound waves piling up.",
    conceptSide: "Sound travels as longitudinal waves through a medium. Its speed in air is about 343 m/s.",
    analogySide: "A fighter jet pushing past 1,235 km/h outruns its own sound waves, creating a cone-shaped shockwave heard as a 'boom' on the ground."
  },
  {
    id: "a8", chapterId: "phy-9", concept: "Electric Circuits", analogyType: "car",
    title: "Electric Circuits are Like a Car's Fuel System",
    explanation: "Just as fuel flows from the tank through pipes to the engine and back, electric current flows from the battery through wires to devices and back.",
    conceptSide: "A circuit needs a source (battery), conductor (wire), load (bulb), and switch to work.",
    analogySide: "A car's fuel system needs a tank (source), fuel lines (conductor), engine (load), and ignition key (switch)."
  },
  {
    id: "a9", chapterId: "bio-4", concept: "Hormones", analogyType: "car",
    title: "Hormones are Like Dashboard Warning Lights",
    explanation: "Hormones are chemical messengers that signal the body to take action — just like dashboard warning lights signal the driver about fuel, temperature, or engine issues.",
    conceptSide: "Endocrine glands release hormones into the bloodstream. They travel to target organs and trigger specific responses (e.g., insulin lowers blood sugar).",
    analogySide: "A car's sensors detect changes (low fuel, high temperature) and display warning lights on the dashboard — the driver then takes appropriate action."
  },
  {
    id: "a10", chapterId: "phy-6", concept: "Heat Transfer", analogyType: "car",
    title: "Car Radiator — Heat Transfer in Action",
    explanation: "A car radiator uses all three types of heat transfer to keep the engine cool — conduction, convection, and radiation.",
    conceptSide: "Heat transfers via conduction (direct contact), convection (fluid movement), and radiation (electromagnetic waves).",
    analogySide: "Engine heat conducts to coolant fluid, which convects through the radiator, and the radiator radiates heat into the surrounding air."
  },
];

export function getAnalogiesForChapter(chapterId: string) {
  return analogies.filter((a) => a.chapterId === chapterId);
}
