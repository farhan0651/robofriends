import {CHANGE_SEARCH_FIELD,
     REQUEST_ROBOTS_PENDNG,
     REQUEST_ROBOTS_SUCCESS,
     REQUEST_ROBOTS_FAILED
     } from './constants'

export const setSearchField=(text)=>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobots =()=>(dispatch)=>{
dispatch({type:REQUEST_ROBOTS_PENDNG});
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>{
    return res.json();
})
.then(data=>{
    dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data})
})
.catch(error=>{
    dispatch({type:REQUEST_ROBOTS_FAILED,payload:error})
})
}