import { Coffee, MessagesSquare, Palette, Users } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { workshopName } from "@/lib/brand";
import { cn } from "cn";
import Image from "next/image";

const offerings = [
  {
    title: "מעגל שיחה",
    text: "שאלה אחת עוברת במעגל. מי שרוצה לדבר, מדבר בתורו, ואפשר גם לשתוק. מתאים כשמבקשים בהירות לפני החלטה.",
    icon: MessagesSquare,
    tone: "bg-primary/10 text-primary",
  },
  {
    title: "עבודת יד איטית",
    text: "נייר, חוט, צבע ועץ. הידיים עסוקות, והמחשבה מקבלת קצב אחר — פחות ויכוח, יותר דיוק.",
    icon: Palette,
    tone: "bg-gold/15 text-gold",
  },
  {
    title: "מפגש לקבוצה",
    text: "מפגש לצוות או לקהילה: כמה שעות, נושא שחשוב לקבוצה, ותוצר קטן שנשאר אחרי שקמים מהכיסא.",
    icon: Users,
    tone: "bg-coral/15 text-coral",
  },
  {
    title: "שולחן פתוח",
    text: "זמן קבוע להגיע ולעבוד בשקט לצד אחרים. בלי סדר יום מלא, עם תה ומקום ליד השולחן.",
    icon: Coffee,
    tone: "bg-leaf/15 text-leaf",
  },
];

const steps = [
  {
    title: "פותחים פנייה",
    text: "מספרים מי מגיע ומה מעניין את הקבוצה.",
  },
  {
    title: "מתאימים מפגש",
    text: "בוחרים יחד מועד, משך ונושא. אין חבילה קבועה שחייבים לקחת.",
  },
  {
    title: "נפגשים בסדנא",
    text: "מתחילים בתה, יושבים, ועוברים בין שיחה לעשייה בקצב שאפשר לעמוד בו.",
  },
  {
    title: "לוקחים משהו הביתה",
    text: "טקסט קצר, חפץ קטן, או משפט אחד שכדאי לזכור.",
  },
];

const feelings = [
  "עד שנים־עשר משתתפים",
  "נושא אחד למפגש",
  "חומרים פשוטים על השולחן",
  "בלי מופע ובלי מבחן",
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />
      <main id="content">
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-12 md:py-20">
          <div className="order-2 space-y-6 text-center md:order-1 md:text-start">
            <p className="text-sm font-medium tracking-wide text-primary">
              שיחה, הקשבה ועבודת יד
            </p>
            <h1 className="text-5xl leading-tight text-primary sm:text-6xl">
              {workshopName}
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-8 text-foreground/80 md:mx-0">
              מקום קטן למפגש שלא ממהר. יושבים יחד, שואלים שאלה אחת, ועובדים עם
              חומרים פשוטים — כדי שחוכמה תהיה דבר שאפשר לגעת בו.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full rounded-full px-6 text-base sm:w-auto",
                )}
              >
                לתיאום מפגש
              </a>
              <a
                href="#offerings"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 w-full rounded-full bg-card px-6 text-base sm:w-auto",
                )}
              >
                מה יש בסדנא
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="workshop-logo.jpg"
              alt={workshopName}
              width={672}
              height={440}
              priority
              className="mx-auto h-auto w-full max-w-md"
            />
          </div>
        </section>

        <section id="about" className="scroll-mt-28 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_0.8fr] md:items-start">
            <div className="space-y-5">
              <p className="text-sm font-medium text-gold">על הסדנא</p>
              <h2 className="text-4xl text-primary">מקום להאט וליצור</h2>
              <p className="text-lg leading-8 text-foreground/85">
                {workshopName} נולדה מתוך רצון לשולחן משותף. לא כיתה, לא הרצאה,
                ולא יום של מצגות. מפגש שבו לומדים מתוך עשייה ומתוך הקשבה.
              </p>
              <p className="text-lg leading-8 text-foreground/85">
                מתאים למי שמחפש אחר צהריים שקט, לקבוצת חברים, ולצוות שרוצה
                לחשוב יחד בלי רעש. כל מפגש נבנה סביב נושא אחד, בקבוצה קטנה.
              </p>
            </div>
            <Card className="bg-card/90 shadow-sm ring-border">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  איך זה מרגיש
                </CardTitle>
                <CardDescription className="text-base text-foreground/70">
                  יושבים לאט. שואלים שאלה אחת. יוצאים עם משהו ביד.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feelings.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base">
                      <span className="size-2 shrink-0 rounded-full bg-leaf" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="offerings"
          className="scroll-mt-28 bg-card/55 px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium text-gold">מה בסדנא</p>
              <h2 className="text-4xl text-primary">ארבעה אופנים לשבת יחד</h2>
              <p className="text-lg leading-8 text-foreground/80">
                אפשר לבחור מסלול אחד, או לשלב שיחה ועשייה באותו מפגש.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {offerings.map((offering) => (
                <Card key={offering.title} className="bg-card shadow-sm ring-border">
                  <CardHeader>
                    <span
                      className={cn(
                        "mb-2 flex size-11 items-center justify-center rounded-2xl",
                        offering.tone,
                      )}
                    >
                      <offering.icon aria-hidden="true" />
                    </span>
                    <CardTitle className="font-heading text-2xl text-primary">
                      {offering.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-7 text-foreground/80">
                      {offering.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="scroll-mt-28 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium text-gold">איך נראה ביקור</p>
              <h2 className="text-4xl text-primary">ארבעה צעדים רגועים</h2>
            </div>
            <ol className="grid gap-4 md:grid-cols-4">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-border bg-card/80 p-5"
                >
                  <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-secondary font-heading text-lg text-primary">
                    {index + 1}
                  </span>
                  <h3 className="mb-2 text-xl text-primary">{step.title}</h3>
                  <p className="text-base leading-7 text-foreground/80">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-5 pb-20 sm:px-8 md:pb-28">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm md:grid-cols-2 md:p-10">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gold">יצירת קשר</p>
              <h2 className="text-4xl text-primary">נשמח לשמוע מי מגיע</h2>
              <p className="text-lg leading-8 text-foreground/80">
                כתבו מי אתם, מה הייתם רוצים לעשות יחד, ומתי נוח. המפגשים
                מתקיימים בקבוצות קטנות, בתיאום מראש.
              </p>
              <p className="text-base leading-7 text-foreground/75">
                אין כאן כתובת או טלפון קבועים. הטופס הוא הדרך לפנות אל{" "}
                {workshopName}.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-2xl text-primary">{workshopName}</p>
            <p className="text-sm text-muted-foreground">
              מפגשים קטנים לשיחה, הקשבה ויצירה.
            </p>
          </div>
          <nav aria-label="ניווט תחתון" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#about" className="hover:text-primary">
              אודות
            </a>
            <a href="#offerings" className="hover:text-primary">
              מה בסדנא
            </a>
            <a href="#visit" className="hover:text-primary">
              איך נראה ביקור
            </a>
            <a href="#contact" className="hover:text-primary">
              יצירת קשר
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
