import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  .btn {
    padding: 5px 8px 5px 6px;
    width: 85px;
    height: 36px;
    border-radius: 5px;
  }
  .btn:active,
  .btn:focus {
    background: linear-gradient(269.82deg, #38a1f7 0.1%, #38568f 99.85%);
    border: none;
    color: white;
    outline: transparent;
  }
  .btn2 {
    padding: 0px 8px 0px 0px;
    visibility: hidden;
  }
  .btn-primary {
    outline: none;
    background-color: #e2ecf3;
    border: none;
    /* border-color: #e2ecf3; */
    font-weight: 600;
    font-size: 12px;
  }
  .strong {
    color: black;
  }
`;
export const IdentificationStyled = styled.p`
  padding: 20px 0px;
  text-align: center;
  list-group-item: list-group-item-action;
`;

export const IdentificationStyled2 = styled.p`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  list-group-item: list-group-item-action;
`;

export const IdentificationTextStyled = styled.p`
  margin-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0px !important;
  color: #121212;
  opacity: 0.6;
`;
export const BoldText = styled.span`
  font-weight: 1000;
  margin-top: 5px;
  font-style: normal;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px !important;
  color: #121212 !important;
  opacity: 10 !important;
`;

export const IdentificationSelectStyled = styled.p`
  margin-top: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;
  color: black;
`;

export const IdentificationTextStyled2 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0px !important;
`;

export const IdentificationTextParentDiv = styled.p`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 215px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const IdentificationSmallTextStyled = styled.p`
  margin-top: 5px !important ;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #121212;
  opacity: 0.6;
`;
export const IdentificationSmallTextStyled2 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #121212;
  opacity: 0.6;
`;
export const StyledLine = styled.hr`
  opacity: 0.6;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: -20px;
`;

export const IdentifyText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;
export const DocumentContainer = styled.div`
  margin-left: 10px;
`;
export const DivDifference = styled.div`
  margin-top: 45px;
`;
export const DivButton = styled.div``;
export const DivVerificationCardStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivVerificationGoogleStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
`;

export const SpanTagButton = styled.div`
  background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 14px;
  height: 18px;
`;

export const DivButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 90px);
  row-gap: 0.7rem;
  column-gap: 0.1rem;
  text-align: center;
  justify-content: center;
  border: none;
  list-group-item: list-group-item-action;
  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 90px);
    column-gap: 0;
    justify-content: center;
  }
`;

export const SpanParagraph = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  margin-top: -10px;
`;
