import Image from 'next/image';

// assets
import {
  GlobeIcon,
  ThumbUpIcon,
  HashtagIcon,
  StarIcon,
} from '@heroicons/react/solid';

// components
import Main from '../../components/Main';
import Container from '../../components/Container';
import Link from '../../components/Link';

// utils
import { formatDateToUSFormat } from '../../helpers/utils';

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
  const links = [
    {
      name: 'Website',
      url: coin.links.homepage[0],
      icon: <GlobeIcon className="w-6" />,
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/${coin.links.facebook_username}`,
      icon: <ThumbUpIcon className="w-6" />,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/${coin.links.twitter_screen_name}`,
      icon: <HashtagIcon className="w-6" />,
    },
    {
      name: 'GitHub',
      url: coin.links.repos_url.github[0],
      icon: <StarIcon className="w-6" />,
    },
  ];

  const linksDisplay = links.map((link) => <Link {...link} />);

  return (
    <Main>
      <div className="mb-4 flex items-center gap-2">
        <Image src={coin.image.large} alt="" width={55} height={55} />
        <h1 className="text-4xl font-bold text-primary">{coin.name}</h1>
      </div>

      <Container>
        <div className="p-6 text-primary">
          <div>
            <p className="text-lg">
              <span className="font-bold">Country:</span>{' '}
              {coin.country || 'N/A'}
            </p>
            <p className="text-lg">
              <span className="font-bold">Trust status:</span>{' '}
              {coin.tickers[0].trust_score || 'N/A'}
            </p>
            <p className="text-lg">
              <span className="font-bold">Founded:</span>{' '}
              {formatDateToUSFormat(coin.genesis_date) || 'N/A'}
            </p>

            <ul>{linksDisplay}</ul>
            <p dangerouslySetInnerHTML={{ __html: coin.description.en }} />
          </div>
        </div>
      </Container>
    </Main>
  );
}
