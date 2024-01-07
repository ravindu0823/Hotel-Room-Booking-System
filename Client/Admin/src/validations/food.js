import { runToast } from "./toast";

export const validateAddFood = (foodName, foodCategory, foodType, price, persons, spicinessLevel) => {
    if (!foodName) {
        runToast("Please enter food name!", "error");
        return false;
    }

    if (!foodCategory) {
        runToast("Please enter food category!", "error");
        return false;
    }

    if (!foodType) {
        runToast("Please enter food type!", "error");
        return false;
    }

    if (!price) {
        runToast("Please enter price!", "error");
        return false;
    }

    if (!persons) {
        runToast("Please enter number of persons!", "error");
        return false;
    }

    if (!spicinessLevel) {
        runToast("Please enter Spiciness Level!", "error");
        return false;
    }

    return true;
    
}