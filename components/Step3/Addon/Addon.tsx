import { Checkmark } from '@/lib/svgs';
import { PropsWithChildren } from 'react';

export type AddonProps = {
    header: string;
    info: string;
    price: string;
    name: string;
} & PropsWithChildren

const Addon = ({header, info, price, name, }: AddonProps) => {
    return (
        <div className="relative flex items-center rounded-md px-4 py-[11px] outline outline-1 outline-lightGray [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:outline-marineBlue lg:px-6 lg:py-5">
            <label
                htmlFor={name}
                className=" absolute left-0 top-0 z-10 h-full w-full cursor-pointer"
            />
            <input
                className={`peer appearance-none checked:border-0`}
                type="checkbox"
                name={name}
                id={name}
            />
            <div
                className={`relative mr-4 h-5 w-5 rounded-[4px] border border-lightGray peer-checked:border-none [&>svg]:hidden peer-checked:[&>svg]:block`}
            >
                <Checkmark className="absolute left-0 top-0 h-full w-full" />
            </div>
            <div className="mr-auto">
                <div className="text-sm lg:text-base font-bold text-marineBlue">
                    {header}
                </div>
                <div className="text-xs lg:text-sm lg:font-medium text-coolGray">{info}</div>
            </div>
            <div className="text-xs lg:text-sm lg:font-bold font-bold text-blue-700">{price}</div>
        </div>
    );
};

export default Addon;
