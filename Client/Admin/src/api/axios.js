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
export const OFFER_URL = "/offer";
export const OFFER_BY_ID_URL = "/offer/";
export const OFFER_UPDATE_URL = "/offer/update/";
export const CREATE_OFFER_URL = "/offer/new";
export const DELETE_OFFER_URL = "/offer/delete";
export const COUNTS_URL = "/reservations/count";


export default axios.create({
  baseURL: "http://localhost:3000",
});
