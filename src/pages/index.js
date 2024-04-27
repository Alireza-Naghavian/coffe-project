import ProductCard from "@/components/sharedUi/ProductCard";
import About from "@/components/template/About";
import Offer from "@/components/template/Offer";
import Services from "@/components/template/Services";
import HomePage from "@/components/template/Slider";

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Services />
      <Offer />
      <ProductCard />
    </>
  );
}
