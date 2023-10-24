'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectCurrentStep } from '@/lib/redux/slices/appSlice';
import { PropsWithChildren } from 'react';
import Step1 from '../Step1/Step1';

const Steps = (props: PropsWithChildren) => {
    const currentStep = useAppSelector(selectCurrentStep);
    return (
        <div className="">
            Steps:
            {currentStep}
            <Step1/>
            {props.children}
        </div>
    );
};

export default Steps;
