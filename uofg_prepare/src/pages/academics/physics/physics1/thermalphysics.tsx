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
                moduleOutline={["Examine the molecular theory of gases, temperature scales, and the concept of heat.",
                "Exlore the laws of thermodynamics and their applications in various systems.",
                "Study thermal properties of materials, including specific heat and phase changes.",
                "Analyze heat engines, refrigerators, and the Carnot cycle.",
                "Apply principles of thermal physics to solve theoretical and practical problems."]}
                usefulWebsites=""
                recommendedReading="Young & Freedman 15th Edition"
            />
        </>
    );
}

export default ThermalPhysics;