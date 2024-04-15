import { Sun, Moon } from 'react-feather';
import { HeaderProps } from '../lib/defintions';

export default function ThemeIcon({ themeState, toggleTheme }: HeaderProps) {
	return (
		<div>
			{themeState === 'light' && <Sun size={20} color="white" style={{ cursor: 'pointer' }} onClick={toggleTheme} />}

			{themeState === 'dark' && <Moon size={20} color="white" style={{ cursor: 'pointer' }} onClick={toggleTheme} />}
		</div>
	);
}
