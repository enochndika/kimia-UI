import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/website/components/container';
import Layout from '../website/layout/desktop';
import Editor from '@/website/components/editor';

const globalConfig = `module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        left: "left 0.4s",
        right: "right 0.4s",
        "modal-right": "modal-right 0.3s",
        "modal-top": "modal-top 0.3s",
        "modal-left": "modal-left 0.3s",
      },
      keyframes: {
        left: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        right: {
          "0%, 100%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },

        "modal-top": {
          "0%, 100%": { top: "-500px" },
          "100%": { top: "0" },
        },
        "modal-right": {
          "0%, 100%": { right: "-500px" },
          "100%": { right: "0" },
        },
        "modal-left": {
          "0%, 100%": { left: "-500px" },
          "100%": { left: "0" },
        },
      },
    },
    variants: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderWidth: ["hover"],
      opacity: ["disabled"],
      textColor: ["active"],
      overflow: ["hover"],
    },
  },
  plugins: [],
};
`;

export default function ConfigurationPage() {
  return (
    <>
      <Head>
        <title>Configuration</title>
      </Head>
      <Container>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800  mb-8">
          Configuration
        </h1>
        <p className="mb-5 md:mb-2.5 text-gray-600">
          After installing tailwindcss in your React project, you can overwrite{' '}
          <code className="px-1 font-bold">tailwind.config.js</code>with the
          configuration below.
        </p>
        <p className="mb-5 md:mb-2.5 text-gray-600">
          Some components require additional configuration to work properly.
        </p>
        <div className="my-10">
          <Link href="/components/buttons">
            <a>
              <button className="px-6 font-bold py-3 active:bg-purple-800 bg-purple-900 rounded-lg text-white focus:outline-none">
                Components
              </button>
            </a>
          </Link>
        </div>
        <Editor code={globalConfig} />
      </Container>
    </>
  );
}

ConfigurationPage.Layout = Layout;
