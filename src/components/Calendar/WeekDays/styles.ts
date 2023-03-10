import styled from 'styled-components';

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  margin: 0.5%;
`;

export const DayOfWeek = styled.p`
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 2%;
`;