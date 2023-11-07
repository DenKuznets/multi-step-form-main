'use client';

import PlanCard from './PlanCard/PlanCard';
import { Plans } from '../../utils/plans';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
    selectPaymentMethod,
    selectPlan,
    togglePaymentMethod,
    setPlan
} from '@/lib/redux/slices/appSlice';

export interface FormValues {
    plan: string;
}

export const PAYMENT = {
    MONTHLY: 'monthly',
    YEARLY: 'yearly'
};

const Step2 = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const currentPlan = useAppSelector(selectPlan);
    const currentPaymentMethod = useAppSelector(selectPaymentMethod);
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            plan: currentPlan
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        dispatch(setPlan(data.plan));
        router.push('/add-ons');
    };

    const plansList = Plans.map((plan) => {
        return <PlanCard plan={plan} key={plan.name} register={register} />;
    });
    return (
        <>
            <form
                noValidate
                aria-label="select plan form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-4 md:flex-row md:justify-evenly">
                    {plansList}
                </div>
                <div
                    data-testid="payment-switch"
                    className="mt-4 flex items-center justify-center gap-5 rounded-md bg-alabaster p-4 font-medium "
                >
                    <div
                        className={
                            currentPaymentMethod === PAYMENT.MONTHLY
                                ? 'text-marineBlue'
                                : 'text-coolGray'
                        }
                    >
                        Monthly
                    </div>
                    <div
                        data-testid="payment-switch-toggle"
                        onClick={() => {
                            dispatch(togglePaymentMethod());
                        }}
                        className={`relative flex h-5 w-10 cursor-pointer items-center rounded-full bg-marineBlue px-1 `}
                    >
                        <div
                            className={`relative h-3 w-3 rounded-full bg-white transition-all ${
                                currentPaymentMethod === PAYMENT.MONTHLY
                                    ? 'left-0'
                                    : 'left-full -translate-x-full'
                            }`}
                        ></div>
                    </div>
                    <div
                        className={
                            currentPaymentMethod === PAYMENT.YEARLY
                                ? 'text-marineBlue'
                                : 'text-coolGray'
                        }
                    >
                        Yearly
                    </div>
                </div>
                <div className="fixed bottom-0  left-0 flex w-full justify-between bg-white p-4 shadow sm:absolute sm:mt-8 sm:p-0 sm:shadow-none md:mb-4">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/personal-info');
                        }}
                        className="btn btn-back text-coolGray"
                    >
                        Go Back
                    </button>
                    <button className="btn btn-next ">next step</button>
                </div>
            </form>
        </>
    );
};

export default Step2;
