/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledButton } from './StyledButton';

const COMPONENT_ID = 'accordions.header';

export interface IStyledHeader {
  label?: string;
  isExpanded?: boolean;
  isFocused?: boolean;
  isCompact?: boolean;
}

export const StyledHeader = styled.div.attrs<IStyledHeader>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeader>`
  display: flex;
  align-items: center;
  border-color: ${props => props.isFocused && 'rgb(31, 115, 183)'};
  box-shadow: ${props => props.isFocused && 'rgba(31, 115, 183, 0.35) 0px 0px 0px 3px'};
  font-size: ${props => props.theme.fontSizes.md}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
