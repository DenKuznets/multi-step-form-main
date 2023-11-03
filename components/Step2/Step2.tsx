'use client';
import { useState } from 'react';
import PlanCard from './PlanCard/PlanCard';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
    selectPaymentMethod,
    selectPlan,
    setPaymentMethod,
    setPlan
} from '@/lib/redux/slices/appSlice';
import { PAYMENT, Plans } from '@/utils/steps';
import { DevTool } from '@hookform/devtools';

export interface FormValues extends FieldValues {
    selectedPlan: string;
}

const Step2 = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const currentPlan = useAppSelector(selectPlan);
    const currentPaymentMethod = useAppSelector(selectPaymentMethod);
    const { register, handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            plan: currentPlan
        }
    });
    
    const [monthly, setMonthly] = useState(
        PAYMENT.MONTHLY === currentPaymentMethod
    );
    const [yearly, setYearly] = useState(
        PAYMENT.YEARLY === currentPaymentMethod
    );
    const multiplier = monthly ? 1 : 10;
    const period = monthly ? 'mo' : 'yr';

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log('submit', data);
        dispatch(setPlan(data.plan));
        dispatch(setPaymentMethod(monthly ? PAYMENT.MONTHLY : PAYMENT.YEARLY));
        router.push('/add-ons');
    };

    const plansList = Plans.map((plan, index) => {
        const [price, offer] =
            currentPaymentMethod === PAYMENT.MONTHLY
                ? [`$${plan.priceMonth}/mo`, '']
                : [`$${plan.priceYear}/yr`, '2 months free'];
        return (
            <PlanCard
                key={plan.name}
                checked={currentPlan === plan.name}
                imgUrl={`./images/${plan.imgUrl}`}
                planName={plan.name}
                planPrice={price}
                offer={offer}
                register={register}
            />
        );
    })    
    return (
        <>
            <form
                noValidate
                aria-label="select plan form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-4 md:flex-row md:justify-evenly">
                    <PlanCard
                        checked={currentPlan === Plans[0].name}
                        imgUrl="./images/icon-arcade.svg"
                        planName={Plans[0].name}
                        planPrice={`$${9 * multiplier}/${period}`}
                        offer={yearly ? '2 months free' : ''}
                        register={register}
                    />

                    <PlanCard
                        checked={currentPlan === Plans[1].name}
                        imgUrl="./images/icon-advanced.svg"
                        planName={Plans[1].name}
                        planPrice={`$${12 * multiplier}/${period}`}
                        offer={yearly ? '2 months free' : ''}
                        register={register}
                    />
                    <PlanCard
                        checked={currentPlan === Plans[2].name}
                        imgUrl="./images/icon-pro.svg"
                        planName={Plans[2].name}
                        planPrice={`$${15 * multiplier}/${period}`}
                        offer={yearly ? '2 months free' : ''}
                        register={register}
                    />
                </div>
                <div
                    data-testid="payment-switch"
                    className="mt-4 flex items-center justify-center gap-5 rounded-md bg-alabaster p-4 font-medium "
                >
                    <div
                        className={
                            monthly ? 'text-marineBlue' : 'text-coolGray'
                        }
                    >
                        Monthly
                    </div>
                    <div
                        data-testid="payment-switch-toggle"
                        onClick={() => {
                            setMonthly(!monthly);
                            setYearly(!yearly);
                        }}
                        className={`relative flex h-5 w-10 cursor-pointer items-center rounded-full bg-marineBlue px-1 `}
                    >
                        <div
                            className={`relative h-3 w-3 rounded-full bg-white transition-all ${
                                monthly
                                    ? 'left-0'
                                    : 'left-full -translate-x-full'
                            }`}
                        ></div>
                    </div>
                    <div
                        className={yearly ? 'text-marineBlue' : 'text-coolGray'}
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
                    <button
                        onClick={(e) => {
                            // e.preventDefault();
                            // router.push('/add-ons');
                        }}
                        className="btn btn-next "
                    >
                        next step
                    </button>
                </div>
            </form>
            <DevTool control={control} />
        </>
    );
};

export default Step2;
