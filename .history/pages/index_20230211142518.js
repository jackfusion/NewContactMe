import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <style jsx>{`
            form {
              font-size: 1.2em;
            }

            label {
              display: block;
              margin-bottom: .2em;
            }

            input,
            textarea {
              width: 100%;
              padding: .8em;
            }

            button {
              color: white;
              font-size: 1em;
              background-color: blueviolet;
              padding: .8em 1em;
              border: none;
              border-radius: .2em;
            }
          `}</style>
          <form method="post">
            <p>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </p>
            <p>
              <button>Submit</button>
            </p>
          </form>
        </div>
      </main>
    </>
  )
}
