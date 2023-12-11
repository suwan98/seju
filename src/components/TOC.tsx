"use client";

import {useEffect} from "react";
import tocbot from "tocbot";

function TOC() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".toc-content",
      headingSelector: "h2,h3",
      activeLinkClass: "is-active-li",
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 mt-[20rem] pr-[10rem] flex flex-col">
        <div className="toc"></div>
      </div>
    </>
  );
}

export default TOC;
