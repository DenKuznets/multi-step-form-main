'use client';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FormValues extends FieldValues {
    name: string;
    phone: string;
    email: string;
}

const Step1 = () => {
    const { control, formState, register, handleSubmit } =
        useForm<FormValues>();
    const { errors } = formState;
    const onSubmit: SubmitHandler<FormValues> = (data) =>
        console.log('submit', data);
    // console.log(errors);
    return (
        <div className="step sm:relative sm:h-full">
            <h1 className="step-header">Personal info</h1>
            <p className="step-info">
                Please provide your name, email address, and phone number.
            </p>
            <form
                noValidate
                className="flex w-full flex-col gap-2 sm:gap-4 "
                aria-label="personal info form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="relative">
                    <p
                        className="text-strawberryRed absolute
right-0 text-[0.75rem] font-bold sm:text-[0.9rem]"
                    >
                        {errors.name?.message}
                    </p>
                    <label className={`label`}>Name</label>
                    <input
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
                        className="text-strawberryRed absolute
right-0 text-[0.75rem] font-bold sm:text-[0.9rem]"
                    >
                        {errors.email?.message}
                    </p>
                    <label className="label">Email Address</label>
                    <input
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
                        className="text-strawberryRed absolute
right-0 text-[0.75rem] font-bold sm:text-[0.9rem]"
                    >
                        {errors.phone?.message}
                    </p>
                    <label className="label">Phone Number</label>
                    <input
                        className={`input  ${
                            errors.phone ? 'border-strawberryRed' : ''
                        }`}
                        placeholder="e.g. +1 234 567 890"
                        {...register(`phone`, {
                            required: 'This field is required'
                        })}
                    />
                </div>

                <div className="fixed bottom-0 left-0 flex h-[4.5rem] w-full justify-end bg-white p-4 sm:absolute sm:min-h-[6rem] sm:items-center sm:pb-0 sm:pt-6 md:pr-[5.5rem]">
                    <button className="btn btn-next ">next step</button>
                </div>
            </form>

            {/* <DevTool control={control} /> */}
        </div>
    );
};

export default Step1;
