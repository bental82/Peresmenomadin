import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  GraduationCap,
  Award,
  Rocket,
  Network,
  Lightbulb,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Check,
  ArrowLeft,
  Quote,
  Shield,
  Phone,
  Briefcase,
  Users,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "יוזמת מנומדין-פרס למנהלים | המרכז האקדמי פרס" },
      {
        name: "description",
        content:
          "יוזמת מנומדין-פרס למנהלים בשיתוף Harvard Kennedy School — תוכנית מנהיגות ייחודית למנהלות ומנהלים בכירים במשק הישראלי. נובמבר 2026. השאירו פרטים.",
      },
    ],
  }),
  component: LandingPage,
});

const LOGO = "https://www.pac.ac.il/wp-content/themes/peres/assets/images/logo.png";
const MENOMADIN_LOGO = "https://menomadinfoundation.com/wp-content/uploads/logo.svg";
const HERO_IMG =
  "https://www.pac.ac.il/wp-content/uploads/2024/05/%D7%91%D7%99%D7%AA-%D7%94%D7%A0%D7%A9%D7%99%D7%90.jpg";
const VIDEO_EMBED =
  "https://player.vimeo.com/video/1078274697?badge=0&autopause=0&player_id=0&app_id=58479";

const PHONE_DISPLAY = "077-2318468";
const PHONE_HREF = "tel:077-2318468";

const REASONS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Rocket,
    title: "אקסלרטור אימפקט",
    body: "פיתוח מיזמים בעלי אימפקט לאומי, כולל מענקים כספיים וליווי מקצועי אסטרטגי.",
  },
  {
    icon: Network,
    title: "נטוורקינג אסטרטגי",
    body: "חיבורים איכותיים עם עמיתים בכירים במשק ועם בוגרי Harvard Kennedy School.",
  },
  {
    icon: Lightbulb,
    title: "ללמוד ממי שמשפיע",
    body: "מפגשים עם דמויות מפתח המעצבות את פני החברה והכלכלה בישראל.",
  },
  {
    icon: Award,
    title: "הסמכה יוקרתית",
    body: "תעודה מטעם Harvard Kennedy School Executive Education והמרכז האקדמי פרס.",
  },
];

const AUDIENCE: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Briefcase,
    title: 'מנכ"לים וסמנכ"לים',
    body: "מובילות ומובילים בחברות ובארגונים מהשורה הראשונה במשק הישראלי.",
  },
  {
    icon: Users,
    title: "מייסדים ויזמים",
    body: "בעלי ניסיון מוכח בבניית חברות, הובלת אנשים וקבלת החלטות בסביבה מורכבת.",
  },
  {
    icon: HeartHandshake,
    title: "מנהיגים שרוצים להשפיע",
    body: "מי שמבקשים להרחיב את ההשפעה מעבר לעסקים — אל הזירה החברתית והלאומית.",
  },
];

const TESTIMONIALS: {
  name: string;
  role: string;
  img: string;
  imgClass?: string;
  quote: string;
}[] = [
  {
    name: "לבנת מזרחי רינסקי",
    role: 'מנכ"לית חבר הבורסה, בית ההשקעות IBI',
    img: "/images/testimonials/livnat-mizrahi.jpg",
    quote:
      "דווקא בעידן שבו חוסר הסדר ואי האמון שולטים בסדר היום, נדרש מכל אחד ואחת מאתנו לעשות מעשה ולהשפיע. יוזמת מנומדין-פרס למנהלים יוצרת קרקע פורייה לחשיבה ולעשייה קבוצתית שתוביל לשינוי.",
  },
  {
    name: "שחר אזרחי",
    role: 'סמנכ"ל הנדסה, אשדר',
    img: "/images/testimonials/shahar-ezrahi.jpg",
    // Tight headshot on a white background — contain (not cover) so the head isn't cropped
    imgClass: "object-contain bg-white",
    quote:
      "מסלול ההכשרה ביוזמת המנהלים הייחודית מיועד לטיפוח מנהיגות אישית ולפיתוח כלים להובלת שינוי בחברה הישראלית ולמעורבות בזירה הציבורית.",
  },
  {
    name: "יפתח עצמון",
    role: 'מנכ"ל חטיבת הקפה והממתקים, קבוצת שטראוס',
    img: "/images/testimonials/yiftach-atzmon.jpg",
    quote:
      "יוזמת מנומדין-פרס למנהלים היא הזדמנות לשלב בחיים המקצועיים והאישיים העמוסים למידה משמעותית, שמוסיפה נדבך לאחריות החברתית שלי כמנכ״ל בתעשייה גדולה — היכרות מעמיקה עם מנהיגים ויזמים מתעשיות מגוונות, ופתרונות חדשניים שמגבירים את ההשפעה החיובית על החברה כולה.",
  },
];

function PrivacyConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("privacy-consent") !== "true") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    try {
      localStorage.setItem("privacy-consent", "true");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="הודעת פרטיות ועוגיות"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-border bg-white/95 backdrop-blur-md shadow-elevated animate-fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-9 h-9 rounded-full bg-brand-light-blue/40 flex items-center justify-center shrink-0 mt-0.5">
            <Shield className="w-4.5 h-4.5 text-brand-blue" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            אנו משתמשים בעוגיות ואוספים מידע שתמסרו בטפסים כדי לשפר את חוויית הגלישה.{" "}
            <Link to="/privacy" className="text-brand-blue-mid font-medium hover:underline">
              למדיניות הפרטיות המלאה
            </Link>
            .
          </p>
        </div>
        <Button
          onClick={handleAccept}
          className="shrink-0 bg-brand-navy text-white hover:bg-brand-blue rounded-full px-6"
        >
          הבנתי, אפשר להמשיך
        </Button>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <a
        href="#register"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[60] focus:bg-white focus:text-brand-navy focus:font-bold focus:px-4 focus:py-2 focus:rounded-md focus:shadow-elevated"
      >
        דילוג לטופס ההרשמה
      </a>
      <Header />
      <main>
        <Hero />
        <Reasons />
        <MissionNetwork />
        <Audience />
        <Accelerator />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <PrivacyConsentBanner />
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        <Link to="/" aria-label="לדף הבית" className="flex items-center gap-3 sm:gap-6 min-w-0">
          <img
            src={LOGO}
            alt="המרכז האקדמי פרס"
            className="h-7 sm:h-12 w-auto shrink-0"
            loading="eager"
          />
          <img
            src={MENOMADIN_LOGO}
            alt="קרן מנומדין"
            className="h-6 sm:h-10 w-auto brightness-0 invert shrink-0"
            loading="eager"
          />
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 text-white/95 hover:text-brand-mint font-bold text-sm transition-colors rounded-full bg-white/10 hover:bg-white/15 w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2.5"
            aria-label={`חייגו אלינו ${PHONE_DISPLAY}`}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-mint" />
            <span dir="ltr" className="hidden md:inline">
              {PHONE_DISPLAY}
            </span>
          </a>
          <a
            href="#register"
            className="inline-flex items-center gap-1.5 bg-brand-mint text-brand-navy font-bold text-sm sm:text-base px-4 sm:px-6 py-2.5 rounded-full motion-safe:hover:scale-105 transition-transform shadow-soft"
          >
            הרשמה ליוזמה
            <ArrowLeft className="hidden sm:block w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <img
        src={HERO_IMG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/85 via-brand-navy/75 to-brand-navy" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up text-center lg:text-start">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm font-semibold text-brand-light-blue mb-6">
              <GraduationCap className="w-4 h-4 text-brand-mint" />
              בשיתוף Harvard Kennedy School
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-tight tracking-tight">
              יוזמת <span className="text-brand-mint">מנומדין–פרס</span> למנהלים
              <span className="block mt-3 text-white/90 text-2xl sm:text-3xl font-bold">
                מנהיגות עסקית מובילת שינוי
              </span>
            </h1>

            <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              תוכנית ייחודית למנהלות ומנהלים בכירים בשיתוף Harvard Kennedy School והמרכז האקדמי פרס.
            </p>
          </div>

          <div id="register" className="scroll-mt-24 animate-fade-up">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

const HUBSPOT_PORTAL_ID = "143688847";
const HUBSPOT_FORM_ID = "9d94c50a-f4c4-48b1-9dc9-1a4ccb41a793";

type FormState = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  jobtitle: string;
  company: string;
};

const EMPTY_FORM: FormState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  jobtitle: "",
  company: "",
};

