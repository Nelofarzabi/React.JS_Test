import react from"react";


class POP extends react.Component{
    render (){
        let number = (this.props.number);
        let number1 = (this.props.number1);
        let number2 = (this.props.number2);
        let massage ;
        if(number === number1 || number1 === number2){
            massage = "your win"
        }
        else {
            massage = "your lose "
        }
        return (
            <div>
            <h2>HI MACHINE </h2>
            <p>{number}{number1}{number2}</p>
            <p>{massage}</p>
            </div>
        
        );

    }

}
 export default POP ;
