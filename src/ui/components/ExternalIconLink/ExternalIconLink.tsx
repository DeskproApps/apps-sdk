import React, { CSSProperties, FC } from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useDeskproAppTheme } from "../../context";
import { Icon } from "../Icon";
import { AnyIcon } from "@deskpro/deskpro-ui";

export interface ExternalIconLinkProps {
  icon: AnyIcon;
  href: string;
  title?: string;
  style?: CSSProperties;
}

export const ExternalIconLink: FC<ExternalIconLinkProps> = ({ icon, href, title, style }: ExternalIconLinkProps) => {
  const { theme } = useDeskproAppTheme();

  const externalLinkStyle: CSSProperties = {
    display: "inline-flex",
    padding: "3px 6px",
    borderRadius: "12px",
    alignItems: "center",
    backgroundColor: theme.colors.grey10,
    ...(style ?? {}),
  };

  return (
    <a href={href} title={title} target="_blank" style={externalLinkStyle}>
      <Icon icon={icon} themeColor="grey100" />
      <span style={{ marginLeft: "7px" }}>
        <Icon icon={faExternalLinkAlt} themeColor="brandPrimary" size={10} />
      </span>
    </a>
  );
};
