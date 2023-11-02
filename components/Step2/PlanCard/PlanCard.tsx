import Image from 'next/image';
import React from 'react';

export interface PlanCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imgUrl: string;
    planName: string;
    planInfo: string;
    offer?: string;
}

const PlanCard = ({ offer, imgUrl, planName, planInfo }: PlanCardProps) => {
    return (
        <div
            data-testid="plan-card"
            tabIndex={-1}
            className="flex w-full cursor-pointer rounded-md p-[0.8rem] outline outline-1 outline-lightGray focus:bg-alabaster transition-all hover:outline-marineBlue focus:outline-marineBlue md:flex-col"
        >
            <Image
                className="mr-4 md:mb-12"
                src={imgUrl}
                width={40}
                height={40}
                alt="icon"
            />
            <div>
                <div className="font-bold text-marineBlue">{planName}</div>
                <div className="text-coolGray">{planInfo}</div>
                {offer && <div className='text-marineBlue first-letter:capitalize'>{offer}</div>}
            </div>
        </div>
    );
};

export default PlanCard;
