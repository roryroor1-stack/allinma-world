export default function Slide02Agenda() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  const slides = [
    { num: "01", ar: "Allinma World",               en: "Cover",                        accent: "#0099D8" },
    { num: "02", ar: "جدول المحتويات",               en: "Agenda",                       accent: "#0057A8" },
    { num: "03", ar: "أعضاء الفريق",                 en: "Team Members",                 accent: "#0099D8" },
    { num: "04", ar: "المشكلة وحلها",                en: "Problem & Solution",           accent: "#0057A8" },
    { num: "05", ar: "وصف ومواءمة الفكرة للمسار",   en: "Idea & Track Alignment",       accent: "#0099D8" },
    { num: "06", ar: "البيانات المستخدمة",           en: "Data Sources",                 accent: "#0057A8" },
    { num: "07", ar: "التقنيات المستخدمة",           en: "Technologies Used",            accent: "#0099D8" },
    { num: "08", ar: "الاختبار والتحقق",             en: "Testing & Verification",       accent: "#0057A8" },
    { num: "09", ar: "العرض التوضيحي",               en: "Live Demonstration",           accent: "#0099D8" },
    { num: "10", ar: "التجربة الحية — رابط اللعبة", en: "Live Game Link",               accent: "#0057A8" },
    { num: "11", ar: "التحديات والخطط المستقبلية",  en: "Challenges & Future Plans",    accent: "#0099D8" },
    { num: "12", ar: "نطاق المشروع",                 en: "Project Scope — Done & Future",accent: "#0057A8" },
    { num: "13", ar: "خارطة الطريق التنفيذية",      en: "Implementation Roadmap",       accent: "#0099D8" },
    { num: "14", ar: "شكراً لكم",                    en: "Thank You",                    accent: "#0057A8" },
  ];

  // Split into two columns
  const left  = slides.slice(0, 7);
  const right = slides.slice(7, 14);

  const card = (s: typeof slides[0]) => (
    <div
      key={s.num}
      style={{
        display: "flex", alignItems: "center", gap: "1.2vw",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "8px",
        padding: "1.35vh 1.4vw",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRight: `3px solid ${s.accent}`,
      }}
    >
      {/* Number badge */}
      <div style={{
        background: `linear-gradient(135deg, #0057A8, ${s.accent})`,
        borderRadius: "50%", flexShrink: 0,
        width: "2.8vw", height: "2.8vw",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif", fontWeight: 800,
        fontSize: "1.05vw", color: "#FFFFFF",
      }}>
        {s.num}
      </div>
      {/* Text */}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: "1.15vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
          {s.ar}
        </div>
        <div style={{
          fontSize: "0.72vw", color: "rgba(255,255,255,0.42)",
          fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.12em",
          marginTop: "0.2vh", textTransform: "uppercase",
        }}>
          {s.en}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}
    >
      {/* Header */}
      <div style={{ background: headerGrad, height: "13vh", display: "flex", alignItems: "center", padding: "0 5vw", justifyContent: "space-between" }}>
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.5vw", fontWeight: 800, margin: 0 }}>جدول المحتويات</h2>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1vw", letterSpacing: "0.25em", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4vh" }}>AGENDA — 14 SLIDES</div>
        </div>
        <div style={{ background: headerGrad, borderRadius: "50%", width: "4vw", height: "4vw", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.5vw", color: "#FFFFFF" }}>02</div>
      </div>

      {/* Two-column grid */}
      <div
        dir="rtl"
        style={{
          padding: "2.2vh 4.5vw",
          height: "79vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.4vh 3.5vw",
          alignContent: "center",
        }}
      >
        {/* Left column (slides 01–07) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.4vh" }}>
          {left.map(card)}
        </div>
        {/* Right column (slides 08–14) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.4vh" }}>
          {right.map(card)}
        </div>
      </div>

      {/* Nav arrow */}
      <div style={{ position: "absolute", bottom: "2vh", right: "2.8vw", zIndex: 10, pointerEvents: "none" }}>
        <span style={{
          fontSize: "2vw", color: "#FFFFFF",
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700, lineHeight: 1,
          filter: "drop-shadow(0 2px 12px rgba(255,255,255,0.4))",
          opacity: 0.82,
        }}>➔</span>
      </div>

      {/* Footer */}
      <div dir="rtl" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8vh", padding: "0 5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <span style={{ fontSize: "0.85vw", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>Allinma world / HACKATHON AMAD</span>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0057A8" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "linear-gradient(135deg, #0057A8, #0099D8)" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0057A8" }} />
        </div>
      </div>
    </div>
  );
}
