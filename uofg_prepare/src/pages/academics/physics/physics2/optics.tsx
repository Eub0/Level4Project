import ContentGrid from "@/components/layout/ContentGrid";

export const Optics = () => {
    return (
        <>
            <ContentGrid
                heading="Optics"
                title="Optics"
                moduleAims="Optics aims to provide a comprehensive exploration of the superposition of light waves, covering both qualitative and quantitative aspects of their interference and diffraction phenomena. 
                Students will gain an in-depth understanding of the properties of electromagnetic waves, with a particular focus on the visible region of the spectrum. 
                The qualitative discussion will involve examining how light waves combine, interfere, and diffract, while the quantitative analysis will delve into the mathematical aspects of these phenomena. 
                Through this study, students will develop a thorough knowledge of the behavior of light waves and their intricate interactions, especially within the visible spectrum."
                moduleOutline={["Understand wave propagation and coherence in optical systems.",
                "Explore interference patterns and their applications in optical instruments.",
                "Analyze diffraction patterns and apply Rayleigh's criterion to optical systems.",
                "Study polarization and birefringence in light waves.",
                "Discuss the applications of various interferometers in optics.",
                "Apply these concepts to solve unseen problems in optics."]}
                usefulWebsites=""
                recommendedReading="Optics, E. Hecht (ISBN 1292021578)"
                cardTitle="Unit Quiz"
                cardText="Take the quiz to test your knowlegde on the topic"
                imgSrc="asasa"
                imgAlt="quiz image"
                link="asdfa"
            />
        </>
    );
}

export default Optics;