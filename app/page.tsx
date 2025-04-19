import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Footer />
    </main>
  );
}
