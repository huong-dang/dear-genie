import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            redirectUri={process.env.NEXT_PUBLIC_REDIRECT_URL}
            audience={process.env.NEXT_PUBLIC_AUDIENCE}
            scope="read:current_user update:current_user_metadata"
        >
            <Component {...pageProps} />{" "}
        </Auth0Provider>
    );
}

export default MyApp;
