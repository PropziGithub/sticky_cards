import Animation from "@/components/container/animation";
import FAQ from "@/components/container/faq";
import Hero from "@/components/container/hero";
import Integrations from "@/components/container/Integrations";
import Loyalty from "@/components/container/loyalty";
import ScanQR from "@/components/container/scanqr";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Hero />
      <Loyalty />
      <Integrations />
      <Animation />
      <ScanQR />
      <FAQ />
    </section>
  );
}
