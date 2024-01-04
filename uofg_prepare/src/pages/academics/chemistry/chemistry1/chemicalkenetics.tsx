import ContentGrid from "@/components/layout/ContentGrid";

export const ChemicalKenetics = () => {
    return (
      <>
        <ContentGrid
                heading="Chemical Kenetics"
                title="Chemical Kenetics"
                moduleAims="Chemical Kenetics aims to show how chemical reactions can be followed and their reaction rates measured. To introduce and demonstrate by means of worked examples the fundamental concepts of the kinetics of spontaneous chemical reactions, and the measurement of reaction rate, reaction order and rate constants. To show how collision theory can be used to explain the effects of concentration and temperature on reaction rates and lead to the Arrhenius equation. To show how catalysts and enzymes influence reaction rate. To explain how kinetics can be used to investigate reaction mechanisms."
                moduleOutline={["What is kinetics?",
                "Rates of chemical reactions",
                "Measuring reaction rates",
                "Definition of reaction rate",
                "Variation of rates as a function of time",
                "Rate equations",
                "Reaction order",
                "Rate constants",
                "Initial rate method for the determination of rate equations",
                "Integrated rate equations for zero-, first- and second-order reactions",
                "Graphical methods",
                "Half-life",
                "Collision theory, activation energy",
                "Arrhenius equation",
                "Determination of the activation energy from temperature dependent rate constant data",
                "Catalysts, enzymes and transition states",
                "Reaction mechanisms, elementary steps, molecularity and rate determining step"]}
                usefulWebsites=""
                recommendedReading=""
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default ChemicalKenetics;