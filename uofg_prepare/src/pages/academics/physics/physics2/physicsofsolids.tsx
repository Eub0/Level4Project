import ContentGrid from "@/components/layout/ContentGrid";

export const PhysicsOfSolids = () => {
    return (
        <>
            <ContentGrid
                heading="Physics of Solids"
                title="Physics of Solids"
                moduleAims="Physics of Solids is designed to illustrate the fundamental role of interatomic forces in shaping the structure of simple crystalline materials. 
                It emphasizes the use of diffraction experiments as a powerful tool for probing the properties of materials. 
                Additionally, the course delves into the explanation of basic electrical and magnetic properties of metals and semiconductors. 
                By exploring these topics, students will gain insights into the microscopic forces that govern material structures and the practical applications of diffraction techniques in materials science. 
                The course also provides an understanding of the electrical and magnetic behaviors of metals and semiconductors, offering a comprehensive perspective on the properties of crystalline materials."
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
                recommendedReading="Introductory Solid State Physics, H.P. Myers (ISBN 0-7484-0660-3)
                                    Introduction to Solid State Physics, C. Kittel"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default PhysicsOfSolids;