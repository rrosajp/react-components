/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.button';

export interface IStyledButton {
  arg?: boolean;
}

export const StyledButton = styled.button.attrs<IStyledButton>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledButton>`
  width: 100%;
  padding: 20px 40px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: space-between;
  outline: none;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
