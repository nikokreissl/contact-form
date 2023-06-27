import { useState, useEffect } from "react";
import DesktopLogo from "../../assets/images/ottonova-desktop-logo.png";
import MobileLogo from "../../assets/images/ottonova-mobile-logo.png";
import "./header-bar.css";

export default function HeaderBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <img
        src={windowWidth < 1200 ? MobileLogo : DesktopLogo}
        alt="ottonova"
        height={24}
      />
    </nav>
  );
}
