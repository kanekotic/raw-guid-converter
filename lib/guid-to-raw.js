const buffer = require('buffer/').Buffer,
    transform = require('./helpers').transform,
    patterns = require('./helpers').patterns

    
const convert = (raw) => {
    const pattern = /([0-9A-Fa-f]{8})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{12})/i
    let guid_parsed = transform(pattern, raw)
    return `${guid_parsed[0]}${guid_parsed[1]}${guid_parsed[2]}${guid_parsed[3]}${guid_parsed[4]}`.toUpperCase()   
 }
 
module.exports = convert