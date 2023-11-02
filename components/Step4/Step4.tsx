'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Step4 = () => {
    const router = useRouter();

    return (
        <form
            noValidate
            aria-label="select add-ons form"
            className="text-sm lg:text-base text-coolGray [&_*]:first-letter:capitalize"
            // onSubmit={handleSubmit(onSubmit)}
        >
            <div className="bg-alabaster p-4 mb-6">
                <div className="flex items-center justify-between">
                    <span>
                        <span className="font-bold capitalize text-marineBlue">
                            arcade (monthly)
                        </span>
                        <br />
                        <Link
                            className="capitalize underline"
                            href={'/select-plan'}
                        >
                            change
                        </Link>
                    </span>
                    <span className="font-bold text-marineBlue">$9/mo</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between mb-3">
                    <span>online service</span>
                    <span>+$1/mo</span>
                </div>
                <div className="flex justify-between">
                    <span>larger storage</span>
                    <span>+$2/mo</span>
                </div>
            </div>
            <div className="px-4 flex justify-between">
                <span>total (per month)</span>
                <span className="text-base lg:text-xl font-bold text-blue-700">
                    +$12/mo
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
                    className="btn rounded-[4px] lg:rounded-lg bg-blue-700 h-10 w-24 lg:w-32 lg:h-12 text-white"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Step4;
