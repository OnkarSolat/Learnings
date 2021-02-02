import React from "react";
import GridItem from "../GridItem/GridItem";


class GridRow extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        let gridRow = [<GridItem />, <GridItem />, <GridItem />];
        return <div className="grid-row"> 
        {this.props.row.map((col, colIndex) =>
            <GridItem rowIndex={this.props.rowIndex} colIndex={this.props.colIndex} />
            )};

            </div>
    }
}


export default GridRow;