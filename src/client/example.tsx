import { useState } from "react";
import { useInitialisedDeskproAppClient } from "../ui/context";
import { OAuth2Error } from "./types";

function Demo() {
  const [authorizationUrl, setAuthorizationUrl] = useState<string>();

  useInitialisedDeskproAppClient(async (client) => {
    const oauth2 =
      process.env.NODE_ENV === 'development'
        // Local Version (custom/self-hosted app)
        // This supports code and pkce flows, the developer will provide the IDP's authorize URL as a template
        // apps client will "augment" the IDP's authorize URL with the required callback URL, OAuth gateway, etc.
        // we also need to let Deskpro know how to "acquire" the auth code
        ? await client.startOauth2Local(
          ({ state, callbackUrl, codeChallenge }) => `https://idp.example.com/authorize?client_id=xxx&state=${state}&code_challenge=${codeChallenge}&callback_uri=${callbackUrl}`,
          /\?code=(?<code>.+?)&/,
          async function convertResponseToToken(code: string) {
            if (process.env.IMPLICIT_GRANT) {
              // Implicit Grant
              return { access_token: code };
            }

            // AuthCode or AuthCode+PKCE.
            return (await (await fetch('...', {})).json());
          },
        )
        // Global Proxy Service
        // Developer will provide clientId, the rest of OAuth2 flow is in the Global Proxy Service.
        // (clientId is required incase an app supports multiple OAuth2s)
        : await client.startOauth2Global(process.env.CLIENT_ID!);

    // store the auth URL and present this as the "login" link to the app user
    setAuthorizationUrl(oauth2.authorizationUrl);

    try {
      // Poll will resolve when OAuth2 has succeeded or failed. 
      const pollResult = await oauth2.poll();

      console.log("Auth Code Acquired!", pollResult);
    } catch (error) {
      if (error instanceof OAuth2Error) {
        // OAuth2Error is thrown when the OAuth2 flow fails (rejected?)
        // ...
      }

      // Some Generic Error occurred (no internet?)
      console.log("Error!", error);
    }
  });

  return <a href={authorizationUrl} target="_blank">Login via Widgets Inc.</a>;
}