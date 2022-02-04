import Handlebars from "handlebars";
import { TemplateContext } from "./types";
import { IDeskproClient } from "../client/types";

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
