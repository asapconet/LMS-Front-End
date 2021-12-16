import axios from "axios";
import {  VerifyLoginUrl } from "./BaseURL";

export const client = axios.create({
  baseURL: "https://lms-app-back-end.herokuapp.com"
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
