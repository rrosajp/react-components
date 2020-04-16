/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, FocusEvent, forwardRef, HTMLAttributes } from 'react';
import {
  StyledHeader,
  StyledButton,
  StyledRotateIcon,
  COMPONENT_ID as buttonGardenId
} from '../../../styled';
import { useAccordionContext, useSectionContext } from '../../../utils';
import ChevronDown from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';

export interface IHeaderProps extends HTMLAttributes<HTMLButtonElement> {
  isCompact?: boolean;
  /** Slot for rendering elements inside the header */
  renderGroup?: any;
  /** Apply props to the wrapping `Accordion.Header` element */
  wrapperProps?: any;
}

export const Header = forwardRef<HTMLButtonElement, IHeaderProps>((props, ref) => {
  const {
    level,
    isCompact,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  } = useAccordionContext();
  const sectionIndex = useSectionContext();
  const { renderGroup = () => null, children, wrapperProps, ...other } = props;
  const isExpanded = expandedSections.includes(sectionIndex);
  const [isHeaderFocused, setIsHeaderFocused] = useState(false);
  const buttonRef = useRef<any>();
  const combinedRef = useCombinedRefs(ref, buttonRef);
  const triggerProps = getTriggerProps({
    ref: combinedRef,
    index: sectionIndex,
    ...other
  });
  const { onClick, ...restTriggerProps } = triggerProps;
  const gardenId = (document.activeElement as HTMLElement).dataset.gardenId;
  const isFocused = isHeaderFocused && gardenId === buttonGardenId;

  return (
    <StyledHeader
      {...getHeaderProps({
        onClick,
        isCompact,
        isFocused,
        isExpanded,
        ariaLevel: level,
        onFocus: (e: FocusEvent) => {
          e.persist();
          setTimeout(() => {
            if (
              e.target.getAttribute('data-garden-id') === buttonGardenId &&
              e.target.getAttribute('data-garden-focus-visible')
            ) {
              setIsHeaderFocused(true);
            }
          }, 0);
          // setTimeout(() => {
          //   if (combinedRef.current) {
          //     if (combinedRef.current.dataset.gardenFocusVisible) {
          //       setIsHeaderFocused(true);
          //     }
          //   }
          // }, 0);
        },
        onBlur: () => setIsHeaderFocused(false),
        ...wrapperProps
      })}
    >
      {/* <StyledButton {...restTriggerProps}>
        <span>{children}</span>
      </StyledButton> */}
      <div style={{ display: 'flex', width: '100%' }}>{children}</div>
      <StyledRotateIcon isRotated={isExpanded}>
        <ChevronDown />
      </StyledRotateIcon>
    </StyledHeader>
  );
});

Header.displayName = 'Header';
