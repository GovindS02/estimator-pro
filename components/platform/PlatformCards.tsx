"use client";

import { useState } from "react";
// import "@/styles/platform/platform1.css";

export default function PlatformCards() {
  const [selected, setSelected] = useState("mobile");

  const cards = [
    {
      id: "web",
      title: "Web App",
      desc: "Responsive browser-based experience with universal accessibility.",
    },
    {
      id: "mobile",
      title: "Mobile App",
      desc: "Native performance for iOS & Android with full hardware integration.",
    },
    {
      id: "cross",
      title: "Cross-Platform",
      desc: "Unified codebase for Web, iOS, and Android to maximize reach.",
    },
  ];

  return (
    <div className="platform-cards">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`platform-card ${
            selected === card.id ? "active" : ""
          }`}
          onClick={() => setSelected(card.id)}
        >
          <div className="platform-icon">
            {card.id === "web" && "🌐"}
            {card.id === "mobile" && "📱"}
            {card.id === "cross" && "📊"}
          </div>

          <h3>{card.title}</h3>
          <p>{card.desc}</p>

          <div className="platform-status">
            {selected === card.id ? (
              <span className="active-text">✔ ACTIVE SELECTION</span>
            ) : (
              <span className="inactive-text">○ SELECT OPTION</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}