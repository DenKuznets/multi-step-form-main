'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { selectName } from '@/lib/redux/slices/appSlice';
import { selectPhone } from '@/lib/redux/slices/appSlice';
import { selectEmail } from '@/lib/redux/slices/appSlice';
import { useRouter } from 'next/navigation';
import { setName, setEmail, setPhone } from '@/lib/redux/slices/appSlice';

interface FormValues {
    name: string;
    phone: string;
    email: string;
}

const Step1 = () => {
    const router = useRouter();
    const name = useAppSelector(selectName);
    const phone = useAppSelector(selectPhone);
    const email = useAppSelector(selectEmail);
    const dispatch = useAppDispatch();
    const { formState, register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            name: name,
            email: email,
            phone: phone
        }
    });
    const { errors } = formState;
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log('submit', data);
        dispatch(setName(data.name));
        dispatch(setPhone(data.phone));
        dispatch(setEmail(data.email));
        router.push('/select-plan');
    };

    return (
        <form
            noValidate
            className="flex w-full flex-col gap-2 sm:gap-4"
            aria-label="personal info form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="relative">
                <p className="absolute right-0 text-[0.75rem] font-bold text-strawberryRed sm:text-[0.9rem]">
                    {errors.name?.message}
                </p>
                <label htmlFor="name" className={`label`}>
                    Name
                </label>
                <input
                    id="name"
                    className={`input  ${
                        errors.name ? 'outline-strawberryRed' : ''
                    }`}
                    placeholder="e.g. Stephen King"
                    {...register(`name`, {
                        required: 'This field is required'
                    })}
                />
            </div>
            <div className="relative">
                <p className="absolute right-0 text-[0.75rem] font-bold text-strawberryRed sm:text-[0.9rem]">
                    {errors.email?.message}
                </p>
                <label htmlFor="email" className="label">
                    Email Address
                </label>
                <input
                    id="email"
                    placeholder="e.g. stephenking@lorem.com"
                    className={`input  ${
                        errors.email ? 'outline-strawberryRed' : ''
                    }`}
                    {...register(`email`, {
                        required: 'This field is required',
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: 'Invalid email'
                        }
                    })}
                />
            </div>
            <div className="relative">
                <p className="absolute right-0 text-[0.75rem] font-bold text-strawberryRed sm:text-[0.9rem]">
                    {errors.phone?.message}
                </p>
                <label htmlFor="phone" className="label">
                    Phone Number
                </label>
                <input
                    id="phone"
                    className={`input  ${
                        errors.phone ? 'outline-strawberryRed' : ''
                    }`}
                    placeholder="e.g. +1 234 567 890"
                    {...register(`phone`, {
                        required: 'This field is required'
                    })}
                />
            </div>

            <div className="fixed bottom-0 left-0 flex w-full justify-end bg-white p-4 sm:absolute sm:mb-4 sm:p-0">
                <button className="btn btn-next ">next step</button>
            </div>
        </form>
    );
};

export default Step1;
