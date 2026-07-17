export default function Slide06Data() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}>
      {/* Header */}
      <div style={{ background: headerGrad, height: "14vh", display: "flex", alignItems: "center", padding: "0 5vw", justifyContent: "space-between" }}>
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.5vw", fontWeight: 800, margin: 0 }}>البيانات المستخدمة</h2>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1vw", letterSpacing: "0.25em", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4vh" }}>DATA — SOURCES & USAGE</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", borderRadius: "50%", width: "4vw", height: "4vw", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.5vw", color: "#FFFFFF" }}>06</div>
      </div>

      {/* 2x2 grid */}
      <div dir="rtl" style={{ padding: "3.5vh 5vw", height: "78vh", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2.5vh 2.5vw" }}>

        <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", borderRight: "4px solid #0057A8", padding: "2.5vh 2.5vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.8vh" }}>
            <span style={{ fontSize: "1.5vw" }}>📊</span>
            <h3 style={{ fontSize: "1.55vw", fontWeight: 800, margin: 0, color: "#FFFFFF" }}>مصادر البيانات</h3>
          </div>
          <p style={{ fontSize: "1.25vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: 0 }}>
            بيانات رقمية توليدية: قيم المحافظ الرقمية، أرصدة الادخار، وتكاليف البناء التصاعدي — تُولَّد لحظياً عبر السكربتات.
          </p>
          <p style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "1vh 0 0 0" }}>
            بيانات تفاعلية عبر ProximityPrompts.
          </p>
        </div>

        <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", borderRight: "4px solid #FFFFFF", padding: "2.5vh 2.5vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.8vh" }}>
            <span style={{ fontSize: "1.5vw" }}>🧹</span>
            <h3 style={{ fontSize: "1.55vw", fontWeight: 800, margin: 0, color: "#FFFFFF" }}>تنظيف ومعالجة البيانات</h3>
          </div>
          <p style={{ fontSize: "1.25vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: 0 }}>
            تُعالَج البيانات فورياً في ServerScriptService عبر دوال تُحيّد المدخلات العشوائية والتفاعلات المتكررة.
          </p>
          <p style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "1vh 0 0 0" }}>
            موازنة الحسابات لضمان دقة Leaderstats وخلوه من القيم السالبة.
          </p>
        </div>

        <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", borderRight: "4px solid #FFFFFF", padding: "2.5vh 2.5vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.8vh" }}>
            <span style={{ fontSize: "1.5vw" }}>🔗</span>
            <h3 style={{ fontSize: "1.55vw", fontWeight: 800, margin: 0, color: "#FFFFFF" }}>الحصول على البيانات</h3>
          </div>
          <p style={{ fontSize: "1.25vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: 0 }}>
            تُحصَد البيانات برمجياً داخل اللعبة دون الحاجة لبيانات خارجية، عبر تفاعل اللاعب مع المجسمات ومؤشرات التفعيل.
          </p>
        </div>

        <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", borderRight: "4px solid #0057A8", padding: "2.5vh 2.5vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.8vh" }}>
            <span style={{ fontSize: "1.5vw" }}>📈</span>
            <h3 style={{ fontSize: "1.55vw", fontWeight: 800, margin: 0, color: "#FFFFFF" }}>تحليل واستخدام البيانات</h3>
          </div>
          <p style={{ fontSize: "1.25vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: 0 }}>
            تُستخدم لتحديث لوحة Leaderstats والمحفظة الرقمية للاعب لحظياً، وتحليل جودة الأنظمة في مرحلة MVP.
          </p>
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
