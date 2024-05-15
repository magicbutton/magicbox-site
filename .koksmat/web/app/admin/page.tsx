"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/piUCmvToKUQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useContext } from "react";
import { MagicboxContext } from "@/koksmat/magicbox-context";

export default function Component() {
  const magicbox = useContext(MagicboxContext);
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"></main>
  );
}
