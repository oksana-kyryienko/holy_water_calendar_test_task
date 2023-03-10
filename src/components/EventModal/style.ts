import styled from 'styled-components';
import { shade } from 'polished';
import { VscClose } from 'react-icons/vsc';
import { ImCheckmark } from 'react-icons/im';

export const Container = styled.div`
  height: 500px;
  width: 90%;
  max-width: 500px;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 5vw;
  bottom: 20vh;
  border-radius: 15px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.45);
`;
interface ColorProps {
  color: 'cyan' | 'salmon' | 'pink' | 'green' | 'yellow';
  selected: boolean;
  onClick: () => void;
}

export const Color = styled.div<ColorProps>`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background: ${({ theme, color }) => theme.colors[color]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CheckMark = styled(ImCheckmark).attrs(({ theme }) => ({
  size: '15px',
}))`
  color: ${({ theme }) => theme.colors.darkText};
`;

export const ColorPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  > p {
    font-size: 16px;
    padding: 10px;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const CreateEventForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const AddEventInput = styled.input`
  background: none;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 16px;
  height: 45px;
  padding: 0 10px;
  font-family: "Open Sans", sans-serif;
  border: 2px solid ${({ theme }) => shade(0.4, theme.colors.accent)};
  border-width: 0 0 2px 0;
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
    opacity: 1;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkText};
  background: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => shade(0.1, theme.colors.accent)};
  }
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    width: 48%;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Close = styled(VscClose).attrs(({ theme }) => ({
  size: '35px',
}))`
  color: ${({ theme }) => theme.colors.lightText};
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;