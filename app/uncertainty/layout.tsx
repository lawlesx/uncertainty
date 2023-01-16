import Navbar from "../../components/Navbar";

export default function UncertaintyLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}