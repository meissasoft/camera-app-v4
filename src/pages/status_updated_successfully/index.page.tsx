import { useEffect, useState } from 'react';
import router from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Lottie from 'react-lottie';

import lottieFile from '@/assets/jpg/7893-confetti-cannons.json';
import { VerifiiedIcon } from '@/assets/svg/verified-Icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import {
  DivBottom,
  DivMain,
  VerificationCardStyled,
  VerificationSuccessfulSmallTextStyled,
  VerificationSuccessfulTextStyled,
} from './index.styles';

/**
 *
 * @returns status_updated_successfully page
 */
const onClickHeaderIcon = () => {
  router.push('/signature_captured');
};

const StatusUpdatedSuccessfully = () => {
  const [displayLottie, setDisplayLottie] = useState<boolean>(false);
  const [stop, setStop] = useState<boolean>(false);

  const { t } = useTranslation('kyc_update_successfully');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (displayLottie === true) {
      setTimeout(() => {
        setStop(true);
        setDisplayLottie(false);
      }, 4000);
    }
  }, [displayLottie]);

  const lottieHandler = () => {
    setDisplayLottie(true);
  };

  return (
    <DivMain>
      <div>
        <Header text={t('status')} onClick={onClickHeaderIcon} />
        <VerificationCardStyled>
          <VerifiiedIcon />
          {displayLottie && <Lottie options={defaultOptions} isStopped={stop} style={{ position: 'fixed' }} />}
        </VerificationCardStyled>
        <VerificationSuccessfulTextStyled>{t('kyc_updated_successfully')}</VerificationSuccessfulTextStyled>
        <VerificationSuccessfulSmallTextStyled>
          {t('your_verification_is_completed_and_all_your_data_is_stored_securely.')}
        </VerificationSuccessfulSmallTextStyled>
      </div>
      <DivBottom>
        <Button className="m-auto" onClick={lottieHandler}>
          {t('done')}
        </Button>
      </DivBottom>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['kyc_update_successfully'])),
  },
});

export default StatusUpdatedSuccessfully;
