'use client';
import { useRouter } from 'next/navigation';
import AddonCard from './Addon/Addon';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
    AddonsType,
    selectAddons,
    setAddons
} from '@/lib/redux/slices/appSlice';
import { Addons } from '@/utils/steps';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export interface FormValues extends FieldValues, AddonsType {}

const Step3 = () => {
    const dispatch = useAppDispatch();
    const currentAddons = useAppSelector(selectAddons);
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            online: currentAddons.online,
            storage: currentAddons.storage,
            customize: currentAddons.customize
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        dispatch(setAddons({ ...data }));
        router.push('/summary');
    };
    const router = useRouter();
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
                {addonsList}
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
