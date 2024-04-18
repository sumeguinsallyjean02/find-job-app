import axios from 'axios'

export const CreateJobs = async (
    title: string,
    location: string,
    employmentType: string[],
    description: string
): Promise<void> => {
    return axios.post('/api/jobs/create', {
        title,
        location,
        employment_type: employmentType,
        description
    })
}