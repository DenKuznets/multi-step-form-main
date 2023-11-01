import { Checkmark } from '@/lib/svgs';
import Image from 'next/image';

const Addon = () => {
    return (
        <div className=" relative flex items-center gap-4 rounded-md p-4 outline outline-1 outline-lightGray [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:outline-marineBlue">
            <label
                htmlFor="online"
                className=" absolute left-0 top-0 h-full w-full cursor-pointer"
            />
            <input
                className="peer appearance-none rounded-[4px] border border-lightGray  checked:border-0 "
                type="checkbox"
                name="online"
                id="online"
            />

            <Checkmark />
            <div className="shrink">
                <div className="font-bold text-marineBlue">Online service</div>
                <div className="text-coolGray">Access to multiplayer games</div>
            </div>
        </div>
    );
};

export default Addon;
