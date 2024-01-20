import ContentGrid from "@/components/layout/ContentGrid";

export const MathematicalTechniques = () => {
    return (
        <>
            <ContentGrid
                heading="Mathematical Techniques"
                title="Mathematical Techniques"
                moduleAims="Mathematical Techniques covers the representation of variations in the measurement of physical quantities through frequency distributions, particularly focusing on Poisson and Gaussian distributions. 
                Students will gain the skills to calculate mean, standard deviation, and standard error from data sets, incorporating the combination of errors. 
                The application of least squares fitting for straight-line analysis is emphasized, providing a foundation for understanding and utilizing this technique. 
                Additionally, basic techniques in both differential and integral calculus are introduced, contributing to a comprehensive understanding of mathematical concepts in the context of physical measurements."
                moduleOutline={["Learn to construct frequency distributions, understand Poisson and Gaussian distributions.",
                "Calculate mean, standard deviation, and standard error from data sets.",
                "Understand and apply least squares technique for straight line fitting.",
                "Discuss the significance of Gaussian distributions in random error treatment.",
                "Explain the importance of Poisson distribution in events like radioactive decay.",
                "Combine errors in functions of several variables.",
                "Apply differential and integral calculus techniques to physics problems."
                ]}
                usefulWebsites=""
                recommendedReading="Measurments and their Uncertainties, I. Hughes and T. Hase (ISBN 0-199-566-33X)"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default MathematicalTechniques;