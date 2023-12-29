import { NavigationItem } from "@/types/Navigation";
import { TiHome, TiClipboard, TiSocialDribbble } from "react-icons/ti";
import { IoFlask } from "react-icons/io5";


export const navigationItems: NavigationItem[] = [
	{
		name: 'Homepage',
		icon: <TiHome size={20} />,
		path: '/homepage',
	},
    {
        name: 'Academic Resources',
        icon: <TiClipboard size={20}/>,
        path: '/academics',
        subItems: [
            {
                name: 'School of Chemistry',
                icon: <IoFlask size={20}/>,
                path: '/chemistry',
                subSubItems: [
                    {
                        name: 'Chemistry 1',
                        path: '/chemistry1',
                        subSubSubItems:[
                            {
                                name: 'Aqueous Equilibria and pH',
                                path: '/aqueousequilibriaandph'
                            },
                            {
                                name: 'Attractions and Repulsions',
                                path: '/attractionsandrepulsions'
                            },
                            {
                                name: 'Chemical Energy Changes',
                                path: '/chemicalenergychanges'
                            },
                            {
                                name: 'Chemical Kenetics',
                                path: '/chemicalkenetics'
                            },
                            {
                                name: 'Compounds and Molecules',
                                path: '/compoundsandmolecules'
                            },
                            {
                                name: 'Data Analysis',
                                path: '/dataanalysis'
                            },
                            {
                                name: 'Elements and Atoms',
                                path: '/elementsandatoms'
                            },
                            {
                                name: 'Medicinal Chemistry',
                                path: '/medicinalchemistry'
                            },
                            {
                                name: 'Organic Chemistry 1',
                                path: '/organicchemistry1'
                            },
                            {
                                name: 'Organic Chemistry 2',
                                path: '/organicchemistry2'
                            },
                            {
                                name: 'Organic Chemistry 3',
                                path: '/organicchemistry3'
                            },
                            {
                                name: 'Transition Metals',
                                path: '/transitionmetals'
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
		name: 'Extracurriculars',
		icon: <TiSocialDribbble size={20} />,
		path: '/extracurriculars',
	}
]