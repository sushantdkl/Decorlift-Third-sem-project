<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6753375c8f9ed152eb0af56aff50f012cf48d746
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
<<<<<<< HEAD
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
>>>>>>> 870caabfc862db6c31f275a100a811a424e06bb2
=======
>>>>>>> 6753375c8f9ed152eb0af56aff50f012cf48d746
