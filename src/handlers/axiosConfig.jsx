import axios from "axios";
import {readStorage} from "../utils/handleLocalStorage";

const baseUrl = "http://127.0.0.1:8080"

axios.defaults.headers.common['user_token'] = readStorage();

function setToken(instance, token) {
  instance.headers.common["token"] = token
}

export { setToken, baseUrl }