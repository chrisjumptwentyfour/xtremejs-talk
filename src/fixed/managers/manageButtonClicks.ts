import resetClickHandler from "../handlers/resetClickHandler";
import invertClickHandler from "../handlers/invertClickHandler";
import percentClickHandler from "../handlers/percentClickHandler";
import equalsClickHandler from "../handlers/equalsClickHandler";
import signClickHandler from "../handlers/signClickHandler";
import commaClickHandler from "../handlers/commaClickHandler";
import numberClickHandler from "../handlers/numberClickHandler";

const manageButtonClicks = (e, btn, calc, setCalc) => {
    e.preventDefault();
    switch (btn) {
        case 'C':
            resetClickHandler(e, calc, setCalc);
            break;
        case '+-':
            invertClickHandler(e, calc, setCalc);
            break;
        case "%":
            percentClickHandler(e, calc, setCalc);
            break;
        case "=":
            equalsClickHandler(e, calc, setCalc);
            break;
        case "/":
        case "X":
        case "-":
        case "+":
            signClickHandler(e, calc, setCalc);
            break;
        case ".":
            commaClickHandler(e, calc, setCalc);
            break;
        default:
            numberClickHandler(e, calc, setCalc);
    }
}

export default manageButtonClicks;