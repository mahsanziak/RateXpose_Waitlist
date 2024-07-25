import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import WaitlistForm from '../components/WaitlistForm';
import ThreeScene from '../components/ThreeScene';

const Home: NextPage = () => {
  return (
    <div className="text-slate-300 min-h-screen flex flex-col items-center px-4 ">
      <Head>
        <title>Waitlist for RateXpose</title>
        <meta name="description" content="Join the waitlist for RateXpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative z-10 flex justify-between items-center w-full p-4 max-w-6xl">
        <div className="flex items-center">
          <Image src="/logo.png" alt="RateXpose Logo" width={100} height={100} />
          <span className="ml-2 text-2xl font-bold">RateXpose</span>
        </div>
      </header>
      <ThreeScene />
      <main className="relative z-10 flex flex-col items-center mt-16 text-center max-w-6xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Discover the true cost of essential services</h1>
        <p className="mt-10 text-lg md:text-xl max-w-2xl">
          Post, collect and discover bills info anonymously. Join the waitlist to get early access.
        </p>
        <WaitlistForm />
      </main>
    </div>
  );
};

export default Home;
