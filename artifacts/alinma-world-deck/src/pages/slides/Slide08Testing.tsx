export default function Slide08Testing() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  const glowCard = (accentColor: string, extraGlow?: string) => ({
    background: "rgba(255,255,255,0.06)",
    borderRadius: "14px",
    border: `2.5px solid ${accentColor}`,
    boxShadow: `0 0 18px 3px ${extraGlow ?? accentColor}55, inset 0 0 24px rgba(0,153,216,0.06)`,
    padding: "5vh 3.5vw",
    display: "flex",
    alignItems: "flex-start",
    gap: "2vw",
    flex: 1,
  } as React.CSSProperties);

  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}>
      {/* Header */}
      <div style={{ background: headerGrad, height: "14vh", display: "flex", alignItems: "center", padding: "0 5vw", justifyContent: "space-between" }}>
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.5vw", fontWeight: 800, margin: 0 }}>الاختبار والتحقق</h2>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1vw", letterSpacing: "0.25em", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4vh" }}>TESTING & VERIFICATION</div>
        </div>
        <div style={{ background: headerGrad, borderRadius: "50%", width: "4vw", height: "4vw", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.5vw", color: "#FFFFFF" }}>08</div>
      </div>

      {/* Content — two tall cards with generous spacing */}
      <div dir="rtl" style={{ padding: "5vh 6vw 10vh", height: "78vh", display: "flex", flexDirection: "column", gap: "4vh", justifyContent: "center" }}>

        {/* Card 1 */}
        <div style={glowCard("#0099D8", "#0099D8")}>
          <span style={{ fontSize: "3vw", flexShrink: 0, marginTop: "0.3vh" }}>🏦</span>
          <div>
            <div style={{ fontSize: "1.65vw", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.4vh", lineHeight: 1.3 }}>
              نظام خزينة أموال ونظام الـ Leaderstats للأصل العقاري
            </div>
            <p style={{ fontSize: "1.35vw", color: "rgba(255,255,255,0.88)", lineHeight: 2, margin: 0, fontWeight: 500 }}>
              اختبار التفاعل مع خزينة سحب الأموال والتحقق من منع تكرار السحب المتسارع عبر معالجة النقرات السريعة، وتحديث لوحة الصدارة (Leaderstats) للأصول العقارية فورياً.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div style={glowCard("#FFFFFF", "#7EC8E3")}>
          <span style={{ fontSize: "3vw", flexShrink: 0, marginTop: "0.3vh" }}>🏗️</span>
          <div>
            <div style={{ fontSize: "1.65vw", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.4vh", lineHeight: 1.3 }}>
              الأصل العقاري الأول
            </div>
            <p style={{ fontSize: "1.35vw", color: "rgba(255,255,255,0.88)", lineHeight: 2, margin: 0, fontWeight: 500 }}>
              إتمام بناء أول وحدة عقارية بنجاح، مما يثبت صحة الآلية السلوكية-المالية وتكاملها مع أنظمة اللعبة.
            </p>
          </div>
        </div>

      </div>

      {/* Nav arrow */}
      <div style={{ position: "absolute", bottom: "2vh", right: "2.8vw", zIndex: 10, pointerEvents: "none" }}>
        <span style={{ fontSize: "2vw", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, lineHeight: 1, filter: "drop-shadow(0 2px 12px rgba(255,255,255,0.4))", opacity: 0.82 }}>➔</span>
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
