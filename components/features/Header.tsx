import "../../styles/features/Header.css";

export default function Header() {
  return (
    <div className="header">
      {/* TOP ROW */}

      <div className="header-top">
        {/* LEFT SIDE */}

        <div className="header-left">
          <h1>Build your feature set</h1>

          <p>
            Select the core functionalities that define your
            application's scope.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div className="header-right">
          <span className="step">STEP 2 OF 5</span>

          <p className="step-text">Features Selection</p>
        </div>
      </div>

      {/* PROGRESS BAR BELOW EVERYTHING */}

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}