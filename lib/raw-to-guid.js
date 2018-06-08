var buffer = require('buffer/').Buffer 

const convert = (raw) => {
    try {
        let _1st = buffer.from(raw.slice(0, 8),'hex').swap32().toString('hex')
        let _2nd = buffer.from(raw.slice(8, 12),'hex').swap16().toString('hex')
        let _3rd = buffer.from(raw.slice(12, 16),'hex').swap16().toString('hex')
        let _4th = raw.slice(16, 20)
        let _5th = raw.slice(20)
        return `${_1st}-${_2nd}-${_3rd}-${_4th}-${_5th}`.toLowerCase()
    } catch (_) {
        throw "wrong format"
    }
 }
 
module.exports = convert