import "../styles/global.css";
import { useRouter } from "next/router";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Check if the current path is '/404'
  const is404Page = router.pathname === "/404";

  return (
    <>
      {!is404Page && <Header />}
      <Component {...pageProps} />
      {!is404Page && <Footer />}
    </>
  );
}
