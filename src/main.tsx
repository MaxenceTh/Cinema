import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SimpleMap from './components/SimpleMap'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <h1 className='text-center text-3xl'>Cinema Application</h1>
    
    <SimpleMap/>

  </StrictMode>,
)
