const backEndServer="http://localhost:8000/movies/"

const callAPI=({method,requestBody,callBackFunction,movieId})=>{

    const options={
        method: method,
    }

    if(method==="POST" || method==="PUT")
        options.body = JSON.stringify(requestBody)

    fetch(backEndServer+(movieId?movieId:""),options)
    .then(rawData=>rawData.json())
    .then(json=>callBackFunction(json))
    .catch(()=>callBackFunction(false))
}


export {callAPI}

