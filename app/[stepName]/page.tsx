'use client';

import { PageProps } from '@/.next/types/app/page';
import Step1 from '@/components/Step1/Step1';

const page = ({ params }: PageProps) => {
    return <Step1 />;
};

export default page;
