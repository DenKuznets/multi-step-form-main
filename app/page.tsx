'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectCurrentStepIndex } from '@/lib/redux/slices/appSlice';
import { stepsText } from '@/utils/text';
import { PropsWithChildren } from 'react';
import StepsList from '@/components/StepList/StepList';

export default function Home(props: PropsWithChildren) {
    const currentStepIndex = useAppSelector(selectCurrentStepIndex);

    return (
        <main className="flex min-h-screen bg-magnolia sm:p-4">
            <div className="relative flex min-h-screen flex-[1] flex-col items-center rounded-xl sm:m-auto sm:h-[37.5rem] sm:min-h-[unset] sm:max-w-[59rem] sm:flex-row sm:items-start sm:bg-white sm:p-4">
                <StepsList />

                <div className="relative top-[-5rem] px-4 sm:static sm:h-full sm:w-full sm:p-0">
                    <div className="step sm:relative sm:h-full">
                        <h1 className="mb-2 text-[1.55rem] capitalize sm:mb-[0.9rem] sm:text-[2.05rem]">
                            {stepsText[currentStepIndex].nameExt}
                        </h1>
                        <p className="mb-4 text-[1.03rem] font-medium tracking-[-.01em] text-coolGray sm:mb-8 sm:tracking-tight">
                            {stepsText[currentStepIndex].description}
                        </p>
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    );
}
