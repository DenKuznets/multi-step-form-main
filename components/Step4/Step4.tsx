'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Step4 = () => {
    const router = useRouter();
    // const [monthly, setMonthly] = useState(false);
    const monthly = false;
    // const [yearly, setYearly] = useState(false);
    const multiplier = monthly ? 1 : 10;
    const period = monthly ? 'mo' : 'yr';

    return (
        <form
            noValidate
            aria-label="select add-ons form"
            className="text-sm text-coolGray  [&_*]:first-letter:capitalize"
            // onSubmit={handleSubmit(onSubmit)}
        >
            <div className="mb-6 bg-alabaster p-4 lg:p-6">
                <div className="flex items-center justify-between">
                    <span>
                        <span className="font-bold capitalize text-marineBlue lg:text-base">
                            arcade (monthly)
                        </span>
                        <br />
                        <Link
                            className="capitalize underline hover:text-purplishBlue transition-all"
                            href={'/select-plan'}
                        >
                            change
                        </Link>
                    </span>
                    <span className="lg:text-base font-bold text-marineBlue">{`$${
                        9 * multiplier
                    }/${period}`}</span>
                </div>
                <hr className="my-3 lg:my-6" />
                <div className="mb-3 flex justify-between">
                    <span>online service</span>
                    <span className='text-marineBlue'>{`+$${1 * multiplier}/${period}`}</span>
                </div>
                <div className="flex justify-between">
                    <span>larger storage</span>
                    <span className='text-marineBlue'>{`+$${2 * multiplier}/${period}`}</span>
                </div>
            </div>
            <div className="flex justify-between px-4">
                <span>total (per month)</span>
                <span className="text-base font-bold text-blue-700 lg:text-xl">
                    {`+$${12 * multiplier}/${period}`}
                </span>
            </div>
            <div className="fixed bottom-0  left-0 flex w-full justify-between bg-white p-4 shadow sm:absolute sm:mt-8 sm:p-0 sm:shadow-none md:mb-4">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push('/add-ons');
                    }}
                    className="btn btn-back text-coolGray"
                >
                    Go Back
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        // router.push('/summary');
                    }}
                    className="btn h-10 w-24 rounded-[4px] bg-blue-700 text-white lg:h-12 lg:w-32 lg:rounded-lg hover:bg-pastelBlue transition-all"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Step4;
