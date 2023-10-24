'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectCurrentStep } from '@/lib/redux/slices/appSlice';
import { PropsWithChildren } from 'react';

const Steps = (props: PropsWithChildren) => {
    const currentStep = useAppSelector(selectCurrentStep);
    return (
        <div className="">
            Steps:
            {currentStep}
            {props.children}
        </div>
    );
};

export default Steps;
