import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="background document" lang="en">
        <Head>
          <title>Arturo — Senior Engineer at The Washington Post</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Front end engineering manager with 8+ years of experience in building front end solutions for e-commerce websites, web applications, marketing landing pages, and user engagement flows. Passionate about creating beautiful accessible user experiences."
          />
          <meta name="robots" content="noodp" />
          <link
            rel="preload"
            as="image"
            href="https://images.unsplash.com/photo-1589506356380-33c39d65a6a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
