import Image from 'next/image';
import React from 'react';

const Thankyou = () => {
    return (
     <div className="w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2  py-12 text-center flex flex-col items-center">
            <Image
                width={60}
                height={60}
                src="/images/icon-thank-you.svg"
                alt="icon thank you"
                className='mb-4 sm:mb-8 sm:h-20 sm:w-20'
            />
            <h1 className="first-letter:capitalize mb-2 sm:mb-4 sm:text-4xl">thank you</h1>
            <p>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    );
};

export default Thankyou;
