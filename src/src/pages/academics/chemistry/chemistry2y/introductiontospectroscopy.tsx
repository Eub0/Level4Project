import ContentGrid from "@/components/layout/ContentGrid";

export const IntroductionToSpectroscopy = () => {
    return (
      <>
        <ContentGrid
                heading="Introduction to Spectroscopy"
                title="Introduction to Spectroscopy"
                moduleAims="Introduction to Spectroscopy aims to explain the different ways in which electromagnetic radiation may interact with molecules and how this may be used to determine molecular structure. It also aims to introduce the theory behind electronic and vibrational spectroscopy and NMR and mass spectrometry, as well as enable students to use IR and NMR spectroscopy for simple structure determinations."
                moduleOutline={["Understand electronic and vibrational spectroscopy principles.",
                "Study NMR and mass spectrometry techniques.",
                "Apply spectroscopic methods for molecular analysis."]}
                usefulWebsites=""
                recommendedReading=""
            />
        </>
    );
}

export default IntroductionToSpectroscopy;