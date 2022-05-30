import { Modal } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import {
  BodyModalStyled,
  CenterModel,
  CenterHeaderModel,
  CrossButtonModel,
  StyledRow,
  StyledParagraph,
  DisAgreeText,
  AgreeButton,
  DisAgreeButton,
  StyledAgreeParagraph,
} from './index.style';
interface Props {
  show?: boolean;
  onAgree?: any;
  onHide?: any;
  onDisagree?: any;
}
function MyCommenceCenteredModal({ show, onAgree, onDisagree, onHide }: Props) {
  const { t } = useTranslation('aadhaae_xml');
  return (
    <CenterModel className="modal-cont" show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <BodyModalStyled>
        <Modal.Header>
          <CenterHeaderModel className="col-11">{t('user_consent')}</CenterHeaderModel>
          <CrossButtonModel className="col-1" onClick={onHide}>
            <CrossIcon />
          </CrossButtonModel>
        </Modal.Header>
        <Modal.Body>
          <StyledAgreeParagraph>{t('by_clicking_on_agree_you_hereby')}</StyledAgreeParagraph>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t(
                  'acknowledge_the_request_made_by_syntizen_technologies_private_limited_to_provide_personal_details.'
                )}
              </StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t(
                  'provide_my_unconditional_concent_to_access_copy_and_store_all_information_therein_by_sharing_the_inofrmation.'
                )}
              </StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t(
                  'also_undertake_i/we_are_authorised_to_do_so_on_behalf_of_the_requestee_organisation_and_tkae_sole_and_complete_responsibilitity_for_the_same.'
                )}
              </StyledParagraph>
            </div>
          </StyledRow>
        </Modal.Body>
        <Modal.Footer>
          <DisAgreeButton onClick={onDisagree}>
            <DisAgreeText>{t('disagree')}</DisAgreeText>
          </DisAgreeButton>
          <AgreeButton onClick={onAgree}>{t('agree')}</AgreeButton>
        </Modal.Footer>
      </BodyModalStyled>
    </CenterModel>
  );
}
export default MyCommenceCenteredModal;
