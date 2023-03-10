import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../types/types';
import Day from '../Calendar/Week/Day';

import { Container } from './style';

const DayDetails: React.FC = () => {
  const { dayInDetail } = useSelector((state: ApplicationState) => state);

  return (
    <Container className="animate__animated animate__fadeInUp">
      <Day day={dayInDetail} detail={true} />
    </Container>
  );
};

export default DayDetails;