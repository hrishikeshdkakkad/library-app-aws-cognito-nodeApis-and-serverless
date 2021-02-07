require("dotenv").config();

export const BASE_URL = (): string => process.env.REACT_APP_API_URL as string;
export const NO_USER_SESSION = "No current user";
