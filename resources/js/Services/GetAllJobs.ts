import axios from 'axios'

export const GetAllJobs = async (
    token
): Promise<void> => {
    return axios.get('/api/jobs', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}