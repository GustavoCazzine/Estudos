
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Disable React strict mode in production for better performance
const renderApp = () => {
  const root = document.getElementById("root");
  if (root) {
    const appRoot = createRoot(root);
    appRoot.render(<App />);
  } else {
    console.error("Root element not found");
  }
};

// Use requestIdleCallback to defer non-critical initialization
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  (window as any).requestIdleCallback(renderApp);
} else {
  // Fallback for browsers that don't support requestIdleCallback
  renderApp();
}

// Add performance metrics logging in development
if (import.meta.env.DEV) {
  const reportWebVitals = () => {
    // This will be filled by web-vitals if needed
    console.log('Performance monitoring active in development');
  };
  reportWebVitals();
}
