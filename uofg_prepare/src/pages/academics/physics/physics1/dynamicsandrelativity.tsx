import ContentGrid from "@/components/layout/ContentGrid";

export const DynamicsAndRelativity = () => {
    return (
        <>
            <ContentGrid
                heading="Dynamics & Relativity"
                title="Dynamics & Relativity"
                moduleAims="Dynamics & Relativity aims to discuss laws pertaining to objects in motion and study the basic principles of the
                special theory of relativity, as well as developing good understanding of linear, circular and periodic motion for point
                particles. The module will introduce ideas relating to conservation of energy, linear and angular momentum. Students should  be able 
                to solve simple problems relating to current applications of dynamics and relativity"
                moduleOutline={[
                "Motion in one dimension",
                "Uniform circular motion",
                "Newton's laws of motion",
                "Work and kinetic energy",
                "Conservation of energy",
                "Linear momentum and collisions",
                "Special theory of relativity"
                ]}
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

export default DynamicsAndRelativity;