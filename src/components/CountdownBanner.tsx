"use client";

import { Icon } from "@/shared/ui/icon/icon";
import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { cn, emitter, pad2 } from "@/shared/lib";

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const emittedRef = useRef(false);

  useEffect(() => {
    if (timeLeft <= 0 && !emittedRef.current) {
      emitter.emit("countdown:ended", undefined);
      emittedRef.current = true;
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const minutes = pad2(Math.floor(timeLeft / 60));
  const seconds = pad2(timeLeft % 60);
  const timeISO = `PT${minutes}M${seconds}S`;

  return (
    <section
      role="status"
      aria-live="polite"
      className="bg-[#1D5B43] p-2 flex flex-col items-center space-y-[0.25rem] min-h-[4.625rem]"
    >
      <p className="text-center font-semibold text-sm xs:text-lg md:text-2xl leading-[130%] tracking-normal">
        Успейте открыть пробную неделю
      </p>

      <time
        dateTime={timeISO}
        className={cn(
          "flex items-center justify-center gap-[0.5rem] transition-colors font-bold text-[1.75rem] xs:text-[2rem] md:text-[2.5rem] leading-[130%] tracking-widest",
          {
            "text-[#FFBB00]": timeLeft >= 30,
            "text-[#FF4E4E] animate-pulse": timeLeft < 30,
            "animate-none": timeLeft === 0,
          }
        )}
      >
        <Icon name="star" className="shrink-0" aria-hidden="true" />
        <span className="sr-only">Оставшееся время: </span>

        <div className="flex gap-[0.125rem]" aria-hidden="true">
          {minutes.split("").map((digit, idx) => (
            <NumberFlow
              key={`min-${idx}`}
              value={parseInt(digit)}
              spinTiming={{ duration: 300 }}
              transformTiming={{ duration: 300 }}
              className="tabular-nums"
            />
          ))}
        </div>

        <span aria-hidden="true">:</span>

        <div className="flex gap-[0.125rem]" aria-hidden="true">
          {seconds.split("").map((digit, idx) => (
            <NumberFlow
              key={`sec-${idx}`}
              value={parseInt(digit)}
              spinTiming={{ duration: 300 }}
              transformTiming={{ duration: 300 }}
              className="tabular-nums"
            />
          ))}
        </div>

        <Icon name="star" className="shrink-0" aria-hidden="true" />
      </time>
    </section>
  );
};
