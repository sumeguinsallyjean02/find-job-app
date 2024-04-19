import axios from 'axios'

export const GetAllJobs = async (): Promise<void> => {
    return axios.get('/api/jobs')
}