export default function Slide05Idea() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}>
      {/* Header */}
      <div style={{ background: headerGrad, height: "14vh", display: "flex", alignItems: "center", padding: "0 5vw", justifyContent: "space-between" }}>
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.3vw", fontWeight: 800, margin: 0 }}>وصف ومواءمة الفكرة للمسار</h2>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1vw", letterSpacing: "0.25em", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4vh" }}>IDEA & TRACK ALIGNMENT</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #0057A8, #0099D8)", borderRadius: "50%", width: "4vw", height: "4vw", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.5vw", color: "#FFFFFF" }}>05</div>
      </div>

      {/* Content */}
      <div dir="rtl" style={{ padding: "4vh 5vw", height: "78vh", display: "flex", gap: "2.5vw", alignItems: "stretch" }}>

        {/* Card 1 */}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)", borderTop: "5px solid #0057A8", padding: "3.5vh 2vw", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "4.5vw", height: "4.5vw", borderRadius: "12px", background: "linear-gradient(135deg, #0057A8, #0099D8)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5vh", fontSize: "2vw" }}>🏦</div>
          <h3 style={{ fontSize: "1.7vw", fontWeight: 800, margin: "0 0 1.5vh 0", color: "#FFFFFF" }}>الفكرة المطورة</h3>
          <div style={{ width: "3vw", height: "3px", background: "linear-gradient(90deg, #0057A8, #00CCF0)", borderRadius: "2px", marginBottom: "2.5vh" }} />
          <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: 0 }}>
            لعبة "عامل الإنماء" — محاكاة تفاعلية ثلاثية الأبعاد داخل روبلوكس.
          </p>
          <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, margin: "1.5vh 0 0 0" }}>
            يبدأ اللاعب كصراف مبتدئ ويتدرج وظيفياً داخل مصرف الإنماء، مكتسباً المهارات المالية والمكافآت في كل مرحلة.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)", borderTop: "5px solid #0057A8", padding: "3.5vh 2vw", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "4.5vw", height: "4.5vw", borderRadius: "12px", background: "linear-gradient(135deg, #0057A8, #0099D8)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5vh", fontSize: "2vw" }}>🎯</div>
          <h3 style={{ fontSize: "1.7vw", fontWeight: 800, margin: "0 0 1.5vh 0", color: "#FFFFFF" }}>مواءمة المسار</h3>
          <div style={{ width: "3vw", height: "3px", background: "linear-gradient(90deg, #0099D8, #00E4A0)", borderRadius: "2px", marginBottom: "2.5vh" }} />
          <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: 0 }}>
            يجسّد المشروع جوهر مسار الابتكار في التقنية المالية: تحويل مفاهيم الادخار والاستثمار إلى تجربة تفاعلية ملموسة.
          </p>
          <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, margin: "1.5vh 0 0 0" }}>
            يعزز الشمول المالي ويدعم التوجه الاستراتيجي لمصرف الإنماء في بناء ولاء الجيل الرقمي.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)", borderTop: "5px solid #0057A8", padding: "3.5vh 2vw", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "4.5vw", height: "4.5vw", borderRadius: "12px", background: "linear-gradient(135deg, #0057A8, #0099D8)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5vh", fontSize: "2vw" }}>🚀</div>
          <h3 style={{ fontSize: "1.7vw", fontWeight: 800, margin: "0 0 1.5vh 0", color: "#FFFFFF" }}>الفوائد والابتكار</h3>
          <div style={{ width: "3vw", height: "3px", background: "linear-gradient(90deg, #00CCF0, #00E4A0)", borderRadius: "2px", marginBottom: "2.5vh" }} />
          <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: 0 }}>
            قناة تسويقية تفاعلية تبني ارتباطاً عاطفياً مبكراً بين الشباب وهوية مصرف الإنماء.
          </p>
          <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, margin: "1.5vh 0 0 0" }}>
            تمهد لتحويل اللاعبين إلى عملاء فعليين بحوافز حقيقية داخل تطبيق البنك.
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
