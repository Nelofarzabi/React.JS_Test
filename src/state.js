import React  from "react";

class  State extends  React.Component{
    //State section


    constructor(){
        super();
        this.State={
            name : 'Nelofar',
            fatherName :'Shir ali zabi', 
            id : 12 

        }

    }
    render (){
        return(
            <div>
                <h1>Hello  {this.State.name}</h1>
                <p>{this.props.About}</p>
            </div>
        );

    }

}
export  default State ;
 
