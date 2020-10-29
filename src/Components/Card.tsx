import classNames from "classnames";
import React from "react";
import pluralHelper from "~/helpers/pluralHelper";

interface CardProps {
    disabled?: boolean;
    selected?: boolean;
}

const Card: React.FC<{}> = () => {
    const prefix = "card"
    const cardClasses = classNames(prefix, {});

    return <div className={cardClasses}>

        {pluralHelper(10, )}
    </div>
    }
;
export default Card;