/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import giscusConfig from "@/lib/api/giscus.config";
import {useTheme} from "next-themes";
import {useEffect, useRef} from "react";

function Giscus() {
  const giscusRef = useRef<HTMLDivElement>(null);
  const {resolvedTheme} = useTheme();

  const giscusTheme =
    resolvedTheme === "dark" ? "transparent_dark" : "light_tritanopia";

  useEffect(() => {
    if (!giscusRef.current) return;
    const script = document.createElement("script");
    script.src = giscusConfig.src;

    const attributes = {...giscusConfig.attributes, theme: giscusTheme};
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(`data-${key}`, value);
    });

    giscusRef.current.appendChild(script);
  }, [giscusTheme]);

  return (
    <footer id="giscus-comment" className="pt-10">
      <section ref={giscusRef} />
    </footer>
  );
}

export default Giscus;
