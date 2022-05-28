import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DescriptionDiv = styled.div`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.7);
`;

export const DivMain = styled.div`
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .otpInput1:focus {
    border: none;
    border-bottom: 2px solid #0000;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to left, ${COLORS.SKY_100}, ${COLORS.FAUX_CHINESE_BLUE}) border-box;
    text-align: center;
    outline: none;
  }
`;

export const CalendarDiv = styled.div`
  border: 1px;
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  .react-calendar {
    padding-bottom: 20px;
    border: none;
    width: 400px;
    max-width: 100%;
    background-color: #fff;
    color: #3f434a;
    border-radius: 8px;
    line-height: 1.125em;
    font-size: 16px;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.4;
    font-size: 16px;
    font-weight: 600;
  }
  .react-calendar__tile {
    font-size: 16px;
    font-weight: 600;
  }
  .react-calendar__navigation button {
    color: black;
    min-width: 44px;
    background: none;
    margin-top: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #000000;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    border-radius: 0px;
    font-weight: bold;
    color: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #38568f;
    border-radius: 0px;
    font-weight: bold;
    color: #38a1f7;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #38568f;
  }
  .react-calendar__tile--active {
    background: #38568f;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    color: white;
    border-radius: 0px;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #d2d2d2;
  }
  .react-calendar__tile--range {
    background: #d2d2d2;
    color: #38568f;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-radius: 0px;
    background: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-radius: 0px;
    background: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    color: white;
  }
  .confirmDisable {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(269.82deg, #38a1f7 100%, #38568f 100%);
    opacity: 0.6;
  }
  .confirmDisable:active,
  .confirmDisable:focus {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(269.82deg, #38a1f7 100%, #38568f 100%);
    opacity: 0.6;
  }
`;

export const DefaultOptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1.2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  background: #ffff;
  span {
    color: #121212;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    opacity: 0.6;
  }
`;

export const OptionsListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1.2px solid #000000;
  border-radius: 5px;
  padding: 0px 10px;
  background: #ffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  position: absolute;
  width: 100%;
`;
export const SingleOptionDiv = styled.div`
  border-bottom: 1.2px solid rgba(0, 0, 0, 0.2);
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  opacity: 0.8;
  .planeSpan {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    opacity: 0.8;
  }
  .blueSpan {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    background: linear-gradient(180deg, #38568f 0%, #38a1f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  :last-child {
    border-bottom: none;
  }
`;
export const CustomDropDown = styled.div`
  position: relative;
`;
