export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#08000f", color: "white", fontFamily: "Arial, sans-serif" }}>
      
      <header style={{
        padding: "20px",
        borderBottom: "1px solid #2d1240",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0, color: "#c84cff" }}>
          XTREME MARKET
        </h2>

        <button style={{
          background: "#c84cff",
          color: "white",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px"
        }}>
          Login
        </button>
      </header>

      <section style={{
        padding: "70px 20px",
        textAlign: "center",
        maxWidth: "900px",
        margin: "auto"
      }}>
        <p style={{ color: "#c84cff", fontWeight: "bold" }}>
          BUY • SELL • DISCOVER
        </p>

        <h1 style={{
          fontSize: "clamp(42px, 9vw, 80px)",
          margin: "15px 0",
          lineHeight: 1
        }}>
          EVERYTHING YOU WANT.
          <br />
          <span style={{ color: "#c84cff" }}>ONE MARKET.</span>
        </h1>

        <p style={{
          color: "#b8a9c4",
          fontSize: "18px",
          maxWidth: "600px",
          margin: "25px auto"
        }}>
          Discover products, connect with sellers and find amazing deals
          on Xtreme Market.
        </p>

        <div style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <button style={{
            background: "#c84cff",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold"
          }}>
            Explore Products
          </button>

          <button style={{
            background: "transparent",
            color: "white",
            border: "1px solid #c84cff",
            padding: "14px 24px",
            borderRadius: "10px",
            fontSize: "16px"
          }}>
            Become a Seller
          </button>
        </div>
      </section>

      <section style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "auto"
      }}>
        <h2>Popular Categories</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "15px"
        }}>
          {[
            "📱 Electronics",
            "👕 Fashion",
            "🏠 Home",
            "🚗 Vehicles",
            "💻 Computers",
            "🎮 Gaming"
          ].map((category) => (
            <div key={category} style={{
              padding: "25px 15px",
              background: "#13001f",
              border: "1px solid #2d1240",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              {category}
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        marginTop: "80px",
        padding: "30px 20px",
        textAlign: "center",
        borderTop: "1px solid #2d1240",
        color: "#806d8e"
      }}>
        © 2026 Xtreme Market
      </footer>

    </main>
  );
}