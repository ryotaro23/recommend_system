import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import  store from "./app/store"
import App from "./App"
import { createRoot } from 'react-dom/client';



 function main() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root =createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
      );
  }
}

main()
