// first component 
import react from "react";
function randomList() {
    const ranList = ["nelofar", "omer ", "khalid", "sadaf", "mahsa", "behishta"];
    return ranList[Math.floor(Math.random() * ranList.length)];
}
class Clasebase extends react.Component {
    render() {
        return (
            <div>
                <h1>This is the random list {randomList()}</h1>
            </div>
        );
    }
}
export default Clasebase;

<hr/>

