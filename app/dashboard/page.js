"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#08000f",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>Loading Xtreme Market...</h2>
      </main>
    );
  }

  if (!user) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#08000f",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ color: "#c84cff" }}>
            XTREME MARKET
          </h1>

          <h2>You are not logged in.</h2>

          <a
            href="/login"
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "12px 22px",
              background: "#c84cff",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            LOGIN
          </a>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#08000f",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #2d1240",
          paddingBottom: "20px",
        }}
      >
        <h2 style={{ color: "#c84cff", margin: 0 }}>
          XTREME MARKET
        </h2>

        <button
          onClick={async () => {
            await supabase.auth.signOut();
            window.location.href = "/";
          }}
          style={{
            background: "transparent",
            color: "white",
            border: "1px solid #c84cff",
            padding: "10px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </header>

      <section
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
        }}
      >
        <p style={{ color: "#c84cff" }}>
          WELCOME BACK 👋
        </p>

        <h1>My Dashboard</h1>

        <div
          style={{
            marginTop: "25px",
            padding: "25px",
            background: "#13001f",
            border: "1px solid #3b1452",
            borderRadius: "15px",
          }}
        >
          <h2>Account</h2>

          <p style={{ color: "#b8a9c4" }}>
            Email
          </p>

          <p>{user.email}</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "15px",
            marginTop: "25px",
          }}
        >
          {[
            "🛍️ My Products",
            "❤️ Wishlist",
            "👥 Following",
            "💬 Messages",
            "🔔 Notifications",
            "👤 My Profile",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#13001f",
                border: "1px solid #3b1452",
                borderRadius: "12px",
                padding: "25px 15px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}