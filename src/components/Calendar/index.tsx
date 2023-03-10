import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowCreateEvent, setshowDayDetail } from '../../redux/actions';
import { startOfMonth, startOfWeek, addDays } from 'date-fns';
import { ApplicationState } from '../../types/types';

import Week from './Week';
import WeekDays from './WeekDays';
import EventModal from '../EventModal';
import DayDetails from '../DayDetails';

import { Container, AddEventButton, AddIcon } from './styles';

const Calendar: React.FC = () => {
  const [calendar, setCalendar] = useState([[new Date()]]);
  const {
    showCreateEvent,
    showDayDetail,
    showEditEvent,
    startDay,
  } = useSelector((state: ApplicationState) => state);

  const dispatch = useDispatch();

  const generateArray = useCallback(() => {
    const calendarStart = startOfWeek(startOfMonth(startDay));
    const calendarArray = [];
    for (let i = 0; i < 5; i++) {
      calendarArray.push(
        [...Array(7)].map((_, idx) => addDays(calendarStart, idx + i * 7))
      );
    }
    setCalendar(calendarArray);
  }, [startDay]);

  const handleClick = () => {
    dispatch(setshowDayDetail(false));
    dispatch(setShowCreateEvent(!showCreateEvent));
  };

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  return (
    <Container>
      <WeekDays weekArray={calendar[0]} />
      {!!calendar &&
        calendar.map((week: Date[], idx: number) => (
          <Week key={idx} weekArray={week} />
        ))}
      <AddEventButton onClick={() => handleClick()}>
        <AddIcon />
      </AddEventButton>
      {showCreateEvent && <EventModal type={'create'} />}
      {showDayDetail && <DayDetails />}
      {showEditEvent && <EventModal type={'edit'} />}
    </Container>
  );
};

export default Calendar;