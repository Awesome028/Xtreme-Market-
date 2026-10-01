"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SellPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("Posting product...");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Please login before posting a product.");
      return;
    }

    const { error } = await supabase.from("products").insert({
      seller_id: user.id,
      title,
      description,
      price: Number(price),
      category,
      location,
      image_url: imageUrl,
    });

    if (error) {
      console.error(error);
      setMessage(error.message);
      return;
    }

    setMessage("Product posted successfully! 🎉");

    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setLocation("");
    setImageUrl("");
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
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          background: "#13001f",
          border: "1px solid #3b1452",
          borderRadius: "18px",
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "#c84cff",
            textAlign: "center",
          }}
        >
          SELL ON XTREME MARKET
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#b8a9c4",
          }}
        >
          Create a product listing
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
          />

          <textarea
            placeholder="Product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="5"
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Price (₦)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
            style={inputStyle}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Computers">Computers</option>
            <option value="Gaming">Gaming</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="url"
            placeholder="Product image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              background: "#c84cff",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            POST PRODUCT
          </button>
        </form>

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
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px",
  marginTop: "15px",
  background: "#08000f",
  color: "white",
  border: "1px solid #54206e",
  borderRadius: "10px",
};