const signClickHandler = (e, calc, setCalc) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
        ...calc,
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0,
    });
};

export default signClickHandler;
