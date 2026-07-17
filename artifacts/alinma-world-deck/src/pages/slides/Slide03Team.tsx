export default function Slide03Team() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  const members = [
    {
      emoji: "👩‍💻",
      name: "رحاب",
      roleLine1: "Team Leader &",
      roleLine2: "Technical Support",
      arabicRole: "قائدة الفريق والدعم الفني",
      desc: "قيادة المشروع، وإصلاح أخطاء الأكواد والسكربتات (Debugging) داخل Roblox Studio، وضمان استقرار أنظمة اللعبة الفنية بدون مشاكل.",
      avatarGrad: "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)",
      badgeGrad: "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)",
      accentColor: "#FFFFFF",
      topBorder: "#0057A8",
      badgeTextColor: "#FFFFFF",
    },
    {
      emoji: "🛠️",
      name: "حسناء",
      roleLine1: "IT & Computing",
      roleLine2: "Specialist",
      arabicRole: "تقنية المعلومات والحوسبة",
      desc: "تطوير وكتابة الأكواد البرمجية الأساسية (Luau Scripting) لبناء الأنظمة التفاعلية والاقتصادية التلقائية داخل اللعبة.",
      avatarGrad: "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)",
      badgeGrad: "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)",
      accentColor: "#FFFFFF",
      topBorder: "#0057A8",
      badgeTextColor: "#FFFFFF",
    },
    {
      emoji: "📦",
      name: "جمانه",
      roleLine1: "Supply Chain &",
      roleLine2: "Business Specialist",
      arabicRole: "إدارة الأعمال وسلاسل الإمداد",
      desc: "هندسة سلاسل الإمداد الرقمية وتدفق الموارد المالية (Economy Flow) داخل اللعبة، لتنظيم استلام وتسليم الأموال والترقيات الوظيفية بكفاءة.",
      avatarGrad: "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)",
      badgeGrad: "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)",
      accentColor: "#FFFFFF",
      topBorder: "#0057A8",
      badgeTextColor: "#FFFFFF",
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
          height: "13vh",
          display: "flex",
          alignItems: "center",
          padding: "0 5vw",
          justifyContent: "space-between",
        }}
      >
        <div dir="rtl">
          <h2 style={{ color: "#FFF", fontSize: "2vw", fontWeight: 800, margin: 0 }}>
            أعضاء فريق مشروع: زد الانتماء
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
            TEAM MEMBERS
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
          03
        </div>
      </div>

      {/* Cards */}
      <div
        dir="rtl"
        style={{
          padding: "3.5vh 4vw",
          height: "79vh",
          display: "flex",
          gap: "2vw",
          alignItems: "stretch",
        }}
      >
        {members.map((m) => (
          <div
            key={m.name}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.07)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderTop: `4px solid ${m.topBorder}`,
              padding: "3vh 2vw 2.5vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 0,
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: "7.5vw",
                height: "7.5vw",
                borderRadius: "50%",
                background: m.avatarGrad,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2vh",
                flexShrink: 0,
                boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
              }}
            >
              <span style={{ fontSize: "2.8vw" }}>{m.emoji}</span>
            </div>

            {/* Name */}
            <h3
              style={{
                fontSize: "2.1vw",
                fontWeight: 800,
                margin: "0 0 1.5vh 0",
                color: "#FFFFFF",
                lineHeight: 1.2,
              }}
            >
              {m.name}
            </h3>

            {/* Role Badge */}
            <div
              dir="ltr"
              style={{
                background: m.badgeGrad,
                borderRadius: "10px",
                padding: "0.7vh 1.4vw",
                marginBottom: "1.8vh",
                width: "100%",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "0.95vw",
                  color: m.badgeTextColor,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  lineHeight: 1.5,
                }}
              >
                {m.roleLine1}
              </div>
              <div
                style={{
                  fontSize: "0.95vw",
                  color: m.badgeTextColor,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  lineHeight: 1.5,
                }}
              >
                {m.roleLine2}
              </div>
            </div>

            {/* Arabic Role Label */}
            <div
              style={{
                fontSize: "1vw",
                color: m.accentColor,
                fontWeight: 700,
                marginBottom: "1.5vh",
              }}
            >
              {m.arabicRole}
            </div>

            {/* Divider */}
            <div
              style={{
                width: "40%",
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${m.accentColor}55, transparent)`,
                marginBottom: "1.5vh",
              }}
            />

            {/* Description */}
            <p
              style={{
                fontSize: "1.05vw",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.8,
                margin: 0,
                direction: "rtl",
                textAlign: "center",
              }}
            >
              {m.desc}
            </p>
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
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0057A8" }} />
        </div>
      </div>
    </div>
  );
}
