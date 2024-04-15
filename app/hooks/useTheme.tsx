import { useState, useEffect } from 'react';

export const useTheme = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.classList.add(storedTheme);
		} else {
			const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const initialTheme = prefersDarkMode ? 'dark' : 'light';
			setTheme(initialTheme);
			document.documentElement.classList.add(initialTheme);
		}
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === 'q') {
				const newTheme = theme === 'light' ? 'dark' : 'light';
				setTheme(newTheme);
				localStorage.setItem('theme', newTheme);
				document.documentElement.classList.remove(theme);
				document.documentElement.classList.add(newTheme);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [theme]);

	return [theme];
};
