'use client';

import { PageProps } from '@/.next/types/app/page';
import Step1 from '@/components/Step1/Step1';
import Step2 from '@/components/Step2/Step2';
import Step3 from '@/components/Step3/Step3';
import Step4 from '@/components/Step4/Step4';

const page = ({ params }: PageProps) => {
    switch (params.stepName) {
        case 'personal-info':
            return <Step1 />;
        case 'select-plan':
            return <Step2 />;
        case 'add-ons':
            return <Step3 />;
        case 'summary':
            return <Step4 />;

        default:
            break;
    }
};

export default page;
