import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/core/Header';
import Button from '@/components/core/Button';

import { CardIcon } from '@/assets/svg/card-icon2';
import { GoogleIcon } from '@/assets/svg/google-1';

import {
  DivButton,
  DivButtons,
  DivMain,
  DivVerificationCardStyled,
  DivVerificationGoogleStyled,
  DocumentContainer,
  IdentificationSelectStyled,
  IdentificationSmallTextStyled,
  IdentificationStyled,
  IdentificationTextStyled,
  Row,
  SpanTagButton,
  StyledLine,
  BoldText,
} from './index.style';

/**
 *
 * @returns KeepThingsHandy page
 */

const KeepThingsHandy = () => {
  const { t } = useTranslation('KeepThingsHandy');

  const onClickHeaderIcon = () => {
    router.push('/commence_your_video_kyc');
  };

  const handleStart = () => {
    router.push('/token_number');
  };

  const names = [
    {
      name: t('English'),
    },
    {
      name: t('Telugu'),
    },
    {
      name: t('Hindi'),
    },
    { name: t('Tamil') },
    { name: t('kannada') },
    { name: t('Malayalam') },
    { name: t('kannada') },
  ];

  return (
    <DivMain>
      <div>
        <Header onClick={onClickHeaderIcon} text={t('Keep things handy')} />
        <IdentificationStyled>
          <DivVerificationCardStyled>
            <CardIcon />
          </DivVerificationCardStyled>
          {/* <IdentificationStyled2>
            <IdentificationTextStyled>
              please keep handy your <strong>PAN Card,</strong>
            </IdentificationTextStyled>
          </IdentificationStyled2>
 */}

          <IdentificationTextStyled>
            please keep handy your <BoldText>PAN Card, Blank Paper</BoldText> and <BoldText>Pen.</BoldText>
          </IdentificationTextStyled>
        </IdentificationStyled>
        <DocumentContainer>
          <StyledLine />
          <DivVerificationGoogleStyled>
            <GoogleIcon />
          </DivVerificationGoogleStyled>

          <IdentificationStyled>
            <IdentificationSelectStyled>{t('Select language')}</IdentificationSelectStyled>
            <IdentificationSmallTextStyled>
              'We recommend you select a below listed <BoldText style={{ opacity: 10 }}>Language</BoldText> to continue
              with your video call.
            </IdentificationSmallTextStyled>
          </IdentificationStyled>
          <DivButtons>
            {names.map((doc, index) => (
              <Row>
                <div key={index} className="col-3">
                  <button className="btn btn-primary outline-none border-0 shadow-none">
                    <SpanTagButton> {doc.name}</SpanTagButton>
                  </button>
                </div>
              </Row>
            ))}
          </DivButtons>
        </DocumentContainer>
      </div>
      <DivButton>
        <Button isBottom onClick={handleStart} className="m-auto">
          I'm Ready
        </Button>
      </DivButton>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['KeepThingsHandy'])),
  },
});

export default KeepThingsHandy;
