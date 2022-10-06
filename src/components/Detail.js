import React from "react";
import { useParams } from "react-router-dom";
import { data } from '../shared/ListOfPlayers';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';

export default function Detail () {
    const userName = useParams();
    const player = data.find( obj => {
        return obj.id == userName.id;
    } );
    let cost = player.cost.toLocaleString();
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
            <div className="product-card">
                <div className="badge">{player.name}</div>
                <div className="product-tumb">
                    <img src={`../${player.img}`} />
                </div>
                <div className="product-details">
                    <h3>{player.club}</h3>
                    <div className="product-price">Market value: € {cost} </div>
                    <p>{player.info}</p>
                    <div className="product-bottom-details"></div>
                </div>
            </div>
        </Container>
    );
}
