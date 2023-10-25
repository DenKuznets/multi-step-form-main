import './globals.css';
import type { Metadata } from 'next';
import { ubuntu } from './fonts';
import React from 'react';
import { Providers } from '../lib/providers';
import Steps from '@/components/Steps/Steps';

export const metadata: Metadata = {
    title: 'Frontend Mentor | Multi-step form',
    description:
        'challenge designed by frontend-mentor, made by DenKuznets'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <html
                className={`${ubuntu.variable} font-sans`}
                lang="ru"
            >
                <body className='sm:p-4'>
                    <Steps>{children}</Steps>
                </body>
            </html>
        </Providers>
    );
}
