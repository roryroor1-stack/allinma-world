export default function Slide07Tech() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}>
      {/* Header */}
      <div style={{ background: headerGrad, height: "14vh", display: "flex", alignItems: "center", padding: "0 5vw", justifyContent: "space-between" }}>
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.5vw", fontWeight: 800, margin: 0 }}>التقنيات المستخدمة</h2>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1vw", letterSpacing: "0.25em", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4vh" }}>TECHNOLOGIES USED</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", borderRadius: "50%", width: "4vw", height: "4vw", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.5vw", color: "#FFFFFF" }}>07</div>
      </div>

      {/* Two tech cards — centered */}
      <div dir="rtl" style={{ padding: "6vh 10vw", height: "78vh", display: "flex", gap: "5vw", alignItems: "center", justifyContent: "center" }}>

        {/* Luau */}
        <div style={{ flex: "0 0 35vw", background: "rgba(255,255,255,0.07)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)", padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", padding: "5vh 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: "12px", padding: "1.5vh 3vw", marginBottom: "1.5vh" }}>
              <span style={{ fontSize: "3vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 900, color: "#FFF", letterSpacing: "0.08em" }}>LUA</span>
            </div>
            <span style={{ fontSize: "1vw", color: "rgba(255,255,255,0.8)", letterSpacing: "0.2em", fontFamily: "'DM Sans', sans-serif" }}>SCRIPTING</span>
          </div>
          <div style={{ padding: "4vh 3vw", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h3 style={{ fontSize: "2vw", fontWeight: 800, margin: "0 0 1.5vh 0", color: "#FFFFFF" }}>Luau Scripting</h3>
            <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: "2vh", fontFamily: "'DM Sans', sans-serif" }}>لغة البرمجة</div>
            <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.9, margin: 0 }}>
              اللغة البرمجية الخاصة بروبلوكس لبناء منطق اللعبة والاقتصاد الافتراضي وأنظمة المكافآت.
            </p>
          </div>
        </div>

        {/* Roblox Studio */}
        <div style={{ flex: "0 0 35vw", background: "rgba(255,255,255,0.07)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)", padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", padding: "5vh 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: "12px", padding: "1.5vh 2vw", marginBottom: "1.5vh", textAlign: "center" }}>
              <div style={{ fontSize: "1.8vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 900, color: "#FFF", letterSpacing: "0.05em", lineHeight: 1.3 }}>ROBLOX</div>
              <div style={{ fontSize: "1.4vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.15em" }}>STUDIO</div>
            </div>
          </div>
          <div style={{ padding: "4vh 3vw", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h3 style={{ fontSize: "2vw", fontWeight: 800, margin: "0 0 1.5vh 0", color: "#FFFFFF" }}>Roblox Studio</h3>
            <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: "2vh", fontFamily: "'DM Sans', sans-serif" }}>بيئة التطوير</div>
            <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.9, margin: 0 }}>
              البيئة المتكاملة لبناء العالم التفاعلي وتشغيل السيرفر وإدارة نسخ المشروع.
            </p>
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
