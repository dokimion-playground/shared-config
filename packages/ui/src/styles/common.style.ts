import { css, RuleSet } from 'styled-components';

export type FontWeights = typeof fontWeight;
export type FontStyles = typeof FONT_STYLES;
export type FontStyleKeys = keyof FontStyles;

export const fontWeight = {
  extrabold: 900,
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
} as const;

export const addToPx = (value: number | string) => css`
  ${typeof value === 'number' ? `${value}px` : value}
`;

const generateFontStyle = ({
  size,
  weight,
  lineHeight,
}: {
  size: string;
  weight: number;
  lineHeight: string;
}) => css`
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
`;

export const FONT_STYLES = {
  /** Bold: 700, Semibold: 600 , Medium: 500, Regular: 400 */
  H1_B: generateFontStyle({
    size: '48px',
    weight: fontWeight.bold,
    lineHeight: '56px',
  }),
  H2_B: generateFontStyle({
    size: '36px',
    weight: fontWeight.bold,
    lineHeight: '52px',
  }),
  H2_M: generateFontStyle({
    size: '36px',
    weight: fontWeight.medium,
    lineHeight: '43px',
  }),
  H3_S: generateFontStyle({
    size: '30px',
    weight: fontWeight.semibold,
    lineHeight: '40px',
  }),
  H4_B: generateFontStyle({
    size: '28px',
    weight: fontWeight.bold,
    lineHeight: '34px',
  }),
  H4_M: generateFontStyle({
    size: '28px',
    weight: fontWeight.medium,
    lineHeight: '34px',
  }),
  H5_R: generateFontStyle({
    size: '26px',
    weight: fontWeight.regular,
    lineHeight: '38px',
  }),
  H5_S: generateFontStyle({
    size: '26px',
    weight: fontWeight.semibold,
    lineHeight: '38px',
  }),
  H6_S: generateFontStyle({
    size: '26px',
    weight: fontWeight.semibold,
    lineHeight: '29px',
  }),
  H7_M: generateFontStyle({
    size: '20px',
    weight: fontWeight.medium,
    lineHeight: '24px',
  }),
  H7_S: generateFontStyle({
    size: '20px',
    weight: fontWeight.semibold,
    lineHeight: '24px',
  }),
  H7_B1: generateFontStyle({
    size: '20px',
    weight: fontWeight.bold,
    lineHeight: '24px',
  }),
  H7_B2: generateFontStyle({
    size: '20px',
    weight: fontWeight.bold,
    lineHeight: '30px',
  }),
  BODY1_R: generateFontStyle({
    size: '18px',
    weight: fontWeight.regular,
    lineHeight: '24px',
  }),
  BODY1_M1: generateFontStyle({
    size: '18px',
    weight: fontWeight.medium,
    lineHeight: '21px',
  }),
  BODY1_M2: generateFontStyle({
    size: '18px',
    weight: fontWeight.medium,
    lineHeight: '28px',
  }),
  BODY1_B1: generateFontStyle({
    size: '18px',
    weight: fontWeight.bold,
    lineHeight: '20px',
  }),
  BODY1_B2: generateFontStyle({
    size: '18px',
    weight: fontWeight.bold,
    lineHeight: '28px',
  }),
  BODY1_B3: generateFontStyle({
    size: '18px',
    weight: fontWeight.bold,
    lineHeight: '32px',
  }),
  BODY1_S1: generateFontStyle({
    size: '18px',
    weight: fontWeight.semibold,
    lineHeight: '32px',
  }),
  BODY1_S2: generateFontStyle({
    size: '18px',
    weight: fontWeight.semibold,
    lineHeight: '32px',
  }),

  BODY3_R1: generateFontStyle({
    size: '16px',
    weight: fontWeight.regular,
    lineHeight: '18px',
  }),
  BODY3_R2: generateFontStyle({
    size: '16px',
    weight: fontWeight.regular,
    lineHeight: '21px',
  }),
  BODY3_R3: generateFontStyle({
    size: '16px',
    weight: fontWeight.regular,
    lineHeight: '24px',
  }),
  BODY3_M1: generateFontStyle({
    size: '16px',
    weight: fontWeight.regular,
    lineHeight: '20px',
  }),
  BODY3_M2: generateFontStyle({
    size: '16px',
    weight: fontWeight.medium,
    lineHeight: '24px',
  }),
  BODY3_B1: generateFontStyle({
    size: '16px',
    weight: fontWeight.bold,
    lineHeight: '20px',
  }),
  BODY3_B2: generateFontStyle({
    size: '16px',
    weight: fontWeight.bold,
    lineHeight: '28px',
  }),
  BODY3_S: generateFontStyle({
    size: '16px',
    weight: fontWeight.semibold,
    lineHeight: '24px',
  }),
  BODY4_S: generateFontStyle({
    size: '15px',
    weight: fontWeight.semibold,
    lineHeight: '40px',
  }),
  BODY4_S1: generateFontStyle({
    size: '15px',
    weight: fontWeight.semibold,
    lineHeight: '24px',
  }),
  BODY5_R: generateFontStyle({
    size: '14px',
    weight: fontWeight.regular,
    lineHeight: '16px',
  }),
  BODY5_M: generateFontStyle({
    size: '14px',
    weight: fontWeight.medium,
    lineHeight: '16px',
  }),
  BODY5_S: generateFontStyle({
    size: '14px',
    weight: fontWeight.semibold,
    lineHeight: '20px',
  }),
  BODY5_E: generateFontStyle({
    size: '14px',
    weight: fontWeight.extrabold,
    lineHeight: '20px',
  }),
  CAPTION1_R: generateFontStyle({
    size: '12px',
    weight: fontWeight.regular,
    lineHeight: '14px',
  }),
  CAPTION1_M: generateFontStyle({
    size: '12px',
    weight: fontWeight.medium,
    lineHeight: '20px',
  }),
  CAPTION1_S: generateFontStyle({
    size: '12px',
    weight: fontWeight.semibold,
    lineHeight: '14px',
  }),
  CAPTION3_R: generateFontStyle({
    size: '10px',
    weight: fontWeight.regular,
    lineHeight: '12px',
  }),
  CAPTION3_B: generateFontStyle({
    size: '10px',
    weight: fontWeight.bold,
    lineHeight: '18px',
  }),
} as const;

export const TextEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FlexCenterAlign = (
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse',
) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${flexDirection};
`;

export const ScrollBar = css`
  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.gray200};

    border-radius: 0 8px 8px 0;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    background: ${({ theme }) => theme.color.gray400};
    border: 4px solid ${({ theme }) => theme.color.gray200};
    border-radius: 8px;
    background-clip: padding-box;
  }
`;

export const DisabledBorderStyles = css`
  background-color: ${({ theme }) => theme.color.gray150};
  border-color: ${({ theme }) => theme.color.gray400};
  cursor: not-allowed;
`;

export const HoverBorderStyles = css`
  border: 1px solid ${({ theme }) => theme.color.black};
`;

export const ActiveBorderStyles = css`
  border: 1px solid ${({ theme }) => theme.color.blue};
`;

export const ErrorBorderStyles = css`
  border: 1px solid ${({ theme }) => theme.color.error};
`;
