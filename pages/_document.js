import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="background document" lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta
            name="description"
            content="Front end engineering leader with 10+ years of experience in building front end solutions for e-commerce websites, web applications, marketing landing pages, and user engagement flows. Passionate about creating beautiful accessible user experiences."
          />
          <meta name="robots" content="noodp" />
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
