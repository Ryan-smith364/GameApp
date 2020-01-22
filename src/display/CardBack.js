import React from 'react';

export default class CardBack extends React.Component{

    render(){
        this.props.game.publishers.forEach(pub => console.log(pub.name))
       debugger
        return(

            <div className="card bg-dark" style={{width: 31.5 + 'rem'}}>
                <button onClick={ () => this.props.switchSide(true)}>Back</button>
                    <div className="card-body">

                    <button onClick={ () => { 
                        setTimeout( () => {
                            
this.props.removeGame(this.props.game)
                        },500)
                    }}>Clear</button>
                       { this.props.game.clip === null ? <p>[No Preview Availible]</p> : <video src={this.props.game.clip.clips.full} controls></video> }
                        <h3>{this.props.game.name}  </h3>
                        <h5>Rating: {this.props.game.rating}</h5>
                        {this.props.game.publishers.map(pub =>  <div onClick={() => this.props.getProducer(pub.slug)}> {pub.name}</div> )}
                    {/* <div onClick={() => this.props.getProducer(pub.name)}> {pub}</div>  */}
                                <h5>Genre(s) </h5>
                                { this.props.game.genres.map(genre => <div> {genre.name} </div>) }

                                <h5> Consles:</h5>
                                {console.log(this.props.game.platforms)}
                                {this.props.game.platforms.map(platform => <div>{platform.platform.name}, {platform.released_at} </div>)}<br></br>

                                <p>{this.props.game.description_raw}</p>
                        
                    </div>
            </div>




 
            //  <div className='gameCard' >
            //      <button onClick={ () => this.props.switchSide(true)}>Back</button>
            //      <div className='gameHead'>
            //          <h3>{this.props.game.name}  </h3>
            //          <h5>Rating: {this.props.game.rating}</h5>

                
            //     </div>

            //                  <video src={this.props.game.clip.clips.full} controls></video>
            //         <div>
            //             {this.props.game.reviews} 
            //               <h5>{this.props.rating}</h5>
                            

            //              <div className='consleText'>
            //                  <h5>Genre(s)</h5>
            //                 { this.props.game.genres.map(genre => <div> {genre.name}  </div>) }

            //                  <h5> Consles:</h5>
            //                  {console.log(this.props.game.platforms)}
            //                  {this.props.game.platforms.map(platform => <div>{platform.platform.name}, {platform.released_at} </div>)}<br></br>

            //                  <p>{this.props.game.description_raw}</p>
            //                   <video width="400" controls> 
            //                  <source src={this.props.game.clip.clip} type="video/mp4">
            //              </video>
            //            </div> 
                    
            //      {/* {this.props.game.short_screenshots.map(ss => <div> <img src={ss.image} className='gameImg'></img> </div>  )} */}

            //                                                  {/* { <div> <img src=''></img> </div> */}
            // {/*         </div> */}
            // {/*  </div> */} 
        )
    }
}
