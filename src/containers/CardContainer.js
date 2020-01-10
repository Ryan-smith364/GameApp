import React from 'react';
import FullCard from './FullCard'
export default class CardContainer extends React.Component{
    render(){
       console.log(this.props)
        return(
            <div>
                    {this.props.games.map( game => <FullCard game={game}/>)}
            </div>
        )
    }
}