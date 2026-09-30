export const metadata = {
  title: "Xtreme Market",
  description: "Your marketplace for buying, selling and discovering products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}