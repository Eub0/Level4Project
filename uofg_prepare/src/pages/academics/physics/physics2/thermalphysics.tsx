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
                moduleOutline={["Construct frequency distributions and calculate mean and standard deviation.",
                "Understand and apply standard error in the mean, and its relationship to standard deviation.",
                "Differentiate between random and systematic errors.",
                "Identify and comprehend properties of Poisson and Gaussian distributions, emphasizing Gaussian distributions in handling random errors.",
                "Apply statistical concepts, such as least squares fitting, derivatives, and error propagation, to solve physics problems, demonstrating proficiency in tackling unseen problems."
                ]}
                usefulWebsites=""
                recommendedReading="Thermal Physics, C.B.P. Finn"
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