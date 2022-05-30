import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import Header from '@/components/core/Header';
import Button from '@/components/core/Button';

import { CardIcon } from '@/assets/svg/card-icon';

import {
  DivButton,
  DivMain,
  DivVerificationCardStyled,
  DocumentContainer,
  IdentificationSmallTextStyled,
  IdentificationStyled,
  IdentificationTextStyled,
  IdentifyText,
  Row,
  StyledLine,
} from './index.style';

/**
 *
 * @returns Commence Video Page
 */

const onClickHeaderIcon = () => {
  router.push('/language');
};

const Commenceyourvideo = () => {
  const { t } = useTranslation('commence_video');
  const document = [
    {
      name: t('aadhaar_verification'),
      Svg: GreaterThenIcon,
    },
    { name: t('pan_capture'), Svg: GreaterThenIcon },
    {
      name: t('video_call_(q&a)'),
      Svg: GreaterThenIcon,
    },
  ];

  const handleStart = () => {
    router.push('/fill_the_form');
  };
  const onRowClickHandel = () => {
    return;
  };

  return (
    <DivMain>
      <div>
        <Header onClick={onClickHeaderIcon} text={t('commence_your_video_kyc')} />
        <IdentificationStyled>
          <DivVerificationCardStyled>
            <CardIcon />
          </DivVerificationCardStyled>
          <IdentificationTextStyled>{t('verify_your_identity')}</IdentificationTextStyled>
          <IdentificationSmallTextStyled>
            {t('please_keep_your_following_documents_handy_before_you_proceed_with_your_full_kyc_process.')}
          </IdentificationSmallTextStyled>
        </IdentificationStyled>
        <StyledLine />
        <DocumentContainer>
          {document.map((doc, id) => (
            <Row key={id} onClick={onRowClickHandel}>
              <div className="col-1">{doc.Svg()}</div>
              <div className="col-11">
                <IdentifyText>{doc.name}</IdentifyText>
              </div>
            </Row>
          ))}
        </DocumentContainer>
      </div>
      <DivButton>
        <Button isBottom onClick={handleStart} className="m-auto">
          {t('start')}
        </Button>
      </DivButton>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['commence_video'])),
  },
});

export default Commenceyourvideo;
