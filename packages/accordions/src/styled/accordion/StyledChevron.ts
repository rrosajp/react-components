/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import ChevronDown from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const COMPONENT_ID = 'accordions.chevron';

export interface IStyledChevron {
  isExpanded?: boolean;
}

export const StyledChevron = styled(ChevronDown).attrs<IStyledChevron>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledChevron>`
  transition: transform 0.25s ease-in-out;

  transform: ${props => {
    if (!props.isExpanded) {
      return undefined;
    }

    if (props.theme.rtl) {
      return 'rotate(-180deg) translateY(-1px)';
    }

    return 'rotate(180deg) translateY(-1px)';
  }};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledChevron.defaultProps = {
  theme: DEFAULT_THEME
};
