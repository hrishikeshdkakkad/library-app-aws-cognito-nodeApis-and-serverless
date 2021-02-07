import { Auth } from "aws-amplify";

export const isAuthenticated = async (): Promise<boolean> => {
  const sessionDetails = await Auth.currentSession();
  const token = await sessionDetails.getAccessToken().getJwtToken();
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const sessionDetails = async (): Promise<string> => {
  try {
    const sessionDetails = await Auth.currentSession();
    const token = sessionDetails.getAccessToken().getJwtToken();
    return token;
  } catch (error) {
    return error;
  }
};
