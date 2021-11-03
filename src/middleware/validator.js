'use strict'

function validation(req,res,next)
{
    if(req.query.name)
    {
        next()
    }
    else
    {
        next('There is no name')
    }
}
module.exports=validation