import React from 'react';

export default class CardFront extends React.Component{
    render(){
       console.log(this.props)
        return(
            <div className='gameCard' onClick={() => this.props.switchSide(false)}>
                <div className='gameHead'>
                      <h3>{this.props.game.name}</h3>

                </div>
                <div>
                    <img src={this.props.game.background_image} className='gameImg'/> 
                </div>
            </div>
        )
    }
}