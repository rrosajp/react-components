/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledHeader, StyledButton, StyledChevron, IStyledHeader } from '../../../styled';
import { useAccordionContext, useSectionContext } from '../../../utils';
import ChevronDown from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

export interface IHeaderProps extends HTMLAttributes<HTMLButtonElement> {
  hasChevron?: boolean;
}

export const Header = forwardRef<HTMLButtonElement, IHeaderProps>((props, ref) => {
  const { level, expandedSections, getTriggerProps, getHeaderProps } = useAccordionContext();
  const sectionIndex = useSectionContext();
  const { hasChevron, children, ...restProps } = props;

  const isExpanded = expandedSections.includes(sectionIndex);
  const [isHeaderFocused, setIsHeaderFocused] = useState(false);

  const triggerProps = getTriggerProps({ ref, index: sectionIndex, ...restProps }) as any;
  const { onClick, ...restTriggerProps } = triggerProps;

  const gardenId = (document.activeElement as any).dataset.gardenId;

  return (
    <StyledHeader
      {...getHeaderProps({
        role: 'heading',
        ariaLevel: level,
        onClick,
        onFocus: () => {
          console.log(`focused on header ${sectionIndex}`);
          setIsHeaderFocused(true);
        },
        onBlur: () => {
          setIsHeaderFocused(false);
        }
      })}
      isFocused={isHeaderFocused && gardenId === 'accordions.button'}
      isExpanded={isExpanded}
    >
      <StyledButton {...restTriggerProps}>
        {(props as any).label}
        {hasChevron && <StyledChevron isExpanded={isExpanded} />}
      </StyledButton>
      {children}
    </StyledHeader>
  );
});

Header.propTypes = {
  hasChevron: PropTypes.bool
};

Header.defaultProps = {
  hasChevron: true
};

Header.displayName = 'Header';
