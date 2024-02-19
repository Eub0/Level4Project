import ContentGrid from "@/components/layout/ContentGrid";

export const ThermalPhysics = () => {
    return (
        <>
            <ContentGrid
                heading="Thermal Physics"
                title="Thermal Physics"
                moduleAims="Thermal Physics aims to review fundamental concepts such as heat, temperature, work, and energy within thermal systems. 
                It emphasizes the connection between microscopic and macroscopic perspectives of thermal systems, highlighting the statistical nature of the macroscopic approach. 
                Additionally, the course explores the properties of ideal gases and delves into the study of the laws of classical thermodynamics. 
                Through this exploration, students will gain a comprehensive understanding of the principles governing thermal systems and their underlying microscopic and macroscopic descriptions."
                moduleOutline={["Define and differentiate heat, temperature, work, and internal energy.",
                "Apply the First Law of Thermodynamics in various contexts.",
                "Explain the concept of entropy and its relation to disorder.",
                "Discuss reversible and irreversible thermodynamic processes.",
                "Investigate the properties of ideal gases and classical thermodynamics laws.",
                "Describe the Carnot cycle and its efficiency.",
                "Apply these concepts to solve unseen problems in thermal physics."
                ]}
                usefulWebsites=""
                recommendedReading="Thermal Physics, C.B.P. Finn"
            />
        </>
    );
}

export default ThermalPhysics;