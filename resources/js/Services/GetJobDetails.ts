import axios from 'axios'

export const GetJobDetails = async (
    id: number,
    token: string
): Promise<void> => {
    return axios.post('/api/jobs/detail', {id}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}