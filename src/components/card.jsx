import React from 'react'
import 'tachyons';

const card=(props)=>{
    const {name,id,email}=props;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="Robot" src={`https://robohash.org/${name}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;