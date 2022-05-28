import { useRouter } from 'next/router';

import { useState } from 'react';

import { useTranslation } from 'next-i18next';
import { TickIcon } from '@/assets/svg/tick-icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import MyCommenceCenteredModal from '@/components/core/CommenceVideomodel/index.page';
import { StyledLine, StyledLanguage, Row, DivMain, DivMarginTop, FooterButtonStyle } from './index.styles';
import { ILanguage } from './index.types';

/**
 *
 * @returns Language page
 */

const ChooseLangugae = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const [langugaes, setLanguages] = useState<ILanguage[]>([
    {
      name: 'English',
      isActive: true,
      code: 'en',
    },
    {
      name: 'Hindi',
      isActive: false,
      code: 'hi',
    },
    {
      name: 'Telugu',
      isActive: false,
      code: 'te',
    },
    {
      name: 'Kannada',
      isActive: false,
      code: 'kn',
    },
    {
      name: 'Tamil',
      isActive: false,
      code: 'ta',
    },
    {
      name: 'Malayalam',
      isActive: false,
      code: 'ml',
    },
    {
      name: 'Punjabi',
      isActive: false,
      code: 'pa',
    },
    {
      name: 'Marati',
      isActive: false,
      code: 'mr',
    },
    {
      name: 'Gujarati',
      isActive: false,
      code: 'gu',
    },
    {
      name: 'Bengali',
      isActive: false,
      code: 'bn',
    },
  ]);

  const [selectedLangugage, setSelectedLanguage] = useState<string>(langugaes[0].code);

  const onClickHeaderIcon = () => {
    router.push('/');
  };

  const onClickItem = (ind: number) => {
    langugaes.forEach((lang) => {
      lang.isActive = false;
    });
    const temp = [...langugaes];
    temp[ind].isActive = true;
    setLanguages(temp);
    setSelectedLanguage(langugaes[ind].code);
  };

  const handleContinue = () => {
    setModalShow(true);
  };
  const onClicOk = () => {
    router.push(`${selectedLangugage}/commence_video`);
  };
  return (
    <DivMain>
      <div>
        <Header text="Choose a Language" onClick={onClickHeaderIcon} />
        <DivMarginTop>
          {langugaes.map(({ name, isActive }, ind) => (
            <>
              <Row onClick={() => onClickItem(ind)}>
                <div className="col-11">
                  <StyledLanguage isActive={isActive}>{name}</StyledLanguage>
                </div>
                <div className="col-1">{isActive && <TickIcon />}</div>
              </Row>
              <StyledLine />
            </>
          ))}
        </DivMarginTop>
      </div>
      <FooterButtonStyle>
        <Button isBottom onClick={handleContinue} className="m-auto">
          Continue
        </Button>
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

export default ChooseLangugae;
