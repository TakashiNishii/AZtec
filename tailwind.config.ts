import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation:{
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite',
      },
      keyframes: {
          'shake' : {
              '10%, 90%': {
                  transform: 'translate3d(-1px, 0, 0)'
              },
              '20%, 80%' : {
                  transform: 'translate3d(2px, 0, 0)'
              },
              '30%, 50%, 70%': {
                  transform: 'translate3d(-4px, 0, 0)'
              },
              '40%, 60%': {
                  transform: 'translate3d(4px, 0, 0)'
              }
          }
      }
    },
    fontFamily: {
      sans: ["Literata", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Literata"],
      body: ["Literata"],
    }
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    theme: {
      fontFamily: {
        sans: ["Literata", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Literata"],
        body: ["Literata"],
      },
    },
    themes: [{
      aztecTheme: {
        "primary": "#293F99",
        "secondary": "#F5FBEF",

      }
    }], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
