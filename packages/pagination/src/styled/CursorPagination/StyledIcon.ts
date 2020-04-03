/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cloneElement, Children } from 'react';
import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export interface IStyledIcon {
  type: 'first' | 'next' | 'previous' | 'last';
}

export const StyledIcon = styled(({ children, ...props }) =>
  cloneElement(Children.only(children), props)
)`
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
  margin: 0 ${props => props.theme.space.base * 0.5}px;
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
