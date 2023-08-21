'use client';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from './hoc';
import { slideIn } from '@/utils/motion';
import {
	DetailedHTMLProps,
	FC,
	InputHTMLAttributes,
	useRef,
	useState
} from 'react';
import { motion } from 'framer-motion';
import PulseLoader from 'react-spinners/PulseLoader';
import useToast from '@/hooks/useToast';
import dynamic from 'next/dynamic';
import { ComponentLoader } from './Loader';

const EarthCanvas = dynamic(() => import('./canvas/Earth'), {
	ssr: false,
	loading: ComponentLoader
});

const IDs = {
	TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID!,
	SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID!,
	PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY!
};

const INITIAL_STATE = {
	name: '',
	email: '',
	message: ''
};

const Contact = () => {
	const [form, setForm] = useState(INITIAL_STATE),
		{ name, email, message } = form;

	const formRef = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);

	const [toast, container] = useToast('contact');

	const handleChange = ({
		target: { name, value }
	}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		setForm(prevState => ({
			...prevState,
			[name]: value
		}));

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formRef.current?.checkValidity())
			return toast.error('Please fill all the fields.');

		setLoading(true);

		try {
			await emailjs.send(
				IDs['SERVICE_ID'],
				IDs['TEMPLATE_ID'],
				{
					from_name: name,
					from_email: email,
					message,
					to_name: 'Vinayak',
					to_email: 'vinayak111kumar@gmail.com'
				},
				IDs['PUBLIC_KEY']
			);
			setLoading(false);
			toast.success('Thank you. I will get back to you as soon as possible.');
			setForm(INITIAL_STATE);
		} catch (error) {
			setLoading(false);
			toast.error('Something went wrong. Please try again later.');
			console.log(error);
		}
	};

	return (
		<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl xl:w-1/2 w-full'>
				<p className='sectionSubText'>Get in touch</p>
				<h3 className='sectionHeadText'>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'>
					<FormInput
						name='name'
						type='text'
						label='Your Name'
						value={name}
						onChange={handleChange}
						placeholder="What's your name?"
						required
					/>
					<FormInput
						name='email'
						type='email'
						label='Your Email'
						value={email}
						onChange={handleChange}
						placeholder="What's your email?"
						required
					/>
					<FormInput
						name='message'
						label='Your Message'
						value={message}
						onChange={handleChange}
						placeholder='What do you want to say?'
						required
						isTextArea
					/>

					<button
						disabled={loading}
						className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
						type='submit'>
						{loading ? <PulseLoader size={8} color='#ffffff' /> : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
				<EarthCanvas />
			</motion.div>
			{container}
		</div>
	);
};

const FormInput: FC<FormInputProps> = ({
	name,
	label,
	isTextArea = false,
	...rest
}) => (
	<label htmlFor={name} className='flex flex-col'>
		<span className='text-white font-medium mb-4'>{label}</span>
		{!isTextArea && (
			<input
				id={name}
				name={name}
				{...rest}
				className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
			/>
		)}
		{isTextArea && (
			<textarea
				rows={7}
				id={name}
				name={name}
				{...rest}
				className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
			/>
		)}
	</label>
);

export default SectionWrapper(Contact, 'contact');

interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

interface FormInputProps {
	name: string;
	label: string;
	isTextArea?: boolean;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	placeholder: string;
	type?: InputProps['type'];
	required?: boolean;
}
