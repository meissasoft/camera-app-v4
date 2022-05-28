import { useEffect, useState } from 'react';

import { TextStyled } from './index.styles';

/**
 *
 * @returns bottom text video call
 */

const BottomText = () => {
  const [text, setText] = useState<string>('What is the date today ( in DD-MM-YYYY format ) ?');

  useEffect(() => {
    setTimeout(() => {
      setText('Kindly try changing your network, your connection is weak.!');
    }, 2000);
    setTimeout(() => {
      setText('Kindly stay stable for the call to continue');
    }, 3000);
    setTimeout(() => {
      setText('Kindly follow the instructions shown here');
    }, 4000);
  }, []);

  return <TextStyled>{text}</TextStyled>;
};

export default BottomText;
