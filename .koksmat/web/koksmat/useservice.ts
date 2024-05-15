"use client";

import { useContext, useEffect, useState } from "react";

import { run } from "@/koksmat/magicservices";
import { Result } from "./httphelper";
import { MagicboxContext } from "./magicbox-context";

export const version = 1;

export function useService<T>(
  servicename: string,
  args: string[],
  body: string,
  timeout: number,
  transactionid: string,

  setran?: (ran: boolean) => void,
  setresult?: (result: Result<T>) => void,
  debug?: boolean
) {
  const [data, setdata] = useState<T>();
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");
  const [didRun, setdidRun] = useState(false);
  const magicbox = useContext(MagicboxContext);

  useEffect(() => {
    const load = async () => {
      if (didRun) return;

      seterror("");
      const calledTimestamp = new Date();

      const result = await run<T>(
        servicename,
        args,
        body,
        timeout,
        transactionid
      );
      magicbox.logServiceCall({
        calledTimestamp,
        responedTimestamp: new Date(),
        request: {
          args,
          body,
          channel: servicename,
          timeout,
        },
        servicename,
        response: result,
      });
      setdidRun(true);
      setisLoading(false);
      if (setresult) {
        setresult(result);
      }
      if (result.hasError) {
        if (result.errorMessage === "503") {
          result.errorMessage = "Service unavailable";
        }
        seterror(result.errorMessage ?? "Unknown error");

        return;
      } else {
        setdata(result.data);
      }
    };
    if (transactionid && servicename && timeout && args) {
      load();
    }
  }, [servicename, timeout, args, transactionid]);

  return {
    data,
    error,
    isLoading,
  };
}
