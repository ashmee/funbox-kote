import React from "react";
import Card from "~/components/Card";
import getRandomCardInfo from "~/helpers/getRandomCardInfo";

const Content: React.FC = () => {
    const cards = [...Array(3)].map(() => getRandomCardInfo());

    return (
        <div className={"cards-wrapper"}>
            {cards.map((cardInfo, index) => (
                <Card key={index} info={cardInfo} tabIndex={index + 1} />
            ))}
        </div>
    );
};
export default Content;
