import Head from 'next/head';

// components
import ListItem from './components/ListItem';
import Container from './components/Container';

// CoinGecko API
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
    <ListItem key={coin.id} coin={coin} />
  ));

  return (
    <di>
      <Head>
        <title>Stake•fish Crypto App</title>
        <meta name="description" content="Stake•fish Crypto App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen w-full flex-col items-center justify-center py-16">
        <h1 className="mb-4 font-manrope text-3xl font-black text-primary md:text-4xl">
          Crypto Stake•fish
        </h1>

        <Container>
          <ul className="space-y-4 divide-y divide-secondary/30">
            {coinsDisplay}
          </ul>
        </Container>
      </main>
    </di>
  );
}
