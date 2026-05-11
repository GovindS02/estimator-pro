"use client";

import "../../styles/summary/expert.css";

export default function ExpertReview() {
  return (
    <div className="expert">
      {/* LEFT SIDE */}

      <div className="expert-left">
        <h2>Expert Review</h2>

        <p>
          Our estimators have analyzed thousands of
          similar projects to provide this baseline.
          This project qualifies for our
          "Rapid-Launch" track, utilizing
          pre-architected modules for common services
          like auth and payments.
        </p>

        <div className="review-card">
          <div className="avatar">👨‍💻</div>

          <div>
            <strong>
              Reviewed by Marcus Chen
            </strong>

            <span>Lead Solutions Architect</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}

      <div className="expert-image">
        <img
          src="/images/review.png"
          alt="Expert Preview"
        />
      </div>
    </div>
  );
}