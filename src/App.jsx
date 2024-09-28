import React from 'react';
import AppRouter from './config/router';
import useScrollReveal from './ScrollReveal/useScrollReveal';

function App() {

  useScrollReveal();

  return (
    <div className='light:bg-[#ffffffab]'>
      <AppRouter />
    </div>
  )
}

export default App;