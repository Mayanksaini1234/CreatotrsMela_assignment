import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreatorProfilePage from './Pages/CreatorProfilePage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreatorProfilePage />
  </StrictMode>,
)
