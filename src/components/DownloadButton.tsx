"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

interface ButtonProp {
  theme?: string;
  mounted: boolean;
}

function DownloadButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/karanjeswani_resume.pdf";
    link.download = "karanjeswani_resume.pdf";
    link.click();
  };
  let color;
  if (!mounted) {
    color = "#00000000";
  } else {
    if (currentTheme === "light") {
      color = "black";
    } else if (currentTheme === "dark") {
      color = "white";
    }
  }
  return (
    <button className="flex" onClick={handleDownload}>
      <div className="pr-2">CV</div>
      <AiOutlineDownload size={25} color={color} />
    </button>
  );
}

export default DownloadButton;
