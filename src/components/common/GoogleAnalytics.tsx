"use client";

import Script from "next/script";

function GoogleAnalytics() {
  return (
    <>
      <Script
        /* 구글 애널리틱스 */
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM}`}
      />
      <Script id="google-analytics">
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GTM}');
                  `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;
