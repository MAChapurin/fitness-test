"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { PlanCard } from "./PlanCard";
import { emitter } from "@/shared/lib/emitter";
import { PlanCardProps } from "@/shared/types/types";

interface PlanSelectorProps {
  data: PlanCardProps[];
}

export const PlanSelector: FC<PlanSelectorProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [isLate, setIsLate] = useState(false);

  const reversedData = useMemo(() => [...data].reverse(), [data]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    emitter.emit("plan:selected", reversedData[index]);
  };

  useEffect(() => {
    const unsubscribe = emitter.subscribe("countdown:ended", () => {
      setIsLate(true);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[0.375rem] xs:gap-[0.5rem] lg:gap-[0.875rem] mb-[0.625rem] lg:mb-[1.25rem]">
      {reversedData.map((plan, index) => (
        <PlanCard
          key={index}
          {...plan}
          is_best={index === 0}
          selected={selectedIndex === index}
          isLate={isLate}
          onClick={() => handleSelect(index)}
        />
      ))}
    </div>
  );
};
