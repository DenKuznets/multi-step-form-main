'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
    selectAddons,
    selectEmail,
    selectName,
    selectPaymentMethod,
    selectPhone,
    selectPlan,
    setValid
} from '@/lib/redux/slices/appSlice';
import { useForm } from 'react-hook-form';
import { Addons } from '../../utils/addons';
import { PAYMENT } from '../Step2/Step2';
import { Plans } from '../../utils/plans';

const Step4 = () => {
    const dispatch = useAppDispatch();
    const currentPaymentMethod = useAppSelector(selectPaymentMethod);
    const currentPlanName = useAppSelector(selectPlan);
    const currentPlan = Plans.find((plan) => plan.name === currentPlanName);
    const currentAddonsNames = useAppSelector(selectAddons);
    const currentAddons = Addons.filter((addon) =>
        currentAddonsNames.includes(addon.name)
    );

    const { handleSubmit } = useForm();

    const name = useAppSelector(selectName);
    const phone = useAppSelector(selectPhone);
    const email = useAppSelector(selectEmail);
    const router = useRouter();
    const monthly = currentPaymentMethod === PAYMENT.MONTHLY;
    const period = monthly ? 'mo' : 'yr';
    let totalPrice = currentPlan
        ? monthly
            ? currentPlan.priceMonth
            : currentPlan.priceYear
        : 0;

    const onSubmit = () => {
        if (name && phone && email) {
            dispatch(setValid(true));
        } else {
            router.push('personal-info');
        }
    };

    const addonsList = currentAddons.map((addon) => {
        totalPrice += monthly ? addon.priceMonth : addon.priceYear;
        return (
            <div key={addon.name} className="flex justify-between">
                <span>{addon.header}</span>
                <span className="text-marineBlue">
                    +${monthly ? `${addon.priceMonth}` : `${addon.priceYear}`}/
                    {period}
                </span>
            </div>
        );
    });

    return (
        <form
            noValidate
            aria-label="select summary form"
            className="text-sm text-coolGray [&_*]:first-letter:capitalize"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="mb-6 bg-alabaster p-4 lg:p-6">
                {currentPlan ? (
                    <div className="flex items-center justify-between">
                        <span>
                            <span className="font-bold capitalize text-marineBlue lg:text-base">
                                {currentPlan.name} (
                                {monthly ? 'monthly' : 'yearly'})
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
                            $
                            {monthly
                                ? `${currentPlan.priceMonth}`
                                : `${currentPlan.priceYear}`}
                            /{period}
                        </span>
                    </div>
                ) : (
                    <Link href={'/select-plan'}>Select plan</Link>
                )}

                <hr className="my-3 lg:mb-4 lg:mt-6" />
                <div className="flex flex-col gap-3 lg:gap-4">{addonsList}</div>
            </div>
            <div className="flex justify-between px-4 lg:px-6">
                <span>total (per {monthly ? 'month' : 'year'})</span>
                <span className="text-base font-bold text-blue-700 lg:text-xl">
                    ${totalPrice}/{period}
                </span>
            </div>
            <div className="form-btns-container">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push('/add-ons');
                    }}
                    className="btn btn-back text-coolGray"
                >
                    Go Back
                </button>
                <button className="btn h-10 w-24 rounded-[4px] bg-blue-700 text-white transition-all hover:bg-blue-500 lg:h-12 lg:w-32 lg:rounded-lg">
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Step4;
