export const steps = [
    {
        id: 0,
        name: 'personal info',
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

export const PLANS = {
    ARCADE: 'arcade',
    ADVANCED: 'advanced',
    PRO: 'pro'
};

export const SUBSCRIBTION = {
    MONTHLY: 'monthly',
    YEARLY: 'yearly'
};
