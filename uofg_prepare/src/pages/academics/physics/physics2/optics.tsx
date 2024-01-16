import ContentGrid from "@/components/layout/ContentGrid";

export const Optics = () => {
    return (
        <>
            <ContentGrid
                heading="Optics"
                title="Optics"
                moduleAims="Optics aims to provide a comprehensive exploration of the superposition of light waves, covering both qualitative and quantitative aspects of their interference and diffraction phenomena. 
                Students will gain an in-depth understanding of the properties of electromagnetic waves, with a particular focus on the visible region of the spectrum. 
                The qualitative discussion will involve examining how light waves combine, interfere, and diffract, while the quantitative analysis will delve into the mathematical aspects of these phenomena. 
                Through this study, students will develop a thorough knowledge of the behavior of light waves and their intricate interactions, especially within the visible spectrum."
                moduleOutline={["Water as a solvent",
                "Hydrogen bonding",
                "Dipoles; dielectric constant",
                "Ice structure",
                "Concentrations",
                "Electrolytes",
                "Degree of dissociation in relation to a range of solutes",
                "Characteristics of sparingly soluble solutes, including the common ion effect and solubility product",
                "Dissociation of weak acids and bases and associated constants such as Ka, pKa, Kb , pKb",
                "Various definitions of acids and bases",
                "pH and pOH calculations for strong and weak acids and bases",
                "Degree of ionisation of weak acids and bases at various pHs",
                "Salt hydrolysis and its influence upon pH; buffers",
                "Le Chatelier’s Principle",
                "Henderson-Hasselbalch equation, examples of buffers and their importance in biological systems; titrations",
                "Indicators"]}
                usefulWebsites=""
                recommendedReading="Optics, E. Hecht (ISBN 1292021578)"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default Optics;