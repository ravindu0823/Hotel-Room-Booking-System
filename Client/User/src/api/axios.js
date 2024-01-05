import axios from "axios";

export const USER_PROTECTED_URL = "/users/protected";
export const USER_REGISTER_URL = "/users/register";
export const GET_USER_BY_ID_URL = "/users";
export const CREATE_RESERVATION_URL = "/reservations/create-existing-user";
export const USER_LOGIN = "/users/login";
export const GET_ALL_ROOMS_URL = "/rooms/read";
export const GET_ROOM_BY_ID = "/rooms";
export const GET_ALL_OFFERS_URL = "/offers";
export const GET_ALL_FOOD_URL = "/foods/read";
export const GET_FOOD_BY_ID = "/foods";
export const GET_RESERVATION_BY_ID_URL = "/reservations";
export const GET_RESERVATION_BY_USER_ID_URL = "/reservations/user";
export const DELETE_RESERVATION_URL = "/reservations/delete";
export const CREATE_PAYMENT_URL = "/payment/create";
export const SEND_FEEDBACK = "/feedback/new";

export const logoutRoute = "/users/logout";
export const allUsersRoute = "/users/all";
export const sendMessageRoute = "/api/messages/sendmsg";
export const recieveMessageRoute = "/api/messages/recievemsg";
export const setAvatarRoute = "/users/setavatar";


export default axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
