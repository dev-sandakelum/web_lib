import React from "react";
import { Upload } from "lucide-react";
import type { BirthdayPostData } from "@/components/birthday-post";

export const BirthdayPostTemplate = React.forwardRef<
  HTMLDivElement,
  { data: BirthdayPostData , edit?:Boolean  }
>(({ data, edit  }, ref) => {
  const { name, batch, faculty, university, profileImage, message, template , access} =
    data;
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{
        width: "1080px",
        height: "1350px",
        position: "absolute",
        left: 0,
        top: 0,
        overflow: "hidden",
        display: noAccess ?   "flex":"none",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 30,
        color: "#fff",
        fontSize: "48px",
        fontWeight: "bold",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
      }}>
        <h1>YOU DON'T HAVE ACCESS</h1>
        <p>Please enter your access key to proceed.</p>

      </div>
      {/* Happy Birthday Title */}
      <div
        style={{
          /* Happy Birthday */
          position: "absolute",
          width: "780px",
          height: "224px",
          top: "128px",
          /* identical to box height */
          backgroundImage: "url(/bd/text/HappyBirthday.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>

      {/* Profile Photo Container */}
      <div
        style={{
          width: "705.79px",
          height: "528.64px",
          zIndex: 20,
          display: "flex",
          justifyContent: "center",
          // border: access ? "none" : "2px solid blue",
          alignItems: "center",
        }}
      >
        <div
          style={{
            /* Ellipse 2 */
            position: "absolute",
            width: "380px",
            height: "380px",
            left: "calc(50% - 190px)",
            top: "calc(50% - 334px)",
            backgroundImage: profileImage ? `url(${profileImage})` : "none",
            backgroundColor: profileImage ? "transparent" : "transparent",
            border: profileImage ? "none" : "2px solid blue",
            backgroundPosition: "center",
            backgroundSize: "125%",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            zIndex: 25,
          }}
        ></div>
        <div
          style={{
            /* Group 8 */
            position: "absolute",
            width: "705.79px",
            height: "528.64px",
            left: "168px",
            top: "282px",
            backgroundImage: "url(/bd/bg/Ellipse.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // border: access ? "none" : "2px solid blue",
            backgroundSize: "contain",
            zIndex: -1,
          }}
        ></div>
      </div>

      {/* Name and Message Card */}
      <div
        style={{
          /* Group 2 */
          position: "absolute",
          width: "1080px",
          left: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: edit ? "25px" :"18px",
          fontFamily: "url('/bd/KulimPark-Bold.ttf')",

          height: "295px",
          top: edit ? "782px" :"800px",
          // border: access ? "none" : "2px solid blue",
          zIndex: 15,
        }}
      >
        <h2
          style={{
            /* Tharindu Liyanage */
            // position: "absolute",
            width: "1080px",
            height: "72px",
            left: "0px",
            // top: "801px",
            // fontFamily: "'Kulim Park'",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "150%",
            /* identical to box height, or 72px */
            textAlign: "center",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            // border: access ? "none" : "2px solid blue",
            color: "#FFFFFF",
          }}
        >
          {name || "YOUR NAME"}
        </h2>

        <p
          style={{
            /* Wishing you a spectacular birthday! As you mark another milestone in your life today, take a moment to celebrate not just how far you have come, but the incredible person you are becoming. May this special day be filled with the warmth of love, the echo of laughter, and moments that turn into cherished memories. */
            // position: "absolute",
            width: "829px",
            height: "205px",
            // left: "calc(50% - 829px/2 - 0.5px)",
            // top: "891px",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "170%",
            /* or 41px */
            textAlign: "center",
            letterSpacing: "0.05em",
            color: "#FFFFFF",
          }}
        >
          {message ||
            "Happiest of birthdays to you!\nMay this year bring you as much joy and happiness as you bring to everyone around you."}
        </p>
      </div>

      {/* Batch Badge */}
      {batch && (
        <>
        <div
          style={{
            /* Group 5 */
            position: "absolute",
            width: "auto",
            height: "159px",

            border: access ? "none" : "2px solid blue",
            top: edit ? "1140px" :"1152px"  ,
            display: "flex",
            flexDirection: "column",
          fontFamily: "url('/bd/KulimPark-Bold.ttf')",
            alignItems: "center",
          }}
        >
          <p
            style={{
              /* -- 9th Batch -- */
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "150%",
              /* identical to box height, or 36px */
              textAlign: "center",
              letterSpacing: "0.2em",
              color: "#FFFFFF",
            }}
          >
            -- {batch} --
          </p>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "150%",
              /* identical to box height, or 36px */
              textAlign: "center",
              letterSpacing: "0.2em",
              color: "#FFFFFF",
            }}
          >
            {faculty}
          </p>
          
          <p
            style={{
              /* Faculty Of Technology UNIVERSITY OF RUHUNA */
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "250%",
              /* or 60px */
              textAlign: "center",
              paddingLeft:"18px",
              letterSpacing: "18px",
              border: access ? "none" : "2px solid blue",
              color: "#FFFFFF",
              marginTop: "10px",
              textTransform: "uppercase",
              // transform: "translateY(-64px)",
            }}
          >
            {university}
          </p>
        </div>
        <div
            style={{
              /* Faculty Of Technology UNIVERSITY OF RUHUNA */
              position: "absolute",
              bottom:"60px",
              fontStyle: "normal",
              minHeight: "54px",
              width: "622px",
              boxSizing: "border-box",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "250%",
              /* or 60px */
              textAlign: "center",
              letterSpacing: "0.75em",
              color: "#FFFFFF",
              marginTop: "10px",
              textTransform: "uppercase",
              borderTop: "1px solid #fff",
              borderBottom: "1px solid #fff",
            }}
          ></div>
        </>
      )}
    </div>
  );
});

BirthdayPostTemplate.displayName = "BirthdayPostTemplate";
