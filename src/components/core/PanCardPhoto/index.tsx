import { useEffect, useState } from 'react';

import { DoneIcon } from '@/assets/svg/done-icon';
import { CameraTextStyled, DivCameraTextStyled } from './index.style';

/**
 *
 * @returns PanCardPhoto
 */

interface Props {
  takePhoto?: any;
  text1?: string;
  text2?: string;
  text3?: string;
}

const PanCardPhotos = ({ takePhoto, text1, text2, text3 }: Props) => {
  const [text, setText] = useState<any>(text1);
  const [icon, setIcon] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setText(text2);
      setIcon(true);
    }, 3000);

    setTimeout(() => {
      setText(text3);
      takePhoto();
      setIcon(false);
    }, 5000);
  }, []);

  return (
    <DivCameraTextStyled>
      <CameraTextStyled>{text}</CameraTextStyled>
      {icon && <DoneIcon />}
    </DivCameraTextStyled>
  );
};
export default PanCardPhotos;
