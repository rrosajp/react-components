/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledPage } from '../OffsetPagination/StyledPage';

const COMPONENT_ID = 'cursor_pagination.cursor';

/**
 * 1. Reset CSS from <button>.
 * 2. Reset CSS from <StyledPage>.
 */
export const StyledCursor = styled(StyledPage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  align-items: center;
  border: none; /* [1] */
  background: transparent; /* [1] */
  padding: ${props => `0px ${props.theme.space.base * 2}px`};
  min-width: unset; /* [2] */
  max-width: none; /* [2] */
  overflow: visible;
  /* stylelint-disable-next-line */
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: 0px !important; /* [2] */

  &:not(:last-of-type) {
    margin-right: ${props => props.theme.space.base}px;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCursor.defaultProps = {
  theme: DEFAULT_THEME
};
