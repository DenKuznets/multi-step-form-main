
export interface Addon {
    name: string;
    priceMonth: number;
    priceYear: number;
    header: string;
    info: string;
    selected?: boolean;
}

export const Addons: Addon[] = [
    {
        name: 'online',
        priceMonth: 1,
        priceYear: 10,
        header: 'Online service',
        info: 'Access to multiplayer games'
    },
    {
        name: 'storage',
        priceMonth: 2,
        priceYear: 20,
        header: 'Larger storage',
        info: 'Extra 1TB of cloud save'
    },
    {
        name: 'customize',
        priceMonth: 2,
        priceYear: 20,
        header: 'Customizable Profile',
        info: 'Custom theme on your profile'
    }
];
