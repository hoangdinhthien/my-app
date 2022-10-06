import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';

export default function PlayersPresentation ( { players } ) {
    console.log( players ); //in ra all gia tri
    const [player, setPlayer] = useState( 0 );
    return (
        // <div>
        //     <div className='container'>
        //         {players.map( ( player ) =>
        //             <div className='column'>
        //                 <div className='card'>
        //                     <div className='card-img'>
        //                         <img src={player.img} />
        //                     </div>
        //                     <h5>
        //                         {player.name}
        //                     </h5>
        //                     <p className='title'>
        //                         {player.club}
        //                     </p>
        //                     <div className='card-btn'>
        //                         <Link to={`detail/${player.id}`}>
        //                             <p>
        //                                 <button onClick={() => { setPlayer( player ); }}>
        //                                     <a style={{ color: 'white', textDecoration: 'none' }} href='#popup1' id='openPopUp'>Detail</a>
        //                                 </button>
        //                             </p>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         )}
        //         <div id='popup1' className='overlay'>
        //             <div className='popup'>
        //                 <img src={player.img} />
        //                 <h2>{player.name}</h2>
        //                 <a className='close' href='#'>&times;</a>
        //                 <div className='content'>
        //                     {player.info}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Container >
            <Row>
                {players.map( ( player ) =>
                (

                    <Col
                        m={4}
                        s={12}
                    >
                        <Card
                            actions={[
                                <a key="1" href={`/detail/${player.id}`}>Detail</a>
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image={player.img}> </CardTitle>}
                            revealIcon={<Icon>more_vert</Icon>}
                        >
                            {player.name}
                        </Card>
                    </Col>

                )
                )}
            </Row>
        </Container>
    );
}
