import React , { Component } from "react";


class Form extends Component {

    // using state 
    constructor(props){
        super(props);
        this.state={
            UserName :'',
            Univercity:'', 
            Topic : 'React'
        }
    }


    // create function for every input type 

    handleOnchange =(event)=>{
        this.setState({
            UserName : event.target.value ,
        })

    }

    handleOnchangeUni = (event)=>{
        this.setState({
            Univercity : event.target.value ,
        })

    }

    handleOnchangeTopic = (event)=>{
        this.setState({
            Topic : event.target.value ,
        })

    }

    handleSubmit =(event)=>{
          alert(`${this.state.UserName} ${this.state.Univercity} ${this.state.Topic}
           `);
           event.preventDefault();
    }

    render() {
        return (

            // Create form section
            <form onSubmit = {this.handleSubmit}>
                <React.Fragment>
                    <h3>Registertion Form</h3>
                </React.Fragment>

                 
                <React.Fragment>
                    <label>UserName : </label>
                    <input
                        type='text'
                    value = {this.state.UserName}
                    onChange = {this.handleOnchange}
                    />
                </React.Fragment>



                <React.Fragment>
                    <label>Univercity : </label>
                    <input
                        type='text'
                    value = {this.state.Univercity}
                    onChange = {this.handleOnchangeUni}
                    />
                </React.Fragment>



                <React.Fragment>
                    <label>Class </label>
                    <select value ={this.state.Topic} onChange={this.handleOnchangeTopic}>
                        <option>React</option>
                        <option>Angualr</option>
                        <option>Vue </option>
                    </select>
                </React.Fragment>


                <React.Fragment>
                    <button tpye="submit" >submit form</button>
                </React.Fragment>

            </form>

        );

    }
}
export default Form;

