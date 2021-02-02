import React from "react";
import "./gridItem.css";

class GridItem extends React.Component {
    constructor(){
        super();
        this.state = {
            counter : 0,
            stat : "Static Property",

        };
      //  this.copiedFunction = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("CLicked,this.state.counter");

        //To change state variable in react we use setState 

        // this.setState({
        //     counter: this.state.counter += 1,
        // });
        this.setState({
            //Object Contains all the properties hich need to changed
            counter : this.state.counter + 1,
        });
    };

    render(){
        return (
            <div className="grid-item" onClick={this.handleClick}>
            {this.state.counter};
            </div>
        );
        
    }
}

export default GridItem;