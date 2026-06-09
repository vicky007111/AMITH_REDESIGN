export interface NdtTest {
  name: string;
  mechanism: string;
  anomalies: string;
}

export const ndtTests: NdtTest[] = [
  {
    name: "Rebound Hammer",
    mechanism:
      "Verifies the surface hardness of concrete elements using elastic rebound principles to estimate immediate compressive strength.",
    anomalies:
      "Detects low surface hardness, uniformity issues, and potential weak skin concrete zones.",
  },
  {
    name: "Ultrasonic Pulse Velocity (UPV)",
    mechanism:
      "Sends electro-acoustic transducers pulses through concrete blocks to calculate sound speed and trace concrete density.",
    anomalies:
      "Locates internal air voids, structural honeycombing, internal cracks, and structural discontinuity.",
  },
  {
    name: "Carbonation & Chloride Tests",
    mechanism:
      "Applies chemical indicators (phenolphthalein) to broken cores to examine chemical depth penetration and concrete pH levels.",
    anomalies:
      "Identifies loss of steel rebar alkaline protection, indicating high risks of premature internal rust.",
  },
  {
    name: "Concrete Core Drilling",
    mechanism:
      "Drills out physical cylindrical cores from concrete elements to perform laboratory crushing strength tests.",
    anomalies:
      "Verifies exact in-situ compressive strength, concrete consolidation, and aggregates layout.",
  },
  {
    name: "Half-Cell Potential",
    mechanism:
      "Measures electrical potential gradients across concrete reinforcements using reference electrodes to map electrical currents.",
    anomalies:
      "Determines the active corrosion probability of embedded steel bars before visual cracking occurs.",
  },
  {
    name: "Chemical Analysis",
    mechanism:
      "Performs qualitative chemical extractions on mortar/concrete dust to evaluate sulfate and chloride levels.",
    anomalies:
      "Detects internal chemical attack hazards, aggregate reactivity issues, and soil/water salt poisoning.",
  },
];
