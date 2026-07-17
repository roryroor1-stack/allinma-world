export default function Slide12Roadmap() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  const days = [
    {
      label: "DAY 1",
      title: "✓ اليوم الأول",
      color: "#0057A8",
      colorEnd: "#0099D8",
      items: ["البنك الأول", "نظام الدوام", "العملاء", "السحب", "تسليم الأموال", "المكافآت المالية"],
    },
    {
      label: "DAY 2",
      title: "✓ اليوم الثاني",
      color: "#0099D8",
      colorEnd: "#00CCF0",
      items: ["نظام البناء", "مراحل البنك الثاني", "الأثاث", "مكتب المدير"],
    },
    {
      label: "DAY 3",
      title: "✓ اليوم الثالث",
      color: "#006FAB",
      colorEnd: "#0057A8",
      items: ["اختبار اللعبة", "تنظيم السكربتات", "إصلاح الأخطاء", "تجهيز العرض", "توثيق التطويرات المستقبلية"],
    },
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
          height: "14vh",
          display: "flex",
          alignItems: "center",
          padding: "0 5vw",
          justifyContent: "space-between",
        }}
      >
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2.5vw", fontWeight: 800, margin: 0 }}>
            خارطة الطريق التنفيذية
          </h2>
          <div
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1vw",
              letterSpacing: "0.25em",
              fontFamily: "'DM Sans', sans-serif",
              marginTop: "0.4vh",
            }}
          >
            IMPLEMENTATION ROADMAP
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
          }}
        >
          13
        </div>
      </div>

      {/* 3-column day cards */}
      <div
        dir="rtl"
        style={{
          padding: "3.5vh 5vw",
          height: "78vh",
          display: "flex",
          gap: "2.5vw",
          alignItems: "stretch",
        }}
      >
        {days.map((day, i) => (
          <div
            key={day.label}
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            {/* Day header */}
            <div
              style={{
                background: `linear-gradient(135deg, ${day.color}, ${day.colorEnd})`,
                borderRadius: "12px 12px 0 0",
                padding: "2.2vh 2.5vw",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "0.85vw",
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: "0.4vh",
                }}
              >
                {day.label}
              </div>
              <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#FFF" }}>
                {day.title}
              </div>
            </div>

            {/* Items */}
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "0 0 12px 12px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "none",
                flex: 1,
                padding: "2.5vh 2.5vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.6vh",
              }}
            >
              {day.items.map((item, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2vw",
                    }}
                  >
                    <div
                      style={{
                        width: "0.5vw",
                        height: "0.5vw",
                        borderRadius: "50%",
                        background: day.colorEnd,
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{
                        fontSize: "1.3vw",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </div>
                  </div>
                  {idx < day.items.length - 1 && (
                    <div
                      style={{
                        height: "1px",
                        background: "rgba(255,255,255,0.07)",
                        marginTop: "1.6vh",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
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
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#FFFFFF" }} />
        </div>
      </div>
    </div>
  );
}
