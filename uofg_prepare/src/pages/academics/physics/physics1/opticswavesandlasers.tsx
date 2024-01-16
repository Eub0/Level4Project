import ContentGrid from "@/components/layout/ContentGrid";

export const OpticsWavesAndLasers = () => {
    return (
        <>
            <ContentGrid
                heading="Optics, Waves, & Lasers"
                title="Optics, Waves, & Lasers"
                moduleAims="Optics, Waves, & Lasers aims to introduce the various aspects of op:cs, and to provide a good basic understanding of geometric optics and physical optics, as well as the fundamental ideas of wave theory, developed both in physical
                optics and in the behaviour of waves in gases and on strings. Students should  gain an appreciation of the various aspects of physics involved in lasers, including
                optics, waves and atomic physics, and to learn about some of the many applications of lasers. Students should also learn how to solve simple problems relating to current applications involving waves and optics"
                moduleOutline={["Geometrical optics",
                    "Introduction to wave theory",
                    "Interference and diffraction of light",
                    "Basics of lasers"]}
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

export default OpticsWavesAndLasers;