import type { FC, SVGProps } from "react";
import { AlertIcon, CheckIcon, StarIcon } from "./icons";

const config = {
  alert: AlertIcon,
  check: CheckIcon,
  star: StarIcon,
} as const;

export type IconType = keyof typeof config;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const SVGIcon = config[name];
  return <SVGIcon {...props} />;
};
