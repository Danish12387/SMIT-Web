import React from 'react';
import AppRouter from './config/router';
import useScrollReveal from './ScrollReveal/useScrollReveal';
import useGetAllCourses from './hooks/useGetAllCourses';

function App() {

  useGetAllCourses();
  useScrollReveal();

  return (
    <div className='light:bg-[#ffffffab]'>
      <AppRouter />
    </div>
  )
}

export default App;