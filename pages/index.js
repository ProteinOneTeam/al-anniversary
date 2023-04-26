import React from 'react';
import Head from 'next/head';

import SPA from '../components/SPA';
import { getAllYears, getAboutUs } from '../lib/api';

export default function Home({ allYears: { edges }, aboutUsData }) {
  return (
    <>
      <Head>
        <title>Animal Logic – Our Story</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Medium.ttf"
          as="font"
          crossOrigin=""
        />

        <script
          type="text/javascript"
          src="https://www.googletagmanager.com/gtag/js?id=UA-39872893-1"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-39872893-1');
          `,
          }}
        />
      </Head>

      <SPA data={edges} aboutUsData={aboutUsData} />
    </>
  );
}

export async function getStaticProps() {
  const allYears = await getAllYears();
  const aboutUsData = await getAboutUs();
  return {
    props: {
      allYears,
      aboutUsData,
    },
  };
}
