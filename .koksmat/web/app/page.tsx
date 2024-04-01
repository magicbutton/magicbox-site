"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { hasValidPasswordInCookieStore } from "./login/server";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const load = async () => {
      if (await hasValidPasswordInCookieStore()) {
        router.push("/sites/welcome-to-nexi/SitePages/Home.aspx");
      } else {
        router.push("/login");
      }
    };
    load();
  }, []);

  return <div></div>;
}
