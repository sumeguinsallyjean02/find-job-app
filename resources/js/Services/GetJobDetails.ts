import axios from 'axios'

export const GetJobDetails = async (
    id: number
): Promise<void> => {
    return axios.post('/api/jobs/detail', {id})
}