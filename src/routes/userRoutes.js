const express = require('express')
const router= express.Router()

//listen
router.get('/',function(req,res, next) {
    const id= req.params.id
    res.send(` vous avez demander le api n°${id}`)

    })

    module.exports= router;
