"use client";

import { CustomCheckbox } from "@/shared/ui/CustomCheckbox";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/shared/lib";

export const Form = () => {
  const [agreed, setAgreed] = useState(true);

  return (
    <>
      <form
        role="form"
        aria-label="Форма покупки тарифа"
        className={cn(
          "w-full max-w-[22rem]",
          "py-[1rem] xs:pt-[1.5rem] xs:pb-[1.25rem] lg:pt-[1.875rem]"
        )}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <CustomCheckbox checked={agreed} onChange={setAgreed}>
          Я согласен с{" "}
          <Link
            href="/"
            className="underline hover:text-accent focus-visible:text-accent transition-colors outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            офертой рекуррентных платежей
          </Link>{" "}
          и{" "}
          <Link
            href="/"
            className="underline hover:text-accent focus-visible:text-accent transition-colors outline-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            Политикой конфиденциальности
          </Link>
        </CustomCheckbox>

        <button
          type="submit"
          disabled={!agreed}
          aria-describedby="purchase-disclaimer"
          className={cn(
            "w-full",
            "mt-[1rem] xs:mt-[1.375rem] lg:mt-[0.875rem] mb-[0.625rem] xs:mb-[1.25rem] lg:mb-[1rem] px-[1.25rem] py-[1.25rem]",
            "text-lg lg:text-[1.25rem] font-bold leading-[130%] text-[#191E1F]",
            "rounded-[1.0625rem] text-center transition-[colors, box-shadow] duration-300 outline-none",
            "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#313637]",
            agreed
              ? "bg-accent cursor-pointer hover:shadow-accent hover:shadow"
              : "bg-gray-400 cursor-not-allowed"
          )}
        >
          Купить
        </button>
      </form>
      <p
        id="purchase-disclaimer"
        className={cn(
          "pb-[0.1875rem]",
          "text-[0.625rem] lg:text-sm leading-[120%]"
        )}
      >
        Нажимая кнопку &laquo;Купить&raquo;, Пользователь соглашается
        на&nbsp;разовое списание денежных средств для получения пожизненного
        доступа к&nbsp;приложению. Пользователь соглашается, что данные
        кредитной/дебетовой карты будут сохранены для осуществления покупок
        дополнительных услуг сервиса в&nbsp;случае желания пользователя.
      </p>
    </>
  );
};
