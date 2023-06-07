import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

function Func() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        👋 Hi I&apos;m Karan!
      </div>
    ),
    {
      width: 200,
      height: 100,
    },
  );
}

export default Func;