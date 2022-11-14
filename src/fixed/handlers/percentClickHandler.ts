import removeSpaces from "../helpers/removeSpaces";

const percentClickHandler = (e, calc, setCalc) => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
        ...calc,
        num: (num /= Math.pow(100, 1)).toString(),
        res: (res /= Math.pow(100, 1)).toString(),
        sign: "",
    });
};

export default percentClickHandler;
