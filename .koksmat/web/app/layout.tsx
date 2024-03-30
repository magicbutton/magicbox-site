"use client";
import type { Metadata } from "next";
import "./globals.css";
import "./embla.css";
import { ThemeProvider } from "next-themes";
import { MagicboxProvider } from "@/koksmat/magicbox-providers";
import { MSALWrapper } from "@/koksmat/msal/auth";
import Script from "next/script";

export default function RootLayout2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MagicboxProvider>
          <Script id="clarity">
            {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "lobxmt3a4x");            
            `}
          </Script>

          <MSALWrapper>{children}</MSALWrapper>
        </MagicboxProvider>
      </body>
    </html>
  );
}
