import * as React from 'react';

import { renderLocation } from './result-table-utils';
import { ColumnValue } from '../pure/bqrs-cli-types';

interface Props {
  value: ColumnValue;
  databaseUri: string;
}

export default function RawTableValue(props: Props): JSX.Element {
  const rawValue = props.value;
  if (
    typeof rawValue === 'string'
    || typeof rawValue === 'number'
    || typeof rawValue === 'boolean'
  ) {
    return <span>{renderLocation(undefined, rawValue.toString())}</span>;
  }

  return renderLocation(rawValue.url, rawValue.label, props.databaseUri);
}
