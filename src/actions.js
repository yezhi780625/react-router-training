import fetch from 'isomorphic-fetch'
export const REQUEST = 'REQUEST'
export const RECEIVE = 'RECEIVE'

function request(){
    console.log("request");
    return {
        type:REQUEST
    };
}

function receive(json){
    console.log("receive");
    return {
    type: RECEIVE,
    data: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export default function load(){
    return (dispatch)=>{
        dispatch(request());
        return fetch(`http://www.reddit.com/r/reactjs.json`)
            .then(response => response.json())
            .then(json => dispatch(receive(json)))
    }
}