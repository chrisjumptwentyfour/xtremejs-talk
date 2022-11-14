import toLocaleString from "../helpers/toLocaleString";
import removeSpaces from "../helpers/removeSpaces";
import math from "../helpers/math";

const equalsClickHandler = (e, calc, setCalc) => {
    if (calc.sign && calc.num) {
        setCalc({
            ...calc,
            res:
                calc.num === "0" && calc.sign === "/"
                    ? "Can't divide with 0"
                    : toLocaleString(
                        math(
                            Number(removeSpaces(calc.res)),
                            Number(removeSpaces(calc.num)),
                            calc.sign
                        )
                    ),
            sign: "",
            num: 0,
        });
    }
};

export default equalsClickHandler;
