import axios from 'axios'

export const ApproveJob = async (
    id: number,
    status: string,
    token: string
): Promise<void> => {
    return axios.post('/api/jobs/confirm', {
        id,
        status
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}