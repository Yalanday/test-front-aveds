type CardMocksType = {
    id: number;
    img: string;
    title: string;
    description: string;
    order?: number;
}
export const stateCards: CardMocksType[] = [
    {
        id: 1,
        img: '/img/cardiogram.svg',
        title: "Онлайн-прием",
        description: "Рыба текст"
    },
    {
        id: 2,
        img: '/img/stethoscope.svg',
        title: "Экстренный Случай",
        description: "Рыба текст"
    },
    {
        id: 3,
        img: '/img/medical-history.svg',
        title: "Лечение рака",
        description: "Рыба текст"
    }
]
