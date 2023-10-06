import React from "react";
import Detail from "./Detail"

function Card(props){
    return(
        <div className="card">
                <div className="top">
                    <h5>{props.id}</h5>
                    <h2 className="name">{props.name}</h2>
                    <img className="cicle-img" src={props.img} alt="avatar_img" />
                </div>
                <div className="bottom">
                    <Detail detailInfo={props.tel} />
                    <Detail detailInfo={props.email} />
                    
                </div>
            </div>


    );
}
export default Card;