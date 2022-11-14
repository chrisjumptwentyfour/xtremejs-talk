const removeSpaces = (num) => {
    return num.toString().replace(
        /\s/g,
        ""
    );
};

export default removeSpaces;