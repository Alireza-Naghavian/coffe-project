import NavBar from "@/components/sharedUi/NavBar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NavBar/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
