import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import WaitlistForm from '../components/WaitlistForm';
import ThreeScene from '../components/ThreeScene';

const Home: NextPage = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center px-4 ">
      <Head>
        <title>Waitlist for RateXpose</title>
        <meta name="description" content="Join the waitlist for RateXpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative z-10 flex justify-between items-center w-full p-4 max-w-6xl">
        <div className="flex items-center">
          <Image src="/logo.png" alt="RateXpose Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold">RateXpose</span>
        </div>
        <button className="bg-white text-black py-2 px-4 rounded-md">Early Access</button>
      </header>
      <ThreeScene />
      <main className="relative z-10 flex flex-col items-center mt-16 text-center max-w-6xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Get full exposure of the Market</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Create, collect and discover bills info anonymously. Join the waitlist to get early access.
        </p>
        <WaitlistForm />
        <div className="flex flex-col md:flex-row mt-16 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-64 h-36 bg-gray-800 flex items-center justify-center">Placeholder 1</div>
          <div className="w-full md:w-64 h-36 bg-gray-800 flex items-center justify-center">Placeholder 2</div>
        </div>
        
      </main>
    </div>
  );
};

export default Home;
