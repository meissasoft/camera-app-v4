import router from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import Button from '@/components/core/Button';

import { NotFound } from '@/assets/svg/not-found';
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
  const { t } = useTranslation('failed_to_fetch');
  const handleBack = () => {
    router.back();
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
          <NotFound />
          <StyledTitle>{t('Failed to fetch details')}</StyledTitle>
          <StyledDescription>
            {t('We couldn’t find any data on digilocker so we suggest you to follow the traditional process')}
          </StyledDescription>
        </DivContent>
        <BottomButtonDiv>
          <Button onClick={handleSendOtp} className="my-5 m-auto">
            {t('Try Again')}
          </Button>
        </BottomButtonDiv>
      </DivInner>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['failed_to_fetch'])),
  },
});

export default NoAadhaarNumber;
