"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    setMessage("Creating your account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Account created! Check your email to confirm your account."
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#08000f",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSignup}
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#13001f",
          padding: "30px",
          borderRadius: "18px",
          border: "1px solid #3b1452",
        }}
      >
        <h1
          style={{
            color: "#c84cff",
            textAlign: "center",
          }}
        >
          XTREME MARKET
        </h1>

        <h2 style={{ textAlign: "center" }}>
          Create Account
        </h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            marginTop: "15px",
            background: "#08000f",
            color: "white",
            border: "1px solid #54206e",
            borderRadius: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            marginTop: "15px",
            background: "#08000f",
            color: "white",
            border: "1px solid #54206e",
            borderRadius: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "14px",
            background: "#c84cff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          CREATE ACCOUNT
        </button>

        {message && (
          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#d9c7e5",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </main>
  );
}