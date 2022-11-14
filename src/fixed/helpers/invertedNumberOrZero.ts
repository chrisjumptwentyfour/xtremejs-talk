import toLocaleString from "./toLocaleString";
import removeSpaces from "./removeSpaces";

const invertedNumberOrZero = (number) => {
    return number ? toLocaleString(removeSpaces(number) * -1) : "0";
}

export default invertedNumberOrZero;
