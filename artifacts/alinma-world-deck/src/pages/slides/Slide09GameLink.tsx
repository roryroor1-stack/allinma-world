export default function Slide09GameLink() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";
  const videoUrl = "https://youtu.be/gR_464N-M38?si=kW6x0ql3p2YwgVn0";

  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}>
      {/* Subtle ambient glow */}
      <div style={{ position: "absolute", top: "15vh", left: "15vw", width: "70vw", height: "40vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,87,168,0.2), transparent 70%)", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ background: headerGrad, height: "14vh", display: "flex", alignItems: "center", padding: "0 5vw", justifyContent: "space-between", position: "relative" }}>
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.2vw", fontWeight: 800, margin: 0 }}>التجربة الحية والجاهزية الكاملة</h2>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1vw", letterSpacing: "0.25em", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4vh" }}>LIVE EXPERIENCE & FULL READINESS</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", borderRadius: "50%", width: "4vw", height: "4vw", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.5vw", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.4)" }}>10</div>
      </div>

      {/* Main content */}
      <div dir="rtl" style={{ position: "relative", height: "78vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2vh 10vw", textAlign: "center", gap: "2vh" }}>

        {/* Body text */}
        <p style={{ fontSize: "1.4vw", color: "rgba(255,255,255,0.88)", lineHeight: 1.9, margin: 0, maxWidth: "65vw" }}>
          اللعبة جاهزة تماماً ومطورة بأعلى كفاءة تشغيلية.<br />اضغط على الزر أدناه لتجربة اللعبة وعيش الرحلة المالية التفاعلية الآن:
        </p>

        {/* Single large prominent arrow */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "0.5vh 0" }}>
          <span style={{ fontSize: "6vw", color: "#FFFFFF", display: "block", lineHeight: 0.9, filter: "drop-shadow(0 0 18px rgba(255,255,255,0.6))" }}>⬇</span>
        </div>

        {/* CTA Button */}
        <a
          href="https://www.roblox.com/ar/games/119781384879094/Allinma-world"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "2vw",
            background: "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)",
            borderRadius: "16px", padding: "2.8vh 5vw",
            textDecoration: "none", color: "#FFFFFF",
            fontWeight: 900, fontSize: "1.9vw",
            boxShadow: "0 8px 40px rgba(0,87,168,0.6)",
            fontFamily: "'Tajawal', sans-serif",
            letterSpacing: "0.02em",
            border: "2px solid rgba(255,255,255,0.35)",
          }}
        >
          <span style={{ fontSize: "2.2vw" }}>🎮</span>
          اضغط هنا لتجربة اللعبة على منصة روبلوكس
          <span style={{ fontSize: "2vw", fontFamily: "'DM Sans', sans-serif" }}>←</span>
        </a>

        {/* Secondary video link for evaluators */}
        <div style={{
          marginTop: "0.5vh",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "12px",
          padding: "2vh 3vw",
          maxWidth: "70vw",
          width: "100%",
        }}>
          <div dir="rtl" style={{ fontSize: "1.05vw", color: "rgba(255,255,255,0.6)", marginBottom: "0.8vh", fontWeight: 600 }}>
            العرض المرئي التوضيحي للمشروع (خيار الاستعراض السريع)
          </div>
          <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em", marginBottom: "1.2vh" }}>
            GAMEPLAY SHOWCASE VIDEO (ALTERNATIVE VIEW)
          </div>
          <a
            href={videoUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "1vw",
              color: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05vw",
              fontWeight: 700,
              textDecoration: "none",
              background: "rgba(0,87,168,0.35)",
              border: "1px solid rgba(0,153,216,0.4)",
              borderRadius: "8px",
              padding: "0.8vh 2vw",
            }}
          >
            <span style={{ fontSize: "1.3vw" }}>▶</span>
            {videoUrl}
          </a>
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
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0099D8" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#FFFFFF" }} />
        </div>
      </div>
    </div>
  );
}
