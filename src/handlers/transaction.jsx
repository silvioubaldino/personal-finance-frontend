import {setToken, baseUrl} from "./axiosConfig";
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

export {getTransactionsByPeriod}