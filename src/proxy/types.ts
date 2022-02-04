import { IDeskproClient } from "../client/types";

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

export type ProxyFetch = (client: IDeskproClient) => Promise<Fetch>;
