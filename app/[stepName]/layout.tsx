import { LayoutProps } from '@/.next/types/app/layout'
// import React from 'react'

const layout = ({params, children} : LayoutProps) => {
  return (
      <div>
          {params.stepName}
    </div>
  )
}

export default layout