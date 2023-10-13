import {Inter, Poppins, Roboto} from "next/font/google";

export const inter = Inter({
    weight: ['100', '300', '400', '500', '700'],
    subsets: ['latin'],
    variable: "--font-inter",
});
export const roboto = Roboto({weight: ['100', '300', '400', '500', '700'], subsets: ['latin'],  preload: false,
    variable: "--font-roboto",
});

export const poppins = Poppins({weight: ['100', '300', '400', '500', '700'],  subsets: ['latin'], variable: "--font-poppins",
});