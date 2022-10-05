import React from 'react';
import { Players } from '../shared/ListOfPlayers';
import { Link } from 'react-router-dom';

export default function players () {
    return (
        <div>
            <div className='container'>
                {Players.map( ( player ) =>
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
                                <Link to={`detail/$player.id`}>
                                    <p>
                                        <button>
                                            Detail
                                        </button>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )};
            </div>
        </div>
    );
}
