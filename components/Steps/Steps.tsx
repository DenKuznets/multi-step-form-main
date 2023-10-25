'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectCurrentStep, selectSteps } from '@/lib/redux/slices/appSlice';
import { PropsWithChildren } from 'react';

const Steps = (props: PropsWithChildren) => {
    const currentStep = useAppSelector(selectCurrentStep);
    const steps = useAppSelector(selectSteps);
    const stepsList = steps.map((step, index) => (
        <div className="cursor-pointer" key={step.name}>
            <div className="text-center rounded-full flex items-center justify-center h-8 w-8 border text-white">
                {index}
            </div>
            <div className="hidden">Step {index}</div>
        </div>
    ));
    return (
        <div
            style={{ backgroundImage: 'url(./images/bg-sidebar-mobile.svg)' }}
            className="pt-8 bg-no-repeat"
        >
            <div className="flex flex-row justify-center gap-x-[1.1rem]">{stepsList}</div>
            {props.children}
        </div>
    );
};

export default Steps;
