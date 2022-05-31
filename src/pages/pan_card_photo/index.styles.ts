import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const DivContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

export const DivTextStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivCameraBox = styled.video`
  width: 100%;
  object-fit: cover;
  height: 100vh;
`;

export const DivFrontCamContainer = styled.div`
  display: flex;
`;

export const DivFrontCamLeftContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 140px;
  flex-grow: 9;
  > div {
    flex-grow: 8;
    backdrop-filter: blur(6px);
  }
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
  flex-grow: -1;
  margin: 1px;
`;

export const DivFrontCamRightContainer = styled.div`
  display: flex;
  flex-grow: 1;
  backdrop-filter: blur(6px);
`;

export const DivEmptyBlur = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  backdrop-filter: blur(6px);
`;

export const DivDocScanContainer = styled.div`
  display: flex;
  height: 220px;
  span {
    backdrop-filter: blur(6px);
  }
`;

export const DivDocScan = styled.div`
  border: 1px solid ${COLORS.SHAMROCK_100};
  margin: 1.8px;
  flex-grow: 5;
`;

export const PanCameraTextStyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Canvas = styled.canvas`
  display: none;
`;
