import { useDeskproAppClient } from "./hooks";
import React, { useEffect, useRef } from "react";

export const HeightWrapper = ({ children }: { children: React.ReactNode }) => {
  const { client } = useDeskproAppClient();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const resizeObserver = new ResizeObserver(() => {
      const child = container?.children[0];
      if (child) {
        const styles = window.getComputedStyle(child);
        const marginTop = styles.getPropertyValue("margin-top");
        const marginBottom = styles.getPropertyValue("margin-bottom");
        const additionalHeight = (parseInt(marginTop) ?? 0) + (parseInt(marginBottom) ?? 0);
        client?.setHeight(container.scrollHeight + additionalHeight);
      }
    });
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect(); // clean up
  }, [client]);
  return <div ref={ref}>{children}</div>;
};
