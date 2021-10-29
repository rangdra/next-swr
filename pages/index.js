import Head from 'next/head';
import Page from '../components/Page';
import GetQueryUrl from '../utils/getQueryUrl';

export default function Home() {
  const { page, limit, search } = GetQueryUrl();

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ display: 'none' }}>
          <Page page={page - 1} limit={limit} search={search} />
        </div>
        <Page page={page} limit={limit} search={search} />

        <div style={{ display: 'none' }}>
          <Page page={page + 1} limit={limit} search={search} />
        </div>
      </main>
    </div>
  );
}
