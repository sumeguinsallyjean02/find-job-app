interface IJobDescription {
    name: string
    value: string
}

export interface IExternalJobs {
    department:string
    employmentType: string
    id : number
    jobDescriptions: {
        jobDescription: IJobDescription[]
    }
    keywords: string
    name: string
    occupation: string
    occupationCategory : string
    office : string
    recruitingCategory : string
    schedule : string
    seniority : string
    subcompany : string
    yearsOfExperience : string,
    jobType: string

}

export interface IInternalJob {
    created_at: string
    description: string
    employment_type: string[]
    id: number
    location: string
    title: string
    updated_at: string
}