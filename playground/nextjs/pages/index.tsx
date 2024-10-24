import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useClerk } from '@clerk/nextjs';

const Home: NextPage = () => {
  const clerk = useClerk();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Clerk x Nextjs</h1>
        <p className={styles.description}>Get started by editing visiting one of the pages below</p>
        <ul>
          <li>
            <Link href={'/sign-in'}>Sign in page</Link>
          </li>
          <li>
            <Link href={'/sign-up'}>Sign up page</Link>
          </li>
          <li>
            <Link href={'/user'}>User profile page</Link>
          </li>
          <li>
            <Link href={'/organization'}>Organization profile</Link>
          </li>
          <li>
            <Link href={'/create-organization'}>Create organization</Link>
          </li>
          <li>
            <Link href={'/organization-list'}>Organization List</Link>
          </li>
          <li>
            <Link href={'/redirect-helpers'}>Redirect helpers</Link>
          </li>
          <li>
            <Link href={'/session-examples'}>Session Examples</Link>
          </li>
          <li>
            <Link href={'/user-examples'}>User examples</Link>
          </li>
          <li>
            <Link href={'/waitlist'}>Waitlist</Link>
          </li>
          <li>
            <button type='button' onClick={() => clerk.redirectToWaitlist()}>Redirect to waitlist</button>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
