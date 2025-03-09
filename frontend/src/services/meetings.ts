
import axios from 'axios'
import Draft from '../models/meeting/meetingDraft'
import Meeting from '../models/meeting/meeting';

class Meetings {

    async getPerJob(groupId: string): Promise<Meeting[]> {
        const response = await axios.get<Meeting[]>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/${groupId}`);
        return response.data;
    }
    

        async add(draft: Draft): Promise<Meeting> {
            const response = await axios.post<Meeting>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings`, draft);
            return response.data; 
        }
    

    async remove(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/${id}`)
        const isDeleted = response.data
        return isDeleted
    }
}

const meetingsService = new Meetings()
export default meetingsService