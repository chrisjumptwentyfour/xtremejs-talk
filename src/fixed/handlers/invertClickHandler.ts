import invertedNumberOrZero from "../helpers/invertedNumberOrZero";

const invertClickHandler = (e, calc, setCalc) => {
    setCalc({
        ...calc,
        num: invertedNumberOrZero(calc.num),
        res: invertedNumberOrZero(calc.res),
        sign: "",
    });
};

export default invertClickHandler;
