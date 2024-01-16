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
                moduleOutline={["Understand oscillating systems using complex exponentials.",
                "Derive the differential equation for simple harmonic motion.",
                "Verify and express the solution, considering initial conditions and utilizing complex notation.",
                "Explore energy relations and derive the quadratic form for potential energy in harmonic oscillators.",
                "Solve the equation of motion for damped harmonic oscillators, categorizing damping as weak, strong, or critical.",
                "Analyze system behavior with specific initial conditions using the solution.",
                "Discuss the impact of periodic driving forces on oscillatory systems, solving steady-state equations for both undamped and damped harmonic oscillators."
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