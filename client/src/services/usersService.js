import axios from 'axios';
import { BASE_URL } from '../api';

import { getError } from '../utils/errorUtils';

export const getDashboard = async () => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/user/my-dashboard`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(URL, Config);

    return { user: data.user };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getMyProfile = async () => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/user/my-profile`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(URL, Config);

    return { user: data.user };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getUserProfile = async (requestData) => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const userID = requestData;

    const URL = `${BASE_URL}/api/user/get-user-profile/${userID}`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(URL, Config);

    return { user: data.user };
  } catch (error) {
    return { error: getError(error).message };
  }
};
export const updateMyProfile = async (requestData) => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const { image, ...rest } = requestData;
    const URL_UPLOAD_IMAGE = `${BASE_URL}/api/user/upload-profile-image`;

    const Config_Upload_Image = {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
    };

    const ImageData = new FormData();

    ImageData.append('personalPhoto', image);

    const { data: ImageURL } = await axios.post(
      URL_UPLOAD_IMAGE,
      ImageData,
      Config_Upload_Image
    );

    requestData = { ...rest, personalPhotoURL: ImageURL.personalPhotoURL };

    const URL_UPDATE_PROFILE = `${BASE_URL}/api/user/update-my-profile`;

    const Config_Update_Profile = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      URL_UPDATE_PROFILE,
      requestData,
      Config_Update_Profile
    );

    return { user: data.user };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const requestProfileVerification = async (requestData) => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL_DOCUMENT_UPLOAD = `${BASE_URL}/api/profile-verification/upload-verification-document`;

    const Config_Upload_Document = {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
    };

    const DocumentData = new FormData();

    DocumentData.append('verificationdocument', requestData);

    const { data: DocumentURL } = await axios.post(
      URL_DOCUMENT_UPLOAD,
      DocumentData,
      Config_Upload_Document
    );

    requestData = {
      verificationDocumentURL: DocumentURL.verificationDocumentURL,
    };

    const URL_CREATE_VERIFICATION_REQUEST = `${BASE_URL}/api/profile-verification/create-verification-request`;

    const Config_Create_Verification_Request = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      URL_CREATE_VERIFICATION_REQUEST,
      requestData,
      Config_Create_Verification_Request
    );

    return { verificationRequest: data.verificationRequest };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getMyProfileVerificationRequests = async () => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/profile-verification/my-verification-requests`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(URL, Config);

    return { verificationRequests: data.verificationRequests };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getPendingProfileVerificationRequests = async () => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/profile-verification/admin/pending-verification-requests`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(URL, Config);

    return { verificationRequests: data.verificationRequests };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const approveProfileVerificationRequest = async (requestData) => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/profile-verification/admin/approve-user-verification-request`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(URL, requestData, Config);

    return { status: data.success };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const rejectProfileVerificationRequest = async (requestData) => {
  try {
    const tk = localStorage.getItem('token');
    const token = tk ? JSON.parse(tk) : null;

    const URL = `${BASE_URL}/api/profile-verification//admin/reject-user-verification-request`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(URL, requestData, Config);

    return { status: data.success };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getAllMentors = async () => {
  try {
    const URL = `${BASE_URL}/api/user/get-mentors`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(URL, Config);

    return { mentors: data.mentors };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getMentorById = async (mentorID) => {
  try {
    const URL = `${BASE_URL}/api/user/get-mentor-by-id/${mentorID}`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(URL, Config);

    return { mentor: data.mentor };
  } catch (error) {
    return { error: getError(error).message };
  }
};

export const getMentorsByCategory = async (category) => {
  try {
    const URL = `${BASE_URL}/api/user/get-mentors-by-category/${category}`;

    const Config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(URL, Config);

    return { mentors: data.mentors };
  } catch (error) {
    return { error: getError(error).message };
  }
};
