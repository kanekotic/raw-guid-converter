var buffer = require('buffer/').Buffer 

const parse = (raw) => {
    const pattern = /([0-9A-Fa-f]{8})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{12})/gi
    if(!pattern.test(raw))
        throw "wrong format"
    pattern.test(raw)
    return pattern.exec(raw).slice(1,6)
}

const convert = (raw) => {
    let guid_parsed = parse(raw)
    guid_parsed[0] = buffer.from(guid_parsed[0],'hex').swap32().toString('hex')
    guid_parsed[1] = buffer.from(guid_parsed[1],'hex').swap16().toString('hex')
    guid_parsed[2] = buffer.from(guid_parsed[2],'hex').swap16().toString('hex')
    return `${guid_parsed[0]}${guid_parsed[1]}${guid_parsed[2]}${guid_parsed[3]}${guid_parsed[4]}`.toUpperCase()   
 }
 
module.exports = convert