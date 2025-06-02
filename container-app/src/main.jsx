import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ChProvider} from "./components/ui/ChProvider.jsx";
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import store from "./app/store.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <ChProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ChProvider>
        </Provider>
    </StrictMode>
    ,
)
