import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { raleway, merriweather, leagueSpartan } from "../app/fonts";
import React from "react";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export const decorators = [
    (Story) => (
        <div
            className={`scroll-pt-20 ${raleway.variable} ${merriweather.variable} ${leagueSpartan.variable} font-serif`}
            lang="ru"
        >
            <div className={` text-almostBlack text-lg first-letter:uppercase`}>
                <Story />
            </div>
        </div>
    ),
];
export default preview;
