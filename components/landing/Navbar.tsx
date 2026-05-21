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

  const [showModal, setShowModal] =
    useState(false);

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

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

      localStorage.removeItem("username");

      setIsLoggedIn(false);

      alert("Logged out");

      return;
    }

    /* OPEN LOGIN MODAL */

    setShowModal(true);
  };

  /* =========================
     SIGN IN
  ========================= */

  const handleSignIn = async () => {

    try {

      setLoading(true);

      /* VALIDATION */

      if (!username.trim()) {

        throw new Error(
          "Username required"
        );
      }

      if (!password.trim()) {

        throw new Error(
          "Password required"
        );
      }

      /* GENERATE TOKEN */

      const fakeToken =
        "token_" +
        Math.random()
          .toString(36)
          .substring(2);

      /* SAVE TOKEN */

      localStorage.setItem(
        "token",
        fakeToken
      );

      /* SAVE USER */

      localStorage.setItem(
        "username",
        username
      );

      console.log({
        username,
        token: fakeToken,
      });

      /* SUCCESS */

      setIsLoggedIn(true);

      setShowModal(false);

      setUsername("");

      setPassword("");

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
    <>
      <div className="navbar">

        <div className="container nav-inner">

          {/* LOGO */}

          <h1 className="logo">
            Estimator Pro
          </h1>

          {/* LINKS */}

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

          {/* ACTIONS */}

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

      {/* =========================
         LOGIN MODAL
      ========================= */}

      {showModal && (

        <div className="login-modal-overlay">

          <div className="login-modal">

            <h2>
              Sign In
            </h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button
              className="login-submit"
              onClick={handleSignIn}
              disabled={loading}
            >
              {loading
                ? "Signing In..."
                : "Sign In"}
            </button>

            <button
              className="close-modal"
              onClick={() =>
                setShowModal(false)
              }
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </>
  );
}