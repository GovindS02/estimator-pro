import "@/styles/features/EstimatePanel.css";

export default function EstimatePanel() {
  return (
    <div className="panel-wrapper">
      {/* SUMMARY PANEL */}

      <div className="panel">
        {/* HEADER */}

        <div className="panel-header">
          <h3>Estimate Summary</h3>

          <div className="live">LIVE UPDATE</div>
        </div>

        {/* SELECTED FEATURES */}

        <div className="selected-row">
          <div className="selected">SELECTED FEATURES</div>

          <div className="count">2</div>
        </div>

        {/* THIN LINE */}

        <div className="divider" />

        {/* CURRENT SELECTION */}

        <div className="selected current-selection">
          CURRENT SELECTION
        </div>

        {/* LIST */}

        <div className="list">
          <div>
            <span>Secure Login</span>
            <span>$1200</span>
          </div>

          <div>
            <span>User Profile</span>
            <span>$850</span>
          </div>
        </div>

        {/* TOTAL */}

        <div className="total">
          <p>ESTIMATED BASE COST</p>

          <h1>$2,050</h1>
        </div>

        {/* INFO */}

        <div className="info">
          <span className="info-icon">ⓘ</span>

          <span>
            Prices are estimated based on standard
            architectural complexity. Final totals may vary
            after platform selection.
          </span>
        </div>
      </div>

      {/* CONSULT PANEL */}

      <div className="consult">
        <h4>Expert Review Available</h4>

        <button>Get 1:1 Consultation</button>
      </div>
    </div>
  );
}