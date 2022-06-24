import React from 'react';
import { CookiesProvider } from 'react-cookie';
import RoutesComponent from './routes';
import './styles/global.css'


function App() {  
  return (
    <CookiesProvider>
      <RoutesComponent />
    </CookiesProvider>
  );
}

export default App;
