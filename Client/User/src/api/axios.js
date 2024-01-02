import axios from "axios";

export const USER_PROTECTED_URL = "/users/protected";
export const USER_REGISTER_URL = "/users/register";
export const GET_USER_BY_ID_URL = "/users";
export const CREATE_RESERVATION_URL = "/reservations/create-existing-user";
export const loginRoute = "/users/login";
export const GET_ALL_ROOMS_URL = "/rooms/read";

export const logoutRoute = "/users/logout";
export const allUsersRoute = "/users/all";
export const sendMessageRoute = "/api/messages/sendmsg";
export const recieveMessageRoute = "/api/messages/recievemsg";
export const setAvatarRoute = "/users/setavatar";


export default axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
