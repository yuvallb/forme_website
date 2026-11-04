import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { RegisterForm } from "@/components/register-form";
import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { eldadTestimony, ventureName, yonatanTestimony } from "@/lib/brand";
import { cn } from "cn";

const glance = [
  {
    title: "למי מיועדת?",
    tone: "bg-[#dceeee]",
    text: "למטופלים שסיימו את שלב הטיפולים הפעיל, ונמצאים בתהליכי שיקום וחזרה לשגרה.",
    extra: "נבצע שיחת התאמה לוודא שהמסגרת נכונה עבורכם.",
  },
  {
    title: "כמה מפגשים?",
    tone: "bg-[#f3e6cc]",
    text: "11 מפגשים שבמהלכם תכתבו קטע סטנדאפ שמספר את סיפורכם.",
  },
  {
    title: "משך מפגש",
    tone: "bg-[#e5f0e4]",
    text: "שעתיים",
  },
  {
    title: "אופי המפגשים",
    tone: "bg-[#f6e4dc]",
    text: "קבוצתי ופרונטלי.",
  },
  {
    title: "המופע המסכם",
    tone: "bg-[#f4a15a]",
    text: "הצגת התוצרים בפני משפחה וחברים, על במת סטנדאפ מקצועית.",
  },
  {
    title: "משתתפים",
    tone: "bg-[#e4eef2]",
    text: "עד 12 בקבוצה.",
  },
  {
    title: "איפה ומתי",
    tone: "bg-[#f4e3d4]",
    text: "הפיילוט יתחיל ב\u200e5/1/27. יתקיים בימי ג' בערב בין \u200e19:00–21:00, בתל אביב. מיקום מדויק ייקבע בהמשך.",
  },
  {
    title: "עלות",
    tone: "bg-[#e7efe6]",
    text: "עלות מסובסדת — פרטים בהרשמה.",
  },
];

const faqs = [
  {
    q: "האם אני חייב להיות מצחיק?",
    a: [
      "לא! אבל צריך רצון ופתיחות ללמוד ולעשות סטנדאפ. המצחיק בא על הדרך ובעזרת המנחים.",
    ],
  },
  {
    q: "האם אני יכול להצטרף גם אם אני לא רוצה קריירה של סטנדאפיסט?",
    a: [
      "בהחלט! הסטנדאפ הוא של כולם ובשביל כולם. תפיסת העולם של הסטנדאפ תורמת לחיים בכלל ולא מוגבלת רק לבמה.",
    ],
  },
  {
    q: "למה עושים שיחת התאמה בשלב ההרשמה לסדנה?",
    a: [
      "זה לא אודישן! ולא במטרה לבדוק אם מצחיקים.",
      "אלא למטרת בטיחות רגשית.",
      "סטנדאפ בליווי רגשי מעודד מגע עם חומרים רגישים: אבחנה, טיפולים, פחדים, אובדן. ההומור הוא הכלי, אבל הדלת שהוא פותח היא רגשית. לכן שיחת ההתאמה מתבצעת על ידי עו״ס בכדי לוודא מוכנות רגשית, שלב בהתמודדות ומשאבי תמיכה. כך אנחנו שומרים גם על המשתתף/ת וגם על הקבוצה כולה.",
    ],
  },
  {
    q: "למי מיועדת ההופעה בסוף?",
    a: [
      "למשתתף, בראש ובראשונה. למשפחה וחברים שרוצים להזמין.",
      "וגם לתורמים ולנותני החסות שלנו.",
    ],
  },
  {
    q: "האם חייב להופיע בסוף הסדנה?",
    a: [
      "מי שמצטרף לסדנה צריך לעשות את זה מתוך נכונות אמיתית לעמוד על הבמה ולהופיע עם הקטע שהוא כתב.",
    ],
  },
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
    text: "לחשוב ולכתוב סטנדאפ: טיימינג וקצב. החיים קשים, אז צוחקים?",
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
  "הפיילוט יכלול ליווי מחקרי ושאלונים אנונימיים על השפעת הסדנה על הרווחה ואיכות החיים בכפוף להסכמת המשתתפים",
];

