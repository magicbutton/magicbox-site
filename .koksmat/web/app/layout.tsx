"use client";
import type { Metadata } from "next";
import "./globals.css";
import "./embla.css";
import { ThemeProvider } from "../components/theme-provider";
import { MagicboxProvider } from "@/koksmat/magicbox-providers";
import { MSALWrapper } from "@/koksmat/msal/auth";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
export default function RootLayout2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
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
        {/* </ThemeProvider> */}
        <Toaster />
        <CookieConsent>
          We improve this site by using Microsoft Clarity to see how you use it.
          By using this site, you agree that we and Microsoft can collect and
          use this data. Our{" "}
          <Link className="text-white underline" href="/privacy">
            privacy statement{" "}
          </Link>{" "}
          has more details. Beside that, we store the pincode you have entered
          for easing you next visit.
        </CookieConsent>
      </body>
    </html>
  );
}
