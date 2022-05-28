import { Modal } from 'react-bootstrap';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';

import {
  BodyModalStyled,
  Button1Model,
  Button2Model,
  ButtonBorderModel,
  Center1Model,
  CenterHeaderModel,
  CrossButtonModel,
  IineModel,
  ParagraphModel,
  ParagraphTextModel,
  RowTextModel,
} from './index.style';

interface Props {
  show?: boolean;
  onHide?: any;
  onOk?: any;
  userConsent?: any;
  clickingAgree?: any;
  listPara_1?: any;
  listPara_2?: any;
  listPara_3?: any;
  agree?: any;
  disagree?: any;
}

function MyCommenceCenteredModal({
  show,
  onHide,
  onOk,
  userConsent,
  clickingAgree,
  listParaOne,
  listParaTwo,
  listParaThree,
  agree,
  disagree,
}: Props) {
  return (
    <Center1Model className="modal-cont" show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <BodyModalStyled>
        <Modal.Header className="box">
          <Modal.Title>
            <CenterHeaderModel className="col-11">{userConsent}</CenterHeaderModel>
          </Modal.Title>
          <CrossButtonModel className="col-1" onClick={onHide}>
            <CrossIcon />
          </CrossButtonModel>
        </Modal.Header>
        <Modal.Body>
          <ParagraphModel>{clickingAgree}</ParagraphModel>
          <RowTextModel>
            <div className="row">
              <div className="col-1">
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                <ParagraphTextModel>{listParaOne}</ParagraphTextModel>
              </div>
            </div>
          </RowTextModel>
          <RowTextModel>
            <div className="row">
              <div className="col-1">
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                <ParagraphTextModel>{listParaTwo}</ParagraphTextModel>
              </div>
            </div>
          </RowTextModel>
          <RowTextModel>
            <div className="row">
              <div className="col-1">
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                <ParagraphTextModel>{listParaThree}</ParagraphTextModel>
              </div>
            </div>
          </RowTextModel>
        </Modal.Body>
        <IineModel />
        <Modal.Footer>
          <div className="col-5">
            <Button2Model onClick={onHide}>
              <ButtonBorderModel></ButtonBorderModel>
              {disagree}
            </Button2Model>
          </div>
          <div className="col-3 border-left">
            <Button1Model onClick={onOk}>{agree}</Button1Model>
          </div>
        </Modal.Footer>
      </BodyModalStyled>
    </Center1Model>
  );
}
export default MyCommenceCenteredModal;
