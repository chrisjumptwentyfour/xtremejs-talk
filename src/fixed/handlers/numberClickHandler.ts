import removeSpaces from "../helpers/removeSpaces";
import toLocaleString from "../helpers/toLocaleString";

const numberClickHandler = (e, calc, setCalc) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
        setCalc({
            ...calc,
            num:
                calc.num === 0 && value === "0"
                    ? 0
                    : removeSpaces(calc.num) % 1 === 0
                        ? toLocaleString(Number(removeSpaces(calc.num + value)))
                        : toLocaleString(calc.num + value),
            res: !calc.sign ? 0 : calc.res,
        });
    }
};

export default numberClickHandler;
