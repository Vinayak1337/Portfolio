import type { ReactElement } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function useToast(id?: string): [typeof toast, ReactElement] {
	const container = <ToastContainer position='bottom-right' containerId={id} />;

	return [toast, container];
}
