import { Checkmark } from '@/lib/svgs';
import Image from 'next/image';

const Addon = () => {
    return (
        <div className=" relative flex items-center gap-4 rounded-md p-4 outline outline-1 outline-lightGray [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:outline-marineBlue">
            <label
                htmlFor="online"
                className=" absolute z-10 left-0 top-0 h-full w-full cursor-pointer"
            />
            <input
                className="peer appearance-none   checked:border-0 "
                type="checkbox"
                name="online"
                id="online"
            />
            <span className="relative rounded-[4px] outline-1 outline w-5 h-5 outline-lightGray peer-checked:[&>svg]:block [&>svg]:hidden" >
                <Checkmark className="absolute top-0 left-0 w-full h-full" />
            </span>
            <div className="shrink">
                <div className="font-bold text-marineBlue">Online service</div>
                <div className="text-coolGray">Access to multiplayer games</div>
            </div>
        </div>
    );
};

export default Addon;
