import Image from 'next/image'
import React from 'react'

export interface PlanCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imgUrl: string;
    planName: string;
    planInfo: string;
}

const PlanCard = ({imgUrl, planName, planInfo }: PlanCardProps) => {
  return (
      <div
          tabIndex={-1}
          className="flex md:flex-col cursor-pointer rounded-md p-4 outline outline-1 outline-lightGray focus:bg-alabaster focus:outline-marineBlue"
      >
          <Image
              className="mr-4 md:mb-12"
              src={imgUrl}
              width={40}
              height={40}
              alt="icon"
          />
          <div>
              <div className="font-bold text-marineBlue">{ planName }</div>
              <div className="text-coolGray">{ planInfo }</div>
          </div>
      </div>
  );
}

export default PlanCard