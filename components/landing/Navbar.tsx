"use client";

import Link from "next/link";

import "../../styles/landing/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container nav-inner">
        <h1 className="logo">Estimator Pro</h1>

        <div className="nav-links">
          <Link href="/">Landing</Link>

          <Link href="/features">
            Project Type
          </Link>

          <Link href="/#features">
            Features
          </Link>

          <Link href="/platform1">Platform</Link>

          <Link href="/summary">Summary</Link>
        </div>

        <div className="nav-actions">
          <button className="login">Log in</button>

          <button className="save">
            Save Estimate
          </button>
        </div>
      </div>
    </div>
  );
}