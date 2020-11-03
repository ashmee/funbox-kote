const pluralHelper = (num: number = 0, forms: string[]): string => {
    const pluralType =
        num % 10 === 1 && num % 100 !== 11
            ? 0
            : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
            ? 1
            : 2;
    const pluralString = forms[pluralType] === undefined ? "" : forms[pluralType];

    return `${num} ${pluralString}`;
};

export default pluralHelper;
