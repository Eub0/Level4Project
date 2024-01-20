import ContentGrid from "@/components/layout/ContentGrid";

export const NuclearAndParticlePhysics = () => {
    return (
        <>
            <ContentGrid
                heading="Nuclear & Particle Physics"
                title="Nuclear & Particle Physics"
                moduleAims="Nuclear & Particle Physics aims to introduce students to the concept of radioactive decay, providing an understanding of the underlying principles. 
                It delves into the properties of the atomic nucleus, nucleons, and elementary particles, offering insights into the building blocks of matter. 
                The exploration extends to the composition of elementary particles, highlighting the roles of quarks, leptons, and force carriers. 
                Additionally, the course introduces essential concepts of special relativity, including Lorentz transformations and four-vectors. 
                Students will acquire the skills to solve simple relativistic kinematic problems, particularly those involving invariant mass. 
                Through this comprehensive approach, students will gain a foundational understanding of both nuclear physics and the principles of special relativity."
                moduleOutline={["Describe radioactive decay processes and calculate decay rates.",
                "Understand the properties and interactions of nucleons and elementary particles.",
                "Apply Lorentz transformations and discuss concepts of four-vectors in relativity.",
                "Explore the standard model of particle physics, including quarks and leptons.",
                "Discuss the relationship between matter and antimatter.",
                "Apply these concepts to solve unseen problems in nuclear and particle physics."]}
                usefulWebsites=""
                recommendedReading="Relativity: A Very Short Intoduction, Russell Stannard (ISBN 978-0-19-923622-0)
                                    Special Relativity, N.M.J. Woodhouse (ISBN 1-85233-426-6)
                                    Introduction to Elemetary Particle Physics, Alessandro Bettini (ISBN 978-0-521-88023)
                                    Introductory Nuclear Physics, S. Krane (ISBN 0471859141)"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default NuclearAndParticlePhysics;