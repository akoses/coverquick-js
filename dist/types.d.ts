export interface HeaderProps {
    fullName: string;
    email: string;
    phoneNumber: string;
    linkedin: string;
    personalWebsite: string;
    github: string;
    role: string;
    contact: {
        city: string;
        state: string;
        country: string;
    };
}
export interface IndicesStateProps {
    [key: string]: {
        index: number;
        page: number;
    };
}
export interface SummaryProps {
    text: string;
    visible: boolean;
    diffedText?: string;
}
export interface EducationProps {
    school: string;
    graduationDate: string;
    program: string;
    minor: string;
    location: string;
    GPA: string;
    visible: boolean;
    courseWork: string;
    awards: string;
}
export interface EducationPropsArr {
    education: Array<EducationProps>;
}
export interface ExperienceProps {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    diffedDescription?: string;
    visible: boolean;
}
export interface VolunteerProps {
    title: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    diffedDescription?: string;
    visible: boolean;
}
export interface ExperiencePropsArr {
    experience: ExperienceProps[];
}
export interface VolunteerPropsArr {
    volunteer: VolunteerProps[];
}
export interface ProjectProps {
    title: string;
    link: string;
    startDate: string;
    endDate: string;
    description: string;
    visible: boolean;
    diffedDescription?: string;
    skills: string;
}
export interface ProjectPropsArr {
    projects: ProjectProps[];
}
export interface SkillProps {
    sectionName: string;
    section: string;
    visible: boolean;
}
export interface SkillPropsArr {
    skills: SkillProps[];
}
export interface AwardProps {
    name: string;
    dateReceived: string;
    issuer: string;
    details: string;
    visible: boolean;
}
export interface AwardPropsArr {
    awards: AwardProps[];
}
export interface CertificationProps {
    name: string;
    dateReceived: string;
    issuer: string;
    visible: boolean;
}
export interface CertificationPropsArr {
    certifications: CertificationProps[];
}
export interface AccomplishmentsProps {
    text: string;
    visible: boolean;
    diffedText?: string;
}
export interface PublicationProps {
    name: string;
    date: string;
    publisher: string;
    link: string;
    details: string;
    visible: boolean;
}
export interface PublicationPropsArr {
    publications: PublicationProps[];
}
export interface ReferenceProps {
    name: string;
    relationship: string;
    phoneNumber: string;
    email: string;
    visible: boolean;
}
export interface ReferencePropsArr {
    references: ReferenceProps[];
}
export declare type ResumeOptions = HeaderProps | SummaryProps | EducationPropsArr | ExperiencePropsArr | ProjectPropsArr | SkillPropsArr | AwardPropsArr | CertificationPropsArr | AccomplishmentsProps | PublicationPropsArr | ReferencePropsArr | VolunteerPropsArr;
export interface ResumeProps {
    header: HeaderProps;
    summary: SummaryProps;
    education: EducationPropsArr;
    experience: ExperiencePropsArr;
    volunteer: VolunteerPropsArr;
    projects: ProjectPropsArr;
    skills: SkillPropsArr;
    awards: AwardPropsArr;
    certifications: CertificationPropsArr;
    accomplishments: AccomplishmentsProps;
    publications: PublicationPropsArr;
    references: ReferencePropsArr;
    suggestedSkills?: string[];
}
