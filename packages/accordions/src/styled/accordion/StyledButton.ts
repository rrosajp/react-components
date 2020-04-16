/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const COMPONENT_ID = 'accordions.button';

export interface IStyledButton {
  isCompact?: boolean;
}

export const StyledButton = styled.button.attrs<IStyledButton>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledButton>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  background: transparent;
  padding: ${props =>
    props.isCompact
      ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`};
  width: 100%;
  text-align: left;
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  &:hover {
    color: ${props => getColor('blue', 600, props.theme)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
