import Mission, { MissionType } from "../../types/mission"

const missions: Array<Mission> = [
    {
        id: 1,
        title: "SeeIT Digital website",
        description: "The website of my own web agency SeeIT Digital",
        type: MissionType.Freelance,
        highlights: [
            'Nuxt',
            'Design',
            'SEO'
        ]
    },
    {
        id: 2,
        title: "SeeIT Digital hosting stack",
        description: "The VPS setup for SeeIT Digital, including: reverse proxies, dockerized apps and databases. " +
            "Optimized for hosting website and systems for multiple customers",
        type: MissionType.Freelance,
        highlights: [
            'Nuxt',
            'Design',
            'SEO'
        ]
    },
    {
        id: 3,
        title: "SB Web Solutions website",
        description: "The website of my own web development business SB Web Solutions",
        type: MissionType.Freelance,
        highlights: [
            'Laravel',
            'Design'
        ]
    },
    {
        id: 4,
        title: "SB Web Solutions hosting stack",
        description: "The VPS setup for SB Web Solutions, including: reverse proxies, dockerized apps and databases. " +
            "Built to host websites and systems for multiple customers",
        type: MissionType.Freelance,
        highlights: [
            'Docker',
            'Reverse proxy',
            'Infra'
        ]
    },
    {
        id: 5,
        title: "Profit in Recruitment website",
        description: "The website of recruitment agency Profit in Recruitment",
        type: MissionType.Freelance,
        highlights: [
            'Laravel',
            'Vue',
            'Design'
        ]
    },
    {
        id: 6,
        title: "TBB Express",
        description: "A transport management system (TMS) for TBB Express, covering the planning and handling of shipments",
        type: MissionType.Employer,
        highlights: [
            'TMS',
            'Logistics',
            'Full-stack'
        ]
    },
    {
        id: 7,
        title: "Modern Numismatics International",
        description: "Development work for Modern Numismatics International, a company in the coin trade",
        type: MissionType.Employer,
        highlights: [
            'Laravel',
            'Full-stack',
            'Infra'
        ]
    },
    {
        id: 8,
        title: "COTIT",
        description: "Internal project COTIT",
        type: MissionType.Internal,
        highlights: [
            'Full-stack'
        ]
    },
]

export default missions
