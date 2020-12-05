import Head from 'next/head';
import Heading from 'components/Heading/Heading';

const Home = () => {
  return (
    <div>
      <Head>
        <title>SNKRSTORE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading />
    </div>
  );
};

export default Home;
