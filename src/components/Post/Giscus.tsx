"use client";

import giscusConfig from "@/lib/api/giscus.config";
import {useTheme} from "next-themes";
import {useEffect, useRef} from "react";

function Giscus() {
  const giscusRef = useRef<HTMLDivElement>(null);
  const {resolvedTheme} = useTheme();

  useEffect(() => {
    if (!giscusRef.current || giscusRef.current.hasChildNodes()) return;
    const script = document.createElement("script");
    script.src = giscusConfig.src;

    const giscusTheme =
      resolvedTheme === "dark" ? "transparent_dark" : "light_tritanopia";

    const attributes = {...giscusConfig.attributes, theme: giscusTheme};

    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(`data-${key}`, value);
    });
    script.async = giscusConfig.async;

    giscusRef.current.appendChild(script);
  }, [resolvedTheme]);

  return (
    <footer id="giscus-comment" className="pt-10">
      <section ref={giscusRef} />
    </footer>
  );
}

export default Giscus;
