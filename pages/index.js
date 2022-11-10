import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Starter. SMJ!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my test app!" />
        <p className="description">
          Site under construction 🚧 
            </p>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/1XXXXXXXXXX"> <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.png" />
      </main>

      <Footer />
    </div>
  )
}
