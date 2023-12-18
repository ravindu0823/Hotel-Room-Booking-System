import axios from "axios";

export const LOGIN_URL = "/admins/login";
export const ADMIN_PROTECTED_URL = "/admins/protected";
export const RESERVAION_URL = "/reservations";
export const RESERVATION_BY_ID_URL = "/reservations/";
export const RESERVATION_UPDATE_URL = "/reservations/update/";
export const CREATE_RESERVATION_URL = "/reservations/create-with-new-user";
export const CREATE_RESERVATION_WITH_EXISTING_USER_URL = "/reservations/create-existing-user";
export const GET_ALL_USERS_URL = "/users";
export const DELETE_RESERVATION_URL = "/reservations/delete";

export default axios.create({
  baseURL: "http://localhost:3000",
});
