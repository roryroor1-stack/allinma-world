export default function Slide04Problem() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}>
      {/* Header */}
      <div style={{ background: headerGrad, height: "14vh", display: "flex", alignItems: "center", padding: "0 5vw", justifyContent: "space-between" }}>
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.5vw", fontWeight: 800, margin: 0 }}>المشكلة وحلها</h2>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1vw", letterSpacing: "0.25em", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4vh" }}>PROBLEM & SOLUTION</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", borderRadius: "50%", width: "4vw", height: "4vw", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.5vw", color: "#FFFFFF" }}>04</div>
      </div>

      {/* Content */}
      <div dir="rtl" style={{ padding: "4vh 5vw", height: "78vh", display: "flex", gap: "3vw", alignItems: "stretch" }}>

        {/* Problem */}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "12px", border: "1px solid rgba(0,87,168,0.3)", borderTop: "5px solid #0057A8", padding: "3.5vh 2.5vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw", marginBottom: "3vh" }}>
            <div style={{ background: "rgba(0,87,168,0.2)", borderRadius: "50%", width: "3.5vw", height: "3.5vw", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", flexShrink: 0 }}>⚠️</div>
            <h3 style={{ fontSize: "2vw", fontWeight: 800, margin: 0, color: "#FFFFFF" }}>المشكلة</h3>
          </div>

          <p style={{ fontSize: "1.35vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: "0 0 2.5vh 0" }}>
            تفتقر شريحة واسعة من الشباب إلى الدافع الكافي لممارسة السلوكيات المالية الصحيحة كالادخار والاستثمار.
          </p>
          <p style={{ fontSize: "1.35vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: 0 }}>
            الطرق التقليدية فقدت فعاليتها مع الأجيال الحالية لغياب عنصر الترفيه والتلعيب.
          </p>

          <div style={{ marginTop: "auto", background: "rgba(229,62,62,0.15)", borderRadius: "8px", padding: "2vh 2vw", border: "1px solid rgba(0,87,168,0.3)" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5vh" }}>الفئة المستهدفة</div>
            <div style={{ fontSize: "1.3vw", color: "#FFFFFF", fontWeight: 600 }}>الشباب السعودي — 12 إلى 24 عاماً</div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ background: "linear-gradient(135deg, #0057A8, #00CCF0)", borderRadius: "50%", width: "5vw", height: "5vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "2vw", color: "#FFF" }}>←</span>
          </div>
        </div>

        {/* Solution */}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "12px", border: "1px solid rgba(0,87,168,0.3)", borderTop: "5px solid #0057A8", padding: "3.5vh 2.5vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw", marginBottom: "3vh" }}>
            <div style={{ background: "rgba(0,87,168,0.25)", borderRadius: "50%", width: "3.5vw", height: "3.5vw", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", flexShrink: 0 }}>🎮</div>
            <h3 style={{ fontSize: "2vw", fontWeight: 800, margin: 0, color: "#FFFFFF" }}>الحل المقترح</h3>
          </div>

          <p style={{ fontSize: "1.35vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: "0 0 2.5vh 0" }}>
            عالم مالي تفاعلي داخل منصة روبلوكس ذات <strong style={{ color: "#FFFFFF" }}>3 مليون مستخدم سعودي.</strong>
          </p>
          <p style={{ fontSize: "1.35vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: 0 }}>
            يتعلم اللاعب التعاملات المالية ويبني ارتباطاً مبكراً بهوية مصرف الإنماء، فينتقل الترفيه إلى ثقة واختيار بديهي مستقبلاً.
          </p>

          <div style={{ marginTop: "auto", display: "flex", gap: "2vw" }}>
            <div style={{ flex: 1, background: "rgba(0,153,216,0.2)", borderRadius: "8px", padding: "2vh 1.5vw", textAlign: "center", border: "1px solid rgba(0,204,240,0.3)" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif" }}>3M+</div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.8)", marginTop: "0.3vh" }}>مستخدم سعودي على روبلوكس</div>
            </div>
            <div style={{ flex: 1, background: "rgba(0,87,168,0.25)", borderRadius: "8px", padding: "2vh 1.5vw", textAlign: "center", border: "1px solid rgba(0,153,216,0.4)" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif" }}>50%+</div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.8)", marginTop: "0.3vh" }}>من اللعبة مبنية ومختبرة</div>
            </div>
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
