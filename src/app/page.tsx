import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { foundersTestimony, ventureName } from "@/lib/brand";
import { cn } from "cn";

const facts = [
  { label: "למי", text: "מטופלים שסיימו את שלב הטיפולים הפעיל, ונמצאים בשיקום, בהחלמה ובחזרה לשגרה." },
  { label: "משתתפים", text: "עד 12, כדי לאפשר דינמיקה קבוצתית, ביטוי אישי וליווי מקצועי ורגשי." },
  { label: "מפגשים", text: "11 מפגשים, כולל המופע המסכם." },
  { label: "משך", text: "שעתיים (120 דקות) לכל מפגש." },
  { label: "אופי", text: "קבוצתי ופרונטלי. מי שלא יוכל להגיע יוכל להצטרף בזום, לשמירה על רציפות." },
  { label: "הפיילוט", text: "אזור המרכז, ינואר 2027." },
];

const meetings = [
  {
    title: "מה זה סטנדאפ",
    text: "מה מייחד כתיבה קומית לעומת כתיבה אחרת. הסיפור שלי והקול שלי.",
  },
  {
    title: "מנגנונים קומיים",
    text: "יסודות הכתיבה הקומית: מרעיון, ממחשבה ומסיפור לפאנץ'. מטרגדיה לקומדיה.",
  },
  {
    title: "יסודות כתיבת הסטנדאפ",
    text: "לחשוב ולכתוב סטנדאפ: טיימינג וקצב. החיים מצחיקים, אז צוחקים?",
  },
  {
    title: "אמנות ה-Storytelling",
    text: "איך מספרים סיפור בסטנדאפ: מה אני רוצה לספר, למי ולמה.",
  },
  {
    title: "לחבר את הנקודות",
    text: "מאנקדוטות לקטע, וראנינג גאגס. מסגור מחדש של הסיפור שלי.",
  },
  {
    title: "כל העולם במה",
    text: "הדמות שלי בחיים ועל הבמה, נוכחות בימתית והגשה. מסע הגיבור.",
  },
  {
    title: "אני והקהל",
    text: "הסטנדאפיסט והקהל: תגובות ואלתורים. אלתור והומור ככלי להתמודדות בחיים.",
  },
  {
    title: "התמודדות עם לחץ",
    text: "כלים למעמד המופע המסכם, וכלים רגשיים ללחץ, לחרדה ולהתרגשות.",
  },
  {
    title: "מוכנים?",
    text: "שכתובים אחרונים, תיקונים ותרגול. פנים שונות למסוגלות.",
  },
  {
    title: "המופע המסכם",
    text: "הצגת התוצרים בפני משפחה וחברים, על במת סטנדאפ מקצועית.",
  },
  {
    title: "לכל זמן ועת לכל חפץ",
    text: "מפגש רפלקציה לסיכום התהליך וחוויית המופע. סגירה ועוגנים להמשך הדרך.",
  },
];

const safety = [
  "אישור רפואי להשתתפות בסדנה ובמופע.",
  "שיחות התאמה לפני תחילת הסדנה.",
  "נוהל סודיות בקבוצה.",
  "הסכמה מדעת להשתתפות, והסכמה נפרדת לצילום, להקלטה ולפרסום.",
  "הזכות שלא להיחשף ושלא לדבר על הסרטן.",
  "הזכות שלא להשתתף במופע הסיום, או להשתתף בדרכים חלופיות.",
  "הסדנה אינה תחליף לטיפול רפואי או נפשי.",
];

const tracks = [
  {
    title: "מימון",
    text: "מימון מלא או חלקי של הפיילוט. העלות הכוללת 45,000 ₪: שכר מנחים, ביטוח, שכירות אולם והפקת מופע הסיום.",
  },
  {
    title: "עמותת חסות",
    text: "עמותה שתאפשר לחברות ולקרנות להעביר דרכה מימון למיזם.",
  },
  {
    title: "שותפות מחקרית",
    text: "חוקרים וגופים אקדמיים שילוו את הפיילוט במחקר הערכה משותף.",
  },
  {
    title: "הפצה והפניית משתתפים",
    text: "חשיפת הסדנה למתמודדים שהיא מתאימה להם.",
  },
  {
    title: "אירוח",
    text: "מקום למפגשי הסדנה, או במה למופע הסיום.",
  },
];

