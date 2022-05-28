import { useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { DoneIcon } from '@/assets/svg/done-icon';
import { CameraTextStyled, DivCameraTextStyled } from './index.style';

/**
 *
 * @returns BottomTextLivePhoto
 */

interface Props {
  takePhoto?: any;
}

const BottomTextLivePhoto = ({ takePhoto }: Props) => {
  const { t } = useTranslation('live_photo');
  const [instruction, setInstruction] = useState<any>(t('Stay Still for a live photo'));
  const [icon, setIcon] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setInstruction(t('Capturing... Please Wait'));
      setIcon(false);
      takePhoto();
    }, 3000);

    setTimeout(() => {
      setInstruction(t('Photo Captured successfully'));
      setIcon(true);
    }, 5000);
  }, []);

  return (
    <DivCameraTextStyled>
      <CameraTextStyled>{instruction}</CameraTextStyled>
      {icon && <DoneIcon />}
    </DivCameraTextStyled>
  );
};

export default BottomTextLivePhoto;
