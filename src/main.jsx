import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const targetModulesData = document.querySelectorAll(
  '.cms-react-boilerplate > script[type="application/json"]',
);

targetModulesData.forEach(({ dataset, textContent }) => {

  const root = document.getElementById(`App--${dataset.moduleInstance}`);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App  portalId={dataset.portalId}
          moduleData={JSON.parse(textContent)}
          moduleInstance={dataset.moduleInstance} />
  </React.StrictMode>
)

});