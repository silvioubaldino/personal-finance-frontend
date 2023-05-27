import axios from "axios";
import {readStorage} from "../utils/handleLocalStorage";

const defaultURL = "http://localhost:8080";
const baseUrl = process.env.REACT_APP_BASE_URL || defaultURL;

axios.defaults.headers.common['user_token'] = readStorage();

function setToken(instance, token) {
  instance.headers.common["token"] = token
}

export { setToken, baseUrl }