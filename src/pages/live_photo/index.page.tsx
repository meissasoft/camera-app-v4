import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useUserMedia } from '@/hooks/useUserMedia';

import BottomTextLivePhoto from '@/components/LivePhotoBottom';
import { Canvas, DivCameraBox, DivMain, DivVideoBox, CameraStyled, CameraTextStyledWrapper } from './index.style';

/**
 *
 * @returns LiveCameraPhoto page
 */

const LiveCameraPhoto = () => {
  const router = useRouter();
  const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: 'environment' },
  };

  const mediaStream = useUserMedia(CAPTURE_OPTIONS, false);

  const videoRef = useRef(null) as any;
  const videoRef1 = useRef(null) as any;
  const photoRef = useRef(null) as any;

  const takePhoto = () => {
    const width = 314;
    const height = width / (16 / 9);
    const video = videoRef.current;
    const photo = photoRef.current as any;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = photo.toDataURL();
    console.log('dataUrl', dataUrl);
  };

  useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
    }
    if (mediaStream && videoRef1.current && !videoRef1.current.srcObject) {
      videoRef1.current.srcObject = mediaStream;
      videoRef1.current.play();
    }
  }, [mediaStream]);

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 10000);
  }, [mediaStream]);

  // for clear image
  // function handleClear() {
  //   const context = photoRef.current.getContext('2d');
  //   context.clearRect(0, 0, photoRef.current.width, photoRef.current.height);
  // }

  return (
    <DivMain>
      <CameraStyled>
        <DivCameraBox ref={videoRef}></DivCameraBox>
        <Canvas ref={photoRef}></Canvas>
        <DivVideoBox ref={videoRef1} />
      </CameraStyled>
      <CameraTextStyledWrapper>
        <BottomTextLivePhoto takePhoto={takePhoto} />
      </CameraTextStyledWrapper>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['live_photo'])),
  },
});
export default LiveCameraPhoto;
