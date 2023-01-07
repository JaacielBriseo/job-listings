import React from 'react';
import ReactDOM from 'react-dom/client';
import { JobListingsApp } from './JobListingsApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<JobListingsApp />
	</React.StrictMode>
);
