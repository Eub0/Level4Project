import ContentGrid from "@/components/layout/ContentGrid";

export const OpticsWavesAndLasers = () => {
    return (
        <>
            <ContentGrid
                heading="Optics, Waves, & Lasers"
                title="Optics, Waves, & Lasers"
                moduleAims="Optics, Waves, & Lasers aims to introduce the various aspects of optics, and to provide a good basic understanding of geometric optics and physical optics, as well as the fundamental ideas of wave theory, developed both in physical
                optics and in the behaviour of waves in gases and on strings. Students should  gain an appreciation of the various aspects of physics involved in lasers, including
                optics, waves and atomic physics, and to learn about some of the many applications of lasers. Students should also learn how to solve simple problems relating to current applications involving waves and optics"
                moduleOutline={["Understand light's nature and its study areas: geometrical, physical, and quantum optics.",
                "Explore reflection and refraction in geometrical optics, including image formation by mirrors and lenses.",
                "Grasp wave theory basics, focusing on sinusoidal waves, simple harmonic motion, superposition, interference, and coherence.",
                "Study light's interference and diffraction, including Huygens' principle and Young's double slit experiment.",
                "Comprehend laser fundamentals: coherent/incoherent light sources , stimulated emission, and laser applications."]}
                usefulWebsites=""
                recommendedReading="Young & Freedman 15th Edition"
            />
        </>
    );
}

export default OpticsWavesAndLasers;