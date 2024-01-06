import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    bodyStyle: {
    fontFamily: "Inter",
    fontSize: "1rem",
    },
}

export const runToast = (message, type) => {
    if (type === "error") {
        toast.error(message, toastOptions);
    } else if (type === "success") {
        toast.success(message, toastOptions);
    } else if (type === "info") {
        toast.info(message, toastOptions);
    } else if (type === "warn") {
        toast.warn(message, toastOptions);
    }
}