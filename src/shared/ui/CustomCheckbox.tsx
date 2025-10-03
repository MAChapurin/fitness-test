"use client";

import { FC, ReactNode, useId } from "react";
import { Icon } from "./icon/icon";

interface CustomCheckboxProps {
  children?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  children,
  checked,
  onChange,
}) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className="inline-flex gap-[0.625rem] lg:gap-[0.75rem] cursor-pointer select-none items-start"
    >
      <div
        className="w-[1.875rem] h-[1.875rem] lg:w-[2rem] lg:h-[2rem] border border-[#606566] rounded flex items-center justify-center shrink-0"
        role="checkbox"
        aria-checked={checked}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer hidden"
        />
        <span
          className="opacity-0 peer-checked:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <Icon name="check" />
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