function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState<FormState>(EMPTY_FORM);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!values.firstname.trim() || !values.email.trim() || !values.phone.trim()) {
      setError("נא למלא שם, אימייל וטלפון.");
      return;
    }
    setSubmitting(true);
    try {
      const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
      const fullNameHe = `${values.firstname.trim()} ${values.lastname.trim()}`.trim();
      const fieldValues: Record<string, string> = {
        ...Object.fromEntries(
          (Object.keys(values) as (keyof FormState)[])
            .filter((k) => values[k].trim() !== "")
            .map((k) => [k, values[k].trim()]),
        ),
        full_name_he: fullNameHe,
      };
      const payload = {
        fields: Object.entries(fieldValues).map(([name, value]) => ({
          objectTypeId: "0-1",
          name,
          value,
        })),
        context: {
          pageUri: typeof window !== "undefined" ? window.location.href : "",
          pageName: typeof document !== "undefined" ? document.title : "",
        },
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `HTTP ${res.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("HubSpot submit failed", err);
      setError("אירעה שגיאה בשליחת הטופס. נסו שוב או צרו איתנו קשר בטלפון.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white text-foreground rounded-2xl shadow-elevated p-6 sm:p-8">
      {submitted ? (
        <ThankYou />
      ) : (
        <>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-brand-navy">מתעניינים ביוזמה?</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              השאירו פרטים ונחזור אליכם בהקדם עם כל המידע.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <FormInput
                label="שם פרטי"
                required
                value={values.firstname}
                onChange={(v) => update("firstname", v)}
                autoComplete="given-name"
              />
              <FormInput
                label="שם משפחה"
                value={values.lastname}
                onChange={(v) => update("lastname", v)}
                autoComplete="family-name"
              />
            </div>
            <FormInput
              label="אימייל"
              type="email"
              required
              value={values.email}
              onChange={(v) => update("email", v)}
              autoComplete="email"
            />
            <FormInput
              label="טלפון"
              type="tel"
              required
              value={values.phone}
              onChange={(v) => update("phone", v)}
              autoComplete="tel"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <FormInput
                label="תיאור תפקיד"
                value={values.jobtitle}
                onChange={(v) => update("jobtitle", v)}
                autoComplete="organization-title"
              />
              <FormInput
                label="שם החברה"
                value={values.company}
                onChange={(v) => update("company", v)}
                autoComplete="organization"
              />
            </div>

            {error && (
              <p className="text-sm font-medium text-destructive" role="alert">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="w-full h-12 rounded-full bg-brand-mint text-brand-navy hover:bg-brand-mint/90 font-bold text-base"
            >
              {submitting ? "שולח…" : "אני רוצה לעשות שינוי"}
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            מאשר/ת שליחת חומר שיווקי ע"י המרכז האקדמי פרס. יהיה ניתן להסיר אותי מרשימת התפוצה בכל
            עת.
          </p>
        </>
      )}
    </div>
  );
}

function FormInput({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-brand-navy mb-1.5">
        {label}
        {required && (
          <span className="text-destructive ms-1" aria-hidden="true">
            *
          </span>
        )}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        dir={type === "email" || type === "tel" ? "ltr" : "rtl"}
        className="w-full h-11 rounded-md border border-neutral-border bg-white px-3 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:border-brand-sky"
      />
    </label>
  );
}

function ThankYou() {
  return (
    <div className="text-center animate-fade-up py-4">
      <div className="mx-auto w-14 h-14 rounded-full bg-brand-mint/25 border-2 border-brand-mint flex items-center justify-center mb-4">
        <Check className="w-7 h-7 text-brand-green" />
      </div>
      <h2 className="text-2xl font-black text-brand-navy">תודה על פנייתכם 🎉</h2>
      <p className="mt-3 text-base text-muted-foreground">
        פרטיכם התקבלו בהצלחה. נציג/ה מטעם היוזמה יחזור אליכם בהקדם.
      </p>
      <ul className="mt-6 text-start text-sm text-muted-foreground space-y-2 max-w-sm mx-auto">
        <li className="flex items-center gap-2">
          <Check className="w-4 h-4 text-brand-green" /> שיחת ייעוץ אישית
        </li>
        <li className="flex items-center gap-2">
          <Check className="w-4 h-4 text-brand-green" /> מידע מפורט על תוכנית הלימודים
        </li>
        <li className="flex items-center gap-2">
          <Check className="w-4 h-4 text-brand-green" /> הכוונה לגבי תהליך הקבלה
        </li>
      </ul>
    </div>
  );
}

function MissionNetwork() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader eyebrow="על היוזמה" title="מנהיגות שמשרתת חזון" />
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            היוזמה נולדה מתוך אמונה שמנהיגות עסקית בכירה יכולה — וצריכה — לשרת מטרות רחבות מהרווח.
            זהו מסע מנהיגותי אינטימי לצד עמיתים בכירים, מרצים מהשורה הראשונה ודמויות מפתח בחברה
            הישראלית, שממשיך להתקיים הרבה אחרי סיום המחזור.
          </p>
          <p className="font-semibold text-brand-navy text-xl">
            המטרה: דור של מנהיגים שרואים בתפקידם הזדמנות לתרום לחברה הישראלית — עם הכלים, הקהילה
            והחיבורים לעשות זאת בפועל.
          </p>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-elevated border border-neutral-border aspect-video bg-brand-navy">
          <iframe
            src={VIDEO_EMBED}
            title="יוזמת מנומדין-פרס למנהלים"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
      {eyebrow && (
        <div className="inline-block text-sm font-semibold text-brand-sky uppercase tracking-wider mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function Reasons() {
  return (
    <section className="py-20 lg:py-28 bg-brand-light-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="למה להצטרף?" title="ארבע סיבות טובות להיות חלק מהיוזמה" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="relative group bg-white border border-neutral-border rounded-2xl p-7 hover:border-brand-sky motion-safe:hover:-translate-y-1 hover:shadow-elevated transition-all shadow-soft overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="absolute top-4 end-5 text-6xl font-black leading-none text-brand-light-blue/50 select-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative w-14 h-14 rounded-2xl bg-brand-navy text-brand-mint flex items-center justify-center group-hover:bg-brand-mint group-hover:text-brand-navy transition-colors">
                <r.icon className="w-7 h-7" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-brand-navy">{r.title}</h3>
              <p className="relative mt-2 text-base text-muted-foreground leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="py-20 lg:py-28 bg-brand-light-blue/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="קהל היעד"
          title="למי מתאימה היוזמה?"
          subtitle="מספר המקומות במחזור מוגבל, והקבלה מותנית בתהליך מיון אישי."
        />
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {AUDIENCE.map((a) => (
            <div
              key={a.title}
              className="group relative text-center bg-white border border-neutral-border rounded-2xl p-8 pt-10 shadow-soft hover:shadow-elevated hover:border-brand-sky motion-safe:hover:-translate-y-1 transition-all"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-l from-brand-sky to-brand-mint opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue-mid to-brand-navy text-brand-mint flex items-center justify-center ring-4 ring-brand-light-blue/50 group-hover:ring-brand-mint/40 transition-all">
                <a.icon className="w-8 h-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-navy">{a.title}</h3>
              <p className="mt-2.5 text-base text-muted-foreground leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Accelerator() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elevated border border-neutral-border order-2 lg:order-1">
            <img
              src={HERO_IMG}
              alt="משתתפי היוזמה בבית הנשיא"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-brand-mint/15 border border-brand-mint text-brand-navy rounded-full px-4 py-1.5 text-sm font-bold mb-4">
              <Rocket className="w-4 h-4" />
              תוכנית בלעדית ליוזמה
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
              אקסלרטור אימפקט
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              עם סיום מוצלח של היוזמה, מועמדים מצטיינים נבחרים להמשך ישיר באקסלרטור — לתרגם את הידע
              והרעיונות למיזמים בעלי היתכנות ממשית.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "מענקים כספיים משמעותיים למימוש המיזם",
                "ליווי אסטרטגי מבית JPPI באוניברסיטה העברית",
                "שותפויות עם בית הנשיא, קרן רש״י ועמותת 8200",
                "מיזמים לאומיים בפועל: שיקום פצועי חרבות ברזל, חוסן קהילתי בקריית שמונה, מנטורינג לעסקים בקו העימות",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-base text-foreground">
                  <span className="mt-1 w-5 h-5 rounded-full bg-brand-mint text-brand-navy flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <a
              href="#register"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold px-7 py-3.5 rounded-full hover:bg-brand-blue transition-colors shadow-soft"
            >
              אני רוצה להצטרף
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="משתתפי היוזמה מספרים" title="הבוגרים שכבר מובילים שינוי" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl overflow-hidden border border-neutral-border bg-white shadow-soft hover:shadow-elevated motion-safe:hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className={`w-full h-full ${t.imgClass ?? "object-cover object-top"}`}
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <figcaption className="border-s-4 border-brand-sky ps-4">
                  <div className="text-lg font-black text-brand-navy leading-tight">{t.name}</div>
                  <div className="mt-1 text-sm font-medium text-brand-blue-mid">{t.role}</div>
                </figcaption>
                <blockquote className="mt-5 text-base text-muted-foreground leading-relaxed flex-1">
                  <Quote className="w-6 h-6 text-brand-mint mb-2" aria-hidden="true" />
                  {t.quote}
                </blockquote>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-navy to-brand-blue text-white relative overflow-hidden">
      <div className="absolute -top-24 start-1/3 w-80 h-80 rounded-full bg-brand-sky/15 blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block text-sm font-semibold text-brand-mint uppercase tracking-wider mb-3">
          המחזור הקרוב — נובמבר 2026
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          מוכנים לעשות את הצעד הבא?
        </h2>
        <p className="mt-4 text-lg text-white/85 leading-relaxed">
          השאירו פרטים ונחזור אליכם עם כל המידע על התוכנית ותהליך הקבלה — ללא התחייבות.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2 bg-brand-mint text-brand-navy font-bold text-lg px-8 py-4 rounded-full motion-safe:hover:scale-105 transition-transform shadow-elevated"
          >
            הרשמה ליוזמה
            <ArrowLeft className="w-5 h-5" />
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/15 transition-colors"
          >
            <Phone className="w-5 h-5 text-brand-mint" />
            <span dir="ltr">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-6">
        <img src={LOGO} alt="המרכז האקדמי פרס" className="h-10 w-auto" />

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 text-white/80 hover:text-brand-mint transition-colors font-medium"
        >
          <Phone className="w-4 h-4 text-brand-mint" />
          <span dir="ltr">{PHONE_DISPLAY}</span>
        </a>

        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-semibold text-brand-mint uppercase tracking-wider">
            עקבו אחרינו
          </span>
          <div className="flex gap-3">
            {[
              {
                label: "Facebook",
                Icon: Facebook,
                href: "https://www.facebook.com/PeresAcademicCenter",
              },
              {
                label: "Instagram",
                Icon: Instagram,
                href: "https://www.instagram.com/peres_academic_center/",
              },
              {
                label: "LinkedIn",
                Icon: Linkedin,
                href: "https://www.linkedin.com/school/peres-academic-center/",
              },
              {
                label: "YouTube",
                Icon: Youtube,
                href: "https://www.youtube.com/@PeresAcademicCenter",
              },
            ].map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-mint hover:text-brand-navy flex items-center justify-center transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/50">
          <span>© {new Date().getFullYear()} המרכז האקדמי פרס · כל הזכויות שמורות</span>
          <span aria-hidden="true">·</span>
          <Link to="/privacy" className="hover:text-white transition-colors underline-offset-4">
            מדיניות פרטיות
          </Link>
        </div>
      </div>
    </footer>
  );
}
