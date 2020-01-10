import React from 'react';
import CardFront from '../display/CardFront'
import CardBack from '../display/CardBack'
export default class FullCard extends React.Component{
    constructor(){
        super()
        this.state = {
            side: true
        }
    }

    switchSide = (input) => {
        this.setState({side: input})
    }
    
        
    render(){
       console.log(this.props)
        return(
            <div>
                {this.state.side ? <CardFront game={this.props.game} switchSide={this.switchSide}/> : <CardBack game={this.props.game} switchSide={this.switchSide}/>}
            </div>
        )
    }
}