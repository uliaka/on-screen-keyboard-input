import { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const KeypadInputElement = styled.input<{ isActive?: boolean }>`
  width: 33%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  line-height: 32px;
  color: white;
  background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#1e50a0')};
  color: ${({ isActive }) => (isActive ? 'blue' : 'white')};
  border: 2px solid ${({ isActive }) => (isActive ? 'blue' : '#1e50a0')};
  border-style: ${({ isActive }) => (isActive ? 'inset' : 'outset')};

  &:hover {
    background-color: #3653bc;
  }
  &:active {
    border-style: inset;
    background-color: #3653bc;
  }
`;

interface IKeypadInputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  isActive?: boolean;
}

export const KeypadInputButton: FC<IKeypadInputButtonProps> = (props) => {
  return <KeypadInputElement {...props} type="button" />;
};
