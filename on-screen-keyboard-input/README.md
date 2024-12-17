# Numeric Keypad with Input Field

## **Overview**
This project implements a numeric keypad that updates an input field dynamically through button clicks or direct user input. The functionality ensures seamless synchronization between the buttons and input field while providing a clean and user-friendly interface.

---

## **Acceptance Criteria**
1. The input field updates dynamically when:
   - The keypad buttons are clicked.
   - The user types directly into the input field.
2. **Numeric Buttons (`0-9` and `00`)**: Append the respective value to the input field.
3. **Clear Button (`C`)**: Clears the entire value of the input field.
4. The input field displays valid numeric input only.
5. Buttons and input field remain synchronized in behavior and updates.
6. Code is clean, modular, and adheres to React.js and TypeScript best practices.

---

## **Features**
- Fully functional **numeric keypad**.
- Input field supports:
   - Button-based input.
   - Manual user input.
- "C" button clears the entire input value.
- Modular components for reusability:
   - `InputBox`
   - `KeypadButton`
   - `NumericKeypad`
