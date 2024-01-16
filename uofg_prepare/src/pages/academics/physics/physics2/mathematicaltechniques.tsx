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
                moduleOutline={["Construct frequency distributions and calculate mean and standard deviation.",
                "Understand and apply standard error in the mean, and its relationship to standard deviation.",
                "Differentiate between random and systematic errors.",
                "Identify and comprehend properties of Poisson and Gaussian distributions, emphasizing Gaussian distributions in handling random errors.",
                "Apply statistical concepts, such as least squares fitting, derivatives, and error propagation, to solve physics problems, demonstrating proficiency in tackling unseen problems."
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