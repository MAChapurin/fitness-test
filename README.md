# 💪 FitHub Tariff Page — Тестовое задание Frontend-разработчику

[🚀 Перейти на сайт](https://fitness-test-lime.vercel.app/)  
[🎨 Макет в Figma](https://www.figma.com/file/9XgWK3p8hV7kGaeNbVqnpm/%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8?type=design&node-id=0%3A1&mode=design)

---

## 📌 Описание

Адаптивная страница выбора тарифов для сервиса FitHub. Реализована по техническому заданию с использованием **Next.js**, **React**, **TypeScript**, **Tailwind CSS**.  
Проект демонстрирует работу с внешним API, анимацией чисел и таймера, логикой скидок и пользовательским взаимодействием.

---

## 🧩 Стек технологий

- **React 19**
- **Next.js 15**
- **TypeScript**
- **Tailwind CSS 4**
- **ESLint**
- **@number-flow/react** — анимация чисел
- **clsx / tailwind-merge**

---

## 🔌 API

Источник данных о тарифах:  
`GET https://t-core.fit-hub.pro/Test/GetTariffs`

### Пример ответа:

```json
{
  "id": "f347d050-073c-4969-ae91-7346f935cf70",
  "period": "1 неделя",
  "price": 149,
  "full_price": 999,
  "is_best": false,
  "text": "Чтобы просто начать"
}
```

# Установка зависимостей

npm install

# Запуск в режиме разработки

npm run dev

# Сборка для продакшена

npm run build

# Запуск собранного приложения

npm run start
