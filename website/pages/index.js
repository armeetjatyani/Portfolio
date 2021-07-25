import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Armeet</title>
        <meta name="description" content="My personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className={styles.nav}>
        Hi my name is Armeet.
      </div>
      
    </div>
  )
}
