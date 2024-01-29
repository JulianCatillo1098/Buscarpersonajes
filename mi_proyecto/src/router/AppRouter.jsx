import React from 'react';
import Formulario from '../components/Formulario';
import { TodosLosPokemones } from '../components/TodosLosPokemones';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {

  return (
    <Routes>
      <Route path='/*' element={<Formulario/>}></Route>
      <Route path='/todoslospokemones' element={<TodosLosPokemones/>}></Route>
      <Route path='/*' element={<Navigate to= '/*'/>}/>
    </Routes>
    
  );
};
