import Image from 'next/image';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues, PAYMENT } from '../Step2';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectPaymentMethod } from '@/lib/redux/slices/appSlice';
import { Plan } from '../../../utils/plans';

export interface PlanCardProps extends React.HTMLAttributes<HTMLDivElement> {
    register?: UseFormRegister<FormValues>;
    plan: Plan;
}

const PlanCard = ({ register, plan }: PlanCardProps) => {
    const currentPaymentMethod = useAppSelector(selectPaymentMethod);
    const [price, offer] =
        currentPaymentMethod === PAYMENT.MONTHLY
            ? [`$${plan.priceMonth}/mo`, '']
            : [`$${plan.priceYear}/yr`, '2 months free'];

    return (
        <label
            data-testid="plan-card"
            tabIndex={-1}
            className="flex w-full cursor-pointer rounded-md p-[0.8rem] outline outline-1 outline-lightGray transition-all hover:outline-marineBlue md:flex-col [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:outline-marineBlue"
        >
            <input
                type="radio"
                className="appearance-none"
                value={plan.name}
                {...(register && register('plan'))}
            />
            <Image
                className="mr-4 md:mb-12"
                src={`./images/${plan.imgUrl}`}
                width={40}
                height={40}
                alt="icon"
            />
            <div>
                <div className="font-bold capitalize text-marineBlue">
                    {plan.name}
                </div>
                <div className="text-coolGray">{price}</div>
                <div
                    className={`overflow-hidden text-marineBlue transition-all first-letter:capitalize ${
                        offer ? 'max-h-10' : 'max-h-0 '
                    }`}
                >
                    {offer}
                </div>
            </div>
        </label>
    );
};

export default PlanCard;
