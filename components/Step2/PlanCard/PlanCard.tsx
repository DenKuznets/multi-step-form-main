import Image from 'next/image';
import React from 'react';

export interface PlanCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imgUrl: string;
    planName: string;
    planInfo: string;
    offer?: string;
    defaultChecked?: boolean;
}

const PlanCard = ({
    defaultChecked = false,
    offer,
    imgUrl,
    planName,
    planInfo
}: PlanCardProps) => {
    return (
        <label
            data-testid="plan-card"
            tabIndex={-1}
            className="flex w-full cursor-pointer rounded-md p-[0.8rem] outline outline-1 outline-lightGray transition-all hover:outline-marineBlue md:flex-col [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:outline-marineBlue"
        >
            <input
                defaultChecked={defaultChecked}
                type="radio"
                className="appearance-none"
                name="plan"
            />
            <Image
                className="mr-4 md:mb-12"
                src={imgUrl}
                width={40}
                height={40}
                alt="icon"
            />
            <div>
                <div className="font-bold text-marineBlue capitalize">{planName}</div>
                <div className="text-coolGray">{planInfo}</div>
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
