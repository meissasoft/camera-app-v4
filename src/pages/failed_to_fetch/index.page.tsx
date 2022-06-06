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
          <StyledTitle>{t('failed_to_fetch_details')}</StyledTitle>
          <StyledDescription>
            {t('we_couldn’t_find_any_data_on_digilocker_so_we_suggest_you_to_follow_the_traditional_process')}
          </StyledDescription>
        </DivContent>
        <BottomButtonDiv>
          <Button onClick={handleSendOtp} className="my-5 m-auto">
            {t('try_again')}
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
