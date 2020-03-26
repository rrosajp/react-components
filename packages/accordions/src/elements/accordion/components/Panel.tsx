/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledPanel } from '../../../styled';
import { useAccordionContext, useSectionContext } from '../../../utils';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';

export const Panel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { expandedSections } = useAccordionContext();
  const index = useSectionContext();

  const panelRef = useCombinedRefs<HTMLDivElement>(ref);
  const isExpanded = expandedSections.includes(index);

  React.useEffect(() => {
    if (panelRef.current) {
      const child = panelRef.current as any;

      console.log(child, '<-- child');

      child.style.height = `${child.scrollHeight}px`;
    }
  }, [panelRef, isExpanded]);

  return <StyledPanel ref={panelRef} isExpanded={isExpanded} {...props} />;
});

Panel.displayName = 'Panel';
