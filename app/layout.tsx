'use client';
import React from 'react';
import Header from './ui/Header';

import { Inter } from 'next/font/google';
import '@/app/ui/global.css';
import { useTheme } from './hooks/useTheme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const [theme] = useTheme();

	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Mutual Funds Calculator</title>
			</head>
			<body className={`${inter.className} antialiased`}>
				<main>
					<Header />
					<div className="light-bg-content dark:dark-bg-content min-h-dvh h-dvh">{children}</div>
				</main>
			</body>
		</html>
	);
}
