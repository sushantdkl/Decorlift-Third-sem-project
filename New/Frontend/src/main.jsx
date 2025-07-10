import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
=======
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
>>>>>>> Niraj_branch
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
    <App />
  </StrictMode>
);
=======
    <BrowserRouter> {/* ✅ Wrap App here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
=======
    <BrowserRouter> {/* ✅ Wrap App here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
>>>>>>> Niraj_branch
