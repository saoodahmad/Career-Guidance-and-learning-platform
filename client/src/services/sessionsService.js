import axios from 'axios';
import { BASE_URL } from '../api';
import { getError } from '../utils/errorUtils';

export const getMySessionsToday = async () => {
  try {
    const date = new Date().toDateString();

    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/session/get-my-sessions-by-date/${date}`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(URL, Config);

    return { sessions: data.sessions };
  } catch (error) {
    return { error: getError(error).message };
  }
};
