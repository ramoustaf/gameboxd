"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <Link className="nav-link" href="/">
        <p className="page-title">Gameboxd</p>
      </Link>

      <ul className={`nav-elements ${open ? "open" : ""}`}>
        <li className="nav-item"><Link className = "nav-link" href = "/"><p>Sign In</p></Link></li>
        <li className="nav-item"><Link className = "nav-link" href = "/"><p>Create Account</p></Link></li>
        <li className="nav-item"><Link className = "nav-link" href = "/about"><p>About</p></Link></li>
        <li className="nav-item"><Link className = "nav-link" href = "/"><p>Games</p></Link></li>
      </ul>

      <button
        className="menu-bar"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <Image
          src="/images/menu-bar.png"
          alt="Menu"
          width={28}
          height={28}
        />
      </button>
    </nav>
  );
}
