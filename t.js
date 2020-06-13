


function t(){
    let finalBuf = Buffer.from([])
    const arr = [
        Buffer.from('a'),
        Buffer.from('b'),
        Buffer.from('c')
    ]
    arr.forEach(b=>{
        finalBuf = Buffer.concat([finalBuf,b])
    })
    console.log(finalBuf)
}
t()
