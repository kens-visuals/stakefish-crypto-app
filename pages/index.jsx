import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

export async function getStaticProps() {
  // NOTE: Old way of getting data from CoinGecko
  // const res = await fetch(
  //   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  // );
  // const coinListData = await res.json();

  // NOTE: New way of getting data from CoinGecko
  const res = await CoinGeckoClient.coins.markets({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 10,
    page: 1,
    sparkline: false,
  });
  const coinListData = res.data;

  return { props: { coinListData } };
}

export default function Home({ coinListData }) {
  const coinsDisplay = coinListData.map((coin) => (
    <li key={coin.id}>
      <div>
        <Image src={coin.image} alt={coin.name} width={15} height={15} />

        <Link href="/coins/[coinId]" as={`/coins/${coin.id}`}>
          <a>{coin.name}</a>
        </Link>
      </div>
    </li>
  ));

  return (
    <di>
      <Head>
        <title>Stake•fish Crypto App</title>
        <meta name="description" content="Stake•fish Crypto App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Crypto Stake•fish</h1>

        <div>
          <ul>{coinsDisplay}</ul>
        </div>
      </main>
    </di>
  );
}
