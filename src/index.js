import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ShowContextProvider from "./context/ContextProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  
    <ShowContextProvider>
    <App />
    </ShowContextProvider>
    
  
)