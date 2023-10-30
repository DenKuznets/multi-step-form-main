import Image from 'next/image'
import React from 'react'

export interface PlanCardProps extends HTMLDivElement {
    imgUrl?: string;
    planName: string;
}

const PlanCard = ({imgUrl, planName }: PlanCardProps) => {
  return (
      <div>
          { imgUrl && <Image src={imgUrl} alt='icon' />}
          <div>
              <div>
                  {planName}
              </div>
          </div>
    </div>
  )
}

export default PlanCard