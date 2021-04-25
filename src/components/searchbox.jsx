import React from 'react';

const Searchbox=(props)=>{
    const {onsearch}=props;
    return(
        <div>
            <input
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search Robots"
            onChange={onsearch} />
            
        </div>
    );
}

export default Searchbox;