import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    phone: string;
};

const Step1 = () => {
    const {
        register,
        watch,
        formState: { errors }
    } = useForm<Inputs>();

    console.log(watch('name'));

    return (
        <div className='step'>
            <h1 className="">Personal info</h1>
            <p className="step-info">
                Please provide your name, email address, and phone number.
            </p>
            <form>
                <label className='label'>Name</label>
                <input className='input' placeholder='e.g. Stephen King'  {...register('name')} />
            </form>
        </div>
    );
};

export default Step1;
