import { CardInfoProps } from "~/components/Card";

const items = [
    { taste: "с фуа-гра", additionalInfo: "Печень утки разварная с артишоками." },
    { taste: "с курой", additionalInfo: "Филе из цыплят с трюфелями в бульоне." },
    {
        taste: "с рыбой",
        additionalInfo: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    },
];

const getRandomCardInfo = (): CardInfoProps => {
    const item = items[getRandomNumber(2)];

    return {
        weight: getWeight(),
        taste: item.taste,
        numberOfGifts: getRandomNumber(100),
        numberOfServings: getRandomNumber(100),
        additionalDescription: item.additionalInfo,
        disabled: !!getRandomNumber(2),
    };
};

const getRandomNumber = (maxNumber: number) => Math.floor(Math.random() * maxNumber);

const getWeight = (): string => (getRandomNumber(100) / 10).toString().replace(".", ",");

export default getRandomCardInfo;
