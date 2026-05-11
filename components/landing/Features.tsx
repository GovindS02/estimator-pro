import "../../styles/landing/features.css";

export default function Features() {
  return (
    <div id="features" className="features">
      <div className="container">
        <div className="card">
          <h2>01</h2>
          <h3>Feature Mapping</h3>

          <p>
            Break down complex user stories into modules.
          </p>
        </div>

        <div className="card">
          <h2>02</h2>
          <h3>Cloud Architecting</h3>

          <p>
            Visualize infrastructure and hosting cost.
          </p>
        </div>

        <div className="card">
          <h2>03</h2>
          <h3>Budget Precision</h3>

          <p>Accurate financial estimates.</p>
        </div>
      </div>
    </div>
  );
}