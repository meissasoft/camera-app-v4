import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const FieldTextareaStyled = styled.textarea`
  width: 100%;
  height: 118px;

  resize: none;
  color: ${COLORS.GREY_TEXT};
  &.MuiTextField-root > div {
    border-radius: 6px;
    background-color: ${COLORS.GREY_4};
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  &.error {
    border-color: ${COLORS.RED_100};
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${COLORS.THEME_BUTTON};
    }
  }
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #121212;
    opacity: 0.6;
  }
  :active,
  :focus {
    border: none;
    box-shadow: none;
    outline: none;
  }
`;
