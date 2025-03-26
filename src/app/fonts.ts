import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueRoman.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueBold.woff2",
      weight: "700",
      style: "normal",
    },
    // Add other weights/styles as needed
  ],
  display: "swap",
});
