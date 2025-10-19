import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add error handling and debugging
console.log('React app starting...');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  console.log('Root element found, creating React root...');
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  console.log('React app rendered successfully');
} catch (error) {
  console.error('Error starting React app:', error);
  document.getElementById('root')!.innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial, sans-serif;">
      <h1>Error Loading App</h1>
      <p>There was an error loading the application.</p>
      <p>Error: ${error}</p>
    </div>
  `;
}
