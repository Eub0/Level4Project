import ContentGrid from "@/components/layout/ContentGrid";

export const MedicinalChemistry = () => {
    return (
      <>
        <ContentGrid
                heading="Medicinal Chemistry"
                title="Medicinal Chemistry"
                moduleAims="Medical Chemistry aims to discuss macromolecules within the context of diabetes, human cell membrane and bacteria/plant cell wall."
                moduleOutline={["Medicinal chemistry of diabetes (The process of glucose uptake)",
                "DNA of α-amylase. Transcription. RNA of α-glucosidase",
                "Translation. Insulin amino acids. Structure of insulin receptor",
                "Glucose transportation into human cells, phospholipid bilayer, phospholipids, glycoglycerolipids, lipids (fatty acids)",
                "Triglycerides, glucose transportation into bacterial (gram-positive and negative) cells",
                "Glucose source, monitoring, metabolism, and storage (starch and carbohydrate)",
                "Glucose storage in plant cell wall, lignin, and synthetic macromolecules",
                "Figure out all the macromolecules (and their monomers) involved in diabetes"]}
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

export default MedicinalChemistry;