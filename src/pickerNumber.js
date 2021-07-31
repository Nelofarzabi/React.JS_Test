import react from "react";


function pickNum() {
    return Math.floor(Math.random() * 5) + 1;
}


class Pickernumber extends react.Component {
    render() {
       
        const num = pickNum();
    
        let msg ;
        if (num === 3)
            msg = <div>
                <h1>Your are win</h1>
                <img src = 'https://images.all-free-download.com/images/graphiclarge/beautiful_gift_of_picture_3_170125.jpg' />
                
            </div>
        else
            msg = <div>
                <p>Your are lose </p>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvghqzb5HwtSg8IMoaGbcxhp1KveLg230hw&usqp=CAU' />
            </div>

        return (
            <div>
                <h1>The number is  : {num}</h1>
                <p>{msg}</p>
            </div>
        );

    }

}
export default Pickernumber;