import { useEffect, useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import router from 'next/router';
import { useUserMedia } from '@/hooks/useUserMedia';

import BottomText from '@/components/VideoBottomText';
import { DivCameraBox, DivFrontCam, DivMain, DivFrontCamContainer, DivTextStyled } from './index.style';

/**
 *
 * @returns initiated_video_call page
 */

const InitiatedVideoCall = () => {
  const front = {
    audio: true,
    video: { facingMode: 'user' }, // change to user for front camera
  };

  const videoRefFront: any = useRef(null);
  const videoRefBack: any = useRef(null);
  const mediaStreamFront = useUserMedia(front, false);
  const mediaRecorderFront: any = useRef(null);
  const mediaRecorderBack: any = useRef(null);
  const blobsRecordedFront: any = [];
  const blobsRecordedBack: any = [];

  useEffect(() => {
    if (mediaStreamFront && videoRefFront.current && !videoRefFront.current.srcObject) {
      videoRefFront.current.setAttribute('autoplay', '');
      videoRefFront.current.setAttribute('muted', '');
      videoRefFront.current.setAttribute('playsinline', '');
      videoRefFront.current.srcObject = mediaStreamFront;
      videoRefFront.current.play();
      try {
        mediaRecorderFront.current = new MediaRecorder(mediaStreamFront, {
          mimeType: 'video/webm',
        });
        mediaRecorderFront.current.start(1000);
        mediaRecorderFront.current.addEventListener('dataavailable', function (e: any) {
          blobsRecordedFront.push(e.data);
        });
      } catch (exe) {
        mediaRecorderFront.current = new MediaRecorder(mediaStreamFront, {
          mimeType: 'video/mp4',
        });
        mediaRecorderFront.current.start(1000);
        mediaRecorderFront.current.addEventListener('dataavailable', function (e: any) {
          blobsRecordedFront.push(e.data);
        });
      }
    }
    if (mediaStreamFront && videoRefBack.current && !videoRefBack.current.srcObject) {
      videoRefBack.current.setAttribute('autoplay', '');
      videoRefBack.current.setAttribute('muted', '');
      videoRefBack.current.setAttribute('playsinline', '');
      videoRefBack.current.srcObject = mediaStreamFront;
      videoRefBack.current.play();
      try {
        mediaRecorderBack.current = new MediaRecorder(mediaStreamFront, {
          mimeType: 'video/webm',
        });
        mediaRecorderBack.current.start(1000);
        mediaRecorderBack.current.addEventListener('dataavailable', function (e: any) {
          blobsRecordedFront.push(e.data);
        });
      } catch (exe) {
        mediaRecorderBack.current = new MediaRecorder(mediaStreamFront, {
          mimeType: 'video/mp4',
        });
        mediaRecorderBack.current.start(1000);
        mediaRecorderBack.current.addEventListener('dataavailable', function (e: any) {
          blobsRecordedBack.push(e.data);
        });
      }
    }
  }, [mediaStreamFront]);

  useEffect(() => {
    setTimeout(() => {
      router.push('/live_photo');
    }, 10000);
  }, []);

  return (
    <DivMain>
      <DivFrontCamContainer>
        <DivFrontCam ref={videoRefFront} muted playsInline />
      </DivFrontCamContainer>
      <DivCameraBox ref={videoRefBack} muted playsInline />
      <DivTextStyled>
        <BottomText />
      </DivTextStyled>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['initiated_video_call'])),
  },
});

export default InitiatedVideoCall;
