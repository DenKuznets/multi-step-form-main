'use client';

import { PageProps } from '@/.next/types/app/page';
import Step1 from '@/components/Step1/Step1';
import Step2 from '@/components/Step2/Step2';

const page = ({ params }: PageProps) => {
    switch (params.stepName) {
        case 'personal-info':
            return <Step1 />;
        case 'select-plan':
            return <Step2 />;

        default:
            break;
    }
};

export default page;
