import React, { Component } from 'react';
import "./node.css"

class Node extends Component {

    
    render() {
        const{
            row,
            col,
            isStartNode,
            isFinishNode,
            isWall,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            onMouseLeave
        }=this.props;

        const className = isStartNode ? 'node-start' : (isFinishNode ? 'node-finish': (isWall?'node-wall':'node'));
        return (
           <div id={`${row}-${col}`} className={className} onMouseDown={()=>{onMouseDown(row,col)}} onMouseEnter={()=>{onMouseEnter(row,col)}} onMouseUp={()=>{onMouseUp(row,col)}} onMouseLeave={()=>{onMouseLeave(row,col)}}></div>
        );
    }
}

export default Node;