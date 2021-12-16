import axios from "axios";
import {  BaseURL, VerifyLoginUrl } from "./BaseURL";

export const client = axios.create({
  baseURL: BaseURL
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
