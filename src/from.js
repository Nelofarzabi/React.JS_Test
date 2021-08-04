import { Component } from "react";


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
                <div>
                    <h3>Registertion Form</h3>
                </div>

                 
                <div>
                    <label>UserName : </label>
                    <input
                        type='text'
                    value = {this.state.UserName}
                    onChange = {this.handleOnchange}
                    />
                </div>



                <div>
                    <label>Univercity : </label>
                    <input
                        type='text'
                    value = {this.state.Univercity}
                    onChange = {this.handleOnchangeUni}
                    />
                </div>



                <div>
                    <label>Class </label>
                    <select value ={this.state.Topic} onChange={this.handleOnchangeTopic}>
                        <option>React</option>
                        <option>Angualr</option>
                        <option>Vue </option>
                    </select>
                </div>


                <div>
                    <button tpye="submit" >submit form</button>
                </div>

            </form>

        );

    }
}
export default Form;

