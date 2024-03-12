const backEndServer="http://localhost:8000/movies/"

const callAPI=(method="GET",postBody={},callBackFunction,itemId)=>{

    const options={
        method: method,
    }

    if(method=="POST"){
        options.body = JSON.stringify(postBody)
    }

    console.log("CALLED "+method+ " "+itemId)

    fetch(backEndServer+(itemId?itemId:""),options).then(rawData=>rawData.json()).then(json=>callBackFunction(json))


}


export {callAPI}

