import Handlebars from "handlebars";
import { TemplateContext } from "./types";
import { IDeskproClient } from "../client/types";

const dpCustomAppsHandlebarsTemplates: Record<string, string> = {};

export const renderTemplate = (client: IDeskproClient, templateId: string, context: TemplateContext) => {
  const target = document.getElementById(templateId);

  if (!target) {
    return;
  }

  target.innerHTML = Handlebars.compile<TemplateContext>(target.innerHTML)(context);
  target.removeAttribute("data-type");

  if (client.resize) {
    client.resize();
  }
};

export const renderTemplateMultiple = (client: IDeskproClient, templateId: string, context: TemplateContext) => {
  const target = document.getElementById(templateId);

  if (!target) {
    return;
  }

  if (typeof dpCustomAppsHandlebarsTemplates[templateId] === "undefined") {
    dpCustomAppsHandlebarsTemplates[templateId] = target.innerHTML;
  }

  target.innerHTML = Handlebars.compile<TemplateContext>(dpCustomAppsHandlebarsTemplates[templateId])(context);

  if (client.resize) {
    client.resize();
  }
};
