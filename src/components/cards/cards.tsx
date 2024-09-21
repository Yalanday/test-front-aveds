import React from "react";
//styles
import CardsStyled from "./cards-styled";
//components
import Card from "../card/card";
import {stateCards} from "../../mocks/mocks";

const Cards: React.FC = () => {

    const generateOrder = (num: number): number => {
        if (num === 3) return -1;
        return 0;
    }

    return (
        <CardsStyled>
            {stateCards.map(card => {
                const {id, title, description, img} = card;
                return (<Card
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    img={img}
                    order={generateOrder(id)}
                />)
            })}
        </CardsStyled>
    );
}

export default Cards;
