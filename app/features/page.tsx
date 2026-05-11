import Link from "next/link";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

import Header from "@/components/features/Header";
import FeatureSection from "@/components/features/Section";
import EstimatePanel from "@/components/features/EstimatePanel";

import "./feature.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="features-page container">
        <Header />

        <div className="features-layout">
          <div className="features-left">
            <FeatureSection title="User Features" />
            <FeatureSection title="Business Features" />
            <FeatureSection title="Advanced Features" />
          </div>

          <div className="features-right">
            <EstimatePanel />
          </div>
        </div>

        <div className="bottom-bar">
          <Link href="/platform" className="back">
            ← Back
          </Link>

          <Link href="/platform1" className="continue">
            Continue →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}