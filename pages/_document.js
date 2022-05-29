import Document from "next/document";
import Head from "next/head";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export function SDocument () {
  return (
    <Head>
   {/* This ways to add css on global website use local asset folder withhtml link tag */}
    <link
       href="../asset/GothamPro/gothampro.ttf"
       rel="stylesheet"
     />
      <link
       href="../asset/GothamPro/gothampro_medium.ttf"
       rel="stylesheet"
     />
     <link
       href="../asset/GothamPro/gothampro_light.ttf"
       rel="stylesheet"
     />
     <link
       href="../asset/GothamPro/gothampro_bold.ttf"
       rel="stylesheet"
     />
    
 </Head>
  )
}