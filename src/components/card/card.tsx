import React from "react";
//styles
import CardStyled from "./card-styled";
//types
import {PropsCard} from "../../types/types";


const Card: React.FC<PropsCard> = ({title, description, img, id, order}) => {
    return (
        <CardStyled order={order} className="card">
            <div className="card__icon">
                <img src={img} alt={title}/>
            </div>
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
        </CardStyled>
    );
}
export default Card;
