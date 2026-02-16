import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#3B0D18",
          border: "4px solid #C9A35D",
          color: "#F5F1EA",
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 40,
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
