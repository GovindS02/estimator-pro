import "@/styles/summary/features.css";

export default function FeaturesList() {
  return (
    <div className="features">
      {/* HEADER */}

      <div className="features-header">
        <span>INCLUDED FEATURES</span>

        <button className="edit-btn">
          ✎ Edit Selections
        </button>
      </div>

      {/* GRID */}

      <div className="features-grid">
        {/* LEFT COLUMN */}

        <div className="feature-column">
          <div className="feature-item">
            <div className="feature-icon">✓</div>

            <div className="feature-content">
              <h4>User Authentication</h4>

              <p>Social & Magic Link Login</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>

            <div className="feature-content">
              <h4>Stripe Integration</h4>

              <p>
                One-time & Recurring payments
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>

            <div className="feature-content">
              <h4>Responsive UI</h4>

              <p>Mobile-first approach</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}

        <div className="feature-column">
          <div className="feature-item">
            <div className="feature-icon">✓</div>

            <div className="feature-content">
              <h4>Real-time Notifications</h4>

              <p>Web & Email triggers</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>

            <div className="feature-content">
              <h4>Search & Filters</h4>

              <p>Advanced elastic search</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>

            <div className="feature-content">
              <h4>Cloud Hosting</h4>

              <p>AWS / Vercel auto-scaling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}