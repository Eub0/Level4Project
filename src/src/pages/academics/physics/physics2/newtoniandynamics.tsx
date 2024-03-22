import ContentGrid from "@/components/layout/ContentGrid";

export const NewtonianDynamics = () => {
    return (
        <>
            <ContentGrid
                heading="Newtonian Dynamics"
                title="Newtonian Dyanamics"
                moduleAims="Newtonian Dyanamics focuses on solving Newton's equation for constant acceleration, providing students with the tools to analyze and understand motion under such conditions. 
                It also extends the study to describe the multi-dimensional motion of rigid bodies, incorporating rotation. 
                Additionally, the course introduces the effects of damping into Newton's equation, allowing students to explore how damping influences the dynamics of moving objects. 
                Through this curriculum, students will develop a comprehensive understanding of the Newtonian approach to motion, incorporating both linear and rotational aspects, as well as the impact of damping forces."
                moduleOutline={["Perform dimensional analysis and apply Newton's Laws to different motion scenarios.",
                "Solve equations of motion for linear and angular acceleration.",
                "Calculate the dynamics of rotating bodies and understand kinetic energy relations.",
                "Analyze forces and motion in planetary systems using Kepler's Laws.",
                "Discuss the importance of coordinate systems in physics.",
                "Apply these concepts to solve unseen problems in Newtonian dynamics."]}
                usefulWebsites=""
                recommendedReading="Physics, Volume 1, K.S. Krane R. Resnick, D. Halliday (ISBN 0471559172)"
            />
        </>
    );
}

export default NewtonianDynamics;