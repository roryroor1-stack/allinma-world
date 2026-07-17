export default function Slide09Demo() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}>
      {/* Header */}
      <div style={{ background: headerGrad, height: "14vh", display: "flex", alignItems: "center", padding: "0 5vw", justifyContent: "space-between" }}>
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.5vw", fontWeight: 800, margin: 0 }}>العرض التوضيحي</h2>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1vw", letterSpacing: "0.25em", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4vh" }}>LIVE DEMONSTRATION</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", borderRadius: "50%", width: "4vw", height: "4vw", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.5vw", color: "#FFFFFF" }}>09</div>
      </div>

      {/* Content */}
      <div dir="rtl" style={{ padding: "3.5vh 5vw", height: "78vh", display: "flex", flexDirection: "column", gap: "3vh" }}>

        {/* Completion badge */}
        <div style={{ display: "flex", gap: "2.5vw", alignItems: "stretch" }}>
          <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", borderRadius: "12px", padding: "2.5vh 3vw", display: "flex", alignItems: "center", gap: "2vw", flexShrink: 0 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "4vw", fontWeight: 900, color: "#FFF", fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>65%+</div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.8)", marginTop: "0.5vh" }}>جاهزية البروتوتايب التشغيلي 65% + خطط مستقبليه</div>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "12px", padding: "2.5vh 3vw", display: "flex", alignItems: "center", gap: "1.5vw", flex: 1, border: "1px solid rgba(0,204,240,0.25)" }}>
            <span style={{ fontSize: "2.5vw", flexShrink: 0 }}>🎮</span>
            <div>
              <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.5vh" }}>اللعبة جاهزة للتجربة الحية</div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.03em" }}>Allinma-world — انظر الشريحة التالية للرابط المباشر</div>
            </div>
          </div>
        </div>

        {/* Three feature cards */}
        <div style={{ display: "flex", gap: "2.5vw", flex: 1, alignItems: "stretch" }}>

          <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", borderTop: "4px solid #0057A8", padding: "3vh 2vw", display: "flex", flexDirection: "column", textAlign: "center" }}>
            <span style={{ fontSize: "2.5vw", marginBottom: "1.5vh" }}>🏦</span>
            <h3 style={{ fontSize: "1.4vw", fontWeight: 800, margin: "0 0 1.5vh 0", color: "#FFFFFF" }}>بيئة البنك التفاعلية</h3>
            <p style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, margin: 0 }}>مبنى البنك الكامل مع تصميم داخلي يعكس هوية مصرف الإنماء</p>
          </div>

          <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", borderTop: "4px solid #0057A8", padding: "3vh 2vw", display: "flex", flexDirection: "column", textAlign: "center" }}>
            <span style={{ fontSize: "2.5vw", marginBottom: "1.5vh" }}>🧍</span>
            <h3 style={{ fontSize: "1.4vw", fontWeight: 800, margin: "0 0 1.5vh 0", color: "#FFFFFF" }}>حركة العملاء NPCs</h3>
            <p style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, margin: 0 }}>عملاء افتراضيون يتحركون ويتفاعلون مع موظف البنك في الوقت الحقيقي</p>
          </div>

          <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", borderTop: "4px solid #00E4A0", padding: "3vh 2vw", display: "flex", flexDirection: "column", textAlign: "center" }}>
            <span style={{ fontSize: "2.5vw", marginBottom: "1.5vh" }}>💼</span>
            <h3 style={{ fontSize: "1.4vw", fontWeight: 800, margin: "0 0 1.5vh 0", color: "#FFFFFF" }}>مهام موظف البنك</h3>
            <p style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, margin: 0 }}>نظام السحب والإيداع مع تحديث فوري للمحفظة الرقمية</p>
          </div>

        </div>

      </div>

      {/* Nav arrow – next slide */}
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
