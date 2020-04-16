/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledButton } from '../../../styled';
import { useAccordionContext, useSectionContext } from '../../../utils';

export const Label = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { expandedSections, isCompact, isBare, getTriggerProps } = useAccordionContext();
    const index = useSectionContext();

    return <StyledButton isCompact={isCompact}>{props.children} BUTTON</StyledButton>;
  }
);

Label.displayName = 'Label';
