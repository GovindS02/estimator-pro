import "@/styles/summary/header.css";

export default function SummaryHeader() {
  return (
    <div className="summary-header">
      <div className="progress-wrapper">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <span className="progress-label">
          STEP 4: FINAL SUMMARY
        </span>
      </div>

      {/* EXISTING CONTENT */}

      <h1>Project Blueprint & Estimation</h1>

      <p>
        Your configuration is complete. Below is a
        detailed breakdown of your technical
        architecture, estimated timeline, and
        investment range.
      </p>
    </div>
  );
}