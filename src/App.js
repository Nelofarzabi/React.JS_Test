
import React, { Component } from 'react';
import './App.css';
// import Loop from './state';
// import POP from './props';
// import Clasebase from './classbase';
// import Pickernumber from './pickerNumber';
import {StateComp} from "./state";
import {State } from "./class"


function App(){
  return (
    <div className="App">
        {/* <Clasebase/> */}
        {/* <Pickernumber/> */}
        {/* <POP
        number = {1}
        number1 = {1}
        number2 = {1}
        />
         <POP
        number = {1}
        number1 = {3}
        number2 = {1}
       />
        <POP
        number = {2}
        number1 = {2}
        number2 = {2}
       /> */}
    
       <StateComp 
       name = "nelofar "
       className = "software"
       />
       <State 
       name ="vishwas "
       className  = "IT"
       />
      
     
   

 
        
     
   






 
     
    </div>
  );

}


export default App;

