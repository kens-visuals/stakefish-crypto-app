import Head from 'next/head';

// components
import ListItem from '../components/ListItem';
import Main from '../components/Main';
import Container from '../components/Container';

// CoinGecko API
const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

export async function getStaticProps() {
  // Get the list of first 10 coins
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
    <div>
      <Head>
        <title>Stake•fish Crypto App</title>
        <meta name="description" content="Stake•fish Crypto App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1 className="mb-4 font-manrope text-3xl font-black text-primary md:text-4xl">
          Crypto Stake•fish
        </h1>

        <Container>
          <ul className="grid space-y-4 divide-y divide-secondary/30 md:grid-cols-2 md:space-y-0 lg:grid-cols-3 lg:divide-y-0">
            {coinsDisplay}
          </ul>
        </Container>
      </Main>
    </div>
  );
}
