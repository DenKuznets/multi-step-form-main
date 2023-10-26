'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectCurrentStep, selectSteps } from '@/lib/redux/slices/appSlice';
import { PropsWithChildren } from 'react';

const Steps = (props: PropsWithChildren) => {
    const currentStep = useAppSelector(selectCurrentStep);
    const steps = useAppSelector(selectSteps);
    const stepsList = steps.map((step, index) => {
        const stepNumber = index + 1;
        return (
            <li className={`items-center sm:flex sm:gap-x-4`} key={step.name}>
                <div
                    className={`${
                        stepNumber === currentStep
                            ? 'bg-lightBlue text-marineBlue'
                            : 'bg-transparent text-white'
                    } flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-center font-bold `}
                >
                    {stepNumber}
                </div>
                <div className="hidden flex-col justify-center gap-y-1 sm:flex">
                    <div className="text-lightGray text-[0.8rem] uppercase leading-none ">
                        Step {stepNumber}
                    </div>
                    <div className="font-bold leading-none text-white">
                        {step.name}
                    </div>
                </div>
            </li>
        );
    });
    return (
        <div className="relative flex min-h-screen flex-[1] flex-col items-center rounded-xl sm:m-auto sm:h-[37.5rem] sm:min-h-[unset] sm:max-w-[59rem] sm:flex-row sm:items-start sm:bg-white sm:p-4">
            <ul className="flex h-44 w-full flex-row justify-center gap-x-[1.1rem] bg-[url('/images/bg-sidebar-mobile.svg')] bg-[length:100%_100%] bg-no-repeat pt-8 sm:h-full sm:max-w-[17.4rem] sm:flex-col sm:justify-normal sm:gap-y-8 sm:bg-[url('/images/bg-sidebar-desktop.svg')] sm:pl-8 sm:pt-10">
                {stepsList}
            </ul>
            <div className="relative top-[-5rem] px-4 sm:static sm:h-full sm:w-full sm:p-0">
                {props.children}
            </div>
        </div>
    );
};

export default Steps;
