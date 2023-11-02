'use client';
import { LayoutProps } from '@/.next/types/app/layout';
import { steps } from '@/utils/steps';
import StepsList from '@/components/StepList/StepList';
import Thankyou from '@/components/Thankyou/Thankyou';

const layout = ({ params, children }: LayoutProps) => {
    const stepText = steps.find((step) => step.url === params.stepName);
    const formFinished = true;
    return (
        <main className="relative flex min-h-screen flex-[1] flex-col items-center rounded-xl sm:m-auto sm:h-[37.5rem] sm:min-h-[unset] sm:max-w-[59rem] sm:flex-row sm:items-start sm:gap-[1rem] sm:bg-white sm:p-4 md:gap-[4rem] md:pr-[4rem] lg:gap-[6rem] lg:pr-[6rem]">
            <StepsList />
            <div className="relative mx-4 mt-24 rounded-lg bg-white px-6 py-8 sm:top-0 sm:mx-0 sm:mt-0 sm:h-full sm:w-full sm:p-0 sm:py-10 sm:pt-10">
                {formFinished ? (
                    <Thankyou />
                ) : (
                    <>
                        <h1 className="mb-2 text-[1.55rem] text-marineBlue first-letter:capitalize sm:mb-[0.9rem] sm:text-[2.05rem]">
                            {stepText?.header}
                        </h1>
                        <p className="mb-[1.5rem] text-[1.03rem] tracking-[-.01em] text-coolGray first-letter:capitalize sm:mb-8 sm:tracking-tight">
                            {stepText?.description}
                        </p>
                        {children}
                    </>
                )}
            </div>
        </main>
    );
};

export default layout;
