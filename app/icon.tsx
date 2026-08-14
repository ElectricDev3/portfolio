import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0e11",
          border: "2px solid #ffb454",
          borderRadius: 14,
          color: "#ffb454",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        ~/
      </div>
    ),
    { ...size }
  );
}
