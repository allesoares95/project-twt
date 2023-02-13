import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Tweet user="Alexandre" like={10}>
        Meu primerio tweet
      </Tweet>

      <Tweet user="Joycy" >
        hello world"
      </Tweet>

      <Tweet user="José" >
        Testando tweet"
      </Tweet>

    </div>
  </React.StrictMode>,
)
