import axios from "axios";
import baseUrl from '../../config'

export const login = (email, password) => axios.post(`${baseUrl}/api/v1/login`,{email, password});

export const registerApi = (account) => axios.post(`${baseUrl}/api/v1/register`,account);
