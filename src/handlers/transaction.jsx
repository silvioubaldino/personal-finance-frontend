import { setToken, baseUrl } from "./axiosConfig";
import axios from "axios";

async function getTransactionsByPeriod(from, to) {
  const path = baseUrl + "/transactions/parent/period";
  const response = await axios.get(path, {
    params: {
      from: from,
      to: to
    }
  })
    .catch(function (error) {
      console.log(error);
    });
  return response
}

async function postTransaction(body) {
  const path = baseUrl + "/transactions";
  const response = await axios.post(path, body);

  return response.status;
}

export { getTransactionsByPeriod, postTransaction }