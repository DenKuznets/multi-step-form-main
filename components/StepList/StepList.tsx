'use client';
import { useAppSelector } from '@/lib/redux/hooks';
// import {
//     selectCurrentStepIndex
// } from '@/lib/redux/slices/appSlice';
import { steps } from '@/utils/steps';

const StepsList = () => {
    // const currentStepIndex = useAppSelector(selectCurrentStepIndex);
    const stepListItems = steps.map((step, index) => {
        const stepNumber = index + 1;
        return (
            <li className={`items-center sm:flex sm:gap-x-4`} key={step.name}>
                <div
                    // className={`${
                    //     stepNumber === currentStepIndex + 1
                    //         ? 'bg-lightBlue text-marineBlue'
                    //         : 'bg-transparent text-white'
                    // } flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-center font-bold transition-all`}
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
        <ul className="absolute sm:static flex h-44 w-full flex-row justify-center gap-x-[1.1rem] bg-[url('/images/bg-sidebar-mobile.svg')] bg-[length:100%_100%] bg-no-repeat pt-8 sm:h-full sm:max-w-[17.4rem] sm:flex-col sm:justify-normal sm:gap-y-8 sm:bg-[url('/images/bg-sidebar-desktop.svg')] sm:pl-8 sm:pt-10">
            {stepListItems}
        </ul>
    );
};

export default StepsList;
