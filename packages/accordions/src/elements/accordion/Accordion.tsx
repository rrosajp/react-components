/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useEffect,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  HTMLAttributes
} from 'react';
import { StyledAccordion } from '../../styled';
import { AccordionContext } from '../../utils';
import { Section } from '../accordion/components/Section';
import { Header } from '../accordion/components/Header';
import { Panel } from '../accordion/components/Panel';
import { Label } from '../accordion/components/Label';
import { useAccordion } from '@zendeskgarden/container-accordion';

interface IStaticAccordionExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Section: typeof Section;
  Header: typeof Header;
  Panel: typeof Panel;
  Label: typeof Label;
}

interface IAccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** A controlled prop that determines which sections are expanded */
  expandedSections?: number[];
  /** Determines if all panels can be collapsed in an uncontrolled accordion */
  isCollapsible?: boolean;
  /** Determines if multiple panels can be expanded at the same time in an uncontrolled accordion */
  isExpandable?: boolean;
  /** Heading rank applied on aria-level */
  level: number;
  /** A callback that is invoked with an accordion section’s index when a section’s state is changed */
  onChange?: (index: number) => any;
  isBare?: boolean;
  isCompact?: boolean;
}

/**
 * Accepts all `<div>` attributes and events. Also accepts sub-components:

 *  - `Accordion.Section`
 *  - `Accordion.Header`
 *  - `Accordion.Panel`
 */
export const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
      level,
      expandedSections: controlledExpandedSections,
      isExpandable,
      isCollapsible,
      isBare,
      isCompact,
      onChange,
      ...props
    },
    ref
  ) => {
    const { expandedSections, getHeaderProps, getTriggerProps, getPanelProps } = useAccordion({
      collapsible: isCollapsible,
      expandable: isExpandable,
      onChange,
      expandedSections: controlledExpandedSections
    });

    const currentIndexRef = useRef(0);

    useEffect(() => {
      currentIndexRef.current = 0;
    });

    const value = {
      level,
      expandedSections,
      getHeaderProps,
      getTriggerProps,
      getPanelProps,
      currentIndexRef,
      isCompact,
      isBare
    };

    return (
      <AccordionContext.Provider value={value}>
        <StyledAccordion ref={ref} {...(props as any)} />
      </AccordionContext.Provider>
    );
  }
) as IStaticAccordionExport<HTMLDivElement, IAccordionProps>;

Accordion.Section = Section;
Accordion.Header = Header;
Accordion.Panel = Panel;
Accordion.Label = Label;

Accordion.displayName = 'Accordion';

Accordion.defaultProps = {
  isBare: false,
  isCompact: false,
  isCollapsible: false,
  isExpandable: false,
  expandedSections: undefined,
  onChange: () => undefined
};
