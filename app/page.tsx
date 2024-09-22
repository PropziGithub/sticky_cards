import Animation from "@/components/container/animation";
import Customer from "@/components/container/customers";
import FAQ from "@/components/container/faq";
import Hero from "@/components/container/hero";
import Integrations from "@/components/container/Integrations";
import Loyalty from "@/components/container/loyalty";
import Program from "@/components/container/program";
import ScanQR from "@/components/container/scanqr";
import Signup from "@/components/container/signup";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Hero />
      <Loyalty />
      <Integrations />
      <Animation />
      <ScanQR />
      <Customer />
      <Program />
      <Signup />
      <FAQ />
    </section>
  );
}
