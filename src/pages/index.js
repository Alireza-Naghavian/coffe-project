import About from "@/components/template/About";
import HomeMenu from "@/components/template/HomeMenu";
import Offer from "@/components/template/Offer";
import Reservation from "@/components/template/Reservation";
import Services from "@/components/template/Services";
import HomePage from "@/components/template/Slider";
import Testimonial from "@/components/template/Testimonial";
import axios from "axios";

export default function Home({ services,menuProd,comments }) {

  return ( 
    <>
      <HomePage />
      <About />
      <Services services={services} />
      <Offer />
      <HomeMenu menuProd={menuProd}/>
      
      <Reservation />
      <Testimonial comments={comments} />
    </>
  );
}
export async function getStaticProps() {
  const base_url = "http://localhost:4000"
  const { data: services } = await axios.get(`${base_url}/services`);
  const {data:menuProd} = await axios.get(`${base_url}/menu`)
  const {data:comments} = await axios.get(`${base_url}/comments`)
  return {
    props: {
      services,
      menuProd,
      comments
    },
    revalidate: 60 * 60 * 12,
  };
}
