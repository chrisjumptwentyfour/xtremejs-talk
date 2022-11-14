import React, { useState } from "react";

import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import buttonValues from "./helpers/buttonValues";
import manageButtonClicks from "./managers/manageButtonClicks";
import initialState from "./state/initialState";

const Calculator = () => {
    let [calc, setCalc] = useState(initialState);

    return (
        <Wrapper>
            <Screen value={calc.num ? calc.num : calc.res} />
            <ButtonBox>
                {buttonValues.flat().map((btn, i) => {
                    return (
                        <Button
                            key={i}
                            className={btn === "=" ? "equals" : ""}
                            value={btn}
                            onClick={(e) => manageButtonClicks(e, btn, calc, setCalc)}
                        />
                    );
                })}
            </ButtonBox>
        </Wrapper>
    );
};

export default Calculator;