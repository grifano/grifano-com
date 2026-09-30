# Skills для Antigravity

Пакет підготовлено **30 вересня 2026** для оновлення статичного Webflow-портфоліо. Skills розміщені в `.agents/skills/` цього пакета; оригінальний сайт не змінювався. Antigravity підхоплює їх із кореня відкритого workspace, тому під час перенесення потрібно зберегти цю структуру.

## Що додано

| Skill | Для чого | Версія та походження |
|---|---|---|
| `sorlenko-portfolio` | Власний workflow: узгоджена кар’єрна історія, докази, ролі в кейсах, нове фото та поетапне оновлення експорту | Авторський skill для цього проєкту, версія 2026-09-30 |
| `frontend-design` | Палітра навколо нового фото, типографіка, композиція й візуальна перевірка | Адаптований знімок Anthropic від 2026-09-30; оригінальний Git blob `a5333457c414d20d625f307df945842c0952ecc3` |
| `portfolio-web-review` | Перевірка статичного export: фото та `srcset`, старі маршрути, посилання, форми, доступність і адаптивність | Власний skill, версія 2026-09-30; локальна довідка Vercel `command.md`, Git blob `e1e8e3460db7c1440e34642c4f7b885185ca5366` |

У `frontend-design` прибрано вигадану історію про клієнта, його попередні відмови й оплату, пораду записувати пам’ять та дозвіл вигадувати placeholder-зміст. Замість цього встановлено роботу з підтвердженими фактами й позначеними чернетками. Зміни та джерело явно зазначені в самому `SKILL.md`.

`portfolio-web-review` використовує локальну довідку без автоматичного завантаження нових інструкцій. Він відокремлює стандарти від стилістичних уподобань Vercel: зберігає природний для портфоліо текст від першої особи, не додає зайві обробники клавіатури до нативних кнопок, не вимикає autofill і не приховує переповнення без причини. Результати поділяються на перевірені в браузері, перевірені у файлах, непідтверджені та необов’язкові покращення.

## Джерела й ліцензії

- [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) — Apache 2.0. Повний оригінальний [LICENSE.txt](../.agents/skills/frontend-design/LICENSE.txt) збережено. У зміненому файлі є позначка `Modified on 2026-09-30`.
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) — MIT, Copyright (c) 2025 Vercel Labs. Довідку скопійовано без змін разом із повною [ліцензією](../.agents/skills/portfolio-web-review/references/LICENSE). Власна обгортка `portfolio-web-review` написана окремо.
- [Vercel web-design-guidelines skill](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md) — переглянутий як кандидат, але оригінальну обгортку не додано: вона запитує свіжі віддалені інструкції через `WebFetch`. Замість неї використано локальну довідку й власний workflow.
- [Google: формат skills](https://antigravity.google/docs/skills/) та [Google: правила workspace](https://antigravity.google/docs/rules/) — підтверджують `.agents/skills/<name>/SKILL.md` та `.agents/rules/*.md`. Для правил потрібен правильний YAML `trigger`; для skills — опис застосування в `description`.

Git blob SHA ідентифікують переглянуті оригінальні файли, а не обіцяють автоматичні оновлення. Ліцензії та локальна довідка звірені побайтово з джерелами.

## Додатковий кандидат, який не встановлено

[Anthropic webapp-testing](https://github.com/anthropics/skills/tree/main/skills/webapp-testing), Apache 2.0, корисний для повторюваних screenshot і browser-перевірок через Python/Playwright. На цьому етапі достатньо доступного браузера Antigravity. Якщо пізніше потрібна автоматизація, skill можна додати окремо; його helper запускає передану команду сервера, тому вона має бути перевіреною локальною командою.

Skills для React, Next.js, складного build pipeline або публікації не додано: вони не потрібні для поточного оновлення кольорів, фото й текстів. Цей пакет сам по собі не публікує сайт і не змінює зовнішні профілі.
