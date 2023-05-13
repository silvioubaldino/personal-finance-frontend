import { setToken, baseUrl } from "./axiosConfig";
import axios from "axios";

async function getTransactionsByPeriod(from, to) {
  const path = baseUrl + "/transactions/period";
  const period = path + `?from=${from}&to=${to}`
  const response = await axios.get(period)
    .catch(function (error) {
      console.log(error);
    });

  return response.data
}

async function postTransaction(body) {
  const path = baseUrl + "/movements/";
  const response = await axios.post(path, body);

  return response.status;
}

export { getTransactionsByPeriod, postTransaction }