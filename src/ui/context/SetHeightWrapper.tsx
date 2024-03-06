import { useDeskproAppClient } from "./hooks";
import React, { useEffect, useRef } from "react";

export const HeightWrapper = ({ children }: { children: React.ReactNode }) => {
  const { client } = useDeskproAppClient();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const body = document.body;
    const styles = window.getComputedStyle(body);
    const marginTop = styles.getPropertyValue("margin-top");
    const marginBottom = styles.getPropertyValue("margin-bottom");
    const additionalHeight = parseInt(marginTop) ?? 0 + parseInt(marginBottom) ?? 0;
    const resizeObserver = new ResizeObserver(() => {
      client?.setHeight(document.body.scrollHeight + additionalHeight);
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect(); // clean up
  }, [client]);
  return <div ref={ref}>{children}</div>;
};
