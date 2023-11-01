'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Step3 = () => {
    const router = useRouter();

    return (
        <form
            noValidate
            aria-label="select plan form"
            // onSubmit={handleSubmit(onSubmit)}
        >
            
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
