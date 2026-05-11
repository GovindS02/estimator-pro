"use client";

import { useState } from "react";

import {
  ChevronDown,
  User,
  Briefcase,
  Brain,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

import "../../styles/features/Section.css";

export default function FeatureSection({
  title,
}: {
  title: string;
}) {
  /* ---------------- USER FEATURES ---------------- */

  const [userSelections, setUserSelections] = useState([
    "Secure Login",
    "User Profile",
  ]);

  /* ---------------- BUSINESS FEATURES ---------------- */

  const [businessSelections, setBusinessSelections] = useState<string[]>([]);

  /* ---------------- ADVANCED FEATURES ---------------- */

  const [advancedSelections, setAdvancedSelections] = useState<string[]>([]);

  const toggleSelection = (
    item: string,
    section: "user" | "business" | "advanced"
  ) => {
    if (section === "user") {
      setUserSelections((prev) =>
        prev.includes(item)
          ? prev.filter((x) => x !== item)
          : [...prev, item]
      );
    }

    if (section === "business") {
      setBusinessSelections((prev) =>
        prev.includes(item)
          ? prev.filter((x) => x !== item)
          : [...prev, item]
      );
    }

    if (section === "advanced") {
      setAdvancedSelections((prev) =>
        prev.includes(item)
          ? prev.filter((x) => x !== item)
          : [...prev, item]
      );
    }
  };

  return (
    <div className="section">
      {/* HEADER */}

      <div className="sectionHeader">
        <h3>
          {title === "User Features" && <User size={18} />}

          {title === "Business Features" && (
            <Briefcase size={18} />
          )}

          {title === "Advanced Features" && (
            <Brain size={18} />
          )}

          {title}
        </h3>

        <div className="section-arrow">
          <ChevronDown size={18} />
        </div>
      </div>

      {/* USER FEATURES */}

      {title === "User Features" && (
        <div className="grid">
          <FeatureCard
            title="Secure Login"
            description="Email & Social OAuth"
            selected={userSelections.includes("Secure Login")}
            onClick={() =>
              toggleSelection("Secure Login", "user")
            }
          />

          <FeatureCard
            title="User Profile"
            description="Avatar & Personal Details"
            selected={userSelections.includes("User Profile")}
            onClick={() =>
              toggleSelection("User Profile", "user")
            }
          />

          <FeatureCard
            title="Push Notifications"
            description="Real-time alerts & updates"
            selected={userSelections.includes("Push Notifications")}
            onClick={() =>
              toggleSelection("Push Notifications", "user")
            }
          />
        </div>
      )}

      {/* BUSINESS FEATURES */}

      {title === "Business Features" && (
        <div className="grid">
          <FeatureCard
            title="Payments Integration"
            description="Stripe / PayPal checkout"
            selected={businessSelections.includes(
              "Payments Integration"
            )}
            onClick={() =>
              toggleSelection(
                "Payments Integration",
                "business"
              )
            }
          />

          <FeatureCard
            title="Admin Panel"
            description="Content & user management"
            selected={businessSelections.includes("Admin Panel")}
            onClick={() =>
              toggleSelection("Admin Panel", "business")
            }
          />

          <FeatureCard
            title="Advanced Analytics"
            description="Usage stats & dashboards"
            selected={businessSelections.includes(
              "Advanced Analytics"
            )}
            onClick={() =>
              toggleSelection(
                "Advanced Analytics",
                "business"
              )
            }
          />
        </div>
      )}

      {/* ADVANCED FEATURES */}

      {title === "Advanced Features" && (
        <div className="grid">
          <FeatureCard
            title="AI Engine"
            description="LLM integration & automation"
            selected={advancedSelections.includes("AI Engine")}
            onClick={() =>
              toggleSelection("AI Engine", "advanced")
            }
          />

          <FeatureCard
            title="Real-time Chat"
            description="Websocket messaging system"
            selected={advancedSelections.includes(
              "Real-time Chat"
            )}
            onClick={() =>
              toggleSelection(
                "Real-time Chat",
                "advanced"
              )
            }
          />

          <FeatureCard
            title="API Integrations"
            description="Connect 3rd party services"
            selected={advancedSelections.includes(
              "API Integrations"
            )}
            onClick={() =>
              toggleSelection(
                "API Integrations",
                "advanced"
              )
            }
          />
        </div>
      )}
    </div>
  );
}