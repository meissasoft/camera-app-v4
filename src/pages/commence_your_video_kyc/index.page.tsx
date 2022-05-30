import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import FieldInput from '@/components/core/FieldInput';
import FieldTextarea from '@/components/core/TextArea';

import KYCVideo from '@/assets/svg/kyc_video';

import { DivMain, FooterButtonStyle, SvgDiv } from './index.styles';

/**
 *
 * @returns Commerce Your video page
 */

const CommenceYourVideoKYC = () => {
  const { t } = useTranslation('commence_your_video_kyc');
  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/fill_the_form');
  };

  const handelProceed = () => {
    router.push('/keeps_things_handy');
  };

  return (
    <DivMain>
      <div>
        <Header text={t('kyc_details')} onClick={onClickHeaderIcon} />
        <SvgDiv>
          <KYCVideo />
        </SvgDiv>
        <FieldInput
          placeholder={t('full_name')}
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 loginInput"
        />
        <FieldInput
          placeholder={t('aadhaar_number')}
          name={'mobile'}
          className="my-2 m-auto rounded border p-2 loginInput"
        />
        <FieldInput placeholder={t('pan_card_number')} name={'mobile'} className="my-2 rounded border p-2 loginInput" />
        <FieldTextarea placeholder={t('address')} name={'mobile'} className="my-2 rounded border p-2 loginInput" />
        <FieldInput placeholder={t('date_of_birth')} name={'mobile'} className="my-2   rounded border p-2 loginInput" />
      </div>

      <FooterButtonStyle>
        <div className="button-container">
          <Button onClick={handelProceed}>{t('proceed')}</Button>
        </div>
      </FooterButtonStyle>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['commence_your_video_kyc'])),
  },
});

export default CommenceYourVideoKYC;
