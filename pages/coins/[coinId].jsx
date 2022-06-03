import Link from 'next/link';
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
import LinkItem from '../../components/LinkItem';
import SecondaryList from '../../components/SecondaryList';

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
  console.log(coin);

  const links = [
    {
      name: 'Website',
      url: coin.links.homepage[0],
      icon: <GlobeIcon className="w-6" />,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/${coin.links.twitter_screen_name}`,
      icon: <HashtagIcon className="w-6" />,
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/${coin.links.facebook_username}`,
      icon: <ThumbUpIcon className="w-6" />,
    },
    {
      name: 'GitHub',
      url: coin.links.repos_url.github[0],
      icon: <StarIcon className="w-6" />,
    },
  ];

  const linksDisplay = links.map((link) => (
    <LinkItem key={link.name} {...link} />
  ));

  return (
    <Main>
      <Container>
        <div className="mb-4 flex items-center gap-2 pl-5 lg:mb-0">
          <h1 className="text-4xl font-bold text-primary">{coin.name}</h1>
          <Image src={coin.image.large} alt="" width={55} height={55} />
        </div>

        <div className="mt-4 lg:mt-0">
          <SecondaryList coin={coin} />
        </div>

        <div className="space-y-4 p-6 text-primary">
          <div className="space-y-4 lg:mb-10 lg:mt-4 lg:flex lg:items-center lg:space-x-16 lg:space-y-0">
            <div>
              <h2 className="mb-2 text-4xl">Info</h2>
              <div className="flex flex-wrap gap-x-4">
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
                  {(coin.genesis_date &&
                    formatDateToUSFormat(coin.genesis_date)) ||
                    'N/A'}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-4xl lg:mb-2">Links</h3>
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 py-4 lg:py-0">
                {linksDisplay}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-4xl">Description</h3>
            <p
              className="h-80 overflow-y-scroll p-2 shadow-inner shadow-secondary"
              dangerouslySetInnerHTML={{ __html: coin.description.en }}
            />
          </div>

          <Link href="/">
            <a className="!mt-6 inline-block w-full rounded-md bg-primary py-3 text-center text-xl font-bold text-secondary-light">
              Go Back
            </a>
          </Link>
        </div>
      </Container>
    </Main>
  );
}
