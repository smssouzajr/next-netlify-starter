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
          Site under construction 🚧 //<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
