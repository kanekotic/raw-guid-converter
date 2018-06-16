const buffer = require('buffer/').Buffer,
    parse = require('./helpers').parse
    
const convert = (raw) => {
    const pattern = /([0-9A-Fa-f]{8})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{12})/gi
    let guid_parsed = parse(pattern, raw)
    guid_parsed[0] = buffer.from(guid_parsed[0],'hex').swap32().toString('hex')
    guid_parsed[1] = buffer.from(guid_parsed[1],'hex').swap16().toString('hex')
    guid_parsed[2] = buffer.from(guid_parsed[2],'hex').swap16().toString('hex')
    return `${guid_parsed[0]}${guid_parsed[1]}${guid_parsed[2]}${guid_parsed[3]}${guid_parsed[4]}`.toUpperCase()   
 }
 
module.exports = convert