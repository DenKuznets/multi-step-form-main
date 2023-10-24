import type { Preview } from '@storybook/react';
import '../app/globals.css';

import { ubuntu } from '../app/fonts';
import React from 'react';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export const decorators = [
    (Story) => (
        <div
            className={`${ubuntu.variable} font-serif`}
        >
            
            <Story />
        </div>
    )
];
export default preview;
