import React from 'react';
import { useAlert } from './AlertContext';

export default function Main() {
  const { show } = useAlert();
  return (
    <>
      <h1>Привет в примере Context</h1>
      <button onClick={ () => show('Text from main.js') } className='btn btn-success'>Показать alert</button>
    </>
  )
};