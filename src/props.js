import react from"react";


class POP extends react.Component{
    render (){
    
        return (
            
            <div>
                <h1>Hello {this.props.to}</h1>
                <h1>OHhh hello {this.props.from}</h1>
            </div>
        
        );

    }

}
 export default POP ;
