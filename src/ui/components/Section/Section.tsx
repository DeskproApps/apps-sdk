import React, { FC, ReactNode } from "react";

export interface SectionProps {
  children: JSX.Element | ReactNode;
}

export const Section: FC<SectionProps> = ({ children }: SectionProps) => (
  <div style={{ padding: "10px 10px 0" }}>
    {children}
  </div>
);
