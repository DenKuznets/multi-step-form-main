import { Checkmark } from '@/lib/svgs';
import { PropsWithChildren } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../Step3';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectPaymentMethod } from '@/lib/redux/slices/appSlice';
import { PAYMENT } from '@/components/Step2/Step2';
import { Addon } from '../../../utils/addons';

export type AddonProps = {
    addon: Addon;
    register?: UseFormRegister<FormValues>;
} & PropsWithChildren;

const AddonCard = ({ addon, register }: AddonProps) => {
    const currentPaymentMethod = useAppSelector(selectPaymentMethod);
    const [price] =
        currentPaymentMethod === PAYMENT.MONTHLY
            ? [`$${addon.priceMonth}/mo`, '']
            : [`$${addon.priceYear}/yr`, '2 months free'];
    return (
        <div
            data-testid="add-on"
            className="relative flex items-center rounded-md px-4 py-[11px] outline outline-1 outline-lightGray transition-all hover:outline-marineBlue lg:px-6 lg:py-5 [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:outline-marineBlue"
        >
            <label
                htmlFor={addon.name}
                className=" absolute left-0 top-0 z-10 h-full w-full cursor-pointer"
            />
            <input
                className={`peer appearance-none checked:border-0`}
                type="checkbox"
                id={addon.name}
                {...(register && register(addon.name))}
            />
            <div
                className={`relative mr-4 h-5 w-5 rounded-[4px] border border-lightGray peer-checked:border-none [&>svg]:hidden peer-checked:[&>svg]:block`}
            >
                <Checkmark className="absolute left-0 top-0 h-full w-full" />
            </div>
            <div className="mr-auto">
                <div className="text-sm font-bold text-marineBlue lg:text-base">
                    {addon.header}
                </div>
                <div className="text-xs text-coolGray lg:text-sm lg:font-medium">
                    {addon.info}
                </div>
            </div>
            <div className="text-xs font-bold text-blue-700 lg:text-sm lg:font-bold">
                {price}
            </div>
        </div>
    );
};

export default AddonCard;
