import { Merriweather, Raleway, League_Spartan } from "next/font/google";

export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
});

export const leagueSpartan = League_Spartan({
  variable: "--font-leaguespartan",
  subsets: ["latin"],
});

export const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});
