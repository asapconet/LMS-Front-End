import axios from "axios";
import { LoginUrl, VerifyLoginUrl } from "./BaseURL";

export const client = axios.create({
  baseURL: "https://lms-app-back-end.herokuapp.com/auth/"
});

export const headers = {
  "Content-Type": "application/json",
};


export const verifyToken = async (token) => {
  const response = await fetch(VerifyLoginUrl, {
    method: "POST",
    body: JSON.stringify({ token }),
    headers,
  });

  return response.json();
};
