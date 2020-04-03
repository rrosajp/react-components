/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import ChevronDoubleLeft from '@zendeskgarden/svg-icons/src/16/chevron-double-left-stroke.svg';
import { StyledIcon, StyledCursor } from '../../../styled';

export const First = React.forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ children, ...restProps }, ref) => {
    return (
      <StyledCursor ref={ref} as="button" {...restProps}>
        <StyledIcon type="first">
          <ChevronDoubleLeft />
        </StyledIcon>
        <span>{children}</span>
      </StyledCursor>
    );
  }
);

First.displayName = 'First';
