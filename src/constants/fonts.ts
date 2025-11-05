import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

export const heading = localFont({
    src: [
        {
            path: '../../public/fonts/Nohemi/Nohemi-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Nohemi/Nohemi-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Nohemi/Nohemi-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Nohemi/Nohemi-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Nohemi/Nohemi-Black.woff',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-heading'
});

export const base = localFont({
    src: [
        {
            path: '../../public/fonts/Nohemi/Nohemi-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Nohemi/Nohemi-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Nohemi/Nohemi-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Nohemi/Nohemi-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Nohemi/Nohemi-Black.woff',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-base'
});

export const subheading = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-subheading",
});