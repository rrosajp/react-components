/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Accordion } from '../Accordion';

describe('Panel', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Panel data-test-id="panel" ref={ref} />
        </Accordion.Section>
      </Accordion>
    );

    expect(getByTestId('panel')).toBe(ref.current);
  });
});
