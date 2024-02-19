import ContentGrid from "@/components/layout/ContentGrid";

export const DataAnalysis = () => {
    return (
      <>
        <ContentGrid
                heading="Data Analysis"
                title="Data Analysis"
                moduleAims="Data Analysis aims to introduce the systematic treatment of physical quantities and units in the SI system; to introduce concepts of statistical analysis and statistical tools applicable to datasets typically encountered in a laboratory exercise."
                moduleOutline={["The SI system: foundations, base units, derived units, multiplier prefixes",
                "Calculus of units",
                "Statistics of measurements: distributions and variability, sample and population, variability of individuals and variability of means",
                "Precision and accuracy, random and systematic errors"]}
                usefulWebsites=""
                recommendedReading=""
            />
        </>
    );
}

export default DataAnalysis;