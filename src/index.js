import React from "react"
import ReactDOM from "react-dom"


import { ContextProvider } from "./Context"
import App from "./App"

ReactDOM.render(
    <ContextProvider>

        <App />

    </ContextProvider>,
    document.getElementById("root")
)


// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//     <ContextProvider>
//         {<App tab="home" />}
//     </ContextProvider>);