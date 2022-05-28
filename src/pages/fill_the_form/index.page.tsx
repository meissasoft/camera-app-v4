import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import FieldInput from '@/components/core/FieldInput';

import { RadioIconChecked } from '@/assets/svg/radio_icon_checked copy';
import { RadioIconUnchecked } from '@/assets/svg/radio_icon_unchecked';
import {
  DivMain,
  FooterButtonStyle,
  DivForm,
  Divider,
  FormDescription,
  FormHeading,
  Options,
  OptionsSingle,
  OptionLabel,
  OptionRadioButton,
} from './index.styles';
import { ILanguage } from './index.types';
/**
 *
 * @returns AadhaarXml page
 */
const FillTheForm = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/commence_video');
  };

  const [OptionsList, setOptionList] = useState<ILanguage[]>([
    {
      label: 'Aadhaar Card',
      checked: false,
    },
    {
      label: 'PAN Card',
      checked: false,
    },
    {
      label: 'Driving Licence',
      checked: false,
    },
    {
      label: 'Voter ID',
      checked: false,
    },
    {
      label: 'Passport',
      checked: false,
    },
  ]);

  const onClickItem = (index: number) => {
    OptionsList.forEach((el) => {
      if (el.checked === true) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
    const temp = [...OptionsList];
    if (temp[index].checked === true) {
      temp[index].checked = false;
    } else {
      temp[index].checked = true;
    }
    setOptionList(temp);
  };

  const onClickHandler = () => {
    router.push('/digi_locker');
  };
  return (
    <DivMain>
      <div>
        <Header text="Fill the form" onClick={onClickHeaderIcon} />
        <FieldInput
          placeholder={t('Full name*')}
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 loginInput"
        />
        <FieldInput
          placeholder={t('Mobile Number*')}
          name={'mobile'}
          className="my-2 m-auto rounded border p-2 loginInput"
        />

        <Divider />

        <DivForm>
          <FormHeading>Select ID documents</FormHeading>
          <FormDescription>Please select atleast 2 ID documents for verification</FormDescription>
          <Options>
            {OptionsList.map(({ label, checked }, index) => {
              return (
                <OptionsSingle
                  key={index}
                  onClick={() => {
                    onClickItem(index);
                  }}
                >
                  <OptionLabel checkedLabel={checked}>{label}</OptionLabel>
                  <OptionRadioButton>
                    {checked === true ? <RadioIconChecked /> : <RadioIconUnchecked />}
                  </OptionRadioButton>
                </OptionsSingle>
              );
            })}
          </Options>
        </DivForm>
      </div>

      <FooterButtonStyle>
        <div className="button-container">
          <Button className="m-auto" onClick={onClickHandler}>
            Get KYC
          </Button>
        </div>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default FillTheForm;
