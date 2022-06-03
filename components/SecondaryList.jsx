// components
import SecondaryListItem from './SecondaryListItem';

export default function SecondaryList({ coin }) {
  const listItemNames = [
    { name: 'Current price:' },
    { name: 'Highest in 24h:', isHighest: true },
    { name: 'Lowest in 24h:', isLowest: true },
  ];

  const secondaryListItemsDisplay = listItemNames.map((info) => (
    <SecondaryListItem key={info.name} coin={coin} info={info} />
  ));

  return (
    <ul className="mt-2 space-y-1 rounded-sm bg-primary py-4 px-6">
      {secondaryListItemsDisplay}
    </ul>
  );
}