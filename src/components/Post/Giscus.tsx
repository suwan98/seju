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
    <div className="pt-10 min-h-[30rem]">
      <section ref={giscusRef} />
    </div>
  );
}

export default Giscus;
