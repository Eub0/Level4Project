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
                                name: 'Attractions and Repulsions',
                                path: '/attractionsandrepulsions'
                            },
                            {
                                name: 'Compounds and Molecules',
                                path: '/compoundsandmolecules'
                            },
                            {
                                name: 'Elements and Atoms',
                                path: '/elementsandatoms'
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