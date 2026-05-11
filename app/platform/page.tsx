"use client";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

import Header from "@/components/estimate/Header";
import PlatformGrid from "@/components/estimate/PlatformGrid";
import BottomBar from "@/components/estimate/BottomBar";

/* ✅ IMPORT ALL CSS HERE */
import "@/styles/estimate/global.css";
import "@/styles/estimate/header.css";
import "@/styles/estimate/grid.css";
import "@/styles/estimate/bottom.css";

export default function PlatformPage() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Header />
        <PlatformGrid />
        <BottomBar />
      </div>

      <Footer />
    </>
  );
}