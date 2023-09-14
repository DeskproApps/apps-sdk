import { IDeskproClient } from "../client/types";

export type ProxyResponse = {
  status: number;
  headers: Record<string, string|string[]>;
  text: () => Promise<string>;
  json: () => Promise<any>;
};

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<ProxyResponse>;

export type ProxyFetch = (client: IDeskproClient) => Promise<Fetch>;
