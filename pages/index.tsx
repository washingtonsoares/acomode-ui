import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Acomode</title>
        <meta name="description" content="Faça já sua reserva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
