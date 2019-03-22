import axios from "lib/defaultClient";

export const sendAuthEmail = email =>
  axios.post("/api/auth/send-auth-email", { email });

export const checkEmailExists = email =>
  axios.get(`/api/auth/exists/email/${email}`);
export const checkIdExists = id => axios.get(`/api/auth/exists/id/${id}`);

export const register = () => axios.post("/api/auth/register", {});
export const localLogin = email =>
  axios.post("/api/auth/login/local", { email });

export const checkStatus = () => axios.get("/api/auth/check");
export const logout = () => axios.post("/api/auth/logout");
