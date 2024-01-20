import ContentGrid from "@/components/layout/ContentGrid";

export const QuantumPhenomena = () => {
    return (
        <>
            <ContentGrid
                heading="Quantum Phenomena"
                title="Quantum Phenomena"
                moduleAims="Quantum Phenomena aims to introduce students to a diverse array of quantum phenomena and essential concepts for understanding and interpreting these phenomena. 
                It establishes a foundation for comprehending the properties of individual atoms and emphasizes the appreciation of wave-particle duality. 
                Additionally, the course serves as an introduction to particle physics and cosmology, offering insights into the nature of the universe and its origins. 
                Through the study of quantum phenomena, students will gain the ability to perform basic calculations related to different scales within this realm and to solve simple problems in both atomic and nuclear physics."
                moduleOutline={["Rutherford model of the atom",
                "Particle properties of electromagnetic radiation",
                "Wave-like properties of particles",
                "Wave mechanics of particles",
                "Quantum theory of the atom",
                "Atomic structure",
                "Particle physics and cosmology"]}
                usefulWebsites=""
                recommendedReading="Young & Freedman 15th Edition"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default QuantumPhenomena;