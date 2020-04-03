/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { CursorPagination } from '../CursorPagination';

describe('Previous', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { getByTestId } = render(
      <CursorPagination>
        <CursorPagination.Previous data-test-id="previous" ref={ref} />
      </CursorPagination>
    );

    expect(getByTestId('previous')).toBe(ref.current);
  });
});
