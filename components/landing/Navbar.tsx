"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import "../../styles/landing/navbar.css";

export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  /* =========================
     CHECK LOGIN STATE
  ========================= */

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

  }, []);

  /* =========================
     LOGIN / LOGOUT
  ========================= */

  const handleAuth = async () => {

    /* LOGOUT */

    if (isLoggedIn) {

      localStorage.removeItem("token");

      setIsLoggedIn(false);

      alert("Logged out");

      return;
    }

    /* LOGIN */

    try {

      setLoading(true);

      const response = await fetch(
        "https://dummyjson.com/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            username: "emilys",

            password: "emilyspass",

            expiresInMins: 30,
          }),

          credentials: "include",
        }
      );

      /* EXCEPTION HANDLING */

      if (!response.ok) {

        throw new Error(
          "Authentication Failed"
        );
      }

      const data =
        await response.json();

      console.log(
        "Authenticated User:",
        data
      );

      /* CACHE TOKEN */

      localStorage.setItem(
        "token",
        data.accessToken
      );

      /* SUCCESS */

      setIsLoggedIn(true);

      alert("Login Successful");

    } catch (error: any) {

      console.error(error);

      alert(
        error?.message ||
          "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="navbar">
      <div className="container nav-inner">

        <h1 className="logo">
          Estimator Pro
        </h1>

        <div className="nav-links">

          <Link href="/">
            Landing
          </Link>

          <Link href="/features">
            Project Type
          </Link>

          <Link href="/#features">
            Features
          </Link>

          <Link href="/platform1">
            Platform
          </Link>

          <Link href="/summary">
            Summary
          </Link>

        </div>

        <div className="nav-actions">

          <button
            className="login"
            onClick={handleAuth}
            disabled={loading}
          >
            {loading
              ? "Loading..."
              : isLoggedIn
              ? "Logout"
              : "Log in"}
          </button>

          <button className="save">
            Save Estimate
          </button>

        </div>
      </div>
    </div>
  );
}