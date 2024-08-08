import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import WaitlistForm from '../components/WaitlistForm';
import ThreeScene from '../components/ThreeScene';

const Home: NextPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="text-slate-300 min-h-screen flex flex-col items-center px-4">
      <Head>
        <title>Waitlist for RateXpose</title>
        <meta name="description" content="Join the waitlist for RateXpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative z-10 flex justify-between items-center w-full p-4 max-w-6xl">
        <div className="flex items-center">
          <Image src="/logo.png" alt="RateXpose Logo" width={50} height={50} className="w-12 h-12 md:w-20 md:h-20" />
          <span className="ml-2 text-xl md:text-2xl font-bold text-white">RateXpose</span>
        </div>
      </header>
      <ThreeScene />
      <main className="relative z-10 flex flex-col items-center mt-16 text-center max-w-6xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">Discover the true cost of essential services</h1>
        <p className="mt-10 text-lg md:text-xl max-w-2xl text-gray-300">
          Post, collect and discover bills info anonymously. Join the waitlist to get early access.
        </p>
        <WaitlistForm />
        <section className="mt-20 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How RateXpose Works</h2>
          <div ref={contentRef} className="mt-8 flex flex-col md:flex-row items-center justify-around hidden-content">
            <div className="p-4">
              <Image src="/upload-bill.png" alt="Upload Bill" width={200} height={200} />
              <h3 className="text-2xl font-semibold text-white mt-4">Upload Bills Anonymously</h3>
              <p className="text-gray-300 mt-2">
                Securely upload your bills without revealing your identity.
              </p>
            </div>
            <div className="p-4">
              <Image src="/view-bills.png" alt="View Bills" width={200} height={200} />
              <h3 className="text-2xl font-semibold text-white mt-4">View Bills from Others</h3>
              <p className="text-gray-300 mt-2">
                Access bills uploaded by other users to compare costs.
              </p>
            </div>
            <div className="p-4">
              <Image src="/request-quote.png" alt="Request Quote" width={200} height={200} />
              <h3 className="text-2xl font-semibold text-white mt-4">Request Quotes</h3>
              <p className="text-gray-300 mt-2">
                Get quotes for similar bills and find better deals.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
