import Link from "next/link";

import "../../styles/landing/hero.css";

export default function Hero() {
  return (
    <div id="landing" className="hero">
      <div className="container hero-inner">
        <p className="tag">
          ● PROFESSIONAL ESTIMATION ENGINE
        </p>

        <h1 className="title">
          Estimate Your Software Project{" "}
          <span>in Minutes</span>
        </h1>

        <p className="desc">
          Understand features, architecture, and cost
          before you start building. Stop guessing and
          start planning with data-backed accuracy.
        </p>

        <div className="buttons">
          <Link href="/platform" className="primary">
            Start Estimation
          </Link>

          <button className="secondary">
            View Sample Report
          </button>
        </div>
      </div>
    </div>
  );
}