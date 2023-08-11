import '@/styles/globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header footer={false} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
