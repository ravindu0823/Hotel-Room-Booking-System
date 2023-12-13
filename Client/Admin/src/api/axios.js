import axios from "axios";

export const LOGIN_URL = "/admins/login";
export const ADMIN_PROTECTED_URL = "/admins/protected";

export default axios.create({
    baseURL: "http://localhost:3000",
    
    });