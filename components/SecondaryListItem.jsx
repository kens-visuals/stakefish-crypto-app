import {
  CheckIcon,
  ArrowSmDownIcon,
  ArrowSmUpIcon,
} from '@heroicons/react/solid';

// utils
import { formatNumToUSCurrency } from '../helpers/utils';

export default function SecondaryListItem({ coin, info }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-1">
        {info.isHighest || info.isLowest || (
          <CheckIcon className="w-4 text-white" />
        )}
        {info.isHighest && <ArrowSmUpIcon className="w-4 text-white" />}
        {info.isLowest && <ArrowSmDownIcon className="w-4 text-white" />}
        <span className="font-semibold text-primary-dark">
          {info.name}
        </span>{' '}
      </div>

      <span
        className={`${info.isHighest || info.isLowest || 'text-secondary-light'}
        ${info.isHighest && 'text-secondary'}
        ${info.isLowest && 'text-tertiary'}`}
      >
        {formatNumToUSCurrency(coin.current_price)}
      </span>
    </li>
  );
}
