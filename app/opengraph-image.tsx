import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pedro Cunha — Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#34d399",
          }}
        />
        <span
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Available for work
        </span>
      </div>

      <h1
        style={{
          fontSize: "72px",
          fontWeight: 700,
          color: "rgba(255,255,255,0.95)",
          lineHeight: 1.1,
          margin: "0 0 24px 0",
        }}
      >
        Pedro Cunha
      </h1>

      <p
        style={{
          fontSize: "28px",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.4,
          margin: 0,
          maxWidth: "700px",
        }}
      >
        Product Engineer building scalable, revenue-driven digital products.
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "40px",
        }}
      >
        {["React", "Next.js", "TypeScript", "Ruby on Rails"].map((skill) => (
          <span
            key={skill}
            style={{
              padding: "6px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
              fontSize: "14px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "80px",
          fontSize: "18px",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        pcunhadev.com
      </div>
    </div>,
    { ...size },
  );
}
