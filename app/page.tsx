import Animation from "@/components/container/animation";
import StickyCards from "@/components/container/cards";
import Customer from "@/components/container/customers";
import FAQ from "@/components/container/faq";
import Hero from "@/components/container/hero";
import Integrations from "@/components/container/Integrations";
import Loyalty from "@/components/container/loyalty";
import Program from "@/components/container/program";
import ScanQR from "@/components/container/scanqr";
import Signup from "@/components/container/signup";

const testimonials = [
  {
    title: "Integration 1",
  },
  {
    title: "Integration 2",
  },
  {
    title: "Integration 3",
  },
  {
    title: "Integration 4",
  },
  {
    title: "Integration 5",
  },
];
export default function Home() {
  return (
    <section className="flex flex-col">
      <Hero />
      <Loyalty />
      <Integrations items={testimonials} direction="left" speed="slow" />
      <Animation />
      <ScanQR />
      <StickyCards />
      <Customer />
      <Program />
      <Signup />
      <FAQ />
    </section>
  );
}
