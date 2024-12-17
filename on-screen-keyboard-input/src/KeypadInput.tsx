import { ChangeEventHandler, FC, InputHTMLAttributes, MouseEventHandler } from 'react';
import { Flex } from './Flex';
import { KeypadInputButton } from './KeypadInput.styled';

export interface IKeypadInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name'> {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  activeButton: string; 
}

export const KeypadInput: FC<IKeypadInputProps> = ({ onChange, name, activeButton, ...restProps }) => {
  const _onChange: MouseEventHandler<HTMLInputElement> = (event) => {
    onChange({ ...event, target: { ...event.target, name } as EventTarget & HTMLInputElement });
  };

  return (
    <Flex flexDirection="column" gap="4px" width="100%">
      <Flex gap="4px" width="100%">
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="7"
          isActive={activeButton === '7'} 
        />
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="8"
          isActive={activeButton === '8'}
        />
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="9"
          isActive={activeButton === '9'}
        />
      </Flex>
      <Flex gap="4px" width="100%">
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="4"
          isActive={activeButton === '4'}
        />
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="5"
          isActive={activeButton === '5'}
        />
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="6"
          isActive={activeButton === '6'}
        />
      </Flex>
      <Flex gap="4px" width="100%">
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="1"
          isActive={activeButton === '1'}
        />
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="2"
          isActive={activeButton === '2'}
        />
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="3"
          isActive={activeButton === '3'}
        />
      </Flex>
      <Flex gap="4px" width="100%">
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="0"
          isActive={activeButton === '0'}
        />
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="00"
          isActive={activeButton === '00'}
        />
        <KeypadInputButton
          {...restProps}
          onClick={_onChange}
          name={name}
          value="C"
          isActive={activeButton === 'C'}
        />
      </Flex>
    </Flex>
  );
};
