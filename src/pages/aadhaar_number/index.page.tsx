import router from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import Button from '@/components/core/Button';

import FieldInput from '@/components/core/FieldInput';
import { VectorIcon } from '@/assets/svg/reload';
import {
  DivMain,
  CapchaContainer,
  DivInner,
  DivBarIcon,
  DivCrossIcon,
  StyledTitle,
  StyledDescription,
  StyledSpan,
  CapchaTextDiv,
  CapchaTextSpan,
  BottomButtonDiv,
} from './index.styles';

const AadhaarNumber = () => {
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
          <StyledTitle>Aadhaar number</StyledTitle>
          <StyledDescription>Enter your 12 digit Aadhaar number to begin</StyledDescription>
          <FieldInput placeholder={'Aadhaar Number*'} name={'aadhar'} className="my-2 m-auto rounded border p-2" />
          <FieldInput
            placeholder={'Enter Security Code*'}
            name={'security'}
            className="my-2 m-auto rounded border p-2"
          />
          <StyledSpan>Type the character you see in the picture</StyledSpan>
          <CapchaContainer>
            <CapchaTextDiv>
              <CapchaTextSpan>HnsoeG</CapchaTextSpan>
            </CapchaTextDiv>
            <VectorIcon />
          </CapchaContainer>
        </div>
        <BottomButtonDiv>
          <Button onClick={handleSendOtp} className="my-5 m-auto">
            Send OTP
          </Button>
        </BottomButtonDiv>
      </DivInner>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default AadhaarNumber;
