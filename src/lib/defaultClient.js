import axios from "axios";

const baseUrl = (() => {
  return "/";
})();

const defaultClient = axios.create({
  baseUrl,
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  //withCredentials: false, // default
  withCredentials: true
});

export default defaultClient;
