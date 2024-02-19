import ContentGrid from "@/components/layout/ContentGrid";

export const ChemicalEnergyChanges = () => {
    return (
      <>
        <ContentGrid
                heading="Chemical Energy Changes"
                title="Chemical Energy Changes"
                moduleAims="Chemical Energy Changes aims to develop an understanding of the energy changes occurring during chemical reactions and the role these changes have in deciding whether a reaction will be exothermic or endothermic. To introduce and develop the way in which enthalpy and entropy contribute to the free energy change of a reaction and how this indicates if a reaction is favourable. To illustrate the role of the Gibbs free energy in determining the state of equilibrium of a chemical reaction."
                moduleOutline={["Basics: Introduction to chemical energy; first law of thermodynamics; internal energy; exothermic and endothermic",
                "Enthalpy: Reaction enthalpies; bond energies to calculate enthalpy; standard enthalpies of formation; reaction enthalpies; calorimetry and heats of combustion; Hess’s law.",
                "Entropy: Spontaneous reactions, disorder, entropy; second law of thermodynamics; heat, temperature & entropy; third law of thermodynamics; absolute entropies & the second law in action; entropy changes and entropy values; reactions with negative entropy.",
                "Free Energy: (Gibbs) free energy; driving forces to reaction, the ∆H, ∆S competition; free energy in action; feasibility of reactions; making reactions feasible.",
                "Equilibrium: Free energy and equilibrium; equilibrium and the meaning of “the reaction will proceed”; the balance of equilibrium; examples of equilibrium; changing the position of equilibrium."]}
                usefulWebsites=""
                recommendedReading=""
            />
        </>
    );
}

export default ChemicalEnergyChanges;