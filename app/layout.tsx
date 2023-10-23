import './globals.css';
import type { Metadata } from 'next';
import { raleway, merriweather, leagueSpartan } from './fonts';
import React from 'react';
import { Providers } from './ReduxProvider';
import Steps from '@/components/Steps/Steps';

export const metadata: Metadata = {
    title: 'Frontend Mentor | Multi-step form',
    description:
        'challenge designed by frontend-mentor, programmed by DenKuznets'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className={`${raleway.variable} ${merriweather.variable} ${leagueSpartan.variable} font-serif`}
            lang="ru"
        >
            <body>
                <Providers>
                    <Steps>{children}</Steps>
                </Providers>
            </body>
        </html>
    );
}
