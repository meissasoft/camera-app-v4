import { useState } from 'react';
import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Calendar from 'react-calendar';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';

import CalendarPrevLabel from '@/assets/svg/calendar_prev_label';
import CalendarNextLabel from '@/assets/svg/calendar_next_label';
import TickMark from '@/assets/svg/tick_mark';

import { ArrowBotom } from '@/assets/svg/arrow_bottom';
import { ArrowTop } from '@/assets/svg/arrow_top';

import 'react-calendar/dist/Calendar.css';
import {
  DivMain,
  CustomDropDown,
  DescriptionDiv,
  CalendarDiv,
  Divider,
  DefaultOptionDiv,
  OptionsListDiv,
  SingleOptionDiv,
} from './index.style';

const Reshedule = () => {
  const [value, onChange] = useState(new Date());
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select a avaliable time Slot');
  const [selectOptionIcon, setSelectOptionIcon] = useState<any>(null);
  const AvaliableSlots = [
    {
      id: 1,
      startTime: '10:00am',
      endTime: '10:00am',
    },
    {
      id: 2,
      startTime: '10:15am',
      endTime: '10:15am',
    },
    {
      id: 3,
      startTime: '10:30am',
      endTime: '10:40am',
    },
    {
      id: 4,
      startTime: '10:45am',
      endTime: '10:55am',
    },
  ];

  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/token_number');
  };

  const handleContinue = () => {
    router.push('/initiating_video');
  };

  return (
    <DivMain>
      <div>
        <Heading text={t('Reschedule')} onClick={handleBack} />

        <div className="mt-5 text-center">
          <DescriptionDiv>
            {t('Please select a')} <span className="fw-bold">{t(' date & time ')}</span>
            {t('to reschedule a video call session with our agent')}
          </DescriptionDiv>
        </div>

        <CalendarDiv>
          <Calendar
            onChange={onChange}
            value={value}
            prevLabel={<CalendarPrevLabel />}
            nextLabel={<CalendarNextLabel />}
            className="react-calendar"
            selectRange={true}
          />
        </CalendarDiv>

        <Divider></Divider>

        <CustomDropDown>
          <DefaultOptionDiv onClick={() => (dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true))}>
            <span>{selectedOption}</span>
            <span>{!dropDownOpen ? <ArrowBotom /> : <ArrowTop />}</span>
          </DefaultOptionDiv>

          <>
            {dropDownOpen && (
              <OptionsListDiv>
                {AvaliableSlots.map((item, index) => {
                  return (
                    <SingleOptionDiv
                      key={index}
                      onClick={() => {
                        if (selectOptionIcon === item.id) {
                          setSelectedOption('Select a avaliable time Slot');
                          setSelectOptionIcon(null);
                        } else {
                          setSelectedOption(`${item.startTime} to ${item.endTime}`);
                          setDropDownOpen(false);
                          setSelectOptionIcon(item.id);
                        }
                      }}
                    >
                      <span className={selectOptionIcon === item.id ? 'blueSpan' : 'planeSpan'}>
                        {item.startTime} to {item.endTime}
                      </span>
                      {selectOptionIcon === item.id ? <TickMark /> : <></>}
                    </SingleOptionDiv>
                  );
                })}
              </OptionsListDiv>
            )}
          </>
        </CustomDropDown>
      </div>

      <Button
        onClick={handleContinue}
        className={`my-5 m-auto ${selectOptionIcon === null ? 'confirmDisable' : ''}`}
        disabled={selectOptionIcon === null ? true : false}
      >
        Confirm
      </Button>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default Reshedule;
