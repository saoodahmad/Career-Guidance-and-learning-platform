import axios from 'axios';
import { BASE_URL } from '../api';

import { getError } from '../utils/errorUtils';

export const login = async (requestData) => {
  try {
    const URL = `${BASE_URL}/api/auth/login`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(URL, requestData, Config);

    return { token: data.token };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const register = async (requestData) => {
  try {
    const URL = `${BASE_URL}/api/auth/register`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(URL, requestData, Config);

    return { token: data.token };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const resetPassword = async (requestData) => {
  try {
    const URL = `${BASE_URL}/api/auth/reset-password`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(URL, requestData, Config);

    return { data };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const registerAdmin = async (requestData) => {
  try {
    const URL = `${BASE_URL}/api/auth/register-admin`;

    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(URL, requestData, Config);

    return { data };
  } catch (error) {
    return { error: getError(error).message };
  }
};
