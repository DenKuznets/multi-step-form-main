'use client';
import { useState } from 'react';
import PlanCard from './PlanCard/PlanCard';

const Step2 = () => {
    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);
    const multiplier = monthly ? 1 : 10;
    const period = monthly ? "mo" : "yr";
    return (
        <div>
            <div className="flex flex-col gap-4">
                <PlanCard
                    imgUrl="./images/icon-arcade.svg"
                    planName="Arcade"
                    planInfo={`$${9 * multiplier}/${period}`}
                />
                <PlanCard
                    imgUrl="./images/icon-advanced.svg"
                    planName="Advanced"
                    planInfo={`$${12 * multiplier}/${period}`}
                />
                <PlanCard
                    imgUrl="./images/icon-pro.svg"
                    planName="Pro"
                    planInfo={`$${15 * multiplier}/${period}`}
                />
            </div>
            <div className="mt-4 flex items-center justify-center gap-5 rounded-md bg-alabaster p-4 font-medium">
                <div className={monthly ? 'text-marineBlue' : 'text-coolGray'}>
                    Monthly
                </div>
                <div
                    onClick={() => {
                        setMonthly(!monthly);
                        setYearly(!yearly);
                    }}
                    className={`relative flex h-5 w-10 cursor-pointer items-center rounded-full bg-marineBlue px-1 `}
                >
                    <div
                        className={`relative h-3 w-3 rounded-full bg-white transition-all ${
                            monthly ? 'left-0' : 'left-full -translate-x-full'
                        }`}
                    ></div>
                </div>
                <div className={yearly ? 'text-marineBlue' : 'text-coolGray'}>
                    Yearly
                </div>
            </div>
            <div className="fixed bottom-0 left-0 flex w-full justify-between shadow sm:shadow-none bg-white p-4 sm:absolute sm:mb-4 sm:p-0">
                <button className="btn btn-back text-coolGray">Go Back</button>
                <button className="btn btn-next ">next step</button>
            </div>
        </div>
    );
};

export default Step2;
