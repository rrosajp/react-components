/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.chevron';

export interface IStyledRotateIcon {
  isExpanded?: boolean;
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const StyledRotateIcon = styled(({ children, isRotated, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRotateIcon>`
  transform: ${props => props.isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  transition: transform 0.25s ease-in-out;
  margin-top: -${props => props.theme.space.base * 0.5}px;
  margin-right: ${props => props.theme.space.base * 5}px;
  vertical-align: middle;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRotateIcon.defaultProps = {
  theme: DEFAULT_THEME
};
