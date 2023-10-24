'use client'
// import { selectCount } from '@/lib/redux/slices/appSlice';
import { useAppSelector } from '@/lib/redux/hooks';
import { PropsWithChildren } from 'react';

const Steps = (props: PropsWithChildren) => {
    // const count = useAppSelector(selectCount);
    return (
        <div className=''>
            Steps:
            {/* {count} */}
            {props.children}
        </div>
    );
};

export default Steps;
