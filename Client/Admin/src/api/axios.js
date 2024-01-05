import axios from "axios";

export const LOGIN_URL = "/admins/login";
export const ADMIN_PROTECTED_URL = "/admins/protected";
export const RESERVAION_URL = "/reservations";
export const RESERVATION_BY_ID_URL = "/reservations";
export const RESERVATION_UPDATE_URL = "/reservations/update";
export const CREATE_RESERVATION_URL = "/reservations/create-with-new-user";
export const CREATE_RESERVATION_WITH_EXISTING_USER_URL = "/reservations/create-existing-user";
export const GET_ALL_USERS_URL = "/users";
export const DELETE_RESERVATION_URL = "/reservations/delete";
export const OFFER_URL = "/offers";
export const OFFER_BY_ID_URL = "/offers/";
export const OFFER_UPDATE_URL = "/offers/update";
export const CREATE_OFFER_URL = "/offers/new";
export const DELETE_OFFER_URL = "/offers/delete";
export const COUNTS_URL = "/reservations/count";
export const CREATE_NEW_FOOD_URL = "/foods/new";
export const CREATE_NEW_ROOM_URL = "/rooms/new";
export const GET_ALL_FOOD_URL = "/foods/read";
export const DELETE_FOOD_BY_ID_URL = "/foods";
export const GET_ALL_ROOMS_URL = "/rooms/read";
export const DELETE_ROOM_BY_ID_URL = "/rooms";
export const GET_FOOD_BY_ID_URL = "/foods";
export const UPDATE_FOOD_BY_ID_URL = "/foods";
export const GET_ROOM_BY_ID_URL = "/rooms";
export const UPDATE_ROOM_BY_ID_URL = "/rooms";
export const CREATE_NEW_STAFF_URL = "/staff/new";
export const GET_ALL_STAFF_URL = "/staff/read";
export const DELETE_STAFF_BY_ID_URL = "/staff";
export const UPDATE_STAFF_BY_ID_URL = "/staff";
export const GET_STAFF_BY_ID_URL = "/staff";
export const GET_PAYMENTS = "/payment";

export default axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
