export default function Slide11Support() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  const done = [
    "البنك الأول", "نظام الدوام", "العملاء NPC", "عمليات السحب",
    "نظام المكافآت المالية", "بناء البنك الثاني", "مكتب المدير",
  ];

  const future = [
    "إكمال نظام العامل وتشغيله تلقائيًا",
    "ترقية اللاعب إلى مدير ونظام مكتب المدير",
    "عملاء VIP (إيداع مليون ريال وطلبات القروض)",
    "نظام المهام والإشعارات والإرشاد",
    "حفظ التقدم (حفظ الرصيد والوظيفة والمهام)",
    "تحسين الذكاء الاصطناعي للعملاء (طابور وحركة سلسة)",
    "توسيع الفروع البنكية والمدينة",
  ];

  const loop = [
    "موظف بنك", "يخدم العملاء", "يجمع المال", "يفتح زر العامل",
    "يشتري العامل", "العامل يستلم البنك الأول", "يبدأ بناء البنك الثاني",
    "يكمل مكتب المدير", "يصبح مديرًا", "يستقبل عميل VIP",
    "ينفذ إيداع مليون ريال", "يعالج طلبات القروض",
    "يفتح فروعًا جديدة", "يبني إمبراطورية مصرفية 🏦",
  ];

  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}
    >
      {/* Header */}
      <div
        style={{
          background: headerGrad,
          height: "13vh",
          display: "flex",
          alignItems: "center",
          padding: "0 5vw",
          justifyContent: "space-between",
        }}
      >
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.1vw", fontWeight: 800, margin: 0 }}>
            نطاق المشروع — ما تم وما هو قادم
          </h2>
          <div
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.9vw",
              letterSpacing: "0.25em",
              fontFamily: "'DM Sans', sans-serif",
              marginTop: "0.4vh",
            }}
          >
            PROJECT SCOPE — DONE & FUTURE
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #0057A8, #0099D8)",
            borderRadius: "50%",
            width: "4vw",
            height: "4vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: "1.5vw",
            color: "#FFFFFF",
            flexShrink: 0,
          }}
        >
          12
        </div>
      </div>

      {/* Body */}
      <div
        dir="rtl"
        style={{
          padding: "2.5vh 5vw",
          height: "79vh",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >

        {/* Top two columns */}
        <div style={{ display: "flex", gap: "2.5vw", flex: "0 0 auto" }}>

          {/* Done */}
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.07)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderTop: "4px solid #0057A8",
              padding: "2vh 2vw",
            }}
          >
            <div
              style={{
                fontSize: "1.05vw",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                marginBottom: "1.5vh",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ✅ ما تم إنجازه — In-Game Features
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8vh 0.8vw" }}>
              {done.map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(0,87,168,0.35)",
                    border: "1px solid rgba(0,153,216,0.4)",
                    borderRadius: "6px",
                    padding: "0.5vh 1vw",
                    fontSize: "1.1vw",
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Future */}
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.07)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderTop: "4px solid #0057A8",
              padding: "2vh 2vw",
            }}
          >
            <div
              style={{
                fontSize: "1.05vw",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                marginBottom: "1.5vh",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              🚀 التطويرات المستقبلية — Future Roadmap
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9vh" }}>
              {future.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.8vw",
                    fontSize: "1.05vw",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#0099D8", flexShrink: 0, marginTop: "0.1vh" }}>◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Gameplay Loop */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "4px solid #0057A8",
            padding: "1.8vh 2.5vw",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.9vw",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "0.08em",
              marginBottom: "1.5vh",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            🏆 رحلة اللاعب الكاملة مستقبلاً — FUTURE GAMEPLAY LOOP
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.5vh 0",
              rowGap: "0.8vh",
            }}
          >
            {loop.map((step, idx) => (
              <div
                key={idx}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div
                  style={{
                    background: idx === 0
                      ? "linear-gradient(135deg, #0057A8, #0099D8)"
                      : idx === loop.length - 1
                      ? "linear-gradient(135deg, #0057A8, #0099D8)"
                      : "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "6px",
                    padding: "0.5vh 0.9vw",
                    fontSize: "0.95vw",
                    color: "#FFFFFF",
                    fontWeight: idx === 0 || idx === loop.length - 1 ? 700 : 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {step}
                </div>
                {idx < loop.length - 1 && (
                  <span
                    style={{
                      color: "#0099D8",
                      fontSize: "1.1vw",
                      padding: "0 0.4vw",
                      flexShrink: 0,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    ←
                  </span>
                )}
              </div>
            ))}
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
      <div
        dir="rtl"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "8vh",
          padding: "0 5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span
          style={{
            fontSize: "0.85vw",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Allinma world / HACKATHON AMAD
        </span>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0057A8" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "linear-gradient(135deg, #0057A8, #0099D8)" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0057A8" }} />
        </div>
      </div>
    </div>
  );
}
