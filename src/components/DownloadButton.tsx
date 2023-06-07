import React from "react";
import { AiOutlineDownload } from "react-icons/ai"

interface ButtonProp {
  theme?: string,
  mounted: boolean
}

function DownloadButton({ theme, mounted }: ButtonProp) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/karanjeswani_resume.pdf";
    link.download = "karanjeswani_resume.pdf";
    link.click();
  };
  let color;
  if (!mounted) {
    color = "#00000000"
  } else {
    if (theme === "light") {
      color = "black";
    } else if (theme === "dark") {
      color = "white";
    }
  }
  return (
    <button className="flex" onClick={handleDownload}>
      <div className="pr-2">
        CV
      </div>
      <AiOutlineDownload size={25} color={color} />
    </button>
  );
};

export default DownloadButton;