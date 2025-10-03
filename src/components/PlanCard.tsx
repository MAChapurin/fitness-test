"use client";
import { cn } from "@/shared/lib/cn";
import { formatPriceThreshold } from "@/shared/lib/formatPriceThreshold";
import { FC, KeyboardEvent, useRef } from "react";
import NumberFlow from "@number-flow/react";
import { PlanCardProps } from "@/shared/types/types";

export const PlanCard: FC<PlanCardProps> = ({
  id,
  period,
  price,
  full_price,
  is_best,
  selected = false,
  text,
  onClick,
  isLate,
}) => {
  const hasDiscount = full_price > price;
  const discount = Math.round(((full_price - price) / full_price) * 100);
  const displayedPrice = isLate ? full_price : price;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const current = cardRef.current;
    if (!current) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        onClick?.();
        break;
      case "ArrowRight":
        e.preventDefault();
        focusNextCard(current);
        break;
      case "ArrowDown":
        e.preventDefault();
        focusNextCard(current);
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusPrevCard(current);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusPrevCard(current);
        break;
    }
  };

  return (
    <article
      id={id}
      ref={cardRef}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      aria-label={`Тариф: ${period}, цена: ${displayedPrice} рублей`}
      itemScope
      itemType="https://schema.org/Product"
      className={cn(
        "group relative grid grid-cols-2 cursor-pointer",
        "transform transition-[border-color, transform] duration-300 hover:scale-101 outline-none",
        "p-[1.125rem] xs:px-[1.8125rem] lg:px-[1.125rem] lg:pt-[4.25rem] lg:pb-[1.8125rem]",
        "gap-[1.8125rem] xs:gap-[3.5625rem] lg:gap-[3.0625rem]",
        "border-2 border-[#484D4E] bg-[#313637]",
        "rounded-[1.25rem] lg:rounded-[2.125rem]",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#313637]",
        {
          "md:col-span-3 lg:grid-cols-[auto_1fr] lg:pl-[7.625rem] lg:pr-[5rem] lg:pt-[2.125rem] lg:pb-[1.875rem] lg:gap-[2.5rem]":
            is_best,
          "md:grid-cols-1": !is_best,
          "border-accent": selected,
        }
      )}
    >
      <div
        className={cn(
          "absolute top-[-0.125rem] right-[1.6875rem]",
          "ml-auto lg:left-[3.125rem] lg:right-auto",
          "px-[0.375rem] py-[0.125rem] xs:py-[0.125rem] lg:px-[0.5rem] lg:py-[0.3125rem]",
          "font-medium text-xs xs:text-base lg:text-[1.375rem]",
          "bg-[#FD5656] rounded-b-[0.375rem]",
          "transition-opacity duration-300",
          {
            "right-[3rem] xs:right-[3.75rem]": is_best,
            "opacity-0": isLate,
          }
        )}
        aria-hidden={isLate}
      >
        -{discount}%
      </div>

      {is_best && (
        <div
          className="absolute top-[0.125rem] lg:top-[0.625rem] right-[0.8125rem] lg:right-[1.25rem] text-accent font-medium text-[0.8125rem] xs:text-base lg:text-[1.375rem]"
          aria-hidden="true"
        >
          xит!
        </div>
      )}

      <div
        className={cn("flex flex-col gap-[0.75rem] xs:gap-[1rem]", {
          "lg:gap-[1.875rem] lg:px-[1.125rem]": !is_best,
        })}
      >
        <header>
          <h3
            itemProp="name"
            className="text-base xs:text-lg md:text-[1.625rem] font-medium leading-[120%] whitespace-nowrap lg:text-center"
            id={`plan-title-${id}`}
          >
            {period}
          </h3>
        </header>

        <div
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
          className="flex flex-col items-center w-fit lg:w-full"
          aria-describedby={`plan-title-${id} plan-price-${id}`}
        >
          <meta itemProp="priceCurrency" content="RUB" />
          <p
            itemProp="price"
            id={`plan-price-${id}`}
            className={cn(
              "text-[1.875rem] xs:text-[2.125rem] lg:text-[3.125rem] font-semibold leading-[100%] whitespace-nowrap transition-colors duration-300",
              { "text-accent": selected }
            )}
          >
            <NumberFlow
              value={displayedPrice}
              className="inline-block"
              spinTiming={{ duration: 300 }}
              transformTiming={{ duration: 300 }}
            />{" "}
            ₽
          </p>

          {hasDiscount && (
            <p
              className={cn(
                "line-through text-[#919191] text-sm xs:text-base lg:text-2xl leading-[120%] text-right lg:ml-auto whitespace-nowrap transition-opacity duration-300",
                { "opacity-0": isLate }
              )}
              aria-hidden={isLate}
            >
              {formatPriceThreshold(full_price)} ₽
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p
          itemProp="description"
          className="pt-[0.0625rem] text-sm lg:text-base leading-[130%] text-balance"
        >
          {text}
        </p>
      </div>
    </article>
  );
};

function focusNextCard(current: HTMLElement) {
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>('article[role="button"]')
  );
  const index = cards.indexOf(current);
  const next = cards[index + 1] || cards[0];
  next.focus();
}

function focusPrevCard(current: HTMLElement) {
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>('article[role="button"]')
  );
  const index = cards.indexOf(current);
  const prev = cards[index - 1] || cards[cards.length - 1];
  prev.focus();
}
