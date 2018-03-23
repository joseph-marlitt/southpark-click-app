import React from "react";

const Image = props => ( 
        <div className="image">
                <img className="img-responsive" src={props.imageSrc} alt={props.name} key={props.id} onClick={ (onClick) => {console.log(props.id)} }/>
        </div>      
);

export default Image