'use client';
import { useRouter } from 'next/navigation';
import AddonCard from './Addon/AddonCard';
import { Addons } from '../../utils/addons';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { selectAddons, setAddons } from '@/lib/redux/slices/appSlice';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export interface FormValues extends FieldValues {
    online: boolean;
    storage: boolean;
    customize: boolean;
}

const Step3 = () => {
    const dispatch = useAppDispatch();
    const currentAddons = useAppSelector(selectAddons);
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            online: currentAddons.includes('online'),
            storage: currentAddons.includes('storage'),
            customize: currentAddons.includes('customize')
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // data is an array of input checkboxes names and their state (checked or not). If checkbox is checked, we add its name to array of selected addons
        const selectedAddons = Object.keys(data).filter(
            (key) => data[key as keyof FormValues]
        );
        dispatch(setAddons(selectedAddons));
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
            <div className="flex flex-col gap-4">{addonsList}</div>
            <div className="form-btns-container">
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
