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
  const { t } = useTranslation('no_aadhaar_found');
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
          <StyledTitle>{t('no_aadhaar_and_pan_data_found')}</StyledTitle>
          <StyledDescription>
            {t('we_couldn’t_find_any_data_on_digilocker_so_we_suggest_you_to_follow_the_traditional_process')}
          </StyledDescription>
        </DivContent>
        <BottomButtonDiv>
          <Button onClick={handleSendOtp} className="my-5 m-auto">
            {t('continue')}
          </Button>
        </BottomButtonDiv>
      </DivInner>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['no_aadhaar_found'])),
  },
});

export default NoAadhaarNumber;
