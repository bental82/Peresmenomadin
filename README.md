# יוזמת מנומדין-פרס למנהלים — עמוד נחיתה

עמוד נחיתה עבור יוזמת מנומדין-פרס למנהלים של המרכז האקדמי פרס, בשיתוף Harvard Kennedy School Executive Education.

## סטאק טכנולוגי

- [TanStack Start](https://tanstack.com/start) — React framework עם SSR ו-file-based routing
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Vite](https://vite.dev) + [Nitro](https://nitro.build) (זיהוי אוטומטי של פלטפורמת הפריסה, כולל Vercel)
- TypeScript

## פיתוח מקומי

```bash
bun install        # או: npm install
bun run dev        # שרת פיתוח על http://localhost:3000
```

## פקודות נוספות

```bash
bun run build      # בניית פרודקשן
bun run preview    # תצוגה מקדימה של הבנייה
bun run lint       # ESLint
bun run typecheck  # בדיקת טיפוסים
bun run format     # Prettier
```

## מבנה הפרויקט

```
src/
  routes/
    __root.tsx    # שלד האפליקציה: meta, פונטים, עמודי שגיאה
    index.tsx     # עמוד הנחיתה הראשי
    privacy.tsx   # מדיניות פרטיות
  components/ui/  # רכיבי UI (shadcn)
  lib/utils.ts    # עזרי Tailwind
  styles.css      # ערכת עיצוב (design tokens) ו-CSS גלובלי
```

## טופס לידים

הטופס שולח ישירות ל-HubSpot Forms API (portal `143688847`). מזהי הטופס מוגדרים ב-`src/routes/index.tsx`.

## פריסה (Deployment)

הפרויקט מיועד לפריסה ב-Vercel: כל push ל-`main` מפעיל deployment אוטומטי. Nitro מזהה את סביבת Vercel בזמן הבנייה ובונה את הפלט המתאים.
