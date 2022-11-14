import initialState from "../state/initialState";

const resetClickHandler = (e, calc, setCalc) => {
    setCalc(initialState);
};

export default resetClickHandler;
