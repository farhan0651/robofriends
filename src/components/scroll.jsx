import React from 'react'

const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll',borderRadius:'8px',border:'5px solid black',height:'800px'}} >
            {props.children}
        </div>
    );
}

export default Scroll;