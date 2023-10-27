'use client';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectStep1 } from '@/lib/redux/slices/appSlice';
import { PersonalInfoStep } from '@/lib/types';

interface FormValues extends FieldValues {
    name: string;
    phone: string;
    email: string;
}

const Step1 = () => {
    const stepState = useAppSelector(selectStep1) as PersonalInfoStep;
    const { control, formState, register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            name: stepState.value.name,
            email: stepState.value.email,
            phone: stepState.value.phone
        }
    });
    const { errors } = formState;
    const onSubmit: SubmitHandler<FormValues> = (data) =>
        console.log('submit', data);
    // console.log(errors);
    return (
        <form
            noValidate
            className="flex w-full flex-col gap-2 sm:gap-4 "
            aria-label="personal info form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="relative">
                <p
                    className="absolute right-0
text-[0.75rem] font-bold text-strawberryRed sm:text-[0.9rem]"
                >
                    {errors.name?.message}
                </p>
                <label htmlFor="name" className={`label`}>
                    Name
                </label>
                <input
                    id="name"
                    className={`input  ${
                        errors.name ? 'border-strawberryRed' : ''
                    }`}
                    placeholder="e.g. stephenking@lorem.com"
                    {...register(`name`, {
                        required: 'This field is required'
                    })}
                />
            </div>
            <div className="relative">
                <p
                    className="absolute right-0
text-[0.75rem] font-bold text-strawberryRed sm:text-[0.9rem]"
                >
                    {errors.email?.message}
                </p>
                <label htmlFor="email" className="label">
                    Email Address
                </label>
                <input
                    id="email"
                    className={`input  ${
                        errors.email ? 'border-strawberryRed' : ''
                    }`}
                    placeholder="e.g. Stephen King"
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
                <p
                    className="absolute right-0
text-[0.75rem] font-bold text-strawberryRed sm:text-[0.9rem]"
                >
                    {errors.phone?.message}
                </p>
                <label htmlFor="phone" className="label">
                    Phone Number
                </label>
                <input
                    id="phone"
                    className={`input  ${
                        errors.phone ? 'border-strawberryRed' : ''
                    }`}
                    placeholder="e.g. +1 234 567 890"
                    {...register(`phone`, {
                        required: 'This field is required'
                    })}
                />
            </div>

            <div className="fixed bottom-0 left-0 flex h-[4.5rem] w-full justify-end bg-white p-4 sm:absolute sm:min-h-[6rem] sm:items-center sm:pb-0 sm:pt-6 sm:px-0">
                <button className="btn btn-next ">next step</button>
            </div>
        </form>
    );
};

export default Step1;
