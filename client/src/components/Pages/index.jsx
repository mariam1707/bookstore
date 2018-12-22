// flow
import React from 'react';
import type { PropsType } from './types';

export default ({ totalPages, currentPage }: PropsType): React.Node => (
  <div>
    {currentPage && (
      <span className="current-page d-inline-block h-100 text-secondary">
        Page <span className="font-weight-bold">{currentPage}</span> /{' '}
        <span className="font-weight-bold">{totalPages}</span>
      </span>
    )}
  </div>
);
