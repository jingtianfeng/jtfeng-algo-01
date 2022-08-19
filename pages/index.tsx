import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DS/Algo Study</title>
        <meta name="description" 
              content="To showcase my data structure and algorithm solutions" />
        <link rel="icon" 
              href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DS/Algo Study
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
