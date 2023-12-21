import axios from "axios";

export const USER_PROTECTED_URL = "/users/protected";

export default axios.create({
  baseURL: "http://localhost:3000",
});
