const crypto = require('crypto')

function encode(text){

   const hash =  crypto.createHmac('sha256', require('../key'))
      .update(text)
      .digest('hex')
   
   return hash
}

module.exports  = encode