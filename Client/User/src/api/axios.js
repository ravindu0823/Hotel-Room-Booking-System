import axios from "axios";

export const USER_PROTECTED_URL = "/users/protected";
export const USER_REGISTER_URL = "/users/register";
export const GET_USER_BY_ID_URL = "/users";
export const CREATE_RESERVATION_URL = "/reservations/create-existing-user";

export default axios.create({
  baseURL: "http://localhost:3000",
});
