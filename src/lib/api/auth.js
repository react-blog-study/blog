import axios from "lib/defaultClient";

export const sendAuthEmail = email =>
  axios.post("/api/auth/send-auth-email", { email });
