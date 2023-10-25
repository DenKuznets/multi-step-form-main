'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectCurrentStep, selectSteps } from '@/lib/redux/slices/appSlice';
import { PropsWithChildren } from 'react';

const Steps = (props: PropsWithChildren) => {
    const currentStep = useAppSelector(selectCurrentStep);
    const steps = useAppSelector(selectSteps);
    const stepsList = steps.map((step, index) => (
        <div className={`cursor-pointer `} key={step.name}>
            <div
                className={`${
                    index + 1 === currentStep
                        ? 'bg-lightBlue text-marineBlue'
                        : 'bg-transparent text-white'
                } flex h-8 w-8 items-center justify-center rounded-full border text-center font-bold`}
            >
                {index + 1}
            </div>
            <div className="hidden">Step {index}</div>
        </div>
    ));
    return (
        <div
            style={{ backgroundImage: 'url(./images/bg-sidebar-mobile.svg)' }}
            className="min-h-44 outline bg-[length:100%_100%] h-44 bg-no-repeat pt-8"
        >
            <div className="flex flex-row justify-center gap-x-[1.1rem]">
                {stepsList}
            </div>
            {props.children}
        </div>
    );
};

export default Steps;
