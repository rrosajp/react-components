/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.header';

export interface IStyledHeader {
  label?: string;
  isExpanded?: boolean;
}

export const StyledHeader = styled.div.attrs<IStyledHeader>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeader>`
  font-size: 14px;
  width: 100%;
  display: flex;
  border: ${props => (props.isExpanded ? '1px solid green' : '1px solid #DDD')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
