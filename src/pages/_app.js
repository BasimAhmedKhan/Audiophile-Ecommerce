import '@/styles/globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Header footer={false} />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  );
}
