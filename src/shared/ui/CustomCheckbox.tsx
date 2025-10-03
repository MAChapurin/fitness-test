"use client";

import { FC, ReactNode, useId } from "react";
import { cn } from "@/shared/lib/cn";
import { Icon } from "./icon/icon";

interface CustomCheckboxProps {
  children?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  children,
  checked = false,
  onChange,
}) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className="inline-flex items-start gap-[0.625rem] lg:gap-[0.75rem] cursor-pointer select-none"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer sr-only"
      />

      <div
        role="checkbox"
        aria-checked={checked}
        className={cn(
          "relative w-[1.875rem] h-[1.875rem] lg:w-[2rem] lg:h-[2rem]",
          "flex items-center justify-center shrink-0",
          "rounded border border-[#606566]",
          "transition-all duration-200",
          "peer-hover:border-accent",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:border-accent"
        )}
      >
        <span
          className={cn(
            "transition-opacity duration-200",
            checked ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        >
          <Icon name="check" className="w-[1rem] h-[1rem] text-accent" />
        </span>
      </div>

      {children && (
        <div className="text-xs lg:text-base leading-[120%] lg:leading-[110%] max-w-[40.625rem]">
          {children}
        </div>
      )}
    </label>
  );
};
