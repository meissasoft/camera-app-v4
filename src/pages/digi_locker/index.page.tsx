import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/core/Header';
import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import Button from '@/components/core/Button';

import { DivMain, HeaderDiv } from './index.styles';

const DigiLocker = () => {
  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/fill_the_form');
  };

  const handleContinue = () => {
    router.push('/commence_your_video_kyc');
  };

  return (
    <DivMain>
      <HeaderDiv>
        <Header text={t('Digilocker')} onClick={handleBack} />
      </HeaderDiv>
      <div className="inner">
        <div>
          <div className="barIcon">
            <BarIcon />
          </div>
          <div className="crossIcon" onClick={handleBack}>
            <CrossIcon />
          </div>
        </div>
        <Button isBottom onClick={handleContinue} className="my-5 m-auto">
          Next
        </Button>
      </div>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default DigiLocker;
