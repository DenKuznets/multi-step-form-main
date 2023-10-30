'use client';
import { LayoutProps } from '@/.next/types/app/layout';
import { steps } from '@/utils/steps';
import StepsList from '@/components/StepList/StepList';

const layout = ({ params, children }: LayoutProps) => {
    const stepText = steps.find(step => step.url === params.stepName)
    return (
        <main className="relative flex min-h-screen flex-[1] flex-col items-center rounded-xl sm:m-auto sm:h-[37.5rem] sm:min-h-[unset] sm:max-w-[59rem] sm:flex-row sm:items-start sm:bg-white sm:p-4 sm:gap-[1rem] lg:gap-[6rem] lg:pr-[6rem]">
            <StepsList />
            <div className="step relative top-[-5rem] mx-4 sm:mx-0 sm:pt-10 sm:top-0 sm:h-full sm:w-full sm:p-0">
                <h1 className="mb-2 text-marineBlue text-[1.55rem] capitalize sm:mb-[0.9rem] sm:text-[2.05rem]">
                    {stepText?.header}
                </h1>
                <p className="first-letter:capitalize mb-4 text-[1.03rem] tracking-[-.01em] text-coolGray sm:mb-8 sm:tracking-tight">
                    {stepText?.description}
                </p>
                {children}
            </div>
        </main>
    );
};

export default layout;
