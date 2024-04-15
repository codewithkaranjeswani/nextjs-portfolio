"use client";
import { AiOutlineDownload } from "react-icons/ai";

export default function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/karanjeswani_resume.pdf";
    link.download = "karanjeswani_resume.pdf";
    link.click();
  };
  return (
    <button className="flex" onClick={handleDownload}>
      <div className="pr-2">CV</div>
      <AiOutlineDownload size={25} />
    </button>
  );
}
