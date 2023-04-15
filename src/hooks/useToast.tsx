import { ToastContainer, toast } from 'react-toastify';

export default function useToast(id?: string): [typeof toast, JSX.Element] {
	const container = <ToastContainer position='bottom-right' containerId={id} />;

	return [toast, container];
}
