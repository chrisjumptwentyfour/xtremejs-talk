const math = (a, b, sign) => {
    let result = 0;

    switch (sign) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "X":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }

    return result;
}

export default math;
