import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Saluts: Групповые видеопоздравления в честь важных событий
        </title>
      </Head>

      <Header />
      <Main />
      <Footer />
    </>
  );
}
