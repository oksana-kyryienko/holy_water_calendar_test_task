import React, { useState } from 'react';
import { setEvent, editEvent } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { setShowCreateEvent, setShowEditEvent } from '../../redux/actions';
import { ApplicationState, EventProps } from '../../types/types';

import {
  Container,
  AddEventInput,
  Title,
  CreateEventForm,
  SubmitButton,
  ColorContainer,
  DateContainer,
  Close,
  Color,
  CheckMark,
  ColorPicker,
} from './style';

interface EventModalProps {
  type: 'create' | 'edit';
}

const EventModal: React.FC<EventModalProps> = ({ type }) => {
  const { eventToEdit } = useSelector((state: ApplicationState) => state);
  const [eventTitle, setEventTitle] = useState(
    type === 'create' ? '' : eventToEdit.title
  );

  const [eventDescription, setEventDescription] = useState(
    type === 'create' ? '' : eventToEdit.description
  );

  const [eventColor, setEventColor] = useState<EventProps['color']>(
    type === 'create' ? 'cyan' : eventToEdit.color
  );

  const [eventDate, setEventDate] = useState(
    type === 'create' ? '' : eventToEdit.date
  );
  const [eventTime, setEventTime] = useState(
    type === 'create' ? '' : eventToEdit.time
  );
  const eventId = type === 'create' ? Math.random().toString() : eventToEdit.id;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const event = {
      title: eventTitle,
      description: eventDescription,
      date: eventDate,
      color: eventColor,
      time: eventTime,
      id: eventId
    };

    type === 'create'
      ? dispatch(setEvent(event))
      : dispatch(editEvent(event, eventToEdit));
    handleClose();
  };

  const handleClose = () => {
    type === 'create'
      ? dispatch(setShowCreateEvent(false))
      : dispatch(setShowEditEvent(false, eventToEdit));
  };

  return (
    <Container
      className="animate__animated animate__fadeInRight"
    >
      <Close onClick={() => handleClose()} />
      <CreateEventForm>
        <Title>
          {type === 'create' ? 'Create New Event' : 'Edit Event'}
        </Title>
        <AddEventInput
          type="text"
          required
          value={eventTitle}
          onChange={({ target }) => setEventTitle(target.value)}
          placeholder="Title"
          maxLength={30}
        />
        <AddEventInput
          type="text"
          required
          value={eventDescription}
          onChange={({ target }) => setEventDescription(target.value)}
          placeholder="Description"
        />
        <ColorPicker>
          <p>Color</p>
          <ColorContainer>
            <Color
              color={'cyan'}
              onClick={() => setEventColor('cyan')}
              selected={eventColor === 'cyan'}
            >
              {eventColor === 'cyan' && <CheckMark />}
            </Color>
            <Color
              color={'salmon'}
              onClick={() => setEventColor('salmon')}
              selected={eventColor === 'salmon'}
            >
              {eventColor === 'salmon' && <CheckMark />}
            </Color>
            <Color
              color={'pink'}
              onClick={() => setEventColor('pink')}
              selected={eventColor === 'pink'}
            >
              {eventColor === 'pink' && <CheckMark />}
            </Color>
            <Color
              color={'green'}
              onClick={() => setEventColor('green')}
              selected={eventColor === 'green'}
            >
              {eventColor === 'green' && <CheckMark />}
            </Color>
            <Color
              color={'yellow'}
              onClick={() => setEventColor('yellow')}
              selected={eventColor === 'yellow'}
            >
              {eventColor === 'yellow' && <CheckMark />}
            </Color>
          </ColorContainer>
        </ColorPicker>
        <DateContainer>
          <AddEventInput
            type="date"
            value={eventDate}
            required
            onChange={({ target }) => setEventDate(target.value)}
          />
          <AddEventInput
            type="time"
            value={eventTime}
            required
            onChange={({ target }) => setEventTime(target.value)}
          ></AddEventInput>
        </DateContainer>
        <SubmitButton
          onClick={() => handleSubmit()}
        >
          {type === 'create' ? 'Create' : 'Edit'}
        </SubmitButton>
      </CreateEventForm>
    </Container>
  );
};

export default EventModal;