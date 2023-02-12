import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  async function handleOnSubmit(e) {
  e.preventDefault();

  const formData = {};

  Array.from(e.currentTarget.elements).forEach(field => {
    if ( !field.name ) return;
    formData[field.name] = field.value;
  });

  await fetch('/api/mail', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
    setName('');
    setEmail('');
    setMessage('');
}
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
          <form method="post" onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" onChange={event => setName(event.target.value)} />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" onChange={event => setEmail(event.target.value)} />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" onChange={event => setMessage(event.target.value)} />
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
