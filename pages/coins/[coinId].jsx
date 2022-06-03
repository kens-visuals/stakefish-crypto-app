import Image from 'next/image';

// components
import Main from '../../components/Main';
import Container from '../../components/Container';

export async function getStaticPaths() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  const coinListData = await res.json();
  const coinList = coinListData.map((coin) => ({
    params: { coinId: coin.id },
  }));

  return {
    paths: coinList,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.coinId}`
  );
  const coin = await res.json();

  return { props: { coin } };
}

export default function Coin({ coin }) {
  return (
    <Main>
      <div className="mb-4 flex items-center gap-2">
        <Image src={coin.image.large} alt="" width={55} height={55} />
        <h1 className="text-4xl font-bold text-primary">{coin.name}</h1>
      </div>
      <Container>
        <div className="p-6">
          <div>
            <p>Country: {coin.country || 'N/A'}</p>
            <p>Trust status: {coin.tickers[0].trust_score || 'N/A'}</p>
            <p>Founded: {coin.genesis_date || 'N/A'}</p>

            <ul>
              {coin.links.homepage[0] && (
                <li>
                  Homepage:{' '}
                  <a
                    href={`https://www.facebook.com/${coin.links.homepage[0]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {coin.links.homepage[0]}
                  </a>
                </li>
              )}
              <li>
                Facebook:{' '}
                <a
                  href={`https://www.facebook.com/${coin.links.facebook_username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {coin.links.facebook_username}
                </a>
              </li>
              <li>
                Twitter:
                <a
                  href={`https://www.twitter.com/${coin.links.twitter_screen_name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {coin.links.twitter_screen_name}
                </a>
              </li>
              {coin.links.repos_url.github[0] && (
                <li>
                  GitHub:
                  <a
                    href={coin.links.repos_url.github[0]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {coin.links.repos_url.github[0]}
                  </a>
                </li>
              )}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: coin.description.en }} />
          </div>
        </div>
      </Container>
    </Main>
  );
}
