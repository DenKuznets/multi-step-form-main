'use client';
import { useRouter } from 'next/navigation';
import AddonCard from './Addon/Addon';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
    AddonsType,
    selectAddons,
    selectPaymentMethod,
    setAddons
} from '@/lib/redux/slices/appSlice';
import { Addons, PAYMENT } from '@/utils/steps';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export interface FormValues extends FieldValues, AddonsType {}

const Step3 = () => {
    const dispatch = useAppDispatch();
    const currentAddons = useAppSelector(selectAddons);
    const currentPaymentMethod = useAppSelector(selectPaymentMethod);
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            online: currentAddons.online,
            storage: currentAddons.storage,
            customize: currentAddons.customize
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // console.log('submit', data);
        dispatch(setAddons({ ...data }));
        router.push('/summary');
    };

    const router = useRouter();
    const [multiplier, period] =
        currentPaymentMethod === PAYMENT.MONTHLY ? [1, 'mo'] : [10, 'yr'];
    const addonsList = Addons.map((addon) => {
        return <AddonCard addon={addon} key={addon.name} register={register} />;
    });
    return (
        <form
            noValidate
            aria-label="select add-ons form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-4">
                {/* <Addon
                    header="Online service"
                    info="Access to multiplayer games"
                    price={`+$${1 * multiplier}/${period}`}
                    name={Addons.ONLINE}
                    defaultChecked={currentAddons.online}
                    register={register}
                />
                <Addon
                    header="Larger storage"
                    info="Extra 1TB of cloud save"
                    price={`+$${2 * multiplier}/${period}`}
                    name={Addons.STORAGE}
                    defaultChecked={currentAddons.storage}
                    register={register}
                />
                <Addon
                    header="Customizable Profile"
                    info="Custom theme on your profile"
                    price={`+$${2 * multiplier}/${period}`}
                    name={Addons.CUSTOMIZE}
                    defaultChecked={currentAddons.customize}
                    register={register}
                /> */}
            </div>

            <div className="fixed bottom-0  left-0 flex w-full justify-between bg-white p-4 shadow sm:absolute sm:mt-8 sm:p-0 sm:shadow-none md:mb-4">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push('/select-plan');
                    }}
                    className="btn btn-back text-coolGray"
                >
                    Go Back
                </button>
                <button className="btn btn-next ">next step</button>
            </div>
        </form>
    );
};

export default Step3;
