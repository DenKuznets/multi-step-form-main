'use client';
import React from 'react';
import {
    useForm,
    SubmitHandler,
    useFieldArray,
    FieldValues
} from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const formFields = [
    {
        label: 'Name',
        placeholder: 'e.g. Stephen King'
    },
    {
        label: 'Email Address',
        placeholder: 'e.g. stephenking@lorem.com'
    },
    {
        label: 'Phone Number',
        placeholder: 'e.g. +1 234 567 890'
    }
];

interface FormValues extends FieldValues {
    ['step1.0.value']: string;
    ['step1.1.value']: string;
    ['step1.2.value']: string;
}

const Step1 = () => {
    const { control, watch, register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) =>
        console.log('submit', data);
    // {
    // defaultValues: {
    //     name: '',
    //     email: '',
    //     phone: ''
    // }
    // }
    // const { fields, append, remove } = useFieldArray({
    //     name: 'Step1',
    //     control
    // });

    // console.log('fields', fields);

    return (
        <div className="step">
            <h1 className="step-header">Personal info</h1>
            <p className="step-info">
                Please provide your name, email address, and phone number.
            </p>
            <form
                className="flex flex-col gap-2"
                aria-label="personal info form"
                onSubmit={handleSubmit(onSubmit)}
            >
                {formFields.map((field, index) => {
                    // console.log(field);
                    return (
                        <div key={field.label}>
                            <label className="text-[0.75rem] font-bold tracking-[-.015em]">
                                {field.label}
                            </label>
                            <input
                                // name={field.label}
                                className="placeholder:text-coolGray block w-full min-w-0 rounded border px-3 py-2 font-bold placeholder:text-[.95rem] placeholder:tracking-[-.015em]"
                                placeholder={field.placeholder}
                                {...register(`Step1.${index}.value`)}
                            />
                        </div>
                    );
                })}
                <div className="fixed sm:static flex justify-end bottom-0 w-full p-4 left-0 h-[4.5rem] bg-white">
                    <button className="btn btn-next ">next step</button>
                </div>
            </form>

            {/* <DevTool control={control} /> */}
        </div>
    );
};

export default Step1;
