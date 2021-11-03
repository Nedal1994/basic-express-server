function logger(req,res,next)
{
    if(req.method==='GET')
    {
        console.log('REQUEST: ',req.method,req.path)
        next()
    }
    else
    {
        next('the request is NOT get request')
    }
}
module.exports=logger