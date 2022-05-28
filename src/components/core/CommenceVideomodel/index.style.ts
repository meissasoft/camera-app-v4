import styled from '@emotion/styled';
import { Modal } from 'react-bootstrap';
import { COLORS } from '@/constants/colors';

export const DivModelButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivModelButton1 = styled.div`
  flex-grow: 6;
  justify-content: flex-start;
`;

export const DivModelButton2 = styled.div`
  flex-grow: 6;
`;
export const ParagraphModel = styled.p`
  margin-right: 17%;
  margin-bottom: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #6e6e6f;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const ParagraphText1Model = styled.span`
  font-weight: 600;
  color: black;
`;
export const BodyModalStyled = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  position: absolute;
  width: 327px;
  height: 484px;
  left: calc(50% - 327px / 2 + 0.5px);
  top: calc(100% - 500px / 2);
  background: rgba(0, 0, 0, 0.8);
  background: rgba(255, 255, 255);
  backdrop-filter: blur(54.3656px);

  border-radius: 14px;
  .modal-body {
    width: 100%;
  }
  .modal-footer {
    width: 100%;
    padding: 0;
    flex-wrap: nowrap;
    border-top: 0px solid rgba(60, 60, 67, 0.29);
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }

  .btn-primary {
    background-color: rgb(219 219 219);
    border-color: rgb(219 219 219);
    color: #007aff;
  }
  .modal-cont {
    border: none;
  }
  .col-5 {
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .modal-footer > * {
    margin: 0;
    padding: 0.25rem;
  }
  .border-left {
    border-left: 0px solid rgba(60, 60, 67, 0.29);
  }
  .box {
    width: 90%;
    height: 20px;
    margin-top: 8%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;
export const ParagraphTextModel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0;
  text-align: left;
  letter-spacing: -0.078px;
  color: #6e6e6f;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const IineModel = styled.p`
  position: absolute;
  height: 0.5px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: rgba(60, 60, 67, 0.29);
`;
export const CenterModel = styled.p`
  left: calc(50% - 0.5px / 2 - 0.25px);
  bottom: 0px;
  background: rgba(60, 60, 67, 0.29);
`;

export const GreaterThenModel = styled.p`
  margin-top: 0%;
`;
export const CenterHeaderModel = styled.p`
  margin-left: 50px;
  text-align: center;
`;
export const RowTextModel = styled.p`
  margin-top: 0px;
`;
export const ButtonModel = styled.p`
  margin-top: 0px;
`;
export const Button1Model = styled.p`
  width: 80px;
  height: 40px;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height */

  text-align: center;
  text-align: center;
  margin-left: -20px;
  margin-top: -10px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(269.82deg, #38a1f7 0.1%, #38568f 99.85%);
  border-radius: 5px;
`;
export const Button2Model = styled.p`
  width: 104px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-top: -10px;
  text-align: center;
  height: 40px;
  background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  border-radius: 5px;
  cursor: pointer;
`;
export const CrossButtonModel = styled.div`
  margin-right: -20px;
  margin-bottom: 18.88px;
  cursor: pointer;
`;
export const ButtonBorderModel = styled.p`
  width: 104px;
  margin-bottom: -10px;
  height: 40px;
  text-align: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(269.82deg, #38a1f7 0.1%, #38568f 99.85%);
  opacity: 0.1;
  border-radius: 5px;
  margin-bottom: -35px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
export const Center1Model = styled(Modal)`
  & > div > div {
    border: none !important;
    cursor: pointer;
  }
`;
