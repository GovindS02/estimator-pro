import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

import SummaryHeader from "@/components/summary/SummaryHeader";
import InvestmentCard from "@/components/summary/InvestmentCard";
import Architecture from "@/components/summary/Architecture";
import Features from "@/components/summary/FeaturesList";
import ProposalForm from "@/components/summary/ProposalForm";
import ExpertReview from "@/components/summary/ExpertReview";

/* ONLY GLOBAL CSS */
import "./summary.css";

export default function SummaryPage() {
  return (
    <div className="summary-page">
      <Navbar />

      <main className="summary-container">

        <SummaryHeader />

        <section className="summary-top">
          <InvestmentCard />
          <Architecture />
        </section>

        <section className="summary-bottom">
          <Features />
          <ProposalForm />
        </section>

        <section className="expert-section">
          <ExpertReview />
        </section>

      </main>

      <Footer />
    </div>
  );
}