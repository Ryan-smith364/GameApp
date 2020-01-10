import React from 'react';

export default class CardBack extends React.Component{

    renderIngredients = () => {
        console.log(Object.keys(this.props.game))
    }

    render(){
        
       console.log(this.props.game)
        return(
            <div className='gameCard' onClick={ () => this.props.switchSide(true)}>
                <div className='gameCard'>
                {/* <h3>{this.props.game}  </h3> */}

               {/* { this.props.game[`strIngredient${index}`] !== null ? <p>{this.props.game[`strstrIngredient${index}`]} {this.props.game[`strMeasurement${index}`]}</p> : console.log('no')} */}

                
               </div>
            </div>
        )
    }
}