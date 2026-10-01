"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ExplorePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    }

    loadProducts();
  }, []);

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
          maxWidth: "1100px",
          margin: "0 auto",
          paddingBottom: "20px",
          borderBottom: "1px solid #2d1240",
        }}
      >
        <h1 style={{ color: "#c84cff" }}>
          XTREME MARKET
        </h1>

        <p style={{ color: "#b8a9c4" }}>
          Explore products from sellers on Xtreme Market
        </p>
      </header>

      <section
        style={{
          maxWidth: "1100px",
          margin: "30px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <button
            style={{
              background: "#c84cff",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
            }}
          >
            All Products
          </button>

          <button
            style={{
              background: "#13001f",
              color: "white",
              border: "1px solid #3b1452",
              padding: "12px 20px",
              borderRadius: "10px",
            }}
          >
            Electronics
          </button>

          <button
            style={{
              background: "#13001f",
              color: "white",
              border: "1px solid #3b1452",
              padding: "12px 20px",
              borderRadius: "10px",
            }}
          >
            Fashion
          </button>

          <button
            style={{
              background: "#13001f",
              color: "white",
              border: "1px solid #3b1452",
              padding: "12px 20px",
              borderRadius: "10px",
            }}
          >
            Vehicles
          </button>
        </div>

        {loading ? (
          <h2>Loading products...</h2>
        ) : products.length === 0 ? (
          <div
            style={{
              background: "#13001f",
              border: "1px solid #3b1452",
              borderRadius: "15px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h2>No products yet</h2>

            <p style={{ color: "#b8a9c4" }}>
              Products posted by sellers will appear here.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "#13001f",
                  border: "1px solid #3b1452",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                {product.image_url && (
                  <img
                    src={product.image_url}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}

                <div style={{ padding: "18px" }}>
                  <h2>{product.title}</h2>

                  <p style={{ color: "#c84cff" }}>
                    ₦{Number(product.price).toLocaleString()}
                  </p>

                  <p style={{ color: "#b8a9c4" }}>
                    {product.category}
                  </p>

                  <p style={{ color: "#806d8e" }}>
                    📍 {product.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}