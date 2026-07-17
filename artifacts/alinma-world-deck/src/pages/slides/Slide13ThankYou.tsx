export default function Slide13ThankYou() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ background: "#002447", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}
    >
      {/* Subtle ambient glows */}
      <div style={{ position: "absolute", top: "15vh", left: "10vw", width: "35vw", height: "35vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,87,168,0.25), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "8vw", width: "28vw", height: "28vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,153,216,0.18), transparent 70%)", pointerEvents: "none" }} />

      {/* Thin top accent bar */}
      <div style={{ background: headerGrad, height: "0.6vh", width: "100%" }} />

      {/* Main centred content */}
      <div
        dir="rtl"
        style={{
          position: "relative",
          height: "calc(100vh - 0.6vh - 8vh)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 12vw",
          gap: "4vh",
        }}
      >

        {/* Thank you heading */}
        <div>
          <h1
            style={{
              fontSize: "6.5vw",
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            شكراً لكم
          </h1>
          <h2
            style={{
              fontSize: "3.8vw",
              fontWeight: 300,
              margin: "0.5vh 0 0 0",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Thank You
          </h2>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "12vw",
            height: "3px",
            background: headerGrad,
            borderRadius: "2px",
          }}
        />

        {/* Project & team info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", alignItems: "center" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "14px",
              padding: "2.5vh 5vw",
              display: "flex",
              flexDirection: "column",
              gap: "1.8vh",
              alignItems: "center",
              minWidth: "40vw",
            }}
          >
            {/* Project name */}
            <div>
              <div
                style={{
                  fontSize: "0.85vw",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: "0.6vh",
                }}
              >
                PROJECT NAME
              </div>
              <div style={{ fontSize: "2vw", fontWeight: 800, color: "#FFFFFF" }}>
                عالم الإنماء &nbsp;|&nbsp;
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                  Allinma World
                </span>
              </div>
            </div>

            <div style={{ width: "60%", height: "1px", background: "rgba(255,255,255,0.1)" }} />

            {/* Team name */}
            <div>
              <div
                style={{
                  fontSize: "0.85vw",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: "0.6vh",
                }}
              >
                TEAM NAME
              </div>
              <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#FFFFFF" }}>
                فريق زد الانتماء
              </div>
            </div>
          </div>
        </div>

        {/* Roblox badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1vw",
            background: "rgba(0,87,168,0.2)",
            border: "1px solid rgba(0,153,216,0.35)",
            borderRadius: "30px",
            padding: "1vh 2.5vw",
          }}
        >
          <span style={{ fontSize: "1.2vw" }}>🎮</span>
          <span
            style={{
              fontSize: "1.05vw",
              color: "rgba(255,255,255,0.75)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            رحلة تفاعلية لبناء الوعي المالي لدى الجيل الرقمي
          </span>
        </div>

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
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Allinma world / HACKATHON AMAD
        </span>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0057A8" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0099D8" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#FFFFFF" }} />
        </div>
      </div>
    </div>
  );
}
