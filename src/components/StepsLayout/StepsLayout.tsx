import React from 'react';

import { UploadIcon } from '@/assets/svg/upload';

import { DivContent, DivHeading, DivIcon, DivStepLayout } from './StepsLayout.style';
import { StepsLayoutProps } from './StepsLayout.types';

function StepLayout({ content, isDisabled = false, heading, onClick }: StepsLayoutProps) {
  return (
    <DivStepLayout disabled={isDisabled} onClick={onClick}>
      <div className=" d-flex">
        <div className="col-11">
          <DivHeading>{heading}</DivHeading>
          <DivContent>{content}</DivContent>
        </div>
        <DivIcon>
          <div className="col-1 divIcon">{<UploadIcon />}</div>
        </DivIcon>
      </div>
    </DivStepLayout>
  );
}

export default StepLayout;
