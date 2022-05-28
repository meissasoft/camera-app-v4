import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { PasswordIcon } from '@/assets/svg/password';
import Button from '@/components/core/Button';
import OTPInput from '@/components/core/Otp';

import { DivMain } from './index.styles';

const VerifyOtp = () => {
  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/aadhaar_number');
  };

  const handleContinue = () => {
    router.push('/download_successfully');
  };

  return (
    <DivMain>
      <div className="inner">
        <div>
          <div className="barIcon">
            <BarIcon />
          </div>
          <div className="crossIcon" onClick={handleBack}>
            <CrossIcon />
          </div>
          <div className="mt-5 text-center">
            <PasswordIcon />
            <div className="title">{t('verification_code')}</div>
            <p className="description">{t('please_enter_the_verification_code_we_sent_to_your_phone_number')}</p>
          </div>
          <OTPInput
            autoFocus
            isNumberInput
            length={6}
            className="otpContainer"
            inputClassName="otpInput"
            onChangeOTP={(e) => {
              console.log(e);
            }}
          />

          <div className="d-flex w-100 justify-content-center align-items-center mt-4 mb-4 ">
            <span className="mx-2 code-text">{t("i_did'nt_receive_a_code")}</span>
            <button className="btn btn-primary">
              <span className="text">{t('resend')}</span>
            </button>
          </div>

          <div className="border text-dark w-100 mb-4"></div>

          <div className="text-center">
            <div className="title">Enter Share Code</div>
            <p className="description">Create a 6 digit code to secure your offline eKYC </p>
          </div>
          <div>
            <OTPInput
              isNumberInput
              length={4}
              className="otpContainer"
              inputClassName="otpInput"
              onChangeOTP={(e) => {
                console.log(e);
              }}
            />
          </div>
        </div>
        <Button isBottom onClick={handleContinue} className="my-5 m-auto">
          Proceed
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

export default VerifyOtp;
