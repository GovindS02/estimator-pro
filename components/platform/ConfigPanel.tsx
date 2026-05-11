"use client";

export default function ConfigPanel() {
  return (
    <div className="config-box">
      <h4 className="config-title">
        Configuration Analysis
      </h4>

      <ul className="config-list">
        <li>
          <span className="dot"></span>

          <div>
            <b>Cloud Infrastructure</b>

            <p>AWS/GCP Auto-scaling enabled</p>
          </div>
        </li>

        <li>
          <span className="dot"></span>

          <div>
            <b>Data Redundancy</b>

            <p>Multi-region active-passive backup</p>
          </div>
        </li>
      </ul>

      <div className="note">
        <span>ARCHITECT'S NOTE</span>

        <p>
          Choosing a "Medium" scale for a Mobile
          platform suggests we should prioritize API
          efficiency and local caching mechanisms.
        </p>
      </div>

      <div className="image-box">
        {/* Precision Scaling for Future Growth */}
      </div>
    </div>
  );
}