import ContentGrid from "@/components/layout/ContentGrid";

export const ClassicalAndQuantumWaves = () => {
    return (
        <>
            <ContentGrid
                heading="Classical & Quantum Waves"
                title="Classical & Quantum Waves"
                moduleAims="Classical & Quantum Waves aims to equip students with the essential mathematical techniques required for a comprehensive understanding of the physics of waves and vibrations, encompassing both classical and quantum aspects. 
                The curriculum involves a detailed examination of standing and traveling wave solutions to the wave equation, providing a solid foundation in wave mechanics. 
                Additionally, the course introduces the concept of matter waves, exploring standing waves as a representation of a particle in a box, and delving into the time-independent Schrödinger wave equation. 
                Through this study, students will develop the mathematical proficiency necessary for analyzing waves and vibrations in classical and quantum contexts, laying the groundwork for further exploration in the physics of wave phenomena."
                moduleOutline={["Manipulate wave equations for traveling and standing waves.",
                "Apply the superposition principle and understand normal modes in wave systems.",
                "Explore Schrödinger's equation and its applications in quantum mechanics.",
                "Discuss the concept of matter waves and their implications in quantum physics.",
                "Apply these concepts to solve unseen problems in wave physics."
            ]}
                usefulWebsites=""
                recommendedReading="The Physics of Vibration and Waves, H.J.pain (ISBN 0-471-98543-0)"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default ClassicalAndQuantumWaves;