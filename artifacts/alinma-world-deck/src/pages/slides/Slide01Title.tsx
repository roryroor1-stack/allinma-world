const base = import.meta.env.BASE_URL;

export default function Slide01Title() {
  return (
    <>
      {/* Keyframe animations scoped to this slide */}
      <style>{`
        @keyframes navGlow {
          0%   { box-shadow: 0 0 8px 2px rgba(0,153,216,0.45), 0 0 0px rgba(255,255,255,0); border-color: rgba(255,255,255,0.28); }
          50%  { box-shadow: 0 0 22px 6px rgba(0,153,216,0.85), 0 0 36px 10px rgba(0,87,168,0.55); border-color: rgba(255,255,255,0.7); }
          100% { box-shadow: 0 0 8px 2px rgba(0,153,216,0.45), 0 0 0px rgba(255,255,255,0); border-color: rgba(255,255,255,0.28); }
        }
        @keyframes navTextGlow {
          0%   { text-shadow: 0 0 6px rgba(255,255,255,0.3); opacity: 0.82; }
          50%  { text-shadow: 0 0 18px rgba(0,153,216,1), 0 0 32px rgba(255,255,255,0.5); opacity: 1; }
          100% { text-shadow: 0 0 6px rgba(255,255,255,0.3); opacity: 0.82; }
        }
        .nav-helper-pill {
          animation: navGlow 2.4s ease-in-out infinite;
        }
        .nav-helper-text {
          animation: navTextGlow 2.4s ease-in-out infinite;
        }
        .nav-helper-sub {
          animation: navTextGlow 2.4s ease-in-out infinite;
          animation-delay: 0.4s;
        }
      `}</style>

      <div
        className="w-screen h-screen overflow-hidden relative"
        style={{ background: "#0B2240", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}
      >
        {/* Hero background — darker opacity so navy shows through */}
        <img
          src={`${base}hero-bg.jpg`}
          crossOrigin="anonymous"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.32, mixBlendMode: "luminosity" }}
          alt=""
        />

        {/* Deep navy overlay — matches deck palette */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(11,34,64,0.96) 0%, rgba(0,50,110,0.88) 55%, rgba(0,36,71,0.94) 100%)" }} />

        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,87,168,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,87,168,0.08) 1px, transparent 1px)", backgroundSize: "6vw 6vw" }} />

        {/* Soft royal-blue accent glows */}
        <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,87,168,0.18), transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10vh", left: "-5vw", width: "35vw", height: "35vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,57,168,0.14), transparent 70%)" }} />

        {/* Content */}
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", padding: "5vh 8vw", textAlign: "center" }}>

          {/* Top badge */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "1.5vw", background: "rgba(0,87,168,0.35)", backdropFilter: "blur(8px)", borderRadius: "30px", padding: "1vh 2.5vw", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div style={{ width: "0.7vw", height: "0.7vw", borderRadius: "50%", background: "#0057A8" }} />
              <span style={{ fontSize: "1.1vw", letterSpacing: "0.2em", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>هاكثون AMAD</span>
              <div style={{ width: "0.7vw", height: "0.7vw", borderRadius: "50%", background: "linear-gradient(135deg, #0057A8, #0099D8)" }} />
            </div>
          </div>

          {/* Main hero text */}
          <div>
            {/* Game logo badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "1vw", background: "rgba(0,87,168,0.3)", border: "1px solid rgba(0,87,168,0.55)", borderRadius: "8px", padding: "0.8vh 2vw", marginBottom: "3vh" }}>
              <span style={{ fontSize: "1vw", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.2em", fontWeight: 700 }}>🎮 ROBLOX GAME</span>
            </div>

            <h1 style={{ fontSize: "9vw", fontWeight: 900, margin: 0, lineHeight: 0.9, color: "#FFFFFF", letterSpacing: "0.04em", fontFamily: "'DM Sans', sans-serif", textShadow: "0 4px 30px rgba(0,87,168,0.6)" }}>
              Allinma World
            </h1>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2vw", margin: "3vh 0" }}>
              <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, transparent, rgba(0,153,216,0.7))" }} />
              <div style={{ display: "flex", gap: "0.8vw" }}>
                <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0057A8" }} />
                <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "linear-gradient(135deg, #0057A8, #0099D8)" }} />
                <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0057A8" }} />
              </div>
              <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, rgba(0,153,216,0.7), transparent)" }} />
            </div>

            <p style={{ fontSize: "2vw", color: "rgba(255,255,255,0.9)", fontWeight: 700, margin: "0 0 1.5vh 0" }}>
              زد الانتماء
            </p>
            <p style={{ fontSize: "1.3vw", color: "rgba(255,255,255,0.65)", margin: 0, fontWeight: 400 }}>
              تجربة تفاعلية غامرة لبناء الوعي المالي لدى الجيل الرقمي
            </p>
          </div>

          {/* Bottom: Roblox CTA + nav helper + track */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.8vh", width: "100%" }}>

            {/* Main CTA button */}
            <a
              href="https://www.roblox.com/fr/games/119781384879094/Allinma-world"
              target="_blank"
              rel="noreferrer"
              dir="ltr"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "space-between",
                gap: "2vw",
                background: "linear-gradient(135deg, #0057A8, #0099D8)",
                borderRadius: "50px", padding: "1.8vh 3.5vw",
                textDecoration: "none", color: "#FFFFFF",
                fontWeight: 800, fontSize: "1.4vw",
                boxShadow: "0 8px 32px rgba(0,87,168,0.55)",
                fontFamily: "'Tajawal', sans-serif",
                minWidth: "40vw",
              }}
            >
              <span style={{ fontSize: "1.5vw", flexShrink: 0 }}>🎮</span>
              <span style={{ flex: 1, textAlign: "center" }}>جرّب اللعبة الآن على روبلوكس</span>
              <span style={{
                fontSize: "2.6vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 900,
                lineHeight: 1, flexShrink: 0,
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.55))",
              }}>➔</span>
            </a>

            {/* Slide navigation helper — glowing pulse */}
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.6vh" }}>
              <div
                className="nav-helper-pill"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "1vw",
                  background: "rgba(0,57,120,0.55)", backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  borderRadius: "30px", padding: "1vh 2.4vw",
                }}
              >
                <span
                  className="nav-helper-text"
                  style={{
                    fontSize: "1.1vw", color: "#FFFFFF",
                    fontFamily: "'Tajawal', sans-serif", fontWeight: 700,
                  }}
                >
                  انقر هنا لتحريك العرض والدخول
                </span>
                <span style={{
                  fontSize: "1.6vw", color: "#FFFFFF",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 900, lineHeight: 1,
                }}>➔</span>
              </div>
              <div
                className="nav-helper-sub"
                style={{
                  fontSize: "0.85vw", color: "rgba(255,255,255,0.55)",
                  fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em",
                }}
              >
                Click here to navigate and advance the slides ➔
              </div>
            </div>

            <div style={{ fontSize: "1vw", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
              مسار التلعيب
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
