import { LoginUrl, VerifyLoginUrl } from "./BaseURL";
const headers = {
  "Content-Type": "application/json",
};

export const loginUser = async (username, password) => {
  const response = await fetch(LoginUrl, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers,
  });

  return response
};

export const verifyToken = async (token) => {
  const response = await fetch(VerifyLoginUrl, {
    method: "POST",
    body: JSON.stringify({ token }),
    headers,
  });

  return response.json();
};
