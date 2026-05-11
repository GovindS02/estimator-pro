"use client";

import Link from "next/link";

import "@/styles/estimate/bottom.css";

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <button className="back">Back</button>

      <Link href="/features" className="next">
        Continue to Features →
      </Link>
    </div>
  );
}