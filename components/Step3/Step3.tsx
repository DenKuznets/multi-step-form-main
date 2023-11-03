'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Addon from './Addon/Addon';
import { useAppDispatch } from '@/lib/redux/hooks';

const Step3 = () => {
    
    const dispatch = useAppDispatch();
    const router = useRouter();
    // const [monthly, setMonthly] = useState(false);
    const monthly = true;
    // const [yearly, setYearly] = useState(false);
    const multiplier = monthly ? 1 : 10;
    const period = monthly ? 'mo' : 'yr';
    return (
        <form
            noValidate
            aria-label="select add-ons form"
            // onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-4">
                <Addon
                    header="Online service"
                    info="Access to multiplayer games"
                    price={`+$${1 * multiplier}/${period}`}
                    name="online"
                />
                <Addon
                    header="Larger storage"
                    info="Extra 1TB of cloud save"
                    price={`+$${2 * multiplier}/${period}`}
                    name="storage"
                />
                <Addon
                    header="Customizable Profile"
                    info="Custom theme on your profile"
                    price={`+$${2 * multiplier}/${period}`}
                    name="customize"
                />
            </div>

            <div className="fixed bottom-0  left-0 flex w-full justify-between bg-white p-4 shadow sm:absolute sm:mt-8 sm:p-0 sm:shadow-none md:mb-4">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push('/select-plan');
                    }}
                    className="btn btn-back text-coolGray"
                >
                    Go Back
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push('/summary');
                    }}
                    className="btn btn-next "
                >
                    next step
                </button>
            </div>
        </form>
    );
};

export default Step3;
