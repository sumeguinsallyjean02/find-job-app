import axios from 'axios'

export const CreateJobs = async (
    {
        title, 
        location,
        employmentType,
        description
    },
    token: string
): Promise<void> => {

    return axios.post('/api/jobs/create', {
        title,
        location,
        employment_type: employmentType,
        description
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}