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
            <h1 className="">Personal info</h1>
            <p className="step-info">
                Please provide your name, email address, and phone number.
            </p>
            <form
                aria-label="personal info form"
                onSubmit={handleSubmit(onSubmit)}
            >
                {formFields.map((field, index) => {
                    // console.log(field);
                    return (
                        <div key={field.label}>
                            <label className="label">{field.label}</label>
                            <input
                                // name={field.label}
                                className="input"
                                placeholder={field.placeholder}
                                {...register(`Step1.${index}.value`)}
                            />
                        </div>
                    );
                })}
                <button>next step</button>
            </form>
            {/* <DevTool control={control} /> */}
        </div>
    );
};

export default Step1;
