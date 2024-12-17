import { ChangeEvent, FocusEventHandler, MouseEventHandler, useCallback, useState } from 'react'
import './App.css'
import { Input } from './Input'
import { KeypadInput } from './KeypadInput'

function App() {
  const [values, setValues] = useState<string>('')


  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {

    if (event.target.name === 'numberinput') {
      // event.preventDefault();
      if (event.target.value === 'C') {
        setValues('')
      } else {
        setValues((prev) => prev + event.target.value)
      }
    } else {
      setValues(event.target.value)
    }

    console.log('event.target.value:', event.target.value);
    console.log('event.target.name:', event.target.name);
    console.log('event.target.selectionStart:', event.target.selectionStart);


  }, []);

  const handleClick = (key, input) => {

  }

  const onClick: MouseEventHandler<HTMLInputElement> = (e) => {
    console.log('click event', e)
  }
  const onMouseDown: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    console.log('click event', e)
  }
  const onButtonFocus: FocusEventHandler<HTMLInputElement> = (e) => {

    console.log('focus event', e)
  }
  const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    console.log('focus event', e)
  }

  return (
    <>
      <div>
        <Input onChange={onChange} name="input" value={values} onClick={onClick} onFocus={onFocus} />
        <KeypadInput onChange={onChange} onMouseDown={onMouseDown} name="numberinput" onFocus={onButtonFocus} />
      </div>
    </>
  )
}

export default App
