import Head from "next/head";
import * as React from "react";

export const config = { unstable_runtimeJS: false };

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Arturo Silva — Technical Architect at The Washington Post</title>
      </Head>
      <header>
        <h1 className="block">arturo silva.</h1>
        <h2 className="block">
          technical architect @washingtonpost. alum @redventures @bankrate
          @lowes.
        </h2>
      </header>
      <main>
        <p>
          <a
            className="block"
            title="Link to Arturo Silva's Twitter Profile"
            href="https://twitter.com/artmsilva"
          >
            https://twitter.com/artmsilva
          </a>
        </p>
        <p>
          <a
            className="block"
            title="Link to Arturo Silva's Instagram Profile"
            href="https://instagram.com/artfromclt"
          >
            https://instagram.com/artfromclt
          </a>
        </p>
        <p>
          <a
            className="block"
            title="Link to Arturo Silva's LinkedIn Profile"
            href="https://www.linkedin.com/in/artmsilva/"
          >
            https://www.linkedin.com/in/artmsilva/
          </a>
        </p>
        <p>
          <a
            className="block"
            title="Link to Arturo Silva's unsplash Profile"
            href="https://unsplash.com/@artmsilva"
          >
            https://unsplash.com/@artmsilva
          </a>
        </p>
      </main>
    </React.Fragment>
  );
}
