import React from 'react';


export default class CardFront extends React.Component{
    render(){
       console.log(this.props)
        return(
            <div className="card bg-dark" style={{width: 31.5 + 'rem'}} onClick={() => this.props.switchSide(false)}>
                <div className='gameHead'>
                      <h3>{this.props.game.name}</h3>

                </div>
                <div>
                    <img src={this.props.game.background_image} alt={this.props.game.name} className='gameImg'/> 
                </div>
            </div>
        )
    }
}