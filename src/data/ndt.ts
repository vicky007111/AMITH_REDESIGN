export interface NdtTest {
  name: string;
  mechanism: string;
  anomalies: string;
  image?: string;
}

export const ndtTests: NdtTest[] = [
  {
    name: "Rebound Hammer",
    mechanism:
      "Verifies the surface hardness of concrete elements using elastic rebound principles to estimate immediate compressive strength.",
    anomalies:
      "Detects low surface hardness, uniformity issues, and potential weak skin concrete zones.",
    image: "/images/services/rebound-hammer-testing.jpg",
  },
  {
    name: "Ultrasonic Pulse Velocity (UPV)",
    mechanism:
      "Sends electro-acoustic transducers pulses through concrete blocks to calculate sound speed and trace concrete density.",
    anomalies:
      "Locates internal air voids, structural honeycombing, internal cracks, and structural discontinuity.",
    image: "/images/services/upv-testing.jpg",
  },
  {
    name: "Carbonation & Chloride Tests",
    mechanism:
      "Applies chemical indicators (phenolphthalein) to broken cores to examine chemical depth penetration and concrete pH levels.",
    anomalies:
      "Identifies loss of steel rebar alkaline protection, indicating high risks of premature internal rust.",
    // No dedicated AMITH photograph available. The photo library contains no
    // in-field phenolphthalein or broken-core chemical test images.
    // Falls back to the generic NDT overview image defined in NdtPanel.
  },
  {
    name: "Concrete Core Drilling",
    mechanism:
      "Drills out physical cylindrical cores from concrete elements to perform laboratory crushing strength tests.",
    anomalies:
      "Verifies exact in-situ compressive strength, concrete consolidation, and aggregates layout.",
    image: "/images/services/concrete_core_drilling.png",
  },
  {
    name: "Half-Cell Potential",
    mechanism:
      "Measures electrical potential gradients across concrete reinforcements using reference electrodes to map electrical currents.",
    anomalies:
      "Determines the active corrosion probability of embedded steel bars before visual cracking occurs.",
    image: "/images/services/half-cell-potential-testing.jpg",
  },
  {
    name: "Chemical Analysis",
    mechanism:
      "Performs qualitative chemical extractions on mortar/concrete dust to evaluate sulfate and chloride levels.",
    anomalies:
      "Detects internal chemical attack hazards, aggregate reactivity issues, and soil/water salt poisoning.",
    image: "/images/services/concrete-ctm-testing.jpg",
  },
];
