export type Colors = typeof color;

const color = {
  error: '#FF4842',
  alarm: '#F73838',

  point1: '#001BEA',
  point2: '#015EFB',
  blue: '#015EFB',

  bg_white: '#343A40',
  bg_bg1: '#F1F1F3',
  bg_bg2: '#EBF0F8',

  white: '#FFF',
  gray50: '#FAFAFA',
  gray100: '#F8F9FA',
  gray150: '#F1F1F3',
  gray200: '#F1F3F5',
  gray300: '#E9ECEF',
  gray400: '#CED4DA',
  gray450: '#D6D6DC',
  gray500: '#ADB5BD',
  gray600: '#868E96',
  gray650: '#616C76',
  gray700: '#495057',
  gray800: '#343A40',
  gray900: '#212529',
  gray1000: '#191C1F',
  black: '#000',
} as const;

export const shadowStyles = {
  shadow1: '0 2px 4px rgba(0, 0, 0, 0.16)',
  shadow2: '0 2px 16px rgba(0, 0, 0, 0.1)',
  shadow3: '0 2px 4px rgba(0, 0, 0, 0.2)',
} as const;

const zIndex = {
  dropdown: 5,
  header: 10,
  modal: 15,
  backdrop: 30,
  toast: 20,
} as const;

const theme = {
  color,
  zIndex,
  shadowStyles,
};

export type ColorKeys = keyof typeof color;

export default theme;
