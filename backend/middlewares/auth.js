const jwt = require("jsonwebtoken")

module.exports = function auth(req,res,next) {
    try {
        const h = req.header.authorization || ''

        const token = h.startWith('Bearer')
        ?h.slice(7)
        : (req.cookies?.token || null)

    }catch(error){

    }
}