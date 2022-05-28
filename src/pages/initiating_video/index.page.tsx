import { useRouter } from 'next/router';

import { useEffect } from 'react';
import Header from '@/components/core/Header';

import { HourGlassIcon } from '@/assets/svg/hourglass-icon';
import { DivMain, DivSvg, DivForm, ParagraphStyled, TextStyled } from './index.style';
/**
 *
 * @returns Initiating a video call page
 */
const InitiatingVideo = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/initiated_video_call');
    }, 3000);
  }, []);

  const onClickHeaderIcon = () => {
    router.push('/reshedule');
  };

  return (
    <DivMain>
      <div>
        <Header text="Initiating a video call" onClick={onClickHeaderIcon} />
        <DivSvg>
          <HourGlassIcon />
        </DivSvg>
        <DivForm>
          <TextStyled>Please wait...</TextStyled>
          <ParagraphStyled>While we are searching for the agent to initiate the video call</ParagraphStyled>
        </DivForm>
      </div>
    </DivMain>
  );
};

export default InitiatingVideo;
