export default function Slide10Challenges() {
  const headerGrad = "linear-gradient(135deg, #0057A8 0%, #0099D8 100%)";

  const card = {
    wrapper: {
      background: "#10355A",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      overflow: "hidden",
    } as React.CSSProperties,
    numCol: (grad: string) => ({
      background: grad,
      width: "6vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    } as React.CSSProperties),
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ background: "#002447", fontFamily: "'Tajawal', sans-serif", color: "#FFFFFF" }}
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
          <h2 style={{ color: "#FFF", fontSize: "2.3vw", fontWeight: 800, margin: 0 }}>
            التحديات والخطط المستقبلية
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
            CHALLENGES & FUTURE PLANS
          </div>
        </div>
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "50%",
            width: "4vw",
            height: "4vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: "1.5vw",
            color: "#002447",
          }}
        >
          11
        </div>
      </div>

      {/* Content — two large cards centred vertically */}
      <div
        dir="rtl"
        style={{
          padding: "0 5vw",
          height: "78vh",
          display: "flex",
          flexDirection: "column",
          gap: "3.5vh",
          justifyContent: "center",
        }}
      >

        {/* Card 01 */}
        <div style={card.wrapper}>
          <div style={card.numCol("linear-gradient(180deg, #0057A8, #0099D8)")}>
            <span
              style={{
                fontSize: "1.8vw",
                fontWeight: 900,
                color: "#FFFFFF",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              01
            </span>
          </div>
          <div
            style={{
              padding: "3.5vh 3vw",
              flex: 1,
              display: "flex",
              gap: "3vw",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "1.6vw",
                  fontWeight: 800,
                  margin: "0 0 1.2vh 0",
                  color: "#FFFFFF",
                }}
              >
                متطلبات الامتثال والمراجعة من المنصة
              </h3>
              <p
                style={{
                  fontSize: "1.25vw",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                استخدام هوية العلامة التجارية الحقيقية يستوجب إبرام اتفاقية Brand Partnership
                رسمية معتمدة من روبلوكس قبل النشر العام.
              </p>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "2.2vh 2.2vw",
                minWidth: "24vw",
                flexShrink: 0,
                borderRight: "3px solid #FFFFFF",
              }}
            >
              <div
                style={{
                  fontSize: "0.9vw",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  marginBottom: "0.8vh",
                  letterSpacing: "0.1em",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                الحـل
              </div>
              <div style={{ fontSize: "1.2vw", color: "#FFFFFF", lineHeight: 1.7 }}>
                التقدم بطلب شراكة رسمي خلال مرحلة التوسع
              </div>
            </div>
          </div>
        </div>

        {/* Card 02 */}
        <div style={card.wrapper}>
          <div style={card.numCol("linear-gradient(180deg, #0099D8, #0057A8)")}>
            <span
              style={{
                fontSize: "1.8vw",
                fontWeight: 900,
                color: "#FFFFFF",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              02
            </span>
          </div>
          <div
            style={{
              padding: "3.5vh 3vw",
              flex: 1,
              display: "flex",
              gap: "3vw",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "1.6vw",
                  fontWeight: 800,
                  margin: "0 0 1.2vh 0",
                  color: "#FFFFFF",
                }}
              >
                تحدي التصنيف العمري المؤقت للمنصة (+16):
              </h3>
              <p
                style={{
                  fontSize: "1.2vw",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                نظراً لقوة ومتانة الأنظمة البرمجية ومحاكاة المعاملات المالية المتقدمة التي
                قمنا بتطويرها (مثل الـ Leaderstats)، قامت خوارزميات تصفية السكربتات برفع
                تصنيف اللعبة العمري مؤقتاً للمراجعة والتدقيق.
              </p>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "2.2vh 2.2vw",
                minWidth: "24vw",
                flexShrink: 0,
                borderRight: "3px solid #FFFFFF",
              }}
            >
              <div
                style={{
                  fontSize: "0.9vw",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  marginBottom: "0.8vh",
                  letterSpacing: "0.1em",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                الحـل
              </div>
              <div style={{ fontSize: "1.2vw", color: "#FFFFFF", lineHeight: 1.7 }}>
                جاري تعديل استبيان المحتوى (Content Rating Questionnaire) لإتاحتها رسمياً
                لكافة الفئات
              </div>
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
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#0099D8" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#FFFFFF" }} />
        </div>
      </div>
    </div>
  );
}
