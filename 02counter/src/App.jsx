import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
//Here we encounter a problem that counter is updating the value in UI is not updating everywhere That's why we need HOOKS
// UI updation is controlled by react
function App() {
  let counter=5;
    let addValue =()=>{
      console.log("Value added ", counter)
      counter=counter+1;
    }
  return (
    <>
      <h1>React Learning</h1>
      <h2>Counter value : 5</h2>

      <button onClick={addValue}>Add value :{counter}</button>
      <br />
      <button>Remove value :{counter}</button>
      <p>final Counter : {counter}</p>
    </>
  )
}
*/
function App() {

  //useState gives us two things in the form of Array 0th index: variable(it is same as let counter)  1st index: function
  //This function controlls the variable meaning: setCounter will controll the counter
  //useState(15) it contains default value : here for me, the default value is 15
  let [counter, setCounter]=useState(15)   // Here we are using let because this value is getting change every time

  //let counter=0;
    const addValue =()=>{
      console.log("Value added ", counter)
      setCounter(counter+1)  //now set counter will change counter everywhere in the UI
    }
    const removeValue =()=>{
      setCounter(counter-1)  //now set counter will change counter everywhere in the UI
    }
  return (
    <>
      <h1>React Learning</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value :{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value :{counter}</button>
      <p>final Counter : {counter}</p>
    </>
  )
}

export default App
