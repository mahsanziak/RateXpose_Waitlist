import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FaShieldAlt, FaEye, FaFileInvoiceDollar } from 'react-icons/fa';
import WaitlistForm from '../components/WaitlistForm';
import ThreeScene from '../components/ThreeScene'; // Ensure this component exists or remove if not needed
import styles from '../styles/Home.module.css';

const steps = [
  {
    title: 'Upload Bills Anonymously',
    description: 'Securely upload your bills without revealing your identity.',
    icon: <FaShieldAlt size={100} color="#4A5568" />, // Slate-700
  },
  {
    title: 'View Bills from Others',
    description: 'Access bills uploaded by other users to compare costs.',
    icon: <FaEye size={100} color="#4A5568" />, // Slate-700
  },
  {
    title: 'Request Quotes',
    description: 'Get quotes for similar bills and find better deals.',
    icon: <FaFileInvoiceDollar size={100} color="#4A5568" />, // Slate-700
  },
];

const Home: NextPage = () => {
  const contentRefs = useRef<HTMLDivElement[]>([]);

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
        threshold: 0.3,
      }
    );

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="text-slate-300 min-h-screen flex flex-col items-center px-4">
      <Head>
        <title>RateXpose</title>
        <meta name="description" content="Join the waitlist for RateXpose" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-64x64.png" sizes="64x64" />
        <link rel="icon" href="/favicon-128x128.png" sizes="128x128" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </Head>
      <header className="relative z-10 flex justify-between items-center w-full p-4 max-w-6xl">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="RateXpose Logo" width={50} height={50} className="w-12 h-12 md:w-20 md:h-20" />
          <span className="ml-2 text-xl md:text-2xl font-bold text-white">RateXpose</span>
        </div>
      </header>
      <ThreeScene />
      <main className={`relative z-10 flex flex-col items-center mt-16 text-center max-w-6xl w-full ${styles['bottom-spacing']}`}>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">Discover the true cost of essential services</h1>
        <p className={`mt-10 text-lg md:text-xl max-w-2xl text-gray-300 ${styles['thicker-text']}`}>
          Post, collect and discover bills info anonymously. Join the waitlist to get early access.
        </p>
        <WaitlistForm />
        <section className="mt-20 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How RateXpose Works</h2>
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  contentRefs.current[index] = el;
                }
              }}
              className="mt-16 flex flex-col items-center hidden-content"
            >
              <div className="icon-container">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mt-4">{step.title}</h3>
              <p className={`text-gray-300 mt-2 text-center ${styles['thicker-text']}`}>
                {step.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
