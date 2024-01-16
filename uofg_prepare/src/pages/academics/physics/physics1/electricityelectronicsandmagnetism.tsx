import ContentGrid from "@/components/layout/ContentGrid";

export const ElectricityElectronicsAndMagnetism = () => {
    return (
        <>
            <ContentGrid
                heading="Electricity, Electronics, and Magnetism"
                title="Electricity, Electronics, and Magnetism"
                moduleAims="Electricity, Electronics, and Magnetism emphasizes the significance of electromagnetism in both physics and modern technology. 
                It introduces fundamental principles such as electrostatics, current electricity, operational amplifiers, and magnetism. 
                The goal is to illustrate these principles through real-world examples from modern technology, showcasing the practical applications of electromagnetism. 
                The course also aims to equip students with problem-solving skills in these areas, enabling them to apply theoretical concepts to practical situations within 
                the realm of electromagnetism and its applications in technology."
                moduleOutline={["Electrostatics",
                "Magnestism",
                "Current electricity and electronics"]}
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

export default ElectricityElectronicsAndMagnetism;