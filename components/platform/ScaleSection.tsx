import "@/styles/platform/scale.css";

export default function ScaleSection() {
  return (
    <div className="scale-box">
      <h4>PROJECT COMPLEXITY SCALE</h4>

      {/* SCALE OPTIONS */}

      <div className="scale-options">
        <div className="scale active">
          <span>MVP</span>
        </div>

        <div className="scale active">
          <span>MEDIUM</span>
        </div>

        <div className="scale disabled">
          <span>LARGE</span>
        </div>
      </div>

      {/* DESCRIPTION */}

      <div className="scale-desc">
        <h3>Medium (Scale-up Ready)</h3>

        <p>
          Standard robust architecture with scalable
          database design, multiple user roles, and
          integrated analytics pipelines.
        </p>
      </div>

      {/* META */}

      <div className="meta">
        <div className="meta-item">
          <div className="meta-top">
            <span>ANTICIPATED MONTHLY USERS</span>

            <b>50,000 Users</b>
          </div>

          <div className="meta-bar"></div>
        </div>

        <div className="meta-item blue">
          <div className="meta-top">
            <span>TRAFFIC VOLATILITY</span>

            <b>High Burst</b>
          </div>

          <div className="meta-bar"></div>
        </div>
      </div>
    </div>
  );
}