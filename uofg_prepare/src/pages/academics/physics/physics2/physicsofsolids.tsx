import ContentGrid from "@/components/layout/ContentGrid";

export const PhysicsOfSolids = () => {
    return (
        <>
            <ContentGrid
                heading="Physics of Solids"
                title="Physics of Solids"
                moduleAims="Physics of Solids is designed to illustrate the fundamental role of interatomic forces in shaping the structure of simple crystalline materials. 
                It emphasizes the use of diffraction experiments as a powerful tool for probing the properties of materials. 
                Additionally, the course delves into the explanation of basic electrical and magnetic properties of metals and semiconductors. 
                By exploring these topics, students will gain insights into the microscopic forces that govern material structures and the practical applications of diffraction techniques in materials science. 
                The course also provides an understanding of the electrical and magnetic behaviors of metals and semiconductors, offering a comprehensive perspective on the properties of crystalline materials."
                moduleOutline={["Describe various types of atomic bonding and their effects on crystal structures.",
                "Understand X-ray diffraction and its application in studying materials.",
                "Explore electrical and magnetic properties of metals and semiconductors.",
                "Apply the free electron gas model to understand properties of metals.",
                "Discuss the Hall effect and its implications in solid-state physics.",
                "Apply these concepts to solve unseen problems in the physics of solids."]}
                usefulWebsites=""
                recommendedReading="Introductory Solid State Physics, H.P. Myers (ISBN 0-7484-0660-3)
                                    Introduction to Solid State Physics, C. Kittel"
            />
        </>
    );
}

export default PhysicsOfSolids;