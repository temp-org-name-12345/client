import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './main.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
)
