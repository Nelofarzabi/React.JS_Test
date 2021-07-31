import react from "react";
function pickNum(){
    return Math.floor( Math.random() * 10 ) + 1;
    
   

}

class Pickernumber extends react.Component{
 render(){
     const num = pickNum();
     return(
         <div>
             <h1>The number is  : {num}</h1>
             <p>{num == 3 ? "Success" : "try again"}</p>
         </div>
     );

 }

}
export default  Pickernumber;