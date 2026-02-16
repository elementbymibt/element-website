import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#3B0D18",
          border: "10px solid #C9A35D",
          color: "#F5F1EA",
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 108,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        E
      </div>
    ),
    {
      ...size,
    },
  );
}
