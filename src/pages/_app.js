import Footer from "@/components/sharedUi/Footer";
import NavBar from "@/components/sharedUi/NavBar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import axios from "axios";
import { register } from 'swiper/element/bundle';
export default function App({ Component, pageProps }) {
  register();
  return (
    <NextUIProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </NextUIProvider>
  );
}

