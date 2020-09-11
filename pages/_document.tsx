import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../theme";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,500,500i,700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="/styles/wordRotate.css"></link>
                    <link rel="stylesheet" href="/styles/glide.core.min.css"></link>
                    <link rel="stylesheet" href="/styles/glide.theme.min.css"></link>
                    <link rel="icon" type="image/png" href="/img/favicon.png"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = sheets.toString().replace(/\s*[\r\n]+\s*/gim, "");

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            <style
                key="jss-server-side"
                id="jss-server-side"
                dangerouslySetInnerHTML={{ __html: style }}
            ></style>,
        ],
    };
};