const tracks = [
  {
    title: "מימון",
    text: "מימון מלא או חלקי של הפיילוט. העלות הכוללת 60,000 ₪: שכר מנחים, ביטוח, שכירות אולם והפקת מופע הסיום.",
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
  {
    title: "אמץ משתתף",
    text: "מימון עלות משתתף בודד - 5,000 ₪",
  },
];

const partnerGains = [
  "הכרה כשותפים בחומרי המיזם, במופע הסיום וברשתות החברתיות.",
  "הרצאה לעובדים מטעם צוות המיזם: «החיים קשים, אז צוחקים».",
  "דוח תוצאות ותובנות מהפיילוט.",
  "שותפות בפיתוח מודל שניתן להרחיב למרכזים רפואיים נוספים בארץ.",
  "הזמנה למופע התוצרים של המשתתפים.",
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />
      <main id="content">
        <section className="mx-auto flex max-w-3xl flex-col items-center px-5 pt-10 pb-8 text-center sm:px-8 md:pt-14 md:pb-10">
          <Image
            src="workshop-logo.jpg"
            alt={ventureName}
            width={672}
            height={440}
            priority
            className="h-auto w-full max-w-xs sm:max-w-sm"
          />
          <div className="mt-7 w-full rounded-2xl bg-secondary/95 px-5 py-4 text-base leading-relaxed font-medium text-primary shadow-sm ring-1 ring-border/50 sm:px-6 sm:text-lg">
            <p>סדנת סטנדאפ בליווי רגשי למתמודדים אונקולוגיים בשלב השיקום</p>
            <p>ובסופה מופע בפני משפחה וחברים.</p>
          </div>
          <div className="mt-5 w-full surface-card px-6 py-9 sm:px-8">
            <p className="text-xl leading-snug font-semibold text-foreground sm:text-2xl sm:leading-8">
              יוצאים לדרך ב-<span dir="ltr">5/1/27</span>,
            </p>
            <p className="mt-1 text-xl leading-snug font-semibold text-foreground sm:text-2xl sm:leading-8">
              ימי שלישי <span dir="ltr">19:00</span> בערב, בתל אביב.
            </p>
            <div className="mt-7 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full rounded-full px-4 text-base",
                )}
              >
                שיתופי פעולה
              </a>
              <a
                href="#register"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full rounded-full px-4 text-base",
                )}
              >
                הרשמה למשתתפים
              </a>
            </div>
          </div>
        </section>

        <section id="why-me" className="section-shell">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="section-heading">למה לי סטנדאפ בכלל?</h2>
            <div className="space-y-4 text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
              <p>
                &quot;דוקטור, דוקטור, מה יש לי?&quot; &quot;יש לי חדשות רעות וחדשות טובות...&quot;
              </p>
              <p>
                יודעים איך הבדיחה מסתיימת? אספר לכם כשניפגש. מה שחשוב כרגע הוא
                שאתם מכירים את הפתיח. יש אינספור גרסאות לבדיחת &quot;הדוקטור&quot;, כי היא
                משקפת את הפחד האנושי מחולי וממוות. לצחוק על הפחד ועם הפחד, זה
                כוח העל של הבדיחה. אבל לבדיחות יש כוח על נוסף, שהכי קל להרגיש
                אותו כשמגיעים לקבוצה עם בדיחות פנימיות: תחושת זרות שקופצת על מי
                שאינו חלק מהבדיחה. תחושה זו היא תוצר של הדבק הקבוצתי שבדיחות
                יודעות לייצר. הבדיחות מצטיינות ביצירת קהילה, וקהילה היא דבר
                שזקוקים לו במיוחד במציאות מאתגרת.
              </p>
              <p>וזה מה שעומד מאחורי &quot;בשבילי הצחוק&quot; על רגל אחת.</p>
            </div>
          </div>
        </section>

        <section id="why-standup" className="section-shell">
          <div className="mx-auto max-w-3xl">
            <Card className="bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md">
              <CardContent className="space-y-4 text-base leading-7 text-foreground/80">
                <p>הסטנדאפ הוא כלי יצירתי בעל פוטנציאל טיפולי:</p>
                <p>בסטנדאפ מותר להגיד הכול. הוא יוצר מרחב ביטוי בטוח ומחבק.</p>
                <p>
                  העמידה מול הקהל מחזקת תחושות של ביטחון עצמי, חוסן ושליטה על
                  החיים. וכשהסטנדאפ נלמד ונכתב בקבוצה נוצרת קהילת תמיכה.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="glance" className="section-shell">
          <div className="mx-auto max-w-6xl space-y-8">
            <h2 className="section-heading">הסדנה שלנו במבט אחד</h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {glance.map((item) => (
                <article
                  key={item.title}
                  className={cn(
                    "rounded-3xl p-5 shadow-sm ring-1 ring-black/[0.04] sm:p-6",
                    item.tone,
                    item.tone === "bg-[#f4a15a]" &&
                      "shadow-md ring-2 ring-primary/15",
                  )}
                >
                  <h3 className="font-heading text-primary">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
                    {item.text}
                  </p>
                  {item.extra ? (
                    <p className="mt-3 text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
                      {item.extra}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="model" className="section-shell bg-card/55">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <h2 className="section-heading">הסדנה שלנו - ממבט שני</h2>
              <p className="text-lg leading-8 text-foreground/85">
                הסדנה נבנתה על ידי צוות רב-תחומי, ותועבר במשותף על ידי
                סטנדאפיסט ואיש מקצוע בתחום הנפש. המודל משלב שני רבדים.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-heading text-primary">
                    עבודה אמנותית ופרפורמטיבית
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    לימוד עקרונות כתיבת הסטנדאפ, פיתוח קול אישי, והפיכת חוויות
                    החיים לחומר בימתי. בהנחיית אלדד שטרית, סטנדאפיסט המתמחה
                    בהוראת סטנדאפ.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-heading text-primary">
                    ליווי רגשי
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-foreground/80">
                    עיבוד רגשי מונחה לאורך מפגשי הסדנה על ידי יונתן ביגן, עו״ס
                    קליני.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell">
          <div className="mx-auto max-w-6xl space-y-8">
            <h2 className="section-heading">שאלות ותשובות</h2>
            <div className="grid gap-4">
              {faqs.map((item) => (
                <article
                  key={item.q}
                  className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm ring-1 ring-black/[0.03]"
                >
                  <h3 className="text-lg font-semibold text-primary sm:text-xl">{item.q}</h3>
                  <div className="mt-2 space-y-3 text-base leading-7 text-foreground/85">
                    {item.a.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="founders" className="section-shell bg-card/55">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="section-eyebrow">מי אנחנו</p>
              <h2 className="section-heading">המייסדים</h2>
            </div>
            <div className="grid gap-4">
              <figure className="grid gap-5 surface-card p-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:items-start sm:p-7">
                <Image
                  src="lital-liberman-avital.jpg"
                  alt="ד״ר ליטל ליברמן אביטל"
                  width={1372}
                  height={2048}
                  className="mx-auto aspect-[3/4] h-auto w-full max-w-56 rounded-2xl object-cover object-[center_18%] sm:max-w-none"
                />
                <div className="space-y-4">
                  <figcaption className="font-heading text-2xl font-semibold text-primary">
                    ליטל ליברמן אביטל
                  </figcaption>
                  <p className="text-sm text-foreground/70">מייסדת ומנהלת המיזם</p>
                  <p className="text-base leading-7 text-foreground/80">
                    חוקרת פולקלור (PhD), עם התמחות בסיפור האישי. אחות מוסמכת
                    בעלת הכשרה על-בסיסית באונקולוגיה. עבדה כאחות אונקולוגית
                    בסורוקה ובאיכילוב.
                  </p>
                  <blockquote className="space-y-4 border-s-4 border-gold/50 ps-5 text-base leading-8 text-foreground/85">
                    <p>
                      כאחות אונקולוגית פגשתי מטופלים בשלבים שונים של ההתמודדות.
                      בלטו החשש להכביד על המשפחה, והצורך לפגוש אנשים בהתמודדות
                      דומה. יחד עם עו״ס מצוות בית החולים הקמתי קבוצת תמיכה
                      למטופלים. היה צורך אמיתי במפגש, אך גם קושי לשתף
                      ולהיחשף לקשיים של אחרים.
                    </p>
                    <p>
                      שנה לאחר מכן השתתפתי בקורס סטנדאפ. חברי הקבוצה סיפרו
                      סיפורים אישיים, מורכבים ולא פעם כואבים, והתגובה הייתה חיבוק,
                      צחוק וקבלה. שם התחברו הנקודות: מה אם נקיים קבוצת
                      סטנדאפ למתמודדים אונקולוגיים?
                    </p>
                  </blockquote>
                </div>
              </figure>
              <figure className="grid gap-5 surface-card p-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:items-start sm:p-7">
                <Image
                  src="yonatan-bigan.jpg"
                  alt="יונתן ביגן"
                  width={720}
                  height={1600}
                  className="mx-auto aspect-[3/4] h-auto w-full max-w-56 rounded-2xl object-cover object-center sm:max-w-none"
                />
                <div className="space-y-4">
                  <figcaption className="font-heading text-2xl font-semibold text-primary">
                    יונתן ביגן
                  </figcaption>
                  <p className="text-sm text-foreground/70">
                    מייסד שותף, עובד סוציאלי קליני ומטפל
                  </p>
                  <p className="text-base leading-7 text-foreground/80">
                    מטפל בגישה פסיכודינמית בקליניקה פרטית. מוקסם מהדרכים
                    הפתלתלות והיצירתיות שבהן הנפש משחקת במחבואים עם עצמה. מנסה
                    לעזור לעצמו ולאחרים להרגיש אמיתיים יותר וסובלים פחות.
                  </p>
                  <blockquote className="blockquote-accent">
                    {yonatanTestimony}
                  </blockquote>
                </div>
              </figure>
              <figure className="grid gap-5 surface-card p-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:items-start sm:p-7">
                <Image
                  src="eldad-shitrit.jpg"
                  alt="אלדד שטרית"
                  width={915}
                  height={1372}
                  className="mx-auto aspect-[3/4] h-auto w-full max-w-56 rounded-2xl object-cover object-[center_22%] sm:max-w-none"
                />
                <div className="space-y-4">
                  <figcaption className="font-heading text-2xl font-semibold text-primary">
                    אלדד שטרית
                  </figcaption>
                  <p className="text-sm text-foreground/70">
                    מייסד שותף, סטנדאפיסט ומורה לסטנדאפ
                  </p>
                  <p className="text-base leading-7 text-foreground/80">
                    לא ממש חי את החיים: הוא עומד לידם, מסתכל מהצד ורושם הערות.
                    מוצא הומור בדברים שכולנו מנסים להדחיק: משפחה, זוגיות,
                    אלוהים, והתחושה שאתה לא בטוח אם אתה משתתף בחיים או רק צופה
                    בהם. בא מבית דתי, חזר בשאלה, והדבר היחיד שהוא לוקח ברצינות
                    הוא חוסר רצינות.
                  </p>
                  <blockquote className="blockquote-accent">
                    {eldadTestimony}
                  </blockquote>
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section id="meetings" className="section-shell">
          <div className="mx-auto max-w-6xl space-y-8">
            <h2 className="section-heading">תכנית הסדנה</h2>
            <ol className="grid gap-3">
              {meetings.map((meeting, index) => (
                <li
                  key={meeting.title}
                  className="grid gap-3 rounded-2xl border border-border/80 bg-card/90 p-4 shadow-sm ring-1 ring-black/[0.03] sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5 sm:p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary font-heading text-lg font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{meeting.title}</h3>
                    <p className="text-base leading-7 text-foreground/80">{meeting.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-shell md:py-16">
          <div className="mx-auto max-w-6xl space-y-6 surface-card p-6 md:p-10">
            <div className="space-y-3">
              <p className="section-eyebrow">מרחב בטוח</p>
              <h2 className="section-heading">היבטים אתיים ובטיחותיים</h2>
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

        <section id="partners" className="section-shell">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <p className="section-eyebrow">שותפות</p>
              <h2 className="section-heading">איך אפשר לשתף פעולה</h2>
              <p className="text-lg leading-8 text-foreground/80">
                עמותות וחברות המעוניינות לשתף איתנו פעולה על מנת להנגיש את הסדנה
                למשתתפים מוזמנות למצוא יחד איתנו את מסלול השותפות המתאים לכם.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tracks.map((track) => (
                <Card key={track.title} className="bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-heading text-primary">
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
              <h3 className="font-heading text-primary">
                השותפים שלנו יקבלו, לפי היקף השותפות
              </h3>
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

        <div id="forms" className="scroll-mt-28">
          <section id="register" className="section-shell">
            <div className="mx-auto grid max-w-6xl gap-8 surface-card p-6 md:grid-cols-2 md:gap-10 md:p-10">
              <div className="space-y-4">
                <h2 className="section-heading">הרשמת משתתפים</h2>
                <p className="text-lg leading-8 text-foreground/80">
                  יוצאים לדרך ב-<span dir="ltr">5/1/27</span>, ימי שלישי בערב, בתל אביב.
                </p>
              </div>
              <RegisterForm />
            </div>
          </section>

          <section id="contact" className="scroll-mt-28 px-5 pb-10 sm:px-8 md:pb-12">
            <div className="mx-auto grid max-w-6xl gap-8 surface-card p-6 md:grid-cols-2 md:gap-10 md:p-10">
              <div className="space-y-4">
                <h2 className="section-heading">לשיתופי פעולה</h2>
                <p className="text-lg leading-8 text-foreground/80">
                  כתבו מי אתם, ואיזה מסלול שותפות מתאים לכם: מימון, עמותת חסות,
                  מחקר, הפצה או אירוח.
                </p>
              </div>
              <ContactForm />
            </div>
          </section>

          <section id="inquire" className="scroll-mt-28 px-5 pt-8 pb-20 sm:px-8 md:pb-28">
            <div className="mx-auto max-w-6xl space-y-4 surface-card p-6 md:p-10">
              <p className="section-eyebrow">בירורים</p>
              <h2 className="section-heading">יצירת קשר לבירורים ושאלות</h2>
              <p className="text-lg leading-8">
                <a href="tel:052-5311791" dir="ltr" className="font-semibold text-primary underline decoration-gold underline-offset-4">
                  052-5311791
                </a>
              </p>
              <p className="text-lg leading-8">
                <a
                  href="mailto:lital1avital@gmail.com"
                  dir="ltr"
                  className="font-semibold text-primary underline decoration-gold underline-offset-4"
                >
                  lital1avital@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-border/80 bg-muted/35 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-2xl font-semibold text-primary">{ventureName}</p>
            <p className="text-sm text-muted-foreground">
              סדנת סטנדאפ בליווי רגשי למתמודדים אונקולוגיים בשלב השיקום.
            </p>
          </div>
          <nav aria-label="ניווט תחתון" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="#glance" className="text-foreground/75 transition-colors hover:text-primary">
              הסדנה
            </a>
            <a href="#faq" className="text-foreground/75 transition-colors hover:text-primary">
              שאלות
            </a>
            <a href="#founders" className="text-foreground/75 transition-colors hover:text-primary">
              המייסדים
            </a>
            <a href="#partners" className="text-foreground/75 transition-colors hover:text-primary">
              שותפות
            </a>
            <a href="#register" className="text-foreground/75 transition-colors hover:text-primary">
              הרשמה
            </a>
            <a href="#inquire" className="text-foreground/75 transition-colors hover:text-primary">
              יצירת קשר
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
