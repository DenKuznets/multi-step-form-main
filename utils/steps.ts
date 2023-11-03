export const steps = [
    {
        id: 0,
        name: 'your info',
        header: 'personal info',
        description:
            'please provide your name, email address, and phone number.',
        url: 'personal-info'
    },
    {
        id: 1,
        name: 'select plan',
        header: 'select your plan',
        description: 'you have the option of monthly or yearly billing.',
        url: 'select-plan'
    },
    {
        id: 2,
        name: 'add-ons',
        header: 'pick add-ons',
        description: 'add-ons help enhance your gaming experience.',
        url: 'add-ons'
    },
    {
        id: 3,
        name: 'summary',
        header: 'finishing up',
        description: 'double-check everything looks OK before confirming.',
        url: 'summary'
    }
];

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

export const PAYMENT = {
    MONTHLY: 'monthly',
    YEARLY: 'yearly'
};

export const Addons = {
    ONLINE: 'online',
    STORAGE: 'storage',
    CUSTOMIZE: 'customize'
};
