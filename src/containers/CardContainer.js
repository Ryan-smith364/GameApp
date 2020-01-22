import React from 'react';
import FullCard from './FullCard'

export default class CardContainer extends React.Component{
    
    render(){
       console.log(this.props)
        return(
            
            <div className='grid'>
                
                    {this.props.games.map( game => <FullCard game={game} className='gameCard' getProducer={this.props.getProducer} removeGame={this.props.removeGame}/>)}
                
            </div>
        )
    }
}
