import React from "react";
import "./Image.css"

const Image = props => ( 
<div className="image">
       <div className="img-container">
                <img className="img-responsive" src={props.imageSrc} alt={props.name} key={props.id} onClick={ (onClick) => {console.log(props.id)} }/>
        </div>
</div>      
);

export default Image