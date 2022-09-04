import axios from "axios";
import {url} from "../env";

export const instance = axios.create({
    baseURL: url
})