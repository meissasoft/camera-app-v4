import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import { TextStyled } from './index.styles';

/**
 *
 * @returns bottom text video call
 */

const BottomText = () => {
  const { t } = useTranslation('initiated_video_call');
  const [text, setText] = useState<string>(`${t('what_is_the_date_today_in_dd_mm_yyyy_format?')}`);

  useEffect(() => {
    setTimeout(() => {
      setText(`${t('kindly_try_changing_your_network_your_connection_is_weak.!')}`);
    }, 4000);
    setTimeout(() => {
      setText(`${t('kindly_stay_stable_for_the_call_to_continue')}`);
    }, 5000);
    setTimeout(() => {
      setText(`${t('kindly_follow_the_instructions_shown_here')}`);
    }, 6000);
  }, []);

  return <TextStyled>{text}</TextStyled>;
};

export default BottomText;
