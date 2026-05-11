"use client";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

import PlatformCards from "@/components/platform/PlatformCards";
import ScaleSection from "@/components/platform/ScaleSection";
import ConfigPanel from "@/components/platform/ConfigPanel";
import BottomBarStep3 from "@/components/platform/BottomBarStep3";

import "./platform1.css";

export default function PlatformPage() {
  return (
    <>
      <Navbar />

      <div className="container-platform1">

        {/* ================= HEADER (STEP 3) ================= */}
        <div className="step3-header">

          <div className="step3-top">
            <div>
              <span className="step3-badge">
                STEP 03 — INFRASTRUCTURE
              </span>

              <h1 className="step3-title">
                Defining your <span>Platform & Scale</span>
              </h1>
            </div>

            <div className="step3-price">
              <p>ESTIMATED PHASE COST</p>
              <h3>$12,400 – $18,900</h3>
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="step3-progress">
            <div className="step3-progress-fill"></div>
          </div>

          {/* STEP LABELS */}
          <div className="step3-steps">
            <span>01 CONCEPT</span>
            <span>02 FEATURES</span>
            <span className="active">03 PLATFORM</span>
            <span>04 SUMMARY</span>
          </div>

        </div>

        {/* ================= PLATFORM CARDS ================= */}
        <PlatformCards />

        {/* ================= MAIN GRID ================= */}
        <div className="ps-main-grid">
          <ScaleSection />
          <ConfigPanel />
        </div>

        {/* ================= BOTTOM ================= */}
        <BottomBarStep3 />

      </div>

      <Footer />
    </>
  );
}