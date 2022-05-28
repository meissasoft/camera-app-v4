import Head from 'next/head';

import HomePage from './home/index.page';

/**
 *
 * @returns Landing page
 */

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Camera App</title>
      </Head>
      <HomePage />
    </>
  );
}
