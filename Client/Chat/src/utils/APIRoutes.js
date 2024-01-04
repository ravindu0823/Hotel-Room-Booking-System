export const host =
  process.env.NODE_ENV === "production"
    ? "http://159.223.74.216:3000"
    : "http://localhost:3000";
export const loginRoute = `${host}/chat/login`;
export const registerRoute = `${host}/chat/register`;
export const logoutRoute = `${host}/chat/logout`;
export const allUsersRoute = `${host}/chat/all-users`;
export const sendMessageRoute = `${host}/messages/addmsg`;
export const recieveMessageRoute = `${host}/messages/getmsg`;
export const setAvatarRoute = `${host}/chat/set-avatar`;
