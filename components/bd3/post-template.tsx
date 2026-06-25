import React from "react";
import { Upload } from "lucide-react";
import type { BirthdayPostData3 } from "./types";

/**
 * Scales name font size down as the name gets longer.
 * Tuned for a 1080px-wide card with letterSpacing 0.18em.
 *
 * ≤ 10 chars  → 62px  (short names, full impact)
 * 11–14 chars → 54px
 * 15–18 chars → 46px
 * 19–22 chars → 38px
 * 23–26 chars → 32px
 * > 26 chars  → 26px  (very long, still fits one line)
 */
function getNameFontSize(name: string): number {
  const len = name.trim().length;
  if (len <= 10) return 62;
  if (len <= 14) return 54;
  if (len <= 18) return 46;
  if (len <= 22) return 38;
  if (len <= 26) return 32;
  return 26;
}

/** Splits "9th Batch" → ["9", "th", " Batch"] so we can superscript the suffix */
function formatBatchWithSup(batch: string): React.ReactNode {
  // Match a number followed by an ordinal suffix (st/nd/rd/th), case-insensitive
  const match = batch.match(/^(\d+)(st|nd|rd|th)(.*)$/i);
  if (!match) return batch;
  const [, num, suffix, rest] = match;
  return (
    <>
      {num}
      <sup
        style={{
          fontSize: "0.52em",
          fontWeight: 500,
          verticalAlign: "super",
          letterSpacing: "0.05em",
          opacity: 0.85,
        }}
      >
        {suffix}
      </sup>
      {rest}
    </>
  );
}

export const PostTemplate3 = React.forwardRef<
  HTMLDivElement,
  { data: BirthdayPostData3; edit?: boolean }
>(({ data, edit }, ref) => {
  const { name, batch, faculty, university, profileImage, message, template, access } = data;
  const noAccess = edit && !access;

  return (
    <div
      ref={ref}
      style={{
        width: "1080px",
        height: "1350px",
        backgroundImage: template.background,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* ── Access Overlay ── */}
      {noAccess && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.65)",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 42,
            fontWeight: 700,
            textAlign: "center",
            gap: 16,
            padding: 40,
          }}
        >
          <span>🔒 Access Required</span>
          <p
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
            }}
          >
            Enter your access key to generate the post.
          </p>
        </div>
      )}

      {/* ── Full overlay darkening layer ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── HAPPY BIRTHDAY title image ── */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
          width: 820*1.4,
          height: 220*1.4,
          backgroundImage: "url('/bd3/happy birthday.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          zIndex: 5,
          filter: "drop-shadow(0 4px 32px rgba(0,0,0,0.6))",
        }}
      />

      {/* ── Profile photo section ── */}
      <div
        style={{
          position: "absolute",
          top: 350,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer glow ring */}
        <div
          style={{
            position: "absolute",
            width: 440,
            height: 440,
            borderRadius: "50%",
            // boxShadow: `0 0 80px 20px ${template.accentGlow}`,
            zIndex: 8,
          }}
        />
        {/* Ellipse decorative image — outline ring */}
        <div
          style={{
            position: "absolute",
            width: 720,
            height: 540,
            backgroundImage: "url('/bd3/outline.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            zIndex: 7,
          }}
        />
        {/* Frosted ring border */}
        <div
          style={{
            width: 400,
            height: 400,
            // borderRadius: "50%",
            // border: `3px solid ${template.accentColor}`,
            padding: 10,
            // background: "rgba(255,255,255,0.06)",
            // backdropFilter: "blur(4px)",
            // boxShadow: `0 8px 40px ${template.accentGlow}, inset 0 0 20px rgba(255,255,255,0.04)`,
            zIndex: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {profileImage ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundImage: `url(${profileImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              <Upload width={72} height={72} />
            </div>
          )}
        </div>
      </div>

      {/* ── Name + Message card ── */}
      <div
        style={{
          position: "absolute",
          top: 800,
          left: 0,
          width: "100%",
          zIndex: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          padding: "0 60px",
          boxSizing: "border-box",
        }}
      >
        {/* Accent divider line */}
        <div
          style={{
            width: 80,
            height: 3,
            borderRadius: 4,
            background: template.accentColor,
            boxShadow: `0 0 12px ${template.accentGlow}`,
          }}
        />

        {/* Name */}
        <h2
          style={{
            margin: 0,
            padding: 0,
            fontSize: getNameFontSize(name),
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "rgba(255,255,255,0.92)",
            textShadow: `0 2px 24px rgba(0,0,0,0.5), 0 0 60px ${template.accentGlow}`,
            maxWidth: 960,
            wordBreak: "break-word",
          }}
        >
          {name || "YOUR NAME"}
        </h2>
{/* Separator image */}
          <div
            style={{
              width: 600,
              height: 32,
              backgroundImage: "url('/bd3/saparater.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              marginBottom: -10,
              opacity: 0.85,
            }}
          />
        {/* Message */}
        <p
          style={{
            margin: 0,
            padding: 0,
            fontSize: 26,
            fontWeight: 400,
            lineHeight: 1.75,
            letterSpacing: "0.04em",
            textAlign: "center",
            color: "rgba(255,255,255,0.88)",
            textShadow: "0 1px 12px rgba(0,0,0,0.6)",
            maxWidth: 860,
            whiteSpace: "pre-line",
          }}
        >
          {message ||
            "Wishing you a day full of love, laughter, and unforgettable memories. ✨\nMay this year bring you new opportunities and the courage to chase every dream. 💛"}
        </p>
      </div>

      {/* ── Batch / Faculty / University footer ── */}
      {batch && (
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 0,
            width: "100%",
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          

          <p
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 600,
              color: template.accentColor,
              letterSpacing: "0.22em",
              textAlign: "center",
              textShadow: `0 0 16px ${template.accentGlow}`,
              lineHeight: 1.4,
            }}
          >
            ── {formatBatchWithSup(batch)} ──
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.18em",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {faculty}
          </p>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 22,
              fontWeight: 300,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {university}
          </p>

         
        </div>
      )}
    </div>
  );
});

PostTemplate3.displayName = "PostTemplate3";
