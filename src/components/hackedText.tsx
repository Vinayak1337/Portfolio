import {
	useRef,
	useImperativeHandle,
	ForwardRefRenderFunction,
	forwardRef
} from 'react';
import { isMobile } from 'react-device-detect';

const HackedText: ForwardRefRenderFunction<
	HackedTextMethods,
	HackedTextProps
> = ({ text }, ref) => {
	const spanRef = useRef<HTMLSpanElement>(null);
	let interval: ReturnType<typeof setInterval>;

	const randomizeText = () => {
		const span = spanRef.current;

		if (!span) return;
		if (interval) clearInterval(interval);
		let iterations = 0;

		interval = setInterval(() => {
			span.innerText = text
				.split('')
				.map((letter, index) => {
					const isUppercase = letter === letter.toUpperCase();

					if (index < iterations) return text[index];

					const alphabet = String.fromCharCode(
						Math.floor(Math.random() * 26) + 97
					);

					return isUppercase ? alphabet.toUpperCase() : alphabet;
				})
				.join('');

			if (iterations >= text.length) clearInterval(interval);

			iterations += 1 / 3;
		}, 30);
	};

	useImperativeHandle(ref, () => ({
		randomizeText
	}));

	return (
		<span
			onMouseOver={!isMobile ? randomizeText : undefined}
			onTouchEnd={randomizeText}
			ref={spanRef}>
			{text}
		</span>
	);
};

export default forwardRef(HackedText);

interface HackedTextProps {
	text: string;
}

export interface HackedTextMethods {
	randomizeText: () => void;
}
