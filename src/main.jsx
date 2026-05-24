import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Orchids from "./Container/Orchids.jsx";
import { Toaster } from 'react-hot-toast';
import './Container/orchid.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Orchids />
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </StrictMode>,
)
