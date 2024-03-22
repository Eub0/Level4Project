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
                "Delve into Newton's laws of motion and their application in solving dynamics problems.",
                "Explore conservation laws, including energy and momentum.",
                "Examine circular motion, oscillatory motion, and gravitational fields.",
                "Understand the basics of special relativity, including time dilation, length contraction, and the concept of spacetime.",
                "Apply these principles to various theoretical and practical physics scenarios."
                ]}
                usefulWebsites=""
                recommendedReading="Young & Freedman 15th Edition"
            />
        </>
    );
}

export default DynamicsAndRelativity;