import {Fetch, ProxyFetch, ProxyResponse} from "./types";
import { IDeskproClient } from "../client/types";

export const proxyFetch: ProxyFetch = async (client: IDeskproClient): Promise<Fetch> => {
  if (typeof client.getProxyAuth !== "function") {
    throw new Error(`
      Deskpro getProxyAuth() is undefined, please make sure that the run() method is called
      on the Deskpro client after the page is loaded
    `);
  }

  const { proxyV2Url, token } = await client.getProxyAuth();

  return async (input: RequestInfo, init?: RequestInit) => {
    const req = {
      headers: init?.headers ?? {},
      content: typeof init?.body?.toString === "function" ? init?.body.toString() : init?.body,
    };

    const res = await fetch(proxyV2Url, {
      body: JSON.stringify(req),
      method: "POST",
      headers: {
        "X-Proxy-Authorization": `Bearer ${token}`,
        "X-Proxy-Url": typeof input === "string" ? input : input.url,
        "X-Proxy-Method": typeof input === "string" ? (init?.method ?? "GET") : input.method,
      },
    });

    const resContent = JSON.parse(await res.text());

    return {
      status: resContent.status,
      headers: resContent.headers,
      text: async () => resContent.content,
      json: async () => JSON.parse(resContent.content),
    } as ProxyResponse;
  };
};

export const adminGenericProxyFetch: ProxyFetch = async (client: IDeskproClient): Promise<Fetch> => {
  if (typeof client.getAdminGenericProxyAuth !== "function") {
    throw new Error(`
      Deskpro getProxyAuth() is undefined, please make sure that the run() method is called
      on the Deskpro client after the page is loaded
    `);
  }

  const { proxyV2Url, token } = await client.getAdminGenericProxyAuth();

  return async (input: RequestInfo, init?: RequestInit) => {
    const req = {
      headers: init?.headers ?? {},
      content: typeof init?.body?.toString === "function" ? init?.body.toString() : init?.body,
    };

    const res = await fetch(proxyV2Url, {
      body: JSON.stringify(req),
      method: "POST",
      headers: {
        "X-Proxy-Authorization": `Bearer ${token}`,
        "X-Proxy-Url": typeof input === "string" ? input : input.url,
        "X-Proxy-Method": typeof input === "string" ? (init?.method ?? "GET") : input.method,
      },
    });

    const resContent = JSON.parse(await res.text());

    return {
      status: resContent.status,
      headers: resContent.headers,
      text: async () => resContent.content,
      json: async () => JSON.parse(resContent.content),
    } as ProxyResponse;
  };
};
