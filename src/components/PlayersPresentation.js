import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlayersPresentation ( { players } ) {
    console.log( players ); //in ra all gia tri
    const [player, setPlayer] = useState( 0 );
    return (
        <div>
            <div className='container'>
                {players.map( ( player ) =>
                    <div className='column'>
                        <div className='card'>
                            <div className='card-img'>
                                <img src={player.img} />
                            </div>
                            <h3>
                                {player.name}
                            </h3>
                            <p className='title'>
                                {player.club}
                            </p>
                            <div className='card-btn'>
                                <Link to={`detail/${player.id}`}>
                                    <p>
                                        <button onClick={() => { setPlayer( player ); }}>
                                            <a style={{ color: 'white', textDecoration: 'none' }} href='#popup1' id='openPopUp'>Detail</a>
                                        </button>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                <div id='popup1' className='overlay'>
                    <div className='popup'>
                        <img src={player.img} />
                        <h2>{player.name}</h2>
                        <a className='close' href='#'>&times;</a>
                        <div className='content'>
                            {player.info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
