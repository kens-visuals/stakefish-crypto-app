import Link from 'next/link';
import Image from 'next/image';

// components
import SecondaryList from './SecondaryList';

export default function ListItem({ coin }) {
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

      <SecondaryList coin={coin} />
    </li>
  );
}
