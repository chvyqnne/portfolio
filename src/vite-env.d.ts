/// <reference types="vite/client" />

declare module 'vite/client' {
	type ImportMetaEnv = {
		readonly VITE_EMAILJS_SERVICE_ID: string;
		readonly VITE_EMAILJS_TEMPLATE_ID: string;
		readonly VITE_EMAILJS_PUBLIC_KEY: string;
	};
}