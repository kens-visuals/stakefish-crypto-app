import Link from 'next/link';
import Image from 'next/image';

// components
import SecondaryListItem from './SecondaryListItem';

export default function ListItem({ coin }) {
  const listItemNames = ['Current price:', 'Highest in 24h:', 'Lowest in 24h:'];

  const secondaryListItemsDisplay = listItemNames.map((name) => (
    <SecondaryListItem key={name} coin={coin} name={name} />
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

      <ul className="mt-2 space-y-1 rounded-md bg-primary py-4 px-7">
        {secondaryListItemsDisplay}
      </ul>
    </li>
  );
}
