// utils
import { formatNumToUSCurrency } from '../../helpers/utils';

export default function SecondaryListItem({ coin, name }) {
  return (
    <li className="flex items-center justify-between">
      <span className="font-semibold text-secondary-light">{name}</span>{' '}
      <span className="text-primary-dark">
        {formatNumToUSCurrency(coin.current_price)}
      </span>
    </li>
  );
}
