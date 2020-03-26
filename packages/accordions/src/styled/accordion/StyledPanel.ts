/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.panel';

export interface IStyledPanel {
  isExpanded?: boolean;
}
// padding: ${props => (props.isExpanded ? 8 : 0)}px 40px ${props => (props.isExpanded ? 32 : 0)}px
// 40px;
// display: ${props => props.isExpanded && 'none'};
export const StyledPanel = styled.div.attrs<IStyledPanel>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPanel>`
  background-color: white;
  margin-bottom: 20px;
  padding: 8px 40px 32px 40px;
  background: orange;
  transition: height 0.25s ease-in-out, visibility 0.25s ease-in-out;
  overflow: hidden;
  visibility: ${props => !props.isExpanded && 'hidden'};
  height: ${props => {
    return !props.isExpanded && '0 !important'; /* stylelint-disable-line */
  }};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPanel.defaultProps = {
  theme: DEFAULT_THEME
};
