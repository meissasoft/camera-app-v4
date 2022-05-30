import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';
export const DivMain = styled.div`
  background: ${COLORS.BLACK_200};
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;
export const DivTextStyled = styled.div`
  display: flex;
  justify-content: center;
`;
export const DivCameraBox = styled.video`
  width: 100%;
  object-fit: cover;
  height: 100vh;
  opacity: 0.1;
`;
export const DivFrontCamContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  position: absolute;
  right: 20px;
  margin-top: 20px;
  height: 140px;
  opacity: 0.1;
`;
export const DivFrontCam = styled.video`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  object-fit: cover;
  border: 1.5px solid ${COLORS.WHITE};
  border-radius: 12px;
`;
export const DivDocScanContainer = styled.div`
  display: flex;
  position: absolute;
  top: 35%;
  right: 20px;
  left: 20px;
  height: 220px;
  border: 1px solid ${COLORS.SHAMROCK_100};
`;
export const DivDocScan = styled.video`
  width: 100%;
  object-fit: cover;
  height: 218px;
`;
export const PanCameraTextStyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const Canvas = styled.canvas`
  display: none;
`;
