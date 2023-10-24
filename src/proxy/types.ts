import { IDeskproClient } from "../client/types";

export type ProxyResponse = {
  status: number;
  headers: Record<string, string|string[]>;
  text: () => Promise<string>;
  json: () => Promise<any>;
};

export type V2ProxyRequestInit = Omit<RequestInit, "body"> & { body?: string };

export type Fetch = (input: RequestInfo, init?: V2ProxyRequestInit) => Promise<ProxyResponse>;

export type ProxyFetch = (client: IDeskproClient) => Promise<Fetch>;
