import axios from 'axios';
import { BASE_URL } from '../api';
import { getError } from '../utils/errorUtils';

export const createSessionRequest = async (requestData, start, end) => {
  try {
    const { mentorID, ...rest } = requestData;

    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/session-request/create-session-request/${mentorID}`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    requestData = { ...rest, start: start, end: end };

    const { data } = await axios.post(URL, requestData, Config);

    return { status: data.success };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getMySessionRequests = async () => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/session-request/my-session-requests`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(URL, Config);

    return { sessionRequests: data.sessionRequests };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getPendingSessionRequests = async () => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/session-request/my-pending-session-requests`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(URL, Config);

    return { sessionRequests: data.sessionRequests };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const approveSessionRequests = async (
  requestID,
  remark,
  sessionLink
) => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/session-request/accept-session-request/${requestID}`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(URL, { remark, sessionLink }, Config);

    return { status: data.success };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const rejectSessionRequests = async (requestID, remark) => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/session-request/reject-session-request/${requestID}`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(URL, { remark }, Config);

    return { status: data.status };
  } catch (error) {
    return { error: getError(error).message };
  }
};
