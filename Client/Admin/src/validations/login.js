import { runToast } from "./toast";

export const validateLogin = (username, password) => {
    if (!username) {
        runToast("Please enter your username!", "error");
        return false;
    }

    if (!password) {
        runToast("Please enter your password!", "error");
        return false;
    }
    return true;
}