import Image from 'next/image';

const Step2 = () => {
    return (
        <div tabIndex={-1} className='flex outline outline-lightGray outline-1 focus:outline-marineBlue rounded-md cursor-pointer focus:bg-alabaster p-4'>
            <Image
                className='mr-4'
                src={'./images/icon-arcade.svg'}
                width={40}
                height={40}
                alt="icon"
            />
            <div>
                <div className='font-bold'>Arcade</div>
                <div className='text-coolGray'>$9/mo</div>
            </div>
        </div>
    );
};

export default Step2;
