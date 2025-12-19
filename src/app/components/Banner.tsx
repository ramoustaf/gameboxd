"use client";

import { useEffect, useState } from "react";

export default function BannerHeader() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        requestAnimationFrame(() => {
            setShrink(window.scrollY > 50);
        });
        };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`banner-header ${shrink ? "shrink" : ""}`} />
  );
}
