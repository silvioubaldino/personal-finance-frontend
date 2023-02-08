import {setToken, baseUrl} from "./axiosConfig";
import axios from "axios";

const pathFindAll = "/categories"
async function getAllCategories() {
    const path = baseUrl + pathFindAll;
    const response = await axios.get(path)
        .catch(function (error) {
            console.log(error);
        });
    console.log(response)
    return response
}

export {getAllCategories}