'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectPaymentMethod, selectPlan } from '@/lib/redux/slices/appSlice';
import { PAYMENT } from '@/utils/steps';

const Step4 = () => {
    const currentPaymentMethod = useAppSelector(selectPaymentMethod);
    const currentPlan = useAppSelector(selectPlan);
    const router = useRouter();
    const monthly = currentPaymentMethod === PAYMENT.MONTHLY;
    const period = monthly ? 'mo' : 'yr';
    const multiplier = monthly ? 1 : 10;

    return (
        <form
            noValidate
            aria-label="select summary form"
            className="text-sm text-coolGray [&_*]:first-letter:capitalize"
            // onSubmit={handleSubmit(onSubmit)}
        >
            <div className="mb-6 bg-alabaster p-4 lg:p-6">
                <div className="flex items-center justify-between">
                    <span>
                        <span className="font-bold capitalize text-marineBlue lg:text-base">
                            {currentPlan.name} ({monthly ? 'monthly' : 'yearly'}
                            )
                        </span>
                        <br />
                        <Link
                            className="capitalize underline transition-all hover:text-purplishBlue"
                            href={'/select-plan'}
                        >
                            change
                        </Link>
                    </span>
                    <span className="font-bold text-marineBlue lg:text-base">
                        {monthly
                            ? `${currentPlan.priceMonth}`
                            : `${currentPlan.priceYear}`}
                        /{period}
                    </span>
                </div>
                <hr className="my-3 lg:mb-4 lg:mt-6" />
                <div className="mb-3 flex justify-between lg:mb-4">
                    <span>online service</span>
                    <span className="text-marineBlue">{`+$${
                        1 * multiplier
                    }/${period}`}</span>
                </div>
                <div className="flex justify-between">
                    <span>larger storage</span>
                    <span className="text-marineBlue">{`+$${
                        2 * multiplier
                    }/${period}`}</span>
                </div>
            </div>
            <div className="flex justify-between px-4 lg:px-6">
                <span>total (per {monthly ? 'month' : 'year'})</span>
                <span className="text-base font-bold text-blue-700 lg:text-xl">
                    {`+$${12 * multiplier}/${period}`}
                </span>
            </div>
            <div className="fixed bottom-0  left-0 flex w-full justify-between bg-white p-4 shadow sm:absolute sm:mt-8 sm:p-0 sm:shadow-none md:mb-4">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push('/add-ons');
                    }}
                    className="btn btn-back text-coolGray"
                >
                    Go Back
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        // router.push('/summary');
                    }}
                    className="btn h-10 w-24 rounded-[4px] bg-blue-700 text-white transition-all hover:bg-pastelBlue lg:h-12 lg:w-32 lg:rounded-lg"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Step4;
