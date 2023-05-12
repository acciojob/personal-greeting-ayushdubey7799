import React from 'react';
import { useState } from 'react';



const Greeting = () => {
   const [name,setName] = useState("");

   function change(e){
      if(e.target.value == ""){
         setName("");
      }
      else{
      setName(`Hello ${e.target.value}!`);
      }
   }

  


   return (
    <div id='greeting'>
    <label>Enter your name:</label><br/><br/>
    <input id="name" type = "text" name = "name" onChange={change}/>
    <p>{name}</p>
    </div>
   )
}

export default Greeting;