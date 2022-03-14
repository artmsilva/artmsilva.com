import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --background-color: #cecece;
          --text-color: rgba(68, 68, 68, 0.9);
          color-scheme: light;
        }

        /** target dark mode media query */
        @media (prefers-color-scheme: dark) {
          :root {
            --background-color: #0f0f0f;
            --text-color: rgb(241 230 230 / 90%);
            color-scheme: dark;
          }
        }

        * {
          color: inherit;
        }

        .document {
          color: var(--text-color);
          font-family: monospace;
          padding: 0 1vw;
        }

        .background {
          background: var(--background-color);
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
