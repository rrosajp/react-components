/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.panel';

const paddingStyles = (props: any) => {
  const { base } = props.theme.space;
  let paddingTop = base * 2;
  let paddingRight = base * 5;
  let paddingBottom = base * 8;
  let paddingLeft = base * 5;

  if (props.isCompact) {
    paddingTop = base * 2;
    paddingRight = base * 3;
    paddingBottom = base * 4;
    paddingLeft = base * 3;
  }

  if (props.isExpanded === false) {
    paddingTop = 0;
    paddingBottom = 0;
  }

  return css`
    padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
  `;
};

export interface IStyledPanel {
  isExpanded?: boolean;
  isCompact?: boolean;
  isBare?: boolean;
}

export const StyledPanel = styled.div.attrs<IStyledPanel>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPanel>`
  transition: max-height 0.25s ease-in-out, visibility 0.25s ease-in-out;
  visibility: ${props => !props.isExpanded && 'hidden'};
  max-height: ${props => !props.isExpanded && '0 !important'}; /* stylelint-disable-line */
  overflow: hidden;

  ${paddingStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPanel.defaultProps = {
  theme: DEFAULT_THEME
};
