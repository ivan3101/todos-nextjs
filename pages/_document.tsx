import {ServerStyleSheet} from "styled-components";
import Document, {DocumentContext, Head, Main, NextScript} from "next/document";

class MyDocument extends Document<any> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...initialProps, ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,viewport-fit=cover"
          />
          <title>ToDo List</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;
