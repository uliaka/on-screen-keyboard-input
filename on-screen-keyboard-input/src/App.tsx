import { MouseEventHandler, useState, useRef } from 'react'
import './App.css'
import { Input } from './Input'
import { KeypadInput } from './KeypadInput'

function App() {
  const [value, setValue] = useState<string>('')
  const [activeButton, setActiveButton] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', 'C']

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;
    const input = inputRef.current;
    const position = input.selectionStart ?? 0;
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      if (e.key === 'ArrowLeft') {
        input.selectionStart = input.selectionEnd = Math.max(position - 1, 0);
      } else if (e.key === 'ArrowRight') {
        input.selectionStart = input.selectionEnd = Math.min(position + 1, input.value.length);
      } else if (e.key === 'ArrowUp') {
        input.selectionStart = input.selectionEnd = 0;
      } else if (e.key === 'ArrowDown') {
        input.selectionStart = input.selectionEnd = input.value.length;
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (e.shiftKey) {
        const currentIndex = buttons.indexOf(activeButton)

        if (currentIndex !== -1) {
          const newIndex = (currentIndex - 1 + buttons.length) % buttons.length
          setActiveButton(buttons[newIndex]);
        } else {
          setActiveButton(buttons[0]);
        }
      } else {
        const currentIndex = buttons.indexOf(activeButton)
        if (currentIndex !== -1) {
          const newIndex = (currentIndex + 1) % buttons.length
          setActiveButton(buttons[newIndex]);
        } else {
          setActiveButton(buttons[0]);
        }
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleButtonPress(activeButton, true);
    } else if (e.key === 'Backspace') {
      handleBackspace();
    } else if (e.key >= '0' && e.key <= '9') {
      handleButtonPress(e.key, false);
    }
  };


  const handleBackspace = () => {
    if (inputRef.current) {
      const position = inputRef.current.selectionStart ?? 0;
      if (position > 0) {
        setValue((prev) => {
          const updatedValue = prev.slice(0, position - 1) + prev.slice(position);
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.selectionStart = inputRef.current.selectionEnd = position - 1;
            }
          }, 0);
          return updatedValue;
        });
      }
    }
  };

  const handleButtonPress = (button: string, shouldSetActiveIndex = true) => {
    focusInput();
    if (shouldSetActiveIndex) {
      setActiveButton(button);
    }
    if (inputRef.current) {
      const position = inputRef.current.selectionStart || 0;
      if (button === 'C') {
        setValue('');
      } else if (!isNaN(parseInt(button, 10))) {
        setValue((prev) => {
          const updatedValue = prev.slice(0, position) + button + prev.slice(position);
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.selectionStart = inputRef.current.selectionEnd = position + button.length;
            }
          }, 0);
          return updatedValue;
        });
      }
    }
  };
  ;

  const onMouseDown: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
  }

  const resetActiveButton = () => setActiveButton('');

  return (
    <>
      <div>
        <Input name="input" value={value} ref={inputRef} onClick={focusInput}
          onKeyDown={handleKeyDown} onBlur={resetActiveButton} onMouseDown={resetActiveButton} />
        <KeypadInput activeButton={activeButton} onChange={(event) => handleButtonPress(event?.target?.value)} name="numberinput" onMouseDown={onMouseDown} />
      </div>
    </>
  )
}

export default App
