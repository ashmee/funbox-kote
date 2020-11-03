import classNames from "classnames";
import React, { useState } from "react";
import pluralHelper from "~/helpers/pluralHelper";

export interface CardInfoProps {
    weight: string;
    taste: string;
    numberOfGifts: number;
    numberOfServings: number;
    additionalDescription: string;
    disabled?: boolean;
}

interface CardProps {
    selected?: boolean;
    info?: CardInfoProps;
    tabIndex?: number;
}

const Card: React.FC<CardProps> = props => {
    const { info, tabIndex } = props;
    const [selected, setSelected] = useState(false);
    const [description, setDescription] = useState("Сказочное заморское яство");

    const onCardClick = () => {
        if (!props.info?.disabled) {
            setSelected(!selected);
        }
    };

    const onKeyBoardPress = e => {
        if (e.key === "Enter" || e.key === "Space") {
            setSelected(!selected);
        }
    };

    const onCardMouseOn = () => {
        if (selected) {
            setDescription("Котэ не одобряет?");
        }
    };
    const onCardMouseLeave = () => {
        if (selected) {
            setDescription("Сказочное заморское яство");
        }
    };

    const prefix = "card";
    const cardClasses = classNames(prefix, {
        [`${prefix}--disabled`]: info?.disabled,
        [`${prefix}--selected`]: selected,
    });

    const additionalDescriptionPrefix = "card__additional-desc";
    const additionalDescriptionClasses = classNames(additionalDescriptionPrefix, {
        [`${additionalDescriptionPrefix}--disabled`]: info?.disabled,
    });

    const additionalInfoText = info?.disabled ? (
        "Печалька, с рыбой закончился."
    ) : selected ? (
        info?.additionalDescription
    ) : (
        <>
            Чего сидишь? Порадуй котэ,&nbsp;
            <button className={"card__buy-btn"} onClick={onCardClick}>
                купи.
            </button>
        </>
    );

    return (
        <div className={"card-wrapper"}>
            <div className={"card__main"}>
                <div
                    className={cardClasses}
                    onClick={onCardClick}
                    onKeyPress={e => onKeyBoardPress(e)}
                    onMouseEnter={() => onCardMouseOn()}
                    onMouseLeave={() => onCardMouseLeave()}
                    tabIndex={tabIndex}
                >
                    <div className={"card__desc"}>{description}</div>
                    <div className={"card__title"}>Нямушка</div>
                    <div className={"card__taste"}>{info?.taste}</div>
                    {info?.numberOfServings && (
                        <div className={"card__servings"}>
                            {pluralHelper(info?.numberOfServings, ["порция", "порции", "порций"])}
                        </div>
                    )}
                    {info?.numberOfGifts && (
                        <div className={"card__gifts"}>
                            {info?.numberOfGifts === 1
                                ? "мышь"
                                : pluralHelper(info?.numberOfGifts, ["мышь", "мыши", "мышей"])}{" "}
                            в подарок
                        </div>
                    )}
                    <div className={"card__weight weight"}>
                        <div className={"weight__amount"}>{props?.info?.weight ?? 0}</div>
                        <div className={"weight__measure"}>кг</div>
                    </div>
                </div>
            </div>
            <div className={additionalDescriptionClasses}>{additionalInfoText}</div>
        </div>
    );
};

export default Card;
