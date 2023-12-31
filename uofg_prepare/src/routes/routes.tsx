import { NavigationItem } from "@/types/Navigation";
import { TiClipboard, TiSocialDribbble, TiHomeOutline } from "react-icons/ti";
import { IoFlask } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { BsCalendar2Week } from "react-icons/bs"

export const navigationItems: NavigationItem[] = [
	{
		name: 'Homepage',
		icon: <TiHomeOutline size={20} />,
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
                    },
                    {
                        name: 'Chemistry 2X',
                        path: '/chemistry2x',
                        subSubSubItems:[
                            {
                                name: 'Enols and Enolates',
                                path: '/enolsandenolates'
                            },
                            {
                                name: 'Isomerism and Sterochemistry',
                                path: '/isomerismandsterochemistry'
                            },
                            {
                                name: 'Main Group Chemistry',
                                path: '/maingroupchemistry'
                            },
                            {
                                name: 'Orgonometallic Chemistry',
                                path: '/orgonometallicchemistry'
                            },
                            {
                                name: 'Principles of Spectroscopy',
                                path: '/principlesofspectroscopy'
                            },
                            {
                                name: 'Quantum Mechanics and Chemical Bonding',
                                path: '/quantummechanicsandchemicalbonding'
                            },
                            {
                                name: 'Solids and Surfaces',
                                path: '/solidsandsurfaces'
                            }
                        ]
                    },
                    {
                        name: 'Chemistry 2Y',
                        path: '/chemistry2y',
                        subSubSubItems:[
                            {
                                name: 'Applied Organic Chemistry',
                                path: '/appliedorganicchemistry'
                            },
                            {
                                name: 'Aromatic Chemistry',
                                path: '/aromaticchemistry'
                            },
                            {
                                name: 'Chemical Thermodynamics',
                                path: '/chemicalthermodynamics'
                            },
                            {
                                name: 'Co-Ordination Chemistry',
                                path: '/coordinationchemistry'
                            },
                            {
                                name: 'Introduction to Spectroscopy',
                                path: '/introductiontospectroscopy'
                            },
                            {
                                name: 'Organic Synthesis',
                                path: '/organicsynthesis'
                            },
                            {
                                name: 'Solutions and Electrochemistry',
                                path: '/solutionsandelectrochemistry'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'School of Physics',
                icon: <IoFlask size={20}/>,
                path: '/physics',
            },
            {
                name: 'The English Language',
                icon: <IoFlask size={20}/>,
                path: '/englishlanguage',
            }
        ]
    },
    {
		name: 'Timetable',
		icon: <BsCalendar2Week size={20} />,
		path: '/timetable',
	},
    {
        name: 'Contacts',
        icon: <RiContactsLine size={20} />,
		path: '/contacts',
    },
    {
		name: 'To-Do',
		icon: <LuListTodo size={20} />,
		path: '/todo',
	},
    {
		name: 'Extracurriculars',
		icon: <TiSocialDribbble size={20} />,
		path: '/extracurriculars',
	}
]