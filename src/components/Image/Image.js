import React from "react";
import "./Image.css"

const Image = props => ( 
<div className="image">
                <img className="img-responsive" src={props.imageSrc}
                 alt={props.name} 
                 key={props.id} 
                 onClick={ () => props.validateImage(props.id) } />
</div>      
);

export default Image