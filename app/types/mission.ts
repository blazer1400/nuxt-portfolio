export enum MissionType {
    Employer = 'employer',
    Freelance = 'freelance',
    Internal = 'internal'
}

type Mission = {
    id: number,
    title: string,
    description: string,
    type: MissionType,
    highlights: Array<string>
}

export default Mission
