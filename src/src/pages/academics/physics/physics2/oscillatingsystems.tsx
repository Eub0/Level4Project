import ContentGrid from "@/components/layout/ContentGrid";

export const OscillatingSystems = () => {
    return (
        <>
            <ContentGrid
                heading="Oscillating Systems"
                title="Oscillating Systems"
                moduleAims="Oscillating Systems aims to introduce students to the concepts of periodic and simple harmonic motion. 
                The focus is on understanding the principles behind these types of motion, exploring their characteristics, and delving into the analysis of free and forced vibrations in mechanical systems. 
                Through this study, students will gain a fundamental understanding of the behavior of oscillatory motion in various contexts, providing a basis for further exploration of vibrational phenomena in mechanical systems."
                moduleOutline={["Describe oscillating systems using complex exponentials.",
                "Solve the differential equation of simple harmonic motion.",
                "Discuss the relationship between position, velocity, and acceleration in oscillatory motion.",
                "Analyze energy relations in the harmonic oscillator.",
                "Explain the concept of damping in oscillatory systems.",
                "Discuss the effects of a periodic driving force on oscillatory systems.",
                "Apply these concepts to solve unseen problems in oscillating systems."]}
                usefulWebsites=""
                recommendedReading="Vibrations and Waves, A.P. French"
            />
        </>
    );
}

export default OscillatingSystems;