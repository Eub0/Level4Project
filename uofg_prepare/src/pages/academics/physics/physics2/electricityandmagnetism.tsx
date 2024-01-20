import ContentGrid from "@/components/layout/ContentGrid";

export const ElectricityAndMagnetism = () => {
    return (
        <>
            <ContentGrid
                heading="Electricity & Magnetism"
                title="Electricity & Magnetism"
                moduleAims="Electricity & Magnetism serves to introduce fundamental concepts in electrical engineering, including capacitance, inductance, impedance, and reactance. 
                Students will explore these concepts to gain an understanding of how they influence electrical circuits and systems. 
                The course also delves into the investigation of electric and magnetic fields, providing a foundation for comprehending their properties and interactions. 
                Through this study, students will acquire essential knowledge for analyzing and designing electrical systems, making connections between the theoretical concepts of capacitance, inductance, impedance, and reactance, and their practical applications in understanding electric and magnetic fields."
                moduleOutline={["Understand Faraday's law of electromagnetic induction and Lenz's law.",
                "Analyze electric and magnetic fields using Gauss's law.",
                "Define and calculate capacitance, inductance, impedance, and reactance.",
                "Explore the behavior of electric and magnetic fields in various scenarios.",
                "Discuss the role of complex impedance in electrical circuits.",
                "Apply these concepts to solve unseen problems in electricity and magnetism."]}
                usefulWebsites=""
                recommendedReading="Introduction to Electrodynamics, David J. Griffiths (ISBN 129202142X)"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default ElectricityAndMagnetism;