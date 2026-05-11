"use client";

import "../../styles/features/FeatureCard.css";

type FeatureCardProps = {
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function FeatureCard({
  title,
  description,
  selected = false,
  onClick,
}: FeatureCardProps) {
  return (
    <div
      className={`feature-card ${selected ? "active" : ""}`}
      onClick={onClick}
    >
      {/* CHECKBOX */}

      <div className={`feature-checkbox ${selected ? "checked" : ""}`}>
        {selected && "✓"}
      </div>

      {/* CONTENT */}

      <div className="feature-content">
        <div className="feature-title">{title}</div>

        <div className="feature-desc">{description}</div>
      </div>
    </div>
  );
}