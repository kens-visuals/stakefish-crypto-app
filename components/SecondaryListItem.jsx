// assets
import {
  CheckIcon,
  ArrowSmDownIcon,
  ArrowSmUpIcon,
} from '@heroicons/react/solid';

// utils
import { formatNumToUSCurrency } from '../helpers/utils';

export default function SecondaryListItem({ coin, info }) {
  return (
    <li className="flex items-center justify-between lg:gap-4">
      <div className="flex items-center justify-center gap-1">
        {info.isHighest || info.isLowest || (
          <CheckIcon className="w-4 text-white lg:w-5" />
        )}
        {info.isHighest && <ArrowSmUpIcon className="w-4 text-white lg:w-5" />}
        {info.isLowest && <ArrowSmDownIcon className="w-4 text-white lg:w-5" />}
        <span className="font-semibold text-primary-dark lg:text-lg">
          {info.name}
        </span>{' '}
      </div>

      <span
        className={`lg:text-lg ${
          info.isHighest || info.isLowest || 'text-secondary-light'
        }
        ${info.isHighest && 'text-secondary'}
        ${info.isLowest && 'text-tertiary'}`}
      >
        {formatNumToUSCurrency(
          coin.current_price || coin.market_data.current_price.usd
        )}
      </span>
    </li>
  );
}
