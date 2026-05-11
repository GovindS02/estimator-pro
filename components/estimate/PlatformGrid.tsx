"use client";

import { useState } from "react";

import "@/styles/estimate/grid.css";

export default function PlatformGrid() {
  const [selected, setSelected] = useState("Ecommerce Platform");

  const options = [
    {
      title: "Ecommerce Platform",
      desc: "Robust storefronts, payments, and management.",
    },
    {
      title: "SaaS Product",
      desc: "Multi-tenant architecture and dashboards.",
    },
    {
      title: "Mobile App",
      desc: "Cross-platform apps with notifications.",
    },
    {
      title: "Marketplace",
      desc: "Buyers & sellers with messaging system.",
    },
    {
      title: "Custom Project",
      desc: "Unique workflows and enterprise systems.",
    },
  ];

  return (
    <div className="platform-wrapper">
      <div className="platform-grid">
        {options.map(({ title, desc }) => (
          <div
            key={title}
            className={`platform-card ${
              selected === title ? "active" : ""
            }`}
            onClick={() => setSelected(title)}
          >
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="info-box">
        <span className="info-icon">ⓘ</span>&nbsp;
        Choosing a blueprint sets up ~60% of common modules automatically.
      </div>
    </div>
  );
}