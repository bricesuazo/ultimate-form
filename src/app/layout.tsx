import "./globals.css";

export const metadata = {
  title: "Ultimate Form in Ohio",
  description: "The ultimate form in Ohio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