const partnerGains = [
  "הכרה כשותפים בחומרי המיזם, במופע הסיום וברשתות החברתיות.",
  "הרצאה לעובדים מטעם צוות המיזם: «החיים מצחיקים, אז צוחקים».",
  "דוח תוצאות ותובנות מהפיילוט.",
  "שותפות בפיתוח מודל שניתן להרחיב למרכזים רפואיים נוספים בארץ.",
  "הזמנה למופע התוצרים של המשתתפים.",
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />
      <main id="content">
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-12 md:py-20">
          <div className="order-2 space-y-6 text-center md:order-1 md:text-start">
            <p className="text-sm font-medium tracking-wide text-primary">
              מחפשים שותפים לפיילוט
            </p>
            <h1 className="text-5xl leading-tight text-primary sm:text-6xl">
              {ventureName}
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-8 text-foreground/85 md:mx-0">
              סדנת סטנדאפ בליווי רגשי למתמודדי סרטן בשלב השיקום.
            </p>
            <p className="mx-auto max-w-xl text-base leading-7 text-foreground/80 md:mx-0">
              הסדנה מעניקה כלים יצירתיים-נרטיביים בעלי אופי תרפויטי להתמודדות
              עם האבחנה ועם תהליך השיקום. במהלך 11 מפגשים המשתתפים לומדים לכתוב
              את סיפורם בכלים מעולם הסטנדאפ, ובסיום מציגים את הקטע שכתבו במופע
              בפני משפחה וחברים.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#partners"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full rounded-full px-6 text-base sm:w-auto",
                )}
              >
                איך לשתף פעולה
              </a>
              <a
                href="#about"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 w-full rounded-full bg-card px-6 text-base sm:w-auto",
                )}
              >
                על הסדנה
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="workshop-logo.jpg"
              alt={ventureName}
              width={672}
              height={440}
              priority
              className="mx-auto h-auto w-full max-w-md"
            />
          </div>
        </section>

        <section id="about" className="scroll-mt-28 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gold">הסדנה</p>
              <h2 className="text-4xl text-primary">סטנדאפ וליווי רגשי, יחד</h2>
              <p className="text-lg leading-8 text-foreground/85">
                {ventureName} מציע סדנת סטנדאפ קבוצתית בליווי רגשי. הסדנה נבנתה
                על ידי צוות רב-תחומי, ותועבר במשותף על ידי סטנדאפיסט ואיש מקצוע
                בתחום הנפש.
              </p>
            </div>
            <div className="grid gap-4">
              <Card className="bg-card shadow-sm ring-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    עבודה אמנותית ופרפורמטיבית
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    לימוד עקרונות כתיבת הסטנדאפ, פיתוח קול אישי, והפיכת חוויות
                    החיים לחומר בימתי. בהנחיית סטנדאפיסט המתמחה בהוראת סטנדאפ.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-sm ring-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    ליווי רגשי
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    עיבוד רגשי מונחה על ידי איש מקצוע מתחום הנפש, לאורך מפגשי
                    הסדנה.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 bg-card/55 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-medium text-gold">הצורך</p>
              <h2 className="text-4xl text-primary">אחרי הטיפול הפעיל</h2>
              <p className="text-lg leading-8 text-foreground/80">
                לפי דוח הוועדה הרב-מקצועית לתכנון מערך שירותי האונקולוגיה
                והרדיותרפיה בישראל, משרד הבריאות (יולי 2025), מדי שנה מאובחנים
                בישראל כ-30,000 חולי סרטן חדשים. בסוף 2021 חיו בישראל 98,813
                אנשים שאובחנו עם סרטן חודרני בחמש השנים שקדמו לכך. אחת מהמלצות
                הוועדה היא פיתוח שירותים לשלב שלאחר הטיפול הפעיל.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-card shadow-sm ring-border">
                <CardContent className="pt-(--card-spacing)">
                  <p className="text-base leading-7 text-foreground/80">
                    בבתי חולים, בקופות חולים ובעמותות כבר נעשית עבודה חשובה,
                    ובכלל זה מרפאות מחלימים. התחום עדיין זקוק להמשך פיתוח.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-sm ring-border">
                <CardContent className="pt-(--card-spacing)">
                  <p className="text-base leading-7 text-foreground/80">
                    אחרי השלב הפעיל, מטופלים רבים מוצאים מעטפת מצומצמת יותר, אף
                    שהם עדיין זקוקים לתמיכה: תופעות לוואי, חזרה לשגרה, מעקבים
                    תכופים, ובדידות.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-sm ring-border">
                <CardContent className="pt-(--card-spacing)">
                  <p className="text-base leading-7 text-foreground/80">
                    אנו רואים ב{ventureName} מענה בעל פוטנציאל לליווי ולסיוע
                    בתהליכי השיקום.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gold">איך זה התחיל</p>
              <h2 className="text-4xl text-primary">מהתנסות, להתגלות, למודל</h2>
              <p className="text-lg leading-8 text-foreground/85">
                כאחות אונקולוגית פגשתי מטופלים בשלבים שונים של ההתמודדות. בלטו
                החשש להכביד על המשפחה, והצורך לפגוש אנשים בהתמודדות דומה. יחד
                עם עו״ס מצוות בית החולים הקמתי קבוצת תמיכה למטופלים עם סרטן
                המוח. היה צורך אמיתי במפגש, וגם קושי לשתף ולהיחשף לקשיים של
                אחרים. בסופו של דבר השהיתי את המפגשים.
              </p>
              <p className="text-lg leading-8 text-foreground/85">
                שנה לאחר מכן השתתפתי בקורס סטנדאפ. חברי הקבוצה כתבו וסיפרו
                סיפורים אישיים, מורכבים ולא פעם כואבים, והתגובה הייתה חיבוק,
                חום, צחוק וקבלה. שם התחברו הנקודות: מה אם נקיים קבוצת סטנדאפ
                למתמודדים אונקולוגיים? המודל לוקח את הטוב משני העולמות, הליווי
                הנפשי והסטנדאפ, בסדנה משולבת שמנחים מטפל רגשי וסטנדאפיסט.
              </p>
              <p className="text-base leading-7 text-foreground/75">
                ליטל ליברמן אביטל
              </p>
            </div>
            <figure className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm md:p-8">
              <figcaption className="mb-4 text-sm font-medium text-gold">
                עדות המייסדים
              </figcaption>
              <blockquote className="text-lg leading-8 text-foreground">
                {foundersTestimony}
              </blockquote>
            </figure>
          </div>
        </section>

        <section id="founders" className="scroll-mt-28 bg-card/55 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium text-gold">מי אנחנו</p>
              <h2 className="text-4xl text-primary">המייסדים</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="bg-card shadow-sm ring-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    ד״ר ליטל ליברמן אביטל
                  </CardTitle>
                  <p className="text-sm text-foreground/70">מייסדת ומנהלת המיזם</p>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    חוקרת פולקלור (PhD), עם התמחות בסיפור האישי. אחות מוסמכת
                    בעלת הכשרה על-בסיסית באונקולוגיה. עבדה כאחות אונקולוגית
                    בסורוקה ובאיכילוב.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-sm ring-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    אלדד שטרית
                  </CardTitle>
                  <p className="text-sm text-foreground/70">
                    מייסד שותף, סטנדאפיסט ומורה לסטנדאפ
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    לא ממש חי את החיים: הוא עומד לידם, מסתכל מהצד ורושם הערות.
                    מוצא הומור בדברים שכולנו מנסים להדחיק: משפחה, זוגיות,
                    אלוהים, והתחושה שאתה לא בטוח אם אתה משתתף בחיים או רק צופה
                    בהם. בא מבית דתי, חזר בשאלה, והדבר היחיד שהוא לוקח ברצינות
                    הוא חוסר רצינות.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-sm ring-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    עו״ס יונתן ביגן
                  </CardTitle>
                  <p className="text-sm text-foreground/70">
                    מייסד שותף, עובד סוציאלי קליני ומטפל
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    מטפל בגישה פסיכודינמית בקליניקה פרטית. מוקסם מהדרכים
                    הפתלתלות והיצירתיות שבהן הנפש משחקת במחבואים עם עצמה. מנסה
                    לעזור לעצמו ולאחרים להרגיש אמיתיים יותר וסובלים פחות.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="offerings" className="scroll-mt-28 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium text-gold">מה הסדנה מבקשת</p>
              <h2 className="text-4xl text-primary">מטרות, ומה נשאר ביד</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-card shadow-sm ring-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    עיבוד וארגון מחדש
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    מרחב שמעצים סוכנות ושליטה, ואת תחושת הסובייקט כבעל מכלול
                    חיים ותפקידים, ולא כאובייקט רפואי.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-sm ring-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    הפחתת בדידות
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    לגיטימציה לדבר את הכואב והלא אסתטי בפתיחות וללא שיפוטיות,
                    בקבוצה תומכת, באופן שהסטנדאפ מאפשר.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-sm ring-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    חוסן ומשמעות
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    שיפור איכות חיים, והפחתת סממנים של סטרס, חרדה ודיכאון,
                    באמצעות כלים מעולמות הנרטיב והסטנדאפ.
                  </p>
                </CardContent>
              </Card>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "קהילה תומכת.",
                "ארגז כלים מעולם הסטנדאפ להתבוננות ולמסגור מחדש של רגשות וחוויות קשות.",
                "קטע סטנדאפ אישי כתוב, פרי עטו של המשתתף.",
                "גשר לתקשורת מקרבת עם משפחה וחברים.",
                "מופע סיום על במה מקצועית, מול משפחה וחברים.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-leaf" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="scroll-mt-28 bg-card/55 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium text-gold">בפועל</p>
              <h2 className="text-4xl text-primary">איך הסדנה בנויה</h2>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-border bg-card p-5">
                  <dt className="mb-2 font-heading text-xl text-primary">{fact.label}</dt>
                  <dd className="text-base leading-7 text-foreground/80">{fact.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="meetings" className="scroll-mt-28 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium text-gold">תוכנית</p>
              <h2 className="text-4xl text-primary">אחד־עשר מפגשים</h2>
            </div>
            <ol className="grid gap-3">
              {meetings.map((meeting, index) => (
                <li
                  key={meeting.title}
                  className="grid gap-3 rounded-2xl border border-border bg-card/80 p-4 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5 sm:p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary font-heading text-lg text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl text-primary">{meeting.title}</h3>
                    <p className="text-base leading-7 text-foreground/80">{meeting.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="scroll-mt-28 px-5 pb-4 sm:px-8">
          <div className="mx-auto max-w-6xl space-y-6 rounded-[2rem] border border-border bg-card/80 p-6 md:p-10">
            <div className="space-y-3">
              <p className="text-sm font-medium text-gold">מרחב בטוח</p>
              <h2 className="text-4xl text-primary">היבטים אתיים ובטיחותיים</h2>
            </div>
            <ul className="grid gap-3 md:grid-cols-2">
              {safety.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="partners" className="scroll-mt-28 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-medium text-gold">שותפות</p>
              <h2 className="text-4xl text-primary">איך אפשר לשתף פעולה</h2>
              <p className="text-lg leading-8 text-foreground/80">
                הפיילוט יתקיים באזור המרכז, בינואר 2027. נשמח לשבת יחד ולמצוא את
                מסלול השותפות שמתאים לכם.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {tracks.map((track) => (
                <Card key={track.title} className="bg-card shadow-sm ring-border">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl text-primary">
                      {track.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-7 text-foreground/80">{track.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-primary">השותפים שלנו יקבלו</h3>
              <ul className="grid gap-3 md:grid-cols-2">
                {partnerGains.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-7">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-5 pb-20 sm:px-8 md:pb-28">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm md:grid-cols-2 md:p-10">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gold">יצירת קשר</p>
              <h2 className="text-4xl text-primary">נשמח לשבת יחד</h2>
              <p className="text-lg leading-8 text-foreground/80">
                כתבו מי אתם, ואיזה מסלול שותפות מתאים לכם: מימון, עמותת חסות,
                מחקר, הפצה או אירוח.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-2xl text-primary">{ventureName}</p>
            <p className="text-sm text-muted-foreground">
              סדנת סטנדאפ בליווי רגשי למתמודדי סרטן בשלב השיקום.
            </p>
          </div>
          <nav aria-label="ניווט תחתון" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#about" className="hover:text-primary">
              הסדנה
            </a>
            <a href="#founders" className="hover:text-primary">
              המייסדים
            </a>
            <a href="#meetings" className="hover:text-primary">
              המפגשים
            </a>
            <a href="#partners" className="hover:text-primary">
              שותפות
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
