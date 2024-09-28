import Image from "next/image";
import Head from 'next/head';
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Carousel</title>
        <meta name="description" content="A simple carousel using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl mb-4">Next.js Carousel with Tailwind CSS</h1>
        <Carousel />
      </main>
    </div>
  );
}
