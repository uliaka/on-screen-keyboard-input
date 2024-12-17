import styled, { css } from 'styled-components';
import { CSSProperties, HTMLAttributes } from 'react';

type IFlexProps = HTMLAttributes<HTMLDivElement> & CSSProperties;

const isCSSProperty = (key: string): key is keyof CSSProperties => {
	return key in document.documentElement.style;
};

export const Flex = styled.div<IFlexProps>`
  display: flex;
  ${(props) => css`
    ${Object.keys(props)
			.filter(isCSSProperty)
			.map((key) => {
				const cssKey = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
				const cssValue = props[key as keyof CSSProperties];
				if (cssValue !== undefined && cssValue !== null) {
					return `${cssKey}: ${cssValue};`;
				}
				return '';
			})
			.join('')}
  `}
`;
