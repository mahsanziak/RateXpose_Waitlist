// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import WaitlistForm from '../components/WaitlistForm'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Waitlist for RateXpose</title>
        <meta name="description" content="Join the waitlist for RateXpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WaitlistForm />
    </div>
  )
}

export default Home
