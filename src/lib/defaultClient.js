import axios from "axios";

axios.defaults.withCredentials = true;

const baseUrl = (() => {
  return "/";
})();

const defaultClient = axios.create({
  baseUrl,
  withCredentials: true
});

export default defaultClient;
