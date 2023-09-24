import React from "react";
import Document, { Html, Main, Head, NextScript } from "next/document";

if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  // this should be added in your custom _document
  process.on("SIGTERM", () => {
    // eslint-disable-next-line no-console
    console.log("Received SIGTERM: ", "cleaning up");
    process.exit(0);
  });

  process.on("SIGINT", () => {
    // eslint-disable-next-line no-console
    console.log("Received SIGINT: ", "cleaning up");
    process.exit(0);
  });
}
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
