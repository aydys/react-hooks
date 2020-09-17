import React, { useState } from 'react';
import './App.css';

function computeInitialCounter() {
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [ counter, setCounter ] = useState(() => computeInitialCounter());

  const [ state, setState ] = useState({
    title: 'Счетчик',
    date: Date.now()
  });

  function increment() {
    setCounter( (prev) => prev + 1);
  }
  
  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState( (prev) => ({
      ...prev,
      title: 'Новое название'
    }));
  }

  return (
    <div>
      <h1>{ state.title }: { counter }</h1>
      <button onClick={ increment } className="btn btn-success">Добавить</button>
      <button onClick={ decrement} className="btn btn-danger">Убрать</button>
      <button onClick={ updateTitle }>Изменить название</button>
    </div>
  );
}

export default App;