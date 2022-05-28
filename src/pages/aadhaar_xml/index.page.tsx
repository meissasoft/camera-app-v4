import { useState } from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { AadhaarXmlSvg } from '@/assets/svg/aadhaar_xml';
// import RadioInputStyled from '@/components/core/RadioInput';
import MyCommenceCenteredModal from '@/components/core/CommenceVideomodel/index.page';
import { DivMain, DivSvg, FooterButtonStyle, DivForm, FormLabel, MainStyle, YesButtonStyle } from './index.styles';
/**
 *
 * @returns AadhaarXml page
 */
const AadhaarXml = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);

  const onClickHeaderIcon = () => {
    router.push('/');
  };
  const [ischecked, setIsChecked] = useState(false);

  const handleContinue = () => {
    setModalShow(true);
  };
  const onClicOk = () => {
    router.push('/aadhaar_offline_kyc');
  };
  return (
    <DivMain>
      <div>
        <Header text="Aadhaar XML" onClick={onClickHeaderIcon} />
        <DivSvg>
          <AadhaarXmlSvg />
        </DivSvg>
        <DivForm>
          <FormLabel>Do you have an Aadhaar XML file?</FormLabel>
        </DivForm>
        <MainStyle isChecked={ischecked}>
          <form action="#" className="customRadio">
            <div className="row">
              <input
                type="radio"
                name="textEditor"
                id="dreamweaver"
                checked
                onClick={() => (ischecked ? setIsChecked(true) : setIsChecked(false))}
                // className={ischecked ? 'checkclass' : 'notcheck'}
              />
              <label htmlFor="dreamweaver">
                <YesButtonStyle>Yes</YesButtonStyle>
              </label>
            </div>
            <div className="row">
              <input type="radio" name="textEditor" id="sublime" />
              <label htmlFor="sublime">
                <YesButtonStyle>No</YesButtonStyle>
              </label>
            </div>
          </form>
          <div></div>
        </MainStyle>
      </div>

      <FooterButtonStyle>
        <div className="button-container">
          <Button isBottom onClick={handleContinue} className="m-auto">
            Continue
          </Button>
        </div>
      </FooterButtonStyle>
      <MyCommenceCenteredModal
        show={modalShow}
        onOk={onClicOk}
        onHide={() => setModalShow(false)}
        userConsent={t('User Consent')}
        clickingAgree={t('By clicking on ‘Agree’, you hereby:')}
        listParaOne={t(
          'Acknowledge the request made by Syntizen technologies private limited to provide personal details.'
        )}
        listParaTwo={t(
          'Provide my unconditional concent to access, copy and store all information there in by sharing the inofrmation.'
        )}
        listParaThree={t(
          'Also undertake I/We are authorised to do so on behalf of the requestee organisation and tkae sole and complete responsibilitity for the same.'
        )}
        disagree={t('Disagree')}
        agree={t('Agree')}
      />
    </DivMain>
  );
};

export default AadhaarXml;
