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
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <Header />
      <Main />
      <Footer />
    </>
  );
}
