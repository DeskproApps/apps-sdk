import { Fetch, ProxyFetch } from "./types";
import { IDeskproClient } from "../client/types";

export const proxyFetch: ProxyFetch = async (client: IDeskproClient): Promise<Fetch> => {
  if (typeof client.getProxyAuth !== "function") {
    throw new Error(`
      Deskpro getProxyAuth() is undefined, please make sure that the run() method is called
      on the Deskpro client after the page is loaded
    `);
  }

  const { proxyUrl, token } = await client.getProxyAuth();

  return (input: RequestInfo, init?: RequestInit) => fetch(proxyUrl, {
    ...init,
    method: "POST",
    headers: {
      "X-Proxy-Headers": JSON.stringify(init?.headers ?? {}),
      "X-Proxy-Authorization": `Bearer ${token}`,
      "X-Proxy-Url": typeof input === "string" ? input : input.url,
      "X-Proxy-Method": typeof input === "string" ? (init?.method ?? "GET") : input.method,
    },
  });

};

export const adminGenericProxyFetch: ProxyFetch = async (client: IDeskproClient): Promise<Fetch> => {
  if (typeof client.getAdminGenericProxyAuth !== "function") {
    throw new Error(`
      Deskpro getProxyAuth() is undefined, please make sure that the run() method is called
      on the Deskpro client after the page is loaded
    `);
  }

  const { proxyUrl, token } = await client.getAdminGenericProxyAuth();

  return (input: RequestInfo, init?: RequestInit) => fetch(proxyUrl, {
    ...init,
    method: "POST",
    headers: {
      "X-Proxy-Headers": JSON.stringify(init?.headers ?? {}),
      "X-Proxy-Authorization": `Bearer ${token}`,
      "X-Proxy-Url": typeof input === "string" ? input : input.url,
      "X-Proxy-Method": typeof input === "string" ? (init?.method ?? "GET") : input.method,
    },
  });

};
