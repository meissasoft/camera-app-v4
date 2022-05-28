import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  background-color: black;
  height: 100vh;
  padding: 20px;
  position: relative;
`;

export const CameraStyled = styled.div`
  padding: 20px 0px;
`;

export const DivCameraBox = styled.video`
  position: relative;
  margin: 152px auto auto auto;
  width: 320px;
  height: 340px;
  border-radius: 268px;
  border-style: dashed;
  display: flex;
  justify-content: center;
  object-fit: cover;
  background: ${COLORS.BLACK_200}

  border-color: #ffffff;
  @media (max-width: 500px) {
    width: 327px;
    height: 340px;
  }
  @media (max-width: 370px) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: 330px) {
    width: 240px;
    height: 240px;
  }
  @media (max-height: 667px) {
    width: 270px;
    height: 270px;
  }
`;

export const DivVideoBox = styled.video`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: end
  flex-direction: column;
  width: 120px;
  height: 140px;
  margin-left: 53%;
  margin-top: -450px;
  border: 1.5px solid #FFFFFF;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 500px) {
    margin-top: -450px;
    margin-left: 54%;
  }

  @media (max-width: 474px) {
    margin-top: -450px;
    margin-left: 55%;
  }

  @media (max-width: 371px) {
    margin-top: -385px;
    margin-left: 48%;
  }

  @media (max-width: 331px) {
    margin-top: -355px;
    margin-left: 44%;
  }

  @media (max-width: 293px) {
    margin-top: -355px;
    margin-left: 43%;
  }

  @media (max-height: 668px) {
    margin-top: -380px;
    margin-left: 49%;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  @media (max-width: 436px) {
    object-fit: cover;
  }
`;

export const Canvas = styled.canvas`
  display: none;
`;

export const CameraTextStyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
