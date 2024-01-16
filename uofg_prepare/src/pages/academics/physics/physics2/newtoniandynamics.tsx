import ContentGrid from "@/components/layout/ContentGrid";

export const NewtonianDynamics = () => {
    return (
        <>
            <ContentGrid
                heading="Newtonian Dynamics"
                title="Newtonian Dyanamics"
                moduleAims="Newtonian Dyanamics focuses on solving Newton's equation for constant acceleration, providing students with the tools to analyze and understand motion under such conditions. 
                It also extends the study to describe the multi-dimensional motion of rigid bodies, incorporating rotation. 
                Additionally, the course introduces the effects of damping into Newton's equation, allowing students to explore how damping influences the dynamics of moving objects. 
                Through this curriculum, students will develop a comprehensive understanding of the Newtonian approach to motion, incorporating both linear and rotational aspects, as well as the impact of damping forces."
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
                recommendedReading="Physics, Volume 1, K.S. Krane R. Resnick, D. Halliday (ISBN 0471559172)"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default NewtonianDynamics;