
export interface Plan {
    name: string;
    priceMonth: number;
    priceYear: number;
    imgUrl: string;
}

export const Plans: Plan[] = [
    {
        name: 'arcade',
        priceMonth: 9,
        priceYear: 90,
        imgUrl: 'icon-arcade.svg'
    },
    {
        name: 'advanced',
        priceMonth: 12,
        priceYear: 120,
        imgUrl: 'icon-advanced.svg'
    },
    {
        name: 'pro',
        priceMonth: 15,
        priceYear: 150,
        imgUrl: 'icon-pro.svg'
    }
];
