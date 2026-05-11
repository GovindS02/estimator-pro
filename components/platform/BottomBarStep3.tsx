"use client";

import Link from "next/link";

export default function BottomBarStep3() {
  return (
    <div className="ps-bottom">
      {/* LEFT */}

      <div className="left-actions">
        <Link href="/features" className="back">
          ← Back
        </Link>
      </div>

      {/* RIGHT */}

      <div className="right-actions">
        <Link href="/features" className="review">
          Review Previous Steps
        </Link>

        <Link href="/summary" className="next">
          Next Step: Feature Matrix →
        </Link>
      </div>
    </div>
  );
}