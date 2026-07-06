import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";
import { Header, Footer } from "./index";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות | יוזמת מנומדין-פרס למנהלים" },
      {
        name: "description",
        content:
          "מדיניות הפרטיות של יוזמת מנומדין-פרס למנהלים — כיצד אנו אוספים, משתמשים ושומרים על המידע שלך.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brand-sky hover:underline text-sm font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            חזרה לדף הבית
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-light-blue/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-brand-blue" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy">
              מדיניות פרטיות
            </h1>
          </div>

          <div className="space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              יוזמת מנומדין-פרס למנהלים מכבדת את פרטיותך. מסמך זה מסביר כיצד אנו אוספים, משתמשים
              ושומרים על המידע האישי שלך בעת השימוש באתר.
            </p>

            <section>
              <h2 className="text-xl font-bold text-brand-navy mb-3">איזה מידע אנו אוספים?</h2>
              <p>
                אנו עשויים לאסוף פרטי זיהוי בסיסיים כגון שם, כתובת דוא"ל, תפקיד וארגון, אותם את/ה
                ממלא/ת מרצון בטפסי ההרשמה ויצירת הקשר.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy mb-3">שימוש בעוגיות (Cookies)</h2>
              <p>
                האתר משתמש בעוגיות וטכנולוגיות מעקב דומות כדי לשפר את חוויית הגלישה, לנתח תנועת
                גולשים ולמדוד את יעילות הקמפיינים השיווקיים.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy mb-3">שמירת מידע ואבטחה</h2>
              <p>
                המידע מאוחסן במערכות מאובטחות ואינו משותף עם צדדים שלישיים למטרות שיווק ללא הסכמתך.
                אנו נוקטים באמצעי אבטחה סבירים להגנת המידע.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy mb-3">זכויותיך</h2>
              <p>
                באפשרותך לפנות אלינו בכל עת כדי לעדכן, למחוק או להגביל את השימוש במידע האישי שלך.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy mb-3">יצירת קשר</h2>
              <p>
                לשאלות בנושא מדיניות הפרטיות, ניתן לפנות אלינו במייל או בטלפון:{" "}
                <a href="tel:08-3006064" className="text-brand-sky hover:underline font-medium">
                  08-3006064
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
