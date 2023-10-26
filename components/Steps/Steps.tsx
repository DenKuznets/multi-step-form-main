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
                <div className="hidden flex-col justify-center sm:flex gap-y-1">
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
        <div className="relative sm:max-w-[59rem] sm:m-auto flex flex-[1] rounded-xl min-h-[100vh] sm:min-h-0 sm:p-4 flex-col items-center sm:flex-row sm:items-start  sm:bg-white">
            <ul className="min-h-44 flex h-44 w-full flex-row justify-center gap-x-[1.1rem] bg-[url('/images/bg-sidebar-mobile.svg')] bg-[length:100%_100%] bg-no-repeat pt-8 sm:h-auto sm:min-h-[35rem] sm:max-w-[17.4rem] sm:flex-col sm:justify-normal sm:gap-y-8 sm:bg-[url('/images/bg-sidebar-desktop.svg')] sm:pl-8 sm:pt-10 sm:mr-14">
                {stepsList}
            </ul>
            <div className="relative top-[-5rem]  px-4 sm:static">
                {props.children}
            </div>
        </div>
    );
};

export default Steps;
