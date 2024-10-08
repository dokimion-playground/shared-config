import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
`;

export const HiddenInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: none;

  &:checked + span {
    background-color: ${({ theme }) => theme.color.blue};
  }

  &:focus + span {
    box-shadow: 0 0 1px ${({ theme }) => theme.color.blue};
  }

  &:checked + span::before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22x);
    transform: translateX(22px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.gray400};
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }
`;
