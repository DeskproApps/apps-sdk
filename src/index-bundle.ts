import "../deskpro.scss";
import "regenerator-runtime/runtime";
import { createClient } from "./client/client";
import { renderTemplate, renderTemplateMultiple } from "./templating/helpers";
import { proxyFetch } from "./proxy/helpers";
import { Fetch } from "./proxy/types";
import { TemplateContext } from "./templating/types";
import { preload } from "./preload";

preload();

const dpClient = createClient({
  runAfterPageLoad: true,
  resizeAfterEvents: true,
});

export default {
  client: dpClient,
  utils: {
    renderTemplate: (templateId: string, context: TemplateContext) => renderTemplate(dpClient, templateId, context),
    renderTemplateMultiple: (templateId: string, context: TemplateContext) => renderTemplateMultiple(dpClient, templateId, context),
    fetch: (input: RequestInfo, init?: RequestInit) => proxyFetch(dpClient).then((fn: Fetch) => fn(input, init)),
  },
};

