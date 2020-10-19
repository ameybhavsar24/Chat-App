const generateMessage=(username,text,destructIn)=>{
    return {
        username,
        text,
        created_at: new Date().getTime(),
        destructIn
    }
}

const generateLocationMessage=(username,url,destructIn)=>{
    return {
        username,
        url,
        created_at: new Date().getTime(),
        destructIn
    }
}

module.exports={
    generateMessage,
    generateLocationMessage
}