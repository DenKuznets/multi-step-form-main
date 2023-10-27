'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import {
    selectCurrentStepIndex,
} from '@/lib/redux/slices/appSlice';
import { steps  } from '@/utils/steps';
import { PropsWithChildren } from 'react';

const Steps = (props: PropsWithChildren) => {
    const currentStepIndex = useAppSelector(selectCurrentStepIndex);
    // const steps = useAppSelector(selectSteps);
    const stepsList = steps.map((step, index) => {
        const stepNumber = index + 1;
        return (
            <li
                className={`items-center sm:flex sm:gap-x-4`}
                key={steps[index].name}
            >
                <div
                    className={`${
                        stepNumber === currentStepIndex + 1
                            ? 'bg-lightBlue text-marineBlue'
                            : 'bg-transparent text-white'
                    } flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-center font-bold transition-all`}
                >
                    {stepNumber}
                </div>
                <div className="hidden flex-col justify-center gap-y-1 sm:flex">
                    <div className="text-[0.8rem] uppercase leading-none text-lightGray ">
                        Step {stepNumber}
                    </div>
                    <div className="font-bold uppercase leading-none text-white">
                        {steps[index].name}
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
                <div className="step sm:relative sm:h-full">
                    <h1 className="mb-2 text-[1.55rem] capitalize sm:mb-[0.9rem] sm:text-[2.05rem]">
                        {steps[currentStepIndex].header}
                    </h1>
                    <p className="text-coolGray mb-4 text-[1.03rem] font-medium tracking-[-.01em] sm:mb-8 sm:tracking-tight">
                        {steps[currentStepIndex].description}
                    </p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Steps;
