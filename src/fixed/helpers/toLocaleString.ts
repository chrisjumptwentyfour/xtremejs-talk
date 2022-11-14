const toLocaleString = (num) => {
    return String(num)
        .replace(
            /(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,
            "$1 "
        );
};

export default toLocaleString;
