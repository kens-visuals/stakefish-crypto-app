import Link from 'next/link';
import Image from 'next/image';

// components
import SecondaryListItem from './SecondaryListItem';

export default function ListItem({ coin }) {
  const listItemNames = [
    { name: 'Current price:' },
    { name: 'Highest in 24h:', isHighest: true },
    { name: 'Lowest in 24h:', isLowest: true },
  ];

  const secondaryListItemsDisplay = listItemNames.map((info) => (
    <SecondaryListItem key={info.name} coin={coin} info={info} />
  ));

  return (
    <li className="p-2 px-6">
      <div className="flex items-center gap-2">
        <Image src={coin.image} alt={coin.name} width={18} height={18} />

        <div className="flex items-center gap-1">
          <Link href="/coins/[coinId]" as={`/coins/${coin.id}`}>
            <a className="text-xl font-bold text-primary underline">
              {coin.name}
            </a>
          </Link>

          <span className="text-primary-light">({coin.symbol})</span>
        </div>
      </div>

      <ul className="mt-2 space-y-1 rounded-md bg-primary py-4 px-6">
        {secondaryListItemsDisplay}
      </ul>
    </li>
  );
}
