import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import FieldInput from '@/components/core/FieldInput';
import FieldTextarea from '@/components/core/TextArea';

import KYCVideo from '@/assets/svg/kyc_video';

import { DivMain, FooterButtonStyle, SvgDiv } from './index.styles';

/**
 *
 * @returns AadhaarXml page
 */

const CommenceYourVideoKYC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/digi_locker');
  };

  const handelProceed = () => {
    router.push('/keeps_things_handy');
  };

  return (
    <DivMain>
      <div>
        <Header text="KYC Details" onClick={onClickHeaderIcon} />
        <SvgDiv>
          <KYCVideo />
        </SvgDiv>
        <FieldInput
          placeholder={t('Full name*')}
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 loginInput"
        />
        <FieldInput
          placeholder={t('Aadhaar Number')}
          name={'mobile'}
          className="my-2 m-auto rounded border p-2 loginInput"
        />
        <FieldInput placeholder={t('PAN card Number')} name={'mobile'} className="my-2 rounded border p-2 loginInput" />
        <FieldTextarea placeholder={t('Adress')} name={'mobile'} className="my-2 rounded border p-2 loginInput" />
        <FieldInput placeholder={t('Date of birth')} name={'mobile'} className="my-2   rounded border p-2 loginInput" />
      </div>

      <FooterButtonStyle>
        <div className="button-container">
          <Button onClick={handelProceed}>Proceed</Button>
        </div>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default CommenceYourVideoKYC;
