// @flow
import React from 'react';
import { compose, setDisplayName } from 'recompose';
import type { PropsType } from './types';

export default compose(setDisplayName('Pages'))(({ totalPages, currentPage }: PropsType) => (
  <div>
    {currentPage && (
      <span className="current-page d-inline-block h-100 text-secondary">
        Page <span className="font-weight-bold">{currentPage}</span> /{' '}
        <span className="font-weight-bold">{totalPages}</span>
      </span>
    )}
  </div>
));
