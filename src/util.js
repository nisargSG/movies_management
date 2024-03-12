const backEndServer="http://localhost:8000/movies/"

const callAPI=({method,postBody,callBackFunction,movieId})=>{

    const options={
        method: method,
    }

    if(method==="POST")
        options.body = JSON.stringify(postBody)

    fetch(backEndServer+(movieId?movieId:""),options)
    .then(rawData=>rawData.json())
    .then(json=>callBackFunction(json))
    .catch(()=>callBackFunction(false))
}


export {callAPI}

