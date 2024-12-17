import { FC, InputHTMLAttributes } from 'react';
import { Flex } from './Flex';
import { KeypadInputButton } from './KeypadInput.styled';

export interface IKeypadInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const KeypadInput: FC<IKeypadInputProps> = (props) => {
	return (
		<Flex flexDirection="column" gap="4px" width="100%">
			{/* Container for the keypad, organized in a column with gaps */}
			{/* Each row of the keypad contains three buttons, each associated with a numeric value or the clear ('C') button */}
			<Flex gap="4px" width="100%">
				{/* First row of the keypad: buttons for 7, 8, and 9 */}
				<KeypadInputButton value="7" /> {/* Button for 7 */}
				<KeypadInputButton value="8" /> {/* Button for 8 */}
				<KeypadInputButton value="9" /> {/* Button for 9 */}
			</Flex>
			<Flex gap="4px" width="100%">
				{/* Second row of the keypad: buttons for 4, 5, and 6 */}
				<KeypadInputButton value="4" /> {/* Button for 4 */}
				<KeypadInputButton value="5" /> {/* Button for 5 */}
				<KeypadInputButton value="6" /> {/* Button for 6 */}
			</Flex>
			<Flex gap="4px" width="100%">
				{/* Third row of the keypad: buttons for 1, 2, and 3 */}
				<KeypadInputButton value="1" /> {/* Button for 1 */}
				<KeypadInputButton value="2" /> {/* Button for 2 */}
				<KeypadInputButton value="3" /> {/* Button for 3 */}
			</Flex>
			<Flex gap="4px" width="100%">
				{/* Fourth row of the keypad: buttons for 0, 00, and C (clear) */}
				<KeypadInputButton value="0" /> {/* Button for 0 */}
				<KeypadInputButton value="00" /> {/* Button for 00 */}
				<KeypadInputButton value="C" /> {/* Button for clearing the input */}
			</Flex>
		</Flex>
	);
};
