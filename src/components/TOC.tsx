"use client";

import {useEffect} from "react";
import tocbot from "tocbot";

function TOC() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h2,h3",
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <div>
        <span>목차</span>
        <div className="js-toc flex items-center justify-center"></div>
      </div>
    </>
  );
}

export default TOC;
