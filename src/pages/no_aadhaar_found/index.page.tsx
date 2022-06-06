import router from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import Button from '@/components/core/Button';

import { NoAadhaarFound } from '@/assets/svg/no-aadhaar';
import {
  DivMain,
  DivInner,
  DivBarIcon,
  DivCrossIcon,
  StyledTitle,
  StyledDescription,
  DivContent,
  BottomButtonDiv,
} from './index.styles';

const NoAadhaarNumber = () => {
  const { t } = useTranslation('no_aadhaar');
  const handleBack = () => {
    router.push('/aadhaar_offline_kyc');
  };

  const handleSendOtp = () => {
    router.push('/otpVerification');
  };

  return (
    <DivMain>
      <DivInner>
        <div>
          <DivBarIcon>
            <BarIcon />
          </DivBarIcon>
          <DivCrossIcon onClick={handleBack}>
            <CrossIcon />
          </DivCrossIcon>
        </div>
        <DivContent>
          <NoAadhaarFound />
          <StyledTitle>{t('No Aadhaar and PAN data found')}</StyledTitle>
          <StyledDescription>
            {t('We couldn’t find any data on digilocker so we suggest you to follow the traditional process')}
          </StyledDescription>
        </DivContent>
        <BottomButtonDiv>
          <Button onClick={handleSendOtp} className="my-5 m-auto">
            {t('Continue')}
          </Button>
        </BottomButtonDiv>
      </DivInner>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['no_aadhaar'])),
  },
});

export default NoAadhaarNumber;
