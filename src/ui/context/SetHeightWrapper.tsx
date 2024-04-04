import { useDeskproAppClient } from "./hooks";
import React, { useEffect, useRef } from "react";

const findAdditionalHeight = (styles: CSSStyleDeclaration) => {
  const marginTop = styles.getPropertyValue("margin-top");
  const marginBottom = styles.getPropertyValue("margin-bottom");

  return (parseInt(marginTop) ?? 0) + (parseInt(marginBottom) ?? 0);
};

export const HeightWrapper = ({ children }: { children: React.ReactNode }) => {
  const { client } = useDeskproAppClient();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ref?.current;
    if (!container) return;
    const resizeObserver = new ResizeObserver(() => {
      const child = container?.children[0];
      if (child) {
        const childStyles = window.getComputedStyle(child);
        const bodyStyles = window.getComputedStyle(document.body);

        client?.setHeight(
          container.scrollHeight +
            findAdditionalHeight(childStyles) +
            findAdditionalHeight(bodyStyles)
        );
      }
    });
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect(); // clean up
  }, [client]);
  return <div ref={ref}>{children}</div>;
};
