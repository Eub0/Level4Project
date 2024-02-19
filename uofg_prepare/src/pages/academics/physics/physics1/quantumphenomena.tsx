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
                moduleOutline={["Explore the wave-particle duality concept and the uncertainty principle.",
                "Study the basics of quantum mechanics, including the Schrödinger equation.",
                "Analyze atomic and molecular structures through quantum theory.",
                "Understand the principles of quantum tunneling and superposition.",
                "Apply quantum concepts to practical problems, enriching the understanding of modern physics."]}
                usefulWebsites=""
                recommendedReading="Young & Freedman 15th Edition"
            />
        </>
    );
}

export default QuantumPhenomena;