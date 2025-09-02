import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="180x180"
                    href="/apple-icon-180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/manifest-icon-192.maskable.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="196x196"
                    href="/favicon-196.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="/manifest-icon-512.maskable.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    href="/manifest-icon-192.maskable.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="196x196"
                    href="/favicon-196.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="512x512"
                    href="/manifest-icon-512.maskable.png"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
