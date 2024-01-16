import ContentGrid from "@/components/layout/ContentGrid";

export const ThermalPhysics = () => {
    return (
        <>
            <ContentGrid
                heading="Thermal Physics"
                title="Thermal Physics"
                moduleAims="Thermal Physics aims to provide a comprehensive understanding of temperature, heat transfer, and the thermal properties of solids, liquids, and gases. 
                The objectives include exploring the relationship between temperature and kinetic energy for ideal gases, discerning the disparities between ideal and real gas behavior, 
                and studying fundamental concepts of hydrostatics and hydrodynamics. Additionally, the course covers the behavior of matter under various forces, such as tensile, compressive, 
                and shear forces, and introduces basic properties of solids, emphasizing the connection between structure, bonding, and mechanical properties. Ultimately, students are expected 
                to acquire the skills to solve simple problems in diverse application areas involving both thermal and mechanical properties."
                moduleOutline={["Temperature and heat",
                "Mechanisms of heat transfer",
                "Ideal and real gases",
                "Molecular properties of matter",
                "Hydrostatic and hydrodynamics",
                "Elasticity and plasticity"]}
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

export default ThermalPhysics;