import React from 'react'
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import { incNumber,DECnUMBER } from "./actions/index";




function App() {
  const dispatch = useDispatch();

  const myState = useSelector((state) => state.changeTheNumber)

  return (
    <div className="App">
    <span><button onClick={ ()=> dispatch(DECnUMBER())}>-</button> <input type="text" value={myState} /> <button onClick={ ()=> dispatch(incNumber())} >+</button> </span>  
    </div>
  );
}

export default App;
