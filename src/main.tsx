import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SimpleMap from './components/test'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p className='text-center'>toto</p>
    
    <SimpleMap/>

  </StrictMode>,
)
