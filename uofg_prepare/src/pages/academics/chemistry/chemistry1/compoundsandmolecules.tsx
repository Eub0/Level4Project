import ContentGrid from "@/components/layout/ContentGrid";

export const CompoundsAndMolecules = () => {
    return (
      <>
        <ContentGrid
                heading="Compounds and Molecules"
                title="Compounds and Molecules"
                moduleAims="Compounds and Molecules ains to establish an understanding of the Periodic Table in order to be able to use it to rationalise chemical behaviour, to enable students to make predictions of the chemical behaviour of compounds so far not encountered, to help students appreciate the idea of molecular structure and scientific disciplines in the “real” world."
                moduleOutline={["Oxidation states; balance redox equations",
                "Born-Haber cycles",
                "Ionic lattice structure, p-block elements, covalent bonding, polarity, VSEPR rules and molecular shape."]}
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

export default CompoundsAndMolecules;