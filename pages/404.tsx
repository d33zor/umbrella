import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const Page404 = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '4rem',
            color: 'var(--orange-color)',
          }}
        >
          404
        </div>
        <div
          style={{
            fontSize: '1.5rem',
            marginTop: '1rem',
          }}
        >
          Oops, we could not find that page
        </div>
        <div
          style={{
            fontSize: '1.5rem',
            padding: '1rem 2rem',
            background: 'var(--orange-color)',
            marginTop: '1rem',
            color: '#fff',
            borderRadius: '15px',
            cursor: 'pointer',
          }}
          onClick={() => router.push('/')}
        >
          Go to main page
        </div>
      </div>
    </>
  );
};

export default Page404;
