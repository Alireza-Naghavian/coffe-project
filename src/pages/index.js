import ProductCard from "@/components/sharedUi/ProductCard";
import About from "@/components/template/About";
import Offer from "@/components/template/Offer";
import Reservation from "@/components/template/Reservation";
import Services from "@/components/template/Services";
import HomePage from "@/components/template/Slider";
import Testimonial from "@/components/template/Testimonial";

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Services />
      <Offer />
      <ProductCard />
      <Reservation/>
      <Testimonial/>
    </>
  );
}
