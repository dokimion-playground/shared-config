import styled, { css } from 'styled-components';
import { FONT_STYLES } from '../../styles/common.style';
import { ColorKeys } from '../../styles/theme';

interface TextProps {
  variant?: keyof typeof FONT_STYLES;
  color?: string;
}

export const Text = styled.span<TextProps>`
  ${({ variant }) => variant && FONT_STYLES[variant]};
  ${({ theme, color }) =>
    color &&
    css`
      color: ${theme.color[color as ColorKeys] || color};
    `}
`;
