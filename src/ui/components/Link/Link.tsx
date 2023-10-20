import styled from "styled-components";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@deskpro/deskpro-ui";
import type { FC } from "react";
import type { IconProps, ThemeColors, AnyIcon } from "@deskpro/deskpro-ui";

export type Props = {
  href?: string,
  color?: keyof ThemeColors,
  size?: IconProps["size"];
};

const Link = styled.a<{ color?: keyof ThemeColors }>`
  color: ${({ theme, color = "cyan100" }) => theme.colors[color]};
  text-decoration: none;
`;

const LinkIcon: FC<Props & { icon?: AnyIcon }> = ({
  size = 10,
  color = "grey40",
  icon = faArrowUpRightFromSquare,
  href,
  ...props
}) => {
  return !href ? <></> : (
    <Link target="_blank" color={color} href={href} {...props}>
      <Icon size={size} icon={icon} />
    </Link>
  )
};

export { Link, LinkIcon };
