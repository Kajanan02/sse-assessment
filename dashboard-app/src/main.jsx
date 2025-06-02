import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ChProvider} from "./components/ui/ChProvider.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChProvider>
            <App/>
        </ChProvider>
    </StrictMode>,
)
