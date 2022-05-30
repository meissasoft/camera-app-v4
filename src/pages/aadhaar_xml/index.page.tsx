import { useState } from 'react';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { AadhaarXmlSvg } from '@/assets/svg/aadhaar_xml';
import MyCommenceCenteredModal from '@/components/core/CommenceVideomodel';
import { DivMain, DivSvg, FooterButtonStyle, DivForm, FormLabel, MainStyle, YesButtonStyle } from './index.styles';
/**
 *
 * @returns AadhaarXml page
 */
const AadhaarXml = () => {
  const router = useRouter();
  const [modalShow, setModalShow] = useState(true);

  const onClickHeaderIcon = () => {
    router.push('/');
  };
  const [ischecked, setIsChecked] = useState(false);

  const handleContinue = () => {
    setModalShow(true);
  };

  const onAgree = () => {
    router.push('/commence_video');
  };

  const onDisAgree = () => {
    setModalShow(true);
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
      <MyCommenceCenteredModal show={modalShow} onAgree={onAgree} onDisagree={onDisAgree} onHide={onDisAgree} />
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['aadhaae_xml'])),
  },
});

export default AadhaarXml;
