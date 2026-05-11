import "@/styles/estimate/header.css";

export default function Header() {
  return (
    <div className="header">
      {/* TOP STEP SECTION */}

      <div className="step-wrapper">
        <div className="step-left">STEP 01 / 05</div>

        <div className="step-right">Project Architecture</div>
      </div>

      {/* PROGRESS BAR */}

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      {/* HERO CONTENT */}

      <div className="hero-content">
        <h1>What are we building?</h1>

        <p>
          Select the blueprint that best matches your vision.
          This helps our architect calibrate the baseline
          components and logic required.
        </p>
      </div>
    </div>
  );
}