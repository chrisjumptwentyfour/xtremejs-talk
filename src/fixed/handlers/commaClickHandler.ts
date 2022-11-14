const commaClickHandler = (e, calc, setCalc) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
        ...calc,
        num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
};

export default commaClickHandler;
