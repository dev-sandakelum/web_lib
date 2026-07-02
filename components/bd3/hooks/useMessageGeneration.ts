import { useState, useCallback, useRef } from "react";
import type { FormData3 } from "../types";

const MAX_ATTEMPTS_DISPLAY = 20;

export function useMessageGeneration() {
  const [isMsgGen, setIsMsgGen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshAttempt, setRefreshAttempt] = useState(0);
  const [refreshMaxAttempts, setRefreshMaxAttempts] = useState(20);
  const [refreshMatched, setRefreshMatched] = useState<boolean | null>(null);
  const [msgCopied, setMsgCopied] = useState(false);
  const [generatedMsg, setGeneratedMsg] = useState("");

  const msgCopyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleGenerateMsg = useCallback(async (form: FormData3) => {
    setIsMsgGen(true);
    setGeneratedMsg("");
    try {
      const res = await fetch("/api/bd3/msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          name: form.name,
          batch: form.batch,
          faculty: form.faculty,
          university: form.university,
        }),
      });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setGeneratedMsg(data.result?.content ?? "");
    } catch (err: any) {
      console.error("[generate]", err);
      setGeneratedMsg("⚠️ Failed to generate — please try again.");
    } finally {
      setIsMsgGen(false);
    }
  }, []);

  const handleRefreshMsg = useCallback(
    async (onRefreshComplete?: (msg: string) => void) => {
      setIsRefreshing(true);
      setRefreshAttempt(0);
      setRefreshMatched(null);

      try {
        const res = await fetch("/api/bd3/msg", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
          body: JSON.stringify({ enforceCharRange: true }),
        });

        if (!res.ok || !res.body) throw new Error(`Server error ${res.status}`);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const parts = buffer.split("\n\n");
          buffer = parts.pop() ?? "";

          for (const part of parts) {
            const eventMatch = part.match(/^event:\s*(\w+)/m);
            const dataMatch = part.match(/^data:\s*(.+)/m);
            if (!eventMatch || !dataMatch) continue;

            const eventName = eventMatch[1];
            let payload: any;
            try {
              payload = JSON.parse(dataMatch[1]);
            } catch {
              continue;
            }

            if (eventName === "attempt") {
              setRefreshAttempt(payload.attempt);
              setRefreshMaxAttempts(payload.maxAttempts);
            } else if (eventName === "done") {
              setRefreshAttempt(payload.attempts ?? 1);
              setRefreshMaxAttempts(payload.maxAttempts ?? MAX_ATTEMPTS_DISPLAY);
              setRefreshMatched(payload.matched ?? true);
              if (payload.result?.content) {
                setGeneratedMsg(payload.result.content);
                onRefreshComplete?.(payload.result.content);
              }
            }
          }
        }
      } catch (err: any) {
        console.error("[refresh]", err);
        setRefreshMatched(false);
      } finally {
        setTimeout(() => {
          setIsRefreshing(false);
          setRefreshAttempt(0);
          setRefreshMatched(null);
        }, 2000);
      }
    },
    []
  );

  const handleCopyMsg = useCallback(async () => {
    if (!generatedMsg) return;
    try {
      await navigator.clipboard.writeText(generatedMsg);
      setMsgCopied(true);
      if (msgCopyTimerRef.current) clearTimeout(msgCopyTimerRef.current);
      msgCopyTimerRef.current = setTimeout(() => setMsgCopied(false), 2500);
    } catch {
      alert("Could not copy message.");
    }
  }, [generatedMsg]);

  return {
    isMsgGen,
    isRefreshing,
    refreshAttempt,
    refreshMaxAttempts,
    refreshMatched,
    msgCopied,
    generatedMsg,
    setGeneratedMsg,
    handleGenerateMsg,
    handleRefreshMsg,
    handleCopyMsg,
  };
}
