import React from "react";
import { useParams } from "react-router-dom";
import { data } from '../shared/ListOfPlayers';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';
import { useState } from "react";
import ModelCase from "./ModelCase";

export default function Detail () {
    const userName = useParams();
    const player = data.find( obj => {
        return obj.id == userName.id;
    } );
    let cost = player.cost.toLocaleString();
    const [isOpen, setIsOpen] = useState( false );
    return (
        // <div className="detail-container">
        //     <div className="product-card">
        //         <div className="badge">{player.name}</div>
        //         <div className="product-tumb">
        //             <img src={`../${player.img}`} />
        //         </div>
        //         <div className="product-details">
        //             <h3>{player.club}</h3>
        //             <div className="product-price">Market value: € {cost} </div>
        //             <p>{player.info}</p>
        //             <div className="product-bottom-details"></div>
        //         </div>
        //     </div>
        // </div>
        <Container>
            <Card>
                <div className="card-image">
                    <img src={`../${player.img}`} />
                    <span className="card-title">{player.name}</span>
                    <a onClick={() => setIsOpen( true )}
                        className='btn-floating haftway-fab waves-effect waves-light red'
                    >
                        <Icon>ondemand_video</Icon>
                    </a>
                </div>
                <div className="product-details">
                    <h5 product-club-cost>{player.club}</h5>
                    <h6>Market value: € {cost} </h6>
                    <div className="product-bottom-details">
                        <p>{player.info}</p>
                    </div>
                </div>
            </Card>


            {isOpen && <ModelCase setIsOpen={setIsOpen} player={player} />}
        </Container>
    );
}
