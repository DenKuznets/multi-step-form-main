'use client';

import { PageProps } from '@/.next/types/app/page';
import Step1 from '@/components/Step1/Step1';

const page = ({ params }: PageProps) => {
    switch (params.stepName) {
        case 'personal-info':
            return <Step1 />;

            default:
                break;
            }
};

export default page;
