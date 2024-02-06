import ContentGrid from "@/components/layout/ContentGrid";

export const MainGroupChemistry = () => {
    return (
      <>
        <ContentGrid
                heading="Main Group Chemistry"
                title="Main Group Chemistry"
                moduleAims="Main Group Chemistry aims to introduce the students to main group chemistry, and in particular the chemistry of elements in groups 1, 2 and 15. Many of the concepts within this course are fundamental to a basic understanding of chemical behaviour and reactivity. This course also provides a foundation for subsequent courses on main group chemistry in years 3 and 4. "
                moduleOutline={["Compare reactivity in Groups 1, 2, and 15.",
                "Discuss properties of main group elements and their compounds."]}
                usefulWebsites=""
                recommendedReading=""
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default MainGroupChemistry;