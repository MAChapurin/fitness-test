import { CountdownBanner, Form, PlanSelector } from "@/components";
import { PlanCardProps } from "@/shared/types/types";
import { Icon } from "@/shared/ui/icon/icon";
import Image from "next/image";

export const metadata = {
  title: "Выберите тариф — FitHub",
  description:
    "Выберите оптимальный тариф и начните тренироваться с FitHub. Гарантия возврата, гибкие планы и лучшие результаты уже через 4 недели.",
  openGraph: {
    title: "Выберите тариф — FitHub",
    description:
      "Выберите оптимальный тариф и начните тренироваться с FitHub. Доступные планы, гарантия возврата и пробный период.",
    type: "website",
    locale: "ru_RU",
    url: "https://fithub.com/tariffs",
    siteName: "FitHub",
    images: [
      {
        url: "https://fithub.com/hero-1920.png",
        width: 1200,
        height: 630,
        alt: "Выбор тарифа FitHub",
      },
    ],
  },
};

export default async function Home() {
  const res = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs");
  const data: PlanCardProps[] = await res.json();

  return (
    <>
      <CountdownBanner />

      <main
        role="main"
        itemScope
        itemType="https://schema.org/WebPage"
        className="mx-auto max-w-[78.5rem] px-4 md:px-5 py-5 md:py-[5rem]"
      >
        <header>
          <h1 className="font-sans font-bold text-[1.375rem] xs:text-[1.5rem] md:text-[2.5rem] mb-6 xs:mb-5 lg:mb-[6.75rem] leading-[110%] tracking-[0.01em]">
            Выбери подходящий для&nbsp;себя{" "}
            <span className="text-accent">тариф</span>
          </h1>
        </header>

        <section
          aria-labelledby="plans-section"
          className="grid grid-cols-1 md:grid-cols-[18.75rem_1fr] lg:grid-cols-[23.75rem_1fr] xl:gap-[5.4375rem] lg:mb-[2.625rem]"
        >
          <div className="relative flex flex-col justify-end lg:pb-[4.375rem]">
            <div className="absolute w-full h-[5.875rem] xs:h-[7.3125rem] lg:h-[5rem] bottom-0 lg:bottom-[4.375rem] left-0 bg-gradient-to-b from-transparent to-[#232829]" />

            <Image
              src="/hero-320.png"
              width={99}
              height={200}
              alt="Атлет FitHub на фоне градиента"
              className="mx-auto xs:hidden"
              priority
            />
            <Image
              src="/hero-320.png"
              width={124}
              height={250}
              alt="Атлет FitHub в спортивной форме"
              className="mx-auto hidden xs:block md:hidden"
            />
            <Image
              src="/hero-1920.png"
              width={380}
              height={767}
              alt="Профессиональный атлет FitHub на тренировке"
              className="hidden md:block"
            />
          </div>
          <div>
            <PlanSelector data={data} />

            <aside
              className="max-w-[31.25rem] px-3 py-[0.875rem] lg:px-5 lg:py-[1.125rem] flex items-start gap-[0.3125rem] lg:gap-2 bg-[#2D3233] rounded-2xl mt-4"
              role="note"
              aria-label="Рекомендация по выбору тарифа"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <meta itemProp="name" content="Рекомендация по выбору тарифа" />
              <Icon
                name="alert"
                className="shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p
                className="text-xs lg:text-base leading-[130%]"
                itemProp="description"
              >
                Следуя плану на&nbsp;3&nbsp;месяца и&nbsp;более, люди получают
                в&nbsp;2&nbsp;раза лучший результат, чем за&nbsp;1&nbsp;месяц.
              </p>
            </aside>

            <Form />
          </div>
        </section>
        <section
          aria-labelledby="guarantee"
          className="p-3 lg:p-5 border border-[#484D4E] rounded-[1.25rem] lg:rounded-[1.875rem]"
        >
          <h2
            id="guarantee"
            className="w-fit px-[1.125rem] pt-[0.625rem] pb-3 xs:pb-[0.625rem] lg:px-[1.8125rem] lg:py-4 lg:pb-[1.125rem] mb-[0.625rem] lg:mb-[1.875rem] bg-[#2D3233] text-[#81FE95] text-base xs:text-lg lg:text-[1.75rem] leading-[120%] font-medium outline outline-[#81FE95] rounded-full text-nowrap"
          >
            Гарантия возврата 30 дней
          </h2>

          <p className="text-[0.8125rem] xs:text-[0.875rem] lg:text-2xl leading-[130%]">
            Мы&nbsp;уверены, что наш план сработает для тебя
            и&nbsp;ты&nbsp;увидишь результаты уже через 4&nbsp;недели! Если
            этого не&nbsp;произойдёт&nbsp;&mdash; мы&nbsp;гарантируем полный
            возврат средств в&nbsp;течение 30&nbsp;дней с&nbsp;момента покупки.
          </p>
        </section>
      </main>
    </>
  );
}
